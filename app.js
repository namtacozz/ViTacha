// ViTacha - Main Application Logic
// Implements CS:GO Roulette, OP.GG Card Modal, Meta-Weighting & Comp Builder

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. STATE & INITIALIZATION
    // ==========================================
    const state = {
        activeTab: 'classic',
        settings: {
            mergeTraits: false,
            splitRoles: false,
            useMeta: true,
            sound: true,
            volume: 0.8
        },
        isSpinning: false,
        fortuneJar: {
            points: 0
        },
        compFlow: {
            step: 1,
            selectedChampion: null,
            selectedTank: null,
            selectedOrigin: null,
            selectedClass: null
        }
    };

    // Load saved settings if any
    try {
        const saved = localStorage.getItem('vitacha_settings');
        if (saved) {
            state.settings = { ...state.settings, ...JSON.parse(saved) };
        }
    } catch (e) {
        console.warn('Could not load settings:', e);
    }

    // Load saved Fortune Jar points
    try {
        const savedJar = localStorage.getItem('vitacha_jar_points');
        if (savedJar) {
            state.fortuneJar.points = Math.max(0, parseInt(savedJar, 10) || 0);
        }
    } catch (e) {
        console.warn('Could not load jar points:', e);
    }

    // Apply audio state
    window.soundEngine.setVolume(state.settings.volume);
    window.soundEngine.setMuted(!state.settings.sound);

    // Sync settings UI controls
    const toggleMergeEl = document.getElementById('setting-toggle-merge');
    const toggleSplitRolesEl = document.getElementById('setting-toggle-split-roles');
    const toggleMetaEl = document.getElementById('setting-toggle-meta');
    const toggleSoundEl = document.getElementById('setting-toggle-sound');
    const sliderVolumeEl = document.getElementById('setting-volume-slider');
    const metaIndicatorEl = document.getElementById('meta-toggle-indicator');

    if (toggleMergeEl) toggleMergeEl.checked = state.settings.mergeTraits;
    if (toggleSplitRolesEl) toggleSplitRolesEl.checked = state.settings.splitRoles;
    if (toggleMetaEl) toggleMetaEl.checked = state.settings.useMeta;
    if (toggleSoundEl) toggleSoundEl.checked = state.settings.sound;
    if (sliderVolumeEl) sliderVolumeEl.value = state.settings.volume;
    updateMetaIndicator();

    // Helper: trait lookup for icon
    const traitIconMap = {};
    window.ORIGINS.forEach(o => { traitIconMap[o.name] = o.icon; });
    window.CLASSES.forEach(c => { traitIconMap[c.name] = c.icon; });
    traitIconMap['Độc Nhất'] = 'Traits/Origin/Trait_Icon_18_Eclipse_Large_White.webp';

    // Merged 36 traits pool
    const MERGED_TRAITS = [...window.ORIGINS, ...window.CLASSES];

    // ==========================================
    // 2. META BOOST CALCULATION
    // ==========================================
    function getChampionWeight(champ) {
        let weight = champ.rarity.weight || 10;
        if (!state.settings.useMeta) return weight;

        // Check if champion appears in Meta Comps
        for (const comp of window.META_COMPS) {
            if (comp.units && comp.units.includes(champ.name)) {
                if (comp.tier === 'S') weight *= 1.35;
                else if (comp.tier === 'A') weight *= 1.25;
                else if (comp.tier === 'B') weight *= 1.15;

                // Extra boost for 3-item carry
                if (comp.carries && comp.carries.some(cr => cr.unit === champ.name)) {
                    weight *= 1.5;
                }
                break;
            }
        }
        return weight;
    }

    // Tank weight biased by Carry in Bí Bài mode
    function getTankWeight(tank, biasCarry = null) {
        let weight = tank.rarity.weight || 10;
        if (!biasCarry) return weight;

        // 1. Proximity in gold cost
        const costDiff = Math.abs(biasCarry.cost - tank.cost);
        const costFactor = Math.max(0.3, 1.25 - costDiff * 0.25);
        weight *= costFactor;

        // 2. Trait synergy (shares origin or class with Carry)
        const sharesOrigin = tank.origins && tank.origins.some(o => biasCarry.origins && biasCarry.origins.includes(o));
        const sharesClass = tank.classes && tank.classes.some(c => biasCarry.classes && biasCarry.classes.includes(c));
        if (sharesOrigin) weight *= 3.5;
        if (sharesClass) weight *= 2.5;

        // 3. Meta comp synergy
        const inSameMetaComp = window.META_COMPS.some(comp => 
            comp.units && comp.units.includes(biasCarry.name) && comp.units.includes(tank.name)
        );
        if (inSameMetaComp) weight *= 2.2;

        return weight;
    }

    function getOriginWeight(origin, biasChamp = null, biasTank = null) {
        let weight = origin.rarity.weight || 5;

        // Biased mode for Bí Bài (Comp Mode)
        if (biasChamp || biasTank) {
            let mult = 1.0;
            if (biasChamp && biasChamp.origins && biasChamp.origins.includes(origin.name)) mult += 3.5;
            if (biasTank && biasTank.origins && biasTank.origins.includes(origin.name)) mult += 2.5;

            // Proximity to champion cost
            const refCost = biasChamp ? biasChamp.cost : (biasTank ? biasTank.cost : 3);
            const costDiff = Math.abs(refCost - (origin.avgCost || 3));
            const costFactor = Math.max(0.2, 1.2 - costDiff * 0.25);
            mult *= costFactor;

            // Check if origin's champions share meta comp with carry or tank
            const sharesComp = window.META_COMPS.some(comp => {
                const hasC = biasChamp && comp.units && comp.units.includes(biasChamp.name);
                const hasT = biasTank && comp.units && comp.units.includes(biasTank.name);
                const hasO = origin.champions && origin.champions.some(c => comp.units.includes(c));
                return (hasC || hasT) && hasO;
            });
            if (sharesComp) mult *= 1.4;
            return weight * mult;
        }

        // Normal mode Meta boost
        if (state.settings.useMeta) {
            const hasMetaChamps = origin.champions && origin.champions.some(c => 
                window.META_COMPS.slice(0, 10).some(comp => comp.units && comp.units.includes(c))
            );
            if (hasMetaChamps) weight *= 1.25;
        }
        return weight;
    }

    function getClassWeight(cls, biasChamp = null, biasTank = null) {
        let weight = cls.rarity.weight || (100 / 12);

        // Biased mode for Bí Bài
        if (biasChamp || biasTank) {
            let mult = 1.0;
            if (biasChamp && biasChamp.classes && biasChamp.classes.includes(cls.name)) mult += 3.5;
            if (biasTank && biasTank.classes && biasTank.classes.includes(cls.name)) mult += 2.5;

            const sharesComp = window.META_COMPS.some(comp => {
                const hasC = biasChamp && comp.units && comp.units.includes(biasChamp.name);
                const hasT = biasTank && comp.units && comp.units.includes(biasTank.name);
                const hasCl = cls.champions && cls.champions.some(c => comp.units.includes(c));
                return (hasC || hasT) && hasCl;
            });
            if (sharesComp) mult *= 1.4;
            return weight * mult;
        }

        if (state.settings.useMeta) {
            const hasMetaChamps = cls.champions && cls.champions.some(c => 
                window.META_COMPS.slice(0, 10).some(comp => comp.units && comp.units.includes(c))
            );
            if (hasMetaChamps) weight *= 1.2;
        }
        return weight;
    }

    function getMergedWeight(trait, biasChamp = null, biasTank = null) {
        if (trait.type === 'origin') {
            return getOriginWeight(trait, biasChamp, biasTank);
        } else {
            return getClassWeight(trait, biasChamp, biasTank);
        }
    }

    // Weighted random selection
    function pickRandom(pool, weightFn, biasArgs = []) {
        const args = Array.isArray(biasArgs) ? biasArgs : [biasArgs];
        const weights = pool.map(item => weightFn(item, ...args));
        const totalWeight = weights.reduce((sum, w) => sum + w, 0);
        let randomNum = Math.random() * totalWeight;

        for (let i = 0; i < pool.length; i++) {
            if (randomNum < weights[i]) {
                return pool[i];
            }
            randomNum -= weights[i];
        }
        return pool[pool.length - 1];
    }

    // ==========================================
    // 3. CARD DOM GENERATOR
    // ==========================================
    function createRouletteCardHTML(item) {
        const isChamp = !item.type;
        const color = item.rarity ? item.rarity.color : '#9E9EB1';
        const rarityName = item.rarity ? item.rarity.name : 'COMMON';
        const isTranscendent = item.tier === 'transcendent';

        let innerContent = '';
        if (isChamp) {
            const roleTag = item.subRoleVi ? `<span class="r-card-role-tag">${item.subRoleVi}</span> ` : '';
            const traitBadgesHtml = [...item.origins, ...item.classes].map(tName => {
                const icon = traitIconMap[tName];
                if (!icon) return '';
                return `<img class="r-card-trait-badge" src="${icon}" alt="${tName}" title="${tName}">`;
            }).join('');

            innerContent = `
                <div class="r-card-img-wrap">
                    <img class="r-card-img" src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="r-card-top-tag">
                    <span class="r-card-rarity" style="color: ${color};">${rarityName}</span>
                    <span class="r-card-cost">🟡 ${item.cost}</span>
                </div>
                <div class="r-card-traits-badges">
                    ${traitBadgesHtml}
                </div>
                <div class="r-card-bottom">
                    <div class="r-card-name">${roleTag}${item.name}</div>
                </div>
            `;
        } else {
            const typeLabel = item.type === 'origin' ? 'TỘC' : 'HỆ';
            innerContent = `
                <div class="r-card-img-wrap" style="background: radial-gradient(circle, #31313C 0%, #1C1C1F 100%);">
                    <img class="r-card-trait-icon" src="${item.icon}" alt="${item.name}" loading="lazy">
                </div>
                <div class="r-card-top-tag">
                    <span class="r-card-rarity" style="color: ${color};">${rarityName}</span>
                    <span class="r-card-cost" style="color: #9E9EB1; font-size: 10px;">${typeLabel}</span>
                </div>
                <div class="r-card-bottom">
                    <div class="r-card-name">${item.name}</div>
                    <div class="r-card-sub">${item.nameEn} • ${item.count} tướng</div>
                </div>
            `;
        }

        const borderClass = isTranscendent ? 'transcendent-border' : '';
        return `
            <div class="r-card ${borderClass}" style="border-bottom-color: ${color};" data-id="${item.id}">
                ${innerContent}
            </div>
        `;
    }

    // ==========================================
    // 4. CS:GO ROULETTE ENGINE
    // ==========================================
    const CARD_WIDTH = 144;
    const CARD_MARGIN = 10; // 5px left + 5px right
    const ITEM_STRIDE = CARD_WIDTH + CARD_MARGIN; // 154px
    const TRACK_CARD_COUNT = 50;
    const WIN_CARD_INDEX = 40;
    const SPIN_DURATION = 6000; // 6 seconds

    function populateInitialTrack(trackEl, pool) {
        if (!trackEl || !pool || pool.length === 0) return;
        let html = '';
        let lastId = null;
        for (let i = 0; i < 15; i++) {
            let randomItem = pool[Math.floor(Math.random() * pool.length)];
            if (pool.length > 1) {
                let attempts = 0;
                while (randomItem.id === lastId && attempts < 25) {
                    randomItem = pool[Math.floor(Math.random() * pool.length)];
                    attempts++;
                }
            }
            lastId = randomItem.id;
            html += createRouletteCardHTML(randomItem);
        }
        trackEl.innerHTML = html;
        trackEl.style.transition = 'none';
        trackEl.style.transform = 'translateX(0px)';
        void trackEl.offsetWidth;
    }

    // Spin roulette with authentic CS:GO physics and sound
    function spinRoulette({
        trackEl,
        containerEl,
        pool,
        weightFn,
        bias = null,
        biasArgs = null,
        onComplete,
        showModal = true,
        duration = SPIN_DURATION,
        customCards = null,
        customWinner = null,
        customWinIndex = null
    }) {
        if (state.isSpinning) return;
        state.isSpinning = true;
        setAllButtonsDisabled(true);

        const actualBiasArgs = biasArgs !== null ? biasArgs : (bias !== null ? [bias] : []);

        let winningItem;
        let cards = [];
        let winCardIndex = WIN_CARD_INDEX;
        let trackCardCount = TRACK_CARD_COUNT;

        if (customCards && customCards.length > 0) {
            cards = customCards;
            trackCardCount = cards.length;
            winCardIndex = customWinIndex !== null ? customWinIndex : Math.min(18, trackCardCount - 1);
            winningItem = customWinner || cards[winCardIndex];
        } else {
            // Pick winner
            winningItem = pickRandom(pool, weightFn, actualBiasArgs);

            // Build track of 50 cards with NO adjacent duplicates
            for (let i = 0; i < TRACK_CARD_COUNT; i++) {
                if (i === WIN_CARD_INDEX) {
                    cards.push(winningItem);
                } else {
                    const prevItem = cards[i - 1];
                    const nextIsWin = (i === WIN_CARD_INDEX - 1);

                    let candidate = pickRandom(pool, weightFn, actualBiasArgs);
                    if (pool.length > 1) {
                        let attempts = 0;
                        while (attempts < 30 && (
                            (prevItem && candidate.id === prevItem.id) ||
                            (nextIsWin && candidate.id === winningItem.id)
                        )) {
                            candidate = pickRandom(pool, weightFn, actualBiasArgs);
                            attempts++;
                        }
                        if (prevItem && candidate.id === prevItem.id) {
                            const alt = pool.find(p => p.id !== prevItem.id && (!nextIsWin || p.id !== winningItem.id));
                            if (alt) candidate = alt;
                        }
                    }
                    cards.push(candidate);
                }
            }

            // Also ensure card right after winning card is not identical to winner
            if (cards.length > WIN_CARD_INDEX + 1 && cards[WIN_CARD_INDEX + 1].id === winningItem.id && pool.length > 1) {
                const alt = pool.find(p => p.id !== winningItem.id);
                if (alt) cards[WIN_CARD_INDEX + 1] = alt;
            }
        }

        trackEl.innerHTML = cards.map(c => createRouletteCardHTML(c)).join('');

        // Calculate final translation
        const containerWidth = containerEl.clientWidth;
        // Land at winning card with slight random jitter (-35px to +35px)
        const jitter = (Math.random() - 0.5) * 70;
        const targetX = -(winCardIndex * ITEM_STRIDE + ITEM_STRIDE / 2 - containerWidth / 2 + jitter);

        // Play unlock sound
        window.soundEngine.playUnlock();

        // Reset track position before starting animation
        trackEl.style.transition = 'none';
        trackEl.style.transform = 'translateX(0px)';

        // Force reflow
        void trackEl.offsetWidth;

        // Apply smooth CS:GO cubic-bezier easing
        trackEl.style.transition = `transform ${duration}ms cubic-bezier(0.12, 0.8, 0.15, 1.0)`;
        trackEl.style.transform = `translateX(${targetX}px)`;

        // Setup real-time tick sound tracking
        let lastCardIndex = -1;
        let animFrameId = null;
        const startTime = performance.now();

        function checkTicks() {
            // Get current transform matrix
            const style = window.getComputedStyle(trackEl);
            const matrix = new DOMMatrixReadOnly(style.transform);
            const currentX = matrix.m41;

            // Find which card index is under center pointer
            const centerPoint = -currentX + (containerWidth / 2);
            const currentCardIndex = Math.floor(centerPoint / ITEM_STRIDE);

            if (currentCardIndex !== lastCardIndex && currentCardIndex >= 0 && currentCardIndex < trackCardCount) {
                lastCardIndex = currentCardIndex;
                window.soundEngine.playTick();
            }

            if (performance.now() - startTime < duration) {
                animFrameId = requestAnimationFrame(checkTicks);
            }
        }

        animFrameId = requestAnimationFrame(checkTicks);

        // On complete
        setTimeout(() => {
            cancelAnimationFrame(animFrameId);
            state.isSpinning = false;
            setAllButtonsDisabled(false);

            // Trigger reveal modal if requested
            if (showModal) {
                showRevealModal(winningItem);
            }

            if (onComplete) onComplete(winningItem);
        }, duration + 150);
    }

    function setAllButtonsDisabled(disabled) {
        document.querySelectorAll('.btn-open-case').forEach(btn => {
            btn.disabled = disabled;
        });
    }

    // ==========================================
    // 5. OP.GG WINNING REVEAL MODAL & CONFETTI
    // ==========================================
    const revealBackdrop = document.getElementById('reveal-backdrop');
    const revealCardBody = document.getElementById('reveal-card-body');
    const btnCloseReveal = document.getElementById('btn-close-reveal');
    const revealHintDismiss = document.getElementById('reveal-hint-dismiss');
    const confettiCanvas = document.getElementById('confetti-canvas');
    let confettiAnimation = null;

    function showRevealModal(item) {
        if (!item) return;

        const isChamp = !item.type;
        const tier = item.tier || (item.rarity ? item.rarity.id : 'common');
        const color = item.rarity ? item.rarity.color : '#9E9EB1';
        const rarityName = item.rarity ? item.rarity.name : 'COMMON';

        // 1. Build and display the OP.GG modal FIRST so user visual is 100% guaranteed
        try {
            let html = '';
            if (isChamp) {
                // Top badges for origin/class
                const traits = [...(item.origins || []), ...(item.classes || [])];
                const traitBadgesHtml = traits.map(tName => {
                    const icon = traitIconMap[tName] || '';
                    return `
                        <div class="opgg-trait-icon-badge" title="${tName}">
                            ${icon ? `<img src="${icon}" alt="${tName}" style="width: 100%; height: 100%; object-fit: contain;">` : `<span>${tName}</span>`}
                        </div>
                    `;
                }).join('');

                html = `
                    <!-- Large Splash Art Banner (Wider, Big Art) -->
                    <div class="opgg-card-hero" style="border-bottom: 2px solid ${color};">
                        <img class="opgg-hero-img" src="${item.image}" alt="${item.name}">
                        <div class="opgg-top-traits">
                            ${traitBadgesHtml}
                        </div>
                    </div>

                    <!-- Identity Row: Square Avatar + Name + Cost -->
                    <div class="opgg-identity-row">
                        <div class="opgg-avatar-group">
                            <img class="opgg-square-avatar" src="${item.tileIcon || item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='${item.image}';">
                            <div class="opgg-name-cost">
                                <span class="opgg-champ-name">${item.name}</span>
                                <span class="opgg-cost-badge">🟡 ${item.cost} Vàng</span>
                            </div>
                        </div>
                        <span class="opgg-rarity-pill" style="color: ${color}; border-color: ${color};">${rarityName}</span>
                    </div>

                    <!-- Skill Box with Vietnamese Info from OP.GG -->
                    <div class="opgg-ability-box">
                        <div class="opgg-ability-header">
                            ${item.abilityIcon ? `<img class="opgg-ability-icon" src="${item.abilityIcon}" alt="Skill" onerror="this.style.display='none';">` : ''}
                            <div class="opgg-ability-meta">
                                <span class="opgg-ability-title">${item.abilityName || 'Kỹ Năng'}</span>
                                <span class="opgg-ability-status">💧 ${item.initialMana || 0} / ${item.mana || 0} Mana</span>
                            </div>
                        </div>
                        <div class="opgg-ability-desc">
                            ${item.abilityDesc || 'Kỹ năng chưa có mô tả.'}
                        </div>
                    </div>
                `;
            } else {
                // Trait card layout
                const typeText = item.type === 'origin' ? 'TỘC' : 'HỆ';
                const champsList = item.champions || [];
                const champsHtml = champsList.map(cName => {
                    return `<span class="opgg-champ-chip">${cName}</span>`;
                }).join('');
                const champCount = item.count !== undefined ? item.count : champsList.length;

                html = `
                    <div class="opgg-trait-hero" style="border-bottom: 2px solid ${color};">
                        <img class="opgg-trait-large-icon" src="${item.icon}" alt="${item.name}">
                    </div>

                    <div class="opgg-identity-row" style="margin-top: 12px;">
                        <div class="opgg-avatar-group">
                            <div class="opgg-name-cost">
                                <span class="opgg-champ-name">${item.name}</span>
                                <span style="font-size: 12px; color: #9E9EB1;">${item.nameEn || ''} • ${typeText}</span>
                            </div>
                        </div>
                        <span class="opgg-rarity-pill" style="color: ${color}; border-color: ${color};">${rarityName}</span>
                    </div>

                    <div class="opgg-ability-box">
                        <div style="font-size: 12px; font-weight: 700; color: #ffffff; margin-bottom: 6px;">
                            TƯỚNG TRONG ${typeText} (${champCount} tướng):
                        </div>
                        <div class="opgg-trait-champs-list">
                            ${champsHtml || '<span style="color:#9E9EB1; font-size:12px;">Chưa có tướng trực tiếp (Kích hoạt đặc biệt)</span>'}
                        </div>
                    </div>
                `;
            }

            revealCardBody.innerHTML = html;
            revealCardBody.style.borderColor = color;
            revealBackdrop.classList.add('open');
        } catch (domErr) {
            console.error('Error displaying reveal modal:', domErr);
        }

        // 2. Play celebratory fanfare sound (safely wrapped)
        try {
            if (window.soundEngine) {
                window.soundEngine.playReveal(tier);
            }
        } catch (audioErr) {
            console.warn('Audio reveal playback error:', audioErr);
        }

        // 3. Launch celebratory confetti fireworks (safely wrapped)
        try {
            launchConfetti(color);
        } catch (confettiErr) {
            console.warn('Confetti error:', confettiErr);
        }
    }

    function closeRevealModal() {
        revealBackdrop.classList.remove('open');
        stopConfetti();

        // If comp summary board is active in Tab 2, smoothly scroll into view
        if (state.activeTab === 'comp' && compSummaryBoard && compSummaryBoard.style.display === 'flex') {
            compSummaryBoard.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Dismiss modal on backdrop click, close button, dismiss hint, or ESC
    revealBackdrop.addEventListener('click', (e) => {
        if (e.target === revealBackdrop) {
            closeRevealModal();
        }
    });

    if (btnCloseReveal) {
        btnCloseReveal.addEventListener('click', closeRevealModal);
    }

    if (revealHintDismiss) {
        revealHintDismiss.addEventListener('click', closeRevealModal);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeRevealModal();
            closeSettingsModal();
        }
    });

    // ==========================================
    // 6. CONFETTI & FIREWORKS SYSTEM
    // ==========================================
    function launchConfetti(primaryColor) {
        const canvas = confettiCanvas;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const colors = [primaryColor, '#ffffff', '#EB9C00', '#E537A2', '#0093FF'];

        for (let i = 0; i < 90; i++) {
            particles.push({
                x: canvas.width / 2 + (Math.random() - 0.5) * 80,
                y: canvas.height / 2 + (Math.random() - 0.5) * 80,
                vx: (Math.random() - 0.5) * 16,
                vy: (Math.random() - 0.5) * 16 - 3,
                size: Math.random() * 6 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: 1,
                decay: Math.random() * 0.015 + 0.008,
                rotation: Math.random() * 360,
                spin: (Math.random() - 0.5) * 12
            });
        }

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let activeCount = 0;

            particles.forEach(p => {
                if (p.alpha > 0) {
                    activeCount++;
                    p.x += p.vx;
                    p.y += p.vy;
                    p.vy += 0.25; // gravity
                    p.vx *= 0.98; // air resistance
                    p.alpha -= p.decay;
                    p.rotation += p.spin;

                    ctx.save();
                    ctx.globalAlpha = Math.max(0, p.alpha);
                    ctx.translate(p.x, p.y);
                    ctx.rotate((p.rotation * Math.PI) / 180);
                    ctx.fillStyle = p.color;
                    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                    ctx.restore();
                }
            });

            if (activeCount > 0) {
                confettiAnimation = requestAnimationFrame(render);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }

        stopConfetti();
        confettiAnimation = requestAnimationFrame(render);
    }

    function stopConfetti() {
        if (confettiAnimation) {
            cancelAnimationFrame(confettiAnimation);
            confettiAnimation = null;
        }
        const ctx = confettiCanvas.getContext('2d');
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }

    // ==========================================
    // 7. TAB 1: CỔ ĐIỂN (CLASSIC MODE)
    // ==========================================
    const trackChampions = document.getElementById('track-champions');
    const trackCarries = document.getElementById('track-carries');
    const trackTanks = document.getElementById('track-tanks');
    const trackOrigins = document.getElementById('track-origins');
    const trackClasses = document.getElementById('track-classes');
    const trackMerged = document.getElementById('track-merged');

    const rouletteChampions = document.getElementById('roulette-champions');
    const rouletteCarries = document.getElementById('roulette-carries');
    const rouletteTanks = document.getElementById('roulette-tanks');
    const rouletteOrigins = document.getElementById('roulette-origins');
    const rouletteClasses = document.getElementById('roulette-classes');
    const rouletteMerged = document.getElementById('roulette-merged');

    // Populate initial tracks
    populateInitialTrack(trackChampions, window.CHAMPIONS);
    populateInitialTrack(trackCarries, window.CARRY_CHAMPIONS);
    populateInitialTrack(trackTanks, window.TANK_CHAMPIONS);
    populateInitialTrack(trackOrigins, window.ORIGINS);
    populateInitialTrack(trackClasses, window.CLASSES);
    populateInitialTrack(trackMerged, MERGED_TRAITS);

    // ==========================================
    // 7.5. CƠ CHẾ HŨ (FORTUNE JAR / JACKPOT)
    // ==========================================
    const fortuneJarWrap = document.getElementById('fortune-jar-wrap');
    const fortuneJarCount = document.getElementById('fortune-jar-count');
    const jackpotOverlay = document.getElementById('jackpot-overlay');
    const jackpotBadge = document.getElementById('jackpot-badge');
    const jackpotTierText = document.getElementById('jackpot-tier-text');
    const jackpotProgress = document.getElementById('jackpot-countdown-progress');

    const ORIGIN_TIER_ORDER = {
        'common': 1,
        'rare': 2,
        'epic': 3,
        'heritage': 4,
        'legendary': 5,
        'ultimate': 6,
        'mythic': 7,
        'transcendent': 8
    };

    function getJackpotChance(points) {
        // Tỉ lệ gốc 15% + scale 3% mỗi điểm tích lũy, tối đa 100%
        return Math.min(100, Math.round((15 + points * 3) * 10) / 10);
    }

    function updateJarUI() {
        if (fortuneJarCount) {
            fortuneJarCount.innerText = state.fortuneJar.points;
        }
        if (fortuneJarWrap) {
            const chance = getJackpotChance(state.fortuneJar.points);
            fortuneJarWrap.title = `Hũ May Mắn: ${state.fortuneJar.points} điểm\nTỉ lệ Nổ Hũ hiện tại: ${chance}%\n(Tỉ lệ gốc 15% + 3%/điểm tích lũy. Nổ Hũ sẽ tiêu hao hết điểm để loại bỏ thẻ bậc thấp và tự động roll lại hòm cao cấp!)`;
        }
        try {
            localStorage.setItem('vitacha_jar_points', state.fortuneJar.points.toString());
        } catch (e) {
            console.warn('Could not save jar points:', e);
        }
    }

    function addJarPoint(amount = 1) {
        state.fortuneJar.points += amount;
        updateJarUI();
        if (fortuneJarWrap) {
            fortuneJarWrap.classList.remove('jar-bounce');
            void fortuneJarWrap.offsetWidth;
            fortuneJarWrap.classList.add('jar-bounce');
        }
    }

    updateJarUI();

    function getItemTierRank(item, poolType) {
        if (!item) return 0;
        // Champions: Cost 1 đến 5
        if (item.cost !== undefined) {
            return item.cost;
        }
        // Gộp Tộc & Hệ: coi hệ là tier Rare (rank 2)
        if (poolType === 'merged') {
            if (item.type === 'class') return 2;
            const tierKey = item.tier || (item.rarity ? item.rarity.id : 'common');
            return ORIGIN_TIER_ORDER[tierKey] || 1;
        }
        // Tộc riêng
        if (poolType === 'origins') {
            const tierKey = item.tier || (item.rarity ? item.rarity.id : 'common');
            return ORIGIN_TIER_ORDER[tierKey] || 1;
        }
        // Hệ riêng (không nổ hũ)
        return 1;
    }

    function getTierDisplayName(item, poolType) {
        if (!item) return '';
        if (item.cost !== undefined) {
            const rName = item.rarity ? (item.rarity.nameVi || item.rarity.name) : '';
            return `${rName} (${item.cost} Vàng)`;
        }
        if (poolType === 'merged' && item.type === 'class') {
            return 'Hệ (Tương đương Rare)';
        }
        if (item.rarity) {
            return item.rarity.nameVi || item.rarity.name;
        }
        return item.tier || 'Thường';
    }

    let jackpotCloseTimeout = null;

    function showJackpotModal(consumedPoints, eliminatedTierName, onClosed) {
        if (!jackpotOverlay) {
            if (onClosed) onClosed();
            return;
        }

        if (fortuneJarWrap) {
            fortuneJarWrap.classList.remove('jar-burst');
            void fortuneJarWrap.offsetWidth;
            fortuneJarWrap.classList.add('jar-burst');
        }

        if (jackpotBadge) {
            jackpotBadge.innerText = `TIÊU HAO ${consumedPoints} ĐIỂM HŨ • VẬN MAY KHỞI SẮC!`;
        }
        if (jackpotTierText) {
            jackpotTierText.innerText = eliminatedTierName;
        }

        // Kích hoạt thanh đếm tiến trình 1.8s
        if (jackpotProgress) {
            jackpotProgress.style.transition = 'none';
            jackpotProgress.style.transform = 'scaleX(1)';
            void jackpotProgress.offsetWidth;
            jackpotProgress.style.transition = 'transform 1.8s linear';
            jackpotProgress.style.transform = 'scaleX(0)';
        }

        jackpotOverlay.classList.add('open');

        let isClosed = false;
        const doClose = () => {
            if (isClosed) return;
            isClosed = true;
            if (jackpotCloseTimeout) {
                clearTimeout(jackpotCloseTimeout);
                jackpotCloseTimeout = null;
            }
            jackpotOverlay.classList.remove('open');
            jackpotOverlay.removeEventListener('click', doClose);
            setTimeout(() => {
                if (onClosed) onClosed();
            }, 200);
        };

        jackpotOverlay.addEventListener('click', doClose);
        jackpotCloseTimeout = setTimeout(doClose, 1800);
    }

    function runClassicRoll(poolType, trackEl, containerEl, currentPool, weightFn, isChained = false) {
        if (state.isSpinning) return;

        // Tính tỉ lệ nổ hũ
        let jackpotChance;
        if (!isChained) {
            // Roll thông thường: tích +1 điểm hũ trước khi tính tỉ lệ
            addJarPoint(1);
            jackpotChance = getJackpotChance(state.fortuneJar.points) / 100;
        } else {
            // Roll xích nổ liên tục: điểm đã về 0, tỉ lệ gốc 15%
            jackpotChance = 0.15;
        }

        spinRoulette({
            trackEl,
            containerEl,
            pool: currentPool,
            weightFn,
            showModal: false, // Ta kiểm soát modal sau khi kiểm tra nổ hũ
            duration: isChained ? 4500 : SPIN_DURATION,
            onComplete: (winningItem) => {
                // Rule: Không nổ hũ ở hòm hệ riêng lẻ
                const canJackpot = (poolType !== 'classes');

                const currentRank = getItemTierRank(winningItem, poolType);
                const higherTierPool = currentPool.filter(item => getItemTierRank(item, poolType) > currentRank);

                // Có thể nổ nếu hòm cho phép và còn thẻ bậc cao hơn
                const hasHigherTier = canJackpot && (higherTierPool.length > 0);
                const isJackpotHit = hasHigherTier && (Math.random() < jackpotChance);

                if (isJackpotHit) {
                    // NỔ HŨ THÀNH CÔNG!
                    try {
                        if (window.soundEngine && typeof window.soundEngine.playCelebration === 'function') {
                            window.soundEngine.playCelebration();
                        } else if (window.soundEngine && typeof window.soundEngine.playReveal === 'function') {
                            window.soundEngine.playReveal('transcendent');
                        }
                    } catch (soundErr) {
                        console.warn('Jackpot sound error:', soundErr);
                    }

                    const consumed = state.fortuneJar.points;
                    state.fortuneJar.points = 0;
                    updateJarUI();

                    const eliminatedTierName = getTierDisplayName(winningItem, poolType);

                    // Khóa toàn bộ nút trong thời gian thông báo nổ hũ hiển thị
                    setAllButtonsDisabled(true);

                    showJackpotModal(consumed, eliminatedTierName, () => {
                        // Tự động roll lại với hòm mới loại bỏ các thẻ <= tier vừa roll!
                        runClassicRoll(poolType, trackEl, containerEl, higherTierPool, weightFn, true);
                    });
                } else {
                    // Không nổ hũ hoặc đã đạt tier tối đa của hòm đó -> Vinh danh kết quả!
                    showRevealModal(winningItem);
                }
            }
        });
    }

    // Single "Mở Hòm" Buttons with Fortune Jar Integration
    document.getElementById('btn-open-champions').addEventListener('click', () => {
        runClassicRoll('champions', trackChampions, rouletteChampions, window.CHAMPIONS, getChampionWeight);
    });

    const btnOpenCarries = document.getElementById('btn-open-carries');
    if (btnOpenCarries) {
        btnOpenCarries.addEventListener('click', () => {
            runClassicRoll('carries', trackCarries, rouletteCarries, window.CARRY_CHAMPIONS, getChampionWeight);
        });
    }

    const btnOpenTanks = document.getElementById('btn-open-tanks');
    if (btnOpenTanks) {
        btnOpenTanks.addEventListener('click', () => {
            runClassicRoll('tanks', trackTanks, rouletteTanks, window.TANK_CHAMPIONS, getChampionWeight);
        });
    }

    document.getElementById('btn-open-origins').addEventListener('click', () => {
        runClassicRoll('origins', trackOrigins, rouletteOrigins, window.ORIGINS, getOriginWeight);
    });

    document.getElementById('btn-open-classes').addEventListener('click', () => {
        runClassicRoll('classes', trackClasses, rouletteClasses, window.CLASSES, getClassWeight);
    });

    document.getElementById('btn-open-merged').addEventListener('click', () => {
        runClassicRoll('merged', trackMerged, rouletteMerged, MERGED_TRAITS, getMergedWeight);
    });

    // ==========================================
    // 8. TAB 2: BÍ BÀI (COMP BUILDER MODE)
    // ==========================================
    const trackCompStep = document.getElementById('track-comp-step');
    const rouletteCompStep = document.getElementById('roulette-comp-step');
    const btnCompAction = document.getElementById('btn-comp-action');
    const compSummaryBoard = document.getElementById('comp-summary-board');
    const compSummaryHeroesContainer = document.getElementById('comp-summary-heroes-container');
    const btnCompReset = document.getElementById('btn-comp-reset');

    const pillStep1 = document.getElementById('pill-step-1');
    const pillStepTank = document.getElementById('pill-step-tank');
    const pillStep2 = document.getElementById('pill-step-2');
    const pillStep3 = document.getElementById('pill-step-3');
    const pillStep2Num = document.getElementById('pill-step-2-num');
    const pillStep3Num = document.getElementById('pill-step-3-num');
    const pillStep2Text = document.getElementById('pill-step-2-text');

    // Populate initial comp track
    function getCompStepConfig() {
        const isSplit = state.settings.splitRoles;
        const isMerged = state.settings.mergeTraits;
        const currentStep = state.compFlow.step;

        if (currentStep === 1) {
            return {
                pool: isSplit ? window.CARRY_CHAMPIONS : window.CHAMPIONS,
                weightFn: getChampionWeight,
                biasArgs: [],
                btnText: 'Roll',
                stepKey: 'carry'
            };
        } else if (isSplit && currentStep === 2) {
            return {
                pool: window.TANK_CHAMPIONS,
                weightFn: getTankWeight,
                biasArgs: [state.compFlow.selectedChampion],
                btnText: 'Roll',
                stepKey: 'tank'
            };
        } else if ((!isSplit && currentStep === 2) || (isSplit && currentStep === 3)) {
            return {
                pool: isMerged ? MERGED_TRAITS : window.ORIGINS,
                weightFn: isMerged ? getMergedWeight : getOriginWeight,
                biasArgs: [state.compFlow.selectedChampion, state.compFlow.selectedTank],
                btnText: 'Roll',
                stepKey: isMerged ? 'merged' : 'origin'
            };
        } else if ((!isSplit && currentStep === 3) || (isSplit && currentStep === 4)) {
            return {
                pool: window.CLASSES,
                weightFn: getClassWeight,
                biasArgs: [state.compFlow.selectedChampion, state.compFlow.selectedTank],
                btnText: 'Roll',
                stepKey: 'class'
            };
        }
        return null;
    }

    function updateCompUI() {
        const isMerged = state.settings.mergeTraits;
        const isSplit = state.settings.splitRoles;

        // Step numbers and visibility
        if (isSplit) {
            if (pillStepTank) pillStepTank.style.display = 'flex';
            if (pillStep2Num) pillStep2Num.innerText = '3';
            if (pillStep3Num) pillStep3Num.innerText = '4';
        } else {
            if (pillStepTank) pillStepTank.style.display = 'none';
            if (pillStep2Num) pillStep2Num.innerText = '2';
            if (pillStep3Num) pillStep3Num.innerText = '3';
        }

        pillStep3.style.display = isMerged ? 'none' : 'flex';
        pillStep2Text.innerText = isMerged ? 'Tộc & Hệ' : 'Tộc';

        // Update pills active state
        [pillStep1, pillStepTank, pillStep2, pillStep3].forEach(p => {
            if (p) p.classList.remove('active', 'completed');
        });

        const currentStep = state.compFlow.step;
        const config = getCompStepConfig();

        if (currentStep === 1) {
            pillStep1.classList.add('active');
            compSummaryBoard.style.display = 'none';
        } else if (isSplit && currentStep === 2) {
            pillStep1.classList.add('completed');
            if (pillStepTank) pillStepTank.classList.add('active');
        } else if ((!isSplit && currentStep === 2) || (isSplit && currentStep === 3)) {
            pillStep1.classList.add('completed');
            if (isSplit && pillStepTank) pillStepTank.classList.add('completed');
            pillStep2.classList.add('active');
        } else if ((!isSplit && currentStep === 3) || (isSplit && currentStep === 4)) {
            pillStep1.classList.add('completed');
            if (isSplit && pillStepTank) pillStepTank.classList.add('completed');
            pillStep2.classList.add('completed');
            pillStep3.classList.add('active');
        } else {
            // Sequence Completed
            pillStep1.classList.add('completed');
            if (isSplit && pillStepTank) pillStepTank.classList.add('completed');
            pillStep2.classList.add('completed');
            if (!isMerged) pillStep3.classList.add('completed');
            btnCompAction.style.display = 'none';
            renderCompSummary();
        }

        if (config) {
            btnCompAction.style.display = 'inline-block';
            btnCompAction.innerText = config.btnText;

            // Đổi hiển thị bể roll ngay lập tức sang hòm tiếp theo khi chưa quay!
            if (!state.isSpinning) {
                populateInitialTrack(trackCompStep, config.pool);
            }
        }
    }

    // Populate initial comp track
    updateCompUI();

    btnCompAction.addEventListener('click', () => {
        if (state.isSpinning) return;
        const config = getCompStepConfig();
        if (!config) return;

        spinRoulette({
            trackEl: trackCompStep,
            containerEl: rouletteCompStep,
            pool: config.pool,
            weightFn: config.weightFn,
            biasArgs: config.biasArgs,
            onComplete: (item) => {
                if (config.stepKey === 'carry') {
                    state.compFlow.selectedChampion = item;
                    state.compFlow.step = 2;
                } else if (config.stepKey === 'tank') {
                    state.compFlow.selectedTank = item;
                    state.compFlow.step = 3;
                } else if (config.stepKey === 'merged') {
                    if (item.type === 'origin') {
                        state.compFlow.selectedOrigin = item;
                    } else {
                        state.compFlow.selectedClass = item;
                    }
                    state.compFlow.step = state.settings.splitRoles ? 5 : 4; // Complete!
                } else if (config.stepKey === 'origin') {
                    state.compFlow.selectedOrigin = item;
                    state.compFlow.step = state.settings.splitRoles ? 4 : 3;
                } else if (config.stepKey === 'class') {
                    state.compFlow.selectedClass = item;
                    state.compFlow.step = state.settings.splitRoles ? 5 : 4; // Complete!
                }
                // Chuyển bước và cập nhật bể roll ngay lập tức!
                updateCompUI();
            }
        });
    });

    // Render Bảng Tổng Kết (Summary Board with separate cards side-by-side)
    function renderCompSummary() {
        const champ = state.compFlow.selectedChampion;
        if (!champ || !compSummaryHeroesContainer) return;

        let cardsHtml = '';

        // Card 1: Carry (or Main Champion)
        const champColor = champ.rarity ? champ.rarity.color : 'var(--color-common)';
        const roleName = state.settings.splitRoles ? 'CHỦ LỰC' : 'TƯỚNG CHÍNH';
        cardsHtml += `
            <div class="comp-summary-card" style="border-bottom: 4px solid ${champColor};">
                <div class="comp-card-badge" style="background: var(--accent-gold); color: #1C1C1F;">${roleName}</div>
                <div class="comp-card-img-wrap">
                    <img class="comp-card-img" src="${champ.image}" alt="${champ.name}">
                </div>
                <div class="comp-card-footer">
                    <div class="comp-card-name">${champ.name}</div>
                    <div class="comp-card-sub" style="color: var(--accent-gold);">🟡 ${champ.cost} Vàng</div>
                </div>
            </div>
        `;

        // Card 2: Tank (if split roles is ON and tank selected)
        if (state.settings.splitRoles && state.compFlow.selectedTank) {
            const tank = state.compFlow.selectedTank;
            const tankColor = tank.rarity ? tank.rarity.color : 'var(--color-common)';
            cardsHtml += `
                <div class="comp-summary-card" style="border-bottom: 4px solid ${tankColor};">
                    <div class="comp-card-badge" style="background: var(--color-rare); color: #ffffff;">TANK</div>
                    <div class="comp-card-img-wrap">
                        <img class="comp-card-img" src="${tank.image}" alt="${tank.name}">
                    </div>
                    <div class="comp-card-footer">
                        <div class="comp-card-name">${tank.name}</div>
                        <div class="comp-card-sub" style="color: var(--accent-gold);">🟡 ${tank.cost} Vàng</div>
                    </div>
                </div>
            `;
        }

        // Card 3: Origin (or Merged Trait)
        if (state.compFlow.selectedOrigin) {
            const origin = state.compFlow.selectedOrigin;
            const originColor = origin.rarity ? origin.rarity.color : 'var(--accent-blue)';
            const originBadge = origin.type === 'class' ? 'HỆ' : 'TỘC';
            cardsHtml += `
                <div class="comp-summary-card" style="border-bottom: 4px solid ${originColor};">
                    <div class="comp-card-badge" style="background: var(--accent-blue); color: #ffffff;">${originBadge}</div>
                    <div class="comp-card-trait-body">
                        <img class="comp-card-trait-icon" src="${origin.icon}" alt="${origin.name}">
                        <div class="comp-card-trait-en">${origin.nameEn || ''}</div>
                    </div>
                    <div class="comp-card-footer">
                        <div class="comp-card-name">${origin.name}</div>
                        <div class="comp-card-sub" style="color: var(--text-muted);">${origin.count || (origin.champions ? origin.champions.length : '')} tướng</div>
                    </div>
                </div>
            `;
        }

        // Card 4: Class (if not merged)
        if (state.compFlow.selectedClass) {
            const cls = state.compFlow.selectedClass;
            const clsColor = cls.rarity ? cls.rarity.color : 'var(--accent-blue)';
            cardsHtml += `
                <div class="comp-summary-card" style="border-bottom: 4px solid ${clsColor};">
                    <div class="comp-card-badge" style="background: #9333ea; color: #ffffff;">HỆ</div>
                    <div class="comp-card-trait-body">
                        <img class="comp-card-trait-icon" src="${cls.icon}" alt="${cls.name}">
                        <div class="comp-card-trait-en">${cls.nameEn || ''}</div>
                    </div>
                    <div class="comp-card-footer">
                        <div class="comp-card-name">${cls.name}</div>
                        <div class="comp-card-sub" style="color: var(--text-muted);">${cls.count || (cls.champions ? cls.champions.length : '')} tướng</div>
                    </div>
                </div>
            `;
        }

        compSummaryHeroesContainer.innerHTML = cardsHtml;
        compSummaryBoard.style.display = 'flex';
        compSummaryBoard.scrollIntoView({ behavior: 'smooth' });
    }

    btnCompReset.addEventListener('click', () => {
        state.compFlow.step = 1;
        state.compFlow.selectedChampion = null;
        state.compFlow.selectedTank = null;
        state.compFlow.selectedOrigin = null;
        state.compFlow.selectedClass = null;
        if (compSummaryHeroesContainer) compSummaryHeroesContainer.innerHTML = '';
        const initialPool = state.settings.splitRoles ? window.CARRY_CHAMPIONS : window.CHAMPIONS;
        populateInitialTrack(trackCompStep, initialPool);
        updateCompUI();
    });

    // ==========================================
    // 9. TAB 3: HÒM CÓ GÌ? (DIRECTORY)
    // ==========================================
    const dirGrid = document.getElementById('directory-grid');
    const dirSearchInput = document.getElementById('dir-search-input');
    let dirCategoryFilter = 'all';
    let dirTierFilter = 'all';

    function renderDirectory() {
        const query = (dirSearchInput.value || '').trim().toLowerCase();
        let items = [];

        if (dirCategoryFilter === 'all') {
            items = [...window.CHAMPIONS, ...window.ORIGINS, ...window.CLASSES];
        } else if (dirCategoryFilter === 'champions') {
            items = [...window.CHAMPIONS];
        } else if (dirCategoryFilter === 'carries') {
            items = [...window.CARRY_CHAMPIONS];
        } else if (dirCategoryFilter === 'tanks') {
            items = [...window.TANK_CHAMPIONS];
        } else if (dirCategoryFilter === 'origins') {
            items = [...window.ORIGINS];
        } else if (dirCategoryFilter === 'classes') {
            items = [...window.CLASSES];
        }

        // Tier filter
        if (dirTierFilter !== 'all') {
            items = items.filter(item => {
                const t = item.tier || (item.rarity ? item.rarity.id : '');
                return t.toLowerCase() === dirTierFilter.toLowerCase();
            });
        }

        // Search query
        if (query) {
            items = items.filter(item => {
                const name = (item.name || '').toLowerCase();
                const nameEn = (item.nameEn || '').toLowerCase();
                const traits = (item.origins ? item.origins.concat(item.classes).join(' ') : '').toLowerCase();
                return name.includes(query) || nameEn.includes(query) || traits.includes(query);
            });
        }

        // Render cards
        if (items.length === 0) {
            dirGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #9E9EB1;">
                    Không tìm thấy vật phẩm phù hợp.
                </div>
            `;
            return;
        }

        dirGrid.innerHTML = items.map(item => {
            const isChamp = !item.type;
            const color = item.rarity ? item.rarity.color : '#9E9EB1';
            const rarityName = item.rarity ? item.rarity.name : 'COMMON';

            if (isChamp) {
                const traitBadgesHtml = [...item.origins, ...item.classes].map(tName => {
                    const icon = traitIconMap[tName];
                    if (!icon) return '';
                    return `<img class="dir-card-trait-badge" src="${icon}" alt="${tName}" title="${tName}">`;
                }).join('');

                const roleTag = item.subRoleVi ? `<span class="dir-role-tag">${item.subRoleVi}</span> ` : '';

                return `
                    <div class="dir-card" style="border-bottom: 3px solid ${color}; cursor: pointer;" data-id="${item.id}">
                        <div class="dir-card-thumb">
                            <img class="dir-card-img" src="${item.image}" alt="${item.name}" loading="lazy">
                            <div class="dir-card-traits-badges">
                                ${traitBadgesHtml}
                            </div>
                        </div>
                        <div class="dir-card-body">
                            <div class="dir-card-name">${roleTag}${item.name}</div>
                            <div class="dir-card-cost">🟡 ${item.cost} Vàng</div>
                        </div>
                    </div>
                `;
            } else {
                const typeText = item.type === 'origin' ? 'Tộc' : 'Hệ';
                return `
                    <div class="dir-card" style="border-bottom: 3px solid ${color}; cursor: pointer;" data-id="${item.id}">
                        <div class="dir-card-thumb" style="display: flex; align-items: center; justify-content: center;">
                            <img class="dir-card-trait-img" src="${item.icon}" alt="${item.name}" loading="lazy">
                        </div>
                        <div class="dir-card-body">
                            <div class="dir-card-name">${item.name}</div>
                            <div class="dir-card-traits">${item.nameEn} • ${typeText}</div>
                            <div style="font-size: 11px; color: ${color}; font-weight: 700;">${rarityName}</div>
                        </div>
                    </div>
                `;
            }
        }).join('');

        // Attach click to preview in OP.GG modal
        dirGrid.querySelectorAll('.dir-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = card.getAttribute('data-id');
                const matched = items.find(it => it.id === id);
                if (matched) showRevealModal(matched);
            });
        });
    }

    // Filter events
    document.querySelectorAll('[data-dir-type]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-dir-type]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            dirCategoryFilter = btn.getAttribute('data-dir-type');
            renderDirectory();
        });
    });

    document.querySelectorAll('[data-dir-tier]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-dir-tier]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            dirTierFilter = btn.getAttribute('data-dir-tier');
            renderDirectory();
        });
    });

    dirSearchInput.addEventListener('input', () => {
        renderDirectory();
    });

    renderDirectory();

    // ==========================================
    // 10. TAB NAVIGATION & SETTINGS
    // ==========================================
    const tabBtns = document.querySelectorAll('.nav-tab-btn');
    const tabViews = {
        classic: document.getElementById('tab-content-classic'),
        comp: document.getElementById('tab-content-comp'),
        directory: document.getElementById('tab-content-directory'),
        combo: document.getElementById('tab-content-combo')
    };

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    function switchTab(tabId) {
        state.activeTab = tabId;
        tabBtns.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-tab') === tabId);
        });
        Object.entries(tabViews).forEach(([id, view]) => {
            if (view) view.style.display = id === tabId ? 'block' : 'none';
        });

        if (tabId === 'comp') updateCompUI();
        if (tabId === 'directory') renderDirectory();
        if (tabId === 'combo') initComboTab();
    }

    // Logo click goes to classic
    document.getElementById('btn-logo-home').addEventListener('click', () => switchTab('classic'));

    // Settings Modal
    const settingsBackdrop = document.getElementById('settings-backdrop');
    const btnOpenSettings = document.getElementById('btn-open-settings');
    const btnCloseSettings = document.getElementById('btn-close-settings');

    function openSettingsModal() {
        settingsBackdrop.classList.add('open');
    }

    function closeSettingsModal() {
        settingsBackdrop.classList.remove('open');
    }

    btnOpenSettings.addEventListener('click', openSettingsModal);
    btnCloseSettings.addEventListener('click', closeSettingsModal);
    settingsBackdrop.addEventListener('click', (e) => {
        if (e.target === settingsBackdrop) closeSettingsModal();
    });

    // Sound settings
    const btnToggleSound = document.getElementById('btn-toggle-sound');
    const soundIcon = document.getElementById('sound-icon');

    function updateSoundUI() {
        const isMuted = !state.settings.sound;
        window.soundEngine.setMuted(isMuted);
        if (soundIcon) soundIcon.innerText = isMuted ? '🔇' : '🔊';
        if (toggleSoundEl) toggleSoundEl.checked = state.settings.sound;
    }

    if (btnToggleSound) {
        btnToggleSound.addEventListener('click', () => {
            state.settings.sound = !state.settings.sound;
            updateSoundUI();
            saveSettings();
        });
    }

    toggleSoundEl.addEventListener('change', (e) => {
        state.settings.sound = e.target.checked;
        updateSoundUI();
        saveSettings();
    });

    sliderVolumeEl.addEventListener('input', (e) => {
        state.settings.volume = parseFloat(e.target.value);
        window.soundEngine.setVolume(state.settings.volume);
        saveSettings();
    });

    // Toggle: Merge Traits
    toggleMergeEl.addEventListener('change', (e) => {
        state.settings.mergeTraits = e.target.checked;
        saveSettings();
        applyMergeSetting();
    });

    function applyMergeSetting() {
        const isMerged = state.settings.mergeTraits;
        const caseOrigins = document.getElementById('case-section-origins');
        const caseClasses = document.getElementById('case-section-classes');
        const caseMerged = document.getElementById('case-section-merged');

        if (isMerged) {
            caseOrigins.style.display = 'none';
            caseClasses.style.display = 'none';
            caseMerged.style.display = 'block';
        } else {
            caseOrigins.style.display = 'block';
            caseClasses.style.display = 'block';
            caseMerged.style.display = 'none';
        }
        updateCompUI();
    }

    // Toggle: Split Roles (Chủ Lực & Tank)
    if (toggleSplitRolesEl) {
        toggleSplitRolesEl.addEventListener('change', (e) => {
            state.settings.splitRoles = e.target.checked;
            saveSettings();
            applySplitRolesSetting();
        });
    }

    function applySplitRolesSetting() {
        const isSplit = state.settings.splitRoles;
        const caseChampions = document.getElementById('case-section-champions');
        const caseCarries = document.getElementById('case-section-carries');
        const caseTanks = document.getElementById('case-section-tanks');

        if (caseChampions && caseCarries && caseTanks) {
            if (isSplit) {
                caseChampions.style.display = 'none';
                caseCarries.style.display = 'block';
                caseTanks.style.display = 'block';
            } else {
                caseChampions.style.display = 'block';
                caseCarries.style.display = 'none';
                caseTanks.style.display = 'none';
            }
        }
        // If in Comp mode and reset needed
        const initialPool = isSplit ? window.CARRY_CHAMPIONS : window.CHAMPIONS;
        if (state.compFlow.step === 1) {
            populateInitialTrack(trackCompStep, initialPool);
        }
        updateCompUI();
    }

    // Toggle: Meta
    toggleMetaEl.addEventListener('change', (e) => {
        state.settings.useMeta = e.target.checked;
        saveSettings();
        updateMetaIndicator();
    });

    function updateMetaIndicator() {
        if (metaIndicatorEl) {
            if (state.settings.useMeta) {
                metaIndicatorEl.innerText = 'ĐANG ÁP DỤNG META';
                metaIndicatorEl.style.color = '#00AE0A';
            } else {
                metaIndicatorEl.innerText = 'TỈ LỆ NGUYÊN BẢN';
                metaIndicatorEl.style.color = '#9E9EB1';
            }
        }
    }

    function saveSettings() {
        try {
            localStorage.setItem('vitacha_settings', JSON.stringify(state.settings));
        } catch (e) {
            console.warn('Could not save settings:', e);
        }
    }

    // ==========================================
    // 11. TAB: NỔ (CASCADE COMBO ROLL)
    // ==========================================
    const UNIQUE_ORIGIN_NAMES = [
        'Cự Thạch', 'Vườn Gai', 'Ăn Mòn', 'Thế Thần', 'Hòa Hợp',
        'Săn Thưởng', 'Bá Chủ', 'Thụ Thần', 'Cổ Thụ', 'Lục Bảo'
    ];

    const UNIQUE_ORIGIN_ITEM = {
        id: 'unique_origins',
        name: 'Độc Nhất',
        nameEn: 'Unique',
        type: 'origin',
        count: 10,
        tier: 'ultimate',
        rarity: {
            id: 'ultimate',
            name: 'Ultimate',
            nameVi: 'Tối Thượng',
            color: '#EB9C00',
            weight: 3.3
        },
        icon: 'Traits/Origin/Trait_Icon_18_Eclipse_Large_White.webp',
        isUniqueBundle: true
    };

    const UNIQUE_CHAMPIONS = window.CHAMPIONS.filter(c =>
        c.origins && c.origins.some(o => UNIQUE_ORIGIN_NAMES.includes(o))
    );

    const COMBO_ORIGINS_POOL = [
        ...window.ORIGINS.filter(o => o.champions && o.champions.length > 1),
        UNIQUE_ORIGIN_ITEM
    ];

    window.UNIQUE_ORIGIN_ITEM = UNIQUE_ORIGIN_ITEM;
    window.UNIQUE_CHAMPIONS = UNIQUE_CHAMPIONS;
    window.COMBO_ORIGINS_POOL = COMBO_ORIGINS_POOL;

    const trackComboOrigin = document.getElementById('track-combo-origin');
    const rouletteComboOrigin = document.getElementById('roulette-combo-origin');
    const btnComboStart = document.getElementById('btn-combo-start');
    const comboStage1 = document.getElementById('combo-stage-1');

    const comboStage2 = document.getElementById('combo-stage-2');
    const comboStage2Title = document.getElementById('combo-stage-2-title');
    const comboStage2Pill = document.getElementById('combo-stage-2-pill');
    const comboStage2LockBadge = document.getElementById('combo-stage-2-lock-badge');
    const trackComboStage2 = document.getElementById('track-combo-stage2');
    const rouletteComboStage2 = document.getElementById('roulette-combo-stage2');
    const comboStage2Status = document.getElementById('combo-stage-2-status');

    const comboStage3 = document.getElementById('combo-stage-3');
    const comboStage3Title = document.getElementById('combo-stage-3-title');
    const comboStage3Pill = document.getElementById('combo-stage-3-pill');
    const comboStage3LockBadge = document.getElementById('combo-stage-3-lock-badge');
    const trackComboStage3 = document.getElementById('track-combo-stage3');
    const rouletteComboStage3 = document.getElementById('roulette-combo-stage3');
    const comboStage3Status = document.getElementById('combo-stage-3-status');

    const comboResetWrap = document.getElementById('combo-reset-wrap');
    const btnComboReset = document.getElementById('btn-combo-reset');

    function build24TrackCards(champions, winIndex = 18) {
        const total = 24;
        const baseCount = Math.floor(total / champions.length);
        let remainder = total % champions.length;
        let list = [];
        champions.forEach(champ => {
            const count = baseCount + (remainder > 0 ? 1 : 0);
            if (remainder > 0) remainder--;
            for (let i = 0; i < count; i++) {
                list.push(champ);
            }
        });

        // Pick random winner from list
        const winnerIdx = Math.floor(Math.random() * list.length);
        const winner = list.splice(winnerIdx, 1)[0];

        // Shuffle remaining 23 items
        for (let i = list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [list[i], list[j]] = [list[j], list[i]];
        }

        // Build track with winner at winIndex
        const trackCards = [];
        let listPtr = 0;
        for (let i = 0; i < total; i++) {
            if (i === winIndex) {
                trackCards.push(winner);
            } else {
                trackCards.push(list[listPtr++]);
            }
        }

        // Minimize adjacent duplicates without moving winIndex
        for (let i = 1; i < total; i++) {
            if (trackCards[i].id === trackCards[i - 1].id) {
                for (let j = i + 1; j < total; j++) {
                    if (j !== winIndex && i !== winIndex && trackCards[j].id !== trackCards[i - 1].id) {
                        [trackCards[i], trackCards[j]] = [trackCards[j], trackCards[i]];
                        break;
                    }
                }
            }
        }

        return { winner, trackCards };
    }

    let comboInitialized = false;
    function initComboTab() {
        if (!comboInitialized) {
            comboInitialized = true;
            populateInitialTrack(trackComboOrigin, COMBO_ORIGINS_POOL);
        }
    }

    if (btnComboStart) {
        btnComboStart.addEventListener('click', () => {
            if (state.isSpinning) return;

            // Reset stage 2 and stage 3 displays
            comboStage2.style.display = 'none';
            comboStage2.classList.remove('active-stage');
            comboStage3.style.display = 'none';
            comboStage3.classList.remove('active-stage');
            comboResetWrap.style.display = 'none';
            comboStage1.classList.add('active-stage');

            btnComboStart.disabled = true;

            spinRoulette({
                trackEl: trackComboOrigin,
                containerEl: rouletteComboOrigin,
                pool: COMBO_ORIGINS_POOL,
                weightFn: getOriginWeight,
                showModal: false,
                duration: 4500,
                onComplete: (winningOrigin) => {
                    handleComboStage1Finished(winningOrigin);
                }
            });
        });
    }

    function handleComboStage1Finished(winningOrigin) {
        btnComboStart.disabled = true;
        comboStage1.classList.remove('active-stage');
        comboStage2.classList.add('active-stage');
        comboStage2.style.display = 'block';

        // Case A: Thẻ Độc Nhất (Unique Bundle of 10 single-champ origins)
        if (winningOrigin.isUniqueBundle) {
            comboStage2Title.innerText = '2: Tướng Độc Nhất (10 Tướng)';
            comboStage2Pill.innerText = '10 Tướng Tối Thượng';
            comboStage2LockBadge.innerHTML = `<span class="combo-lock-icon">👑</span> Độc Nhất (10 Tộc 1 Tướng)`;
            comboStage2Status.innerText = '⚡ Đang tự động quay chọn tướng Độc Nhất...';
            populateInitialTrack(trackComboStage2, UNIQUE_CHAMPIONS);

            comboStage2.scrollIntoView({ behavior: 'smooth', block: 'center' });

            setTimeout(() => {
                spinRoulette({
                    trackEl: trackComboStage2,
                    containerEl: rouletteComboStage2,
                    pool: UNIQUE_CHAMPIONS,
                    weightFn: getChampionWeight,
                    showModal: true,
                    duration: 4500,
                    onComplete: (winnerChamp) => {
                        comboResetWrap.style.display = 'block';
                        comboStage2Status.innerHTML = `🏆 Đã chốt tướng: <strong style="color: #EB9C00;">${winnerChamp.name}</strong> (${winnerChamp.origins.join(', ')})`;
                    }
                });
            }, 700);
            return;
        }

        // Case B / C: Multi-champion origin
        const originChamps = window.CHAMPIONS.filter(c => c.origins && c.origins.includes(winningOrigin.name));

        // Origin with no classes (e.g. Khắc Tinh - Rival)
        const hasNoClasses = originChamps.every(c => !c.classes || c.classes.length === 0);
        if (hasNoClasses) {
            comboStage2Title.innerText = `2: Chọn Tướng ${winningOrigin.name}`;
            comboStage2Pill.innerText = `${originChamps.length} Tướng (${originChamps.map(c => c.name).join(' / ')})`;
            comboStage2LockBadge.innerHTML = `<img class="combo-lock-icon" src="${winningOrigin.icon}" alt="${winningOrigin.name}"> Tộc: ${winningOrigin.name} (Tộc Không Hệ)`;
            comboStage2Status.innerText = `⚡ Đang tự động quay chọn tướng ${winningOrigin.name}...`;
            populateInitialTrack(trackComboStage2, originChamps);

            comboStage2.scrollIntoView({ behavior: 'smooth', block: 'center' });

            setTimeout(() => {
                spinRoulette({
                    trackEl: trackComboStage2,
                    containerEl: rouletteComboStage2,
                    pool: originChamps,
                    weightFn: getChampionWeight,
                    showModal: true,
                    duration: 4500,
                    onComplete: (winnerChamp) => {
                        comboResetWrap.style.display = 'block';
                        comboStage2Status.innerHTML = `🏆 Đã chốt tướng: <strong style="color: ${winnerChamp.rarity.color};">${winnerChamp.name}</strong> (${winningOrigin.name})`;
                    }
                });
            }, 700);
            return;
        }

        // Normal origin: filter compatible classes
        const classNames = new Set();
        originChamps.forEach(c => (c.classes || []).forEach(cl => classNames.add(cl)));
        const compatibleClasses = window.CLASSES.filter(cl => classNames.has(cl.name));

        comboStage2Title.innerText = `2: Hệ Tương Thích (${winningOrigin.name})`;
        comboStage2Pill.innerText = `${compatibleClasses.length} Hệ Tương Thích`;
        comboStage2LockBadge.innerHTML = `<img class="combo-lock-icon" src="${winningOrigin.icon}" alt="${winningOrigin.name}"> Tộc: ${winningOrigin.name}`;
        comboStage2Status.innerText = '⚡ Đang tự động quay chọn Hệ tương thích...';
        populateInitialTrack(trackComboStage2, compatibleClasses);

        comboStage2.scrollIntoView({ behavior: 'smooth', block: 'center' });

        setTimeout(() => {
            spinRoulette({
                trackEl: trackComboStage2,
                containerEl: rouletteComboStage2,
                pool: compatibleClasses,
                weightFn: getClassWeight,
                showModal: false,
                duration: 4500,
                onComplete: (winningClass) => {
                    handleComboStage2Finished(winningOrigin, winningClass);
                }
            });
        }, 700);
    }

    function handleComboStage2Finished(winningOrigin, winningClass) {
        btnComboStart.disabled = true;

        // Matching champions containing both origin and class
        const matchingChamps = window.CHAMPIONS.filter(c =>
            (c.origins || []).includes(winningOrigin.name) &&
            (c.classes || []).includes(winningClass.name)
        );

        // Case 1: Exactly 1 champion -> reveal modal directly
        if (matchingChamps.length === 1) {
            const winnerChamp = matchingChamps[0];
            comboStage2Status.innerHTML = `🎯 Khớp duy nhất: <strong style="color: #00AE0A;">${winnerChamp.name}</strong> (${winningOrigin.name} + ${winningClass.name})`;
            showRevealModal(winnerChamp);
            comboResetWrap.style.display = 'block';
            return;
        }

        // Case 2: >1 champions -> Stage 3 with 24 balanced cards
        comboStage2.classList.remove('active-stage');
        comboStage3.classList.add('active-stage');
        comboStage3.style.display = 'block';

        comboStage3Title.innerText = `3: Chốt Hạ Tướng (${matchingChamps.map(c => c.name).join(' vs ')})`;
        comboStage3Pill.innerText = `24 Thẻ Cân Bằng (${matchingChamps.length} Tướng)`;
        comboStage3LockBadge.innerHTML = `<img class="combo-lock-icon" src="${winningOrigin.icon}" alt="${winningOrigin.name}"> + <img class="combo-lock-icon" src="${winningClass.icon}" alt="${winningClass.name}"> ${winningOrigin.name} + ${winningClass.name}`;
        comboStage3Status.innerText = `🎯 Đang tự động quay chọn tướng thắng cuộc giữa ${matchingChamps.map(c => c.name).join(' và ')}...`;

        const { winner, trackCards } = build24TrackCards(matchingChamps, 18);
        trackComboStage3.innerHTML = trackCards.map(c => createRouletteCardHTML(c)).join('');
        trackComboStage3.style.transform = 'translateX(0px)';

        comboStage3.scrollIntoView({ behavior: 'smooth', block: 'center' });

        setTimeout(() => {
            spinRoulette({
                trackEl: trackComboStage3,
                containerEl: rouletteComboStage3,
                pool: matchingChamps,
                customCards: trackCards,
                customWinner: winner,
                customWinIndex: 18,
                showModal: true,
                duration: 4500,
                onComplete: (winningChamp) => {
                    comboResetWrap.style.display = 'block';
                    comboStage3Status.innerHTML = `🏆 Đã chốt tướng: <strong style="color: ${winningChamp.rarity.color};">${winningChamp.name}</strong> (${winningOrigin.name} + ${winningClass.name})`;
                }
            });
        }, 700);
    }

    if (btnComboReset) {
        btnComboReset.addEventListener('click', () => {
            if (state.isSpinning) return;

            comboStage2.style.display = 'none';
            comboStage2.classList.remove('active-stage');
            comboStage3.style.display = 'none';
            comboStage3.classList.remove('active-stage');
            comboResetWrap.style.display = 'none';

            comboStage1.classList.add('active-stage');
            btnComboStart.disabled = false;
            populateInitialTrack(trackComboOrigin, COMBO_ORIGINS_POOL);

            comboStage1.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    window.build24TrackCards = build24TrackCards;
    window.handleComboStage1Finished = handleComboStage1Finished;
    window.handleComboStage2Finished = handleComboStage2Finished;

    // Initialize layout with current settings
    applyMergeSetting();
    applySplitRolesSetting();
    updateSoundUI();
    initComboTab();
});

