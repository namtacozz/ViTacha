// ViTacha - Audio Synthesis Engine using Web Audio API
// Authentic CS:GO style sound synthesis & celebratory gacha fanfares
// 100% self-contained Web Audio API (No external audio files required)

class SoundEngine {
    constructor() {
        this.ctx = null;
        this.masterVolume = 0.8;
        this.muted = false;
        this.initialized = false;
    }

    init() {
        try {
            if (!this.ctx) {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                if (AudioContextClass) {
                    this.ctx = new AudioContextClass();
                    this.initialized = true;
                }
            }
            if (this.ctx && this.ctx.state === 'suspended') {
                this.ctx.resume().catch(() => {});
            }
        } catch (e) {
            console.warn('SoundEngine init warning:', e);
        }
    }

    setVolume(val) {
        this.masterVolume = Math.max(0, Math.min(1, val));
    }

    setMuted(mute) {
        this.muted = mute;
    }

    getGain(multiplier = 1) {
        if (!this.ctx || this.muted) return null;
        try {
            const gain = this.ctx.createGain();
            const gainVal = Math.max(0.0001, this.masterVolume * multiplier);
            gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
            gain.connect(this.ctx.destination);
            return gain;
        } catch (e) {
            return null;
        }
    }

    // Heavy mechanical case unlock clunk
    playUnlock() {
        try {
            this.init();
            if (this.muted || !this.ctx) return;
            const now = this.ctx.currentTime + 0.02;
            const out = this.getGain(0.9);
            if (!out) return;

            // Sub bass thump
            const osc = this.ctx.createOscillator();
            const oscGain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(140, now);
            osc.frequency.exponentialRampToValueAtTime(30, now + 0.18);
            oscGain.gain.setValueAtTime(0.8, now);
            oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
            osc.connect(oscGain);
            oscGain.connect(out);
            osc.start(now);
            osc.stop(now + 0.25);

            // Metallic click / latch spring
            const buffer = this.ctx.createBuffer(1, Math.floor(this.ctx.sampleRate * 0.08), this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < data.length; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.015));
            }
            const click = this.ctx.createBufferSource();
            click.buffer = buffer;

            const filter = this.ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(1800, now);
            filter.Q.setValueAtTime(4.0, now);

            click.connect(filter);
            filter.connect(out);
            click.start(now + 0.03);
        } catch (err) {
            console.warn('playUnlock error:', err);
        }
    }

    // Iconic CS:GO Tick sound
    playTick() {
        try {
            this.init();
            if (this.muted || !this.ctx) return;
            const now = this.ctx.currentTime + 0.01;
            const out = this.getGain(0.65);
            if (!out) return;

            // Click impulse
            const buffer = this.ctx.createBuffer(1, Math.floor(this.ctx.sampleRate * 0.025), this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < data.length; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.003));
            }
            const source = this.ctx.createBufferSource();
            source.buffer = buffer;

            // Bandpass filter with randomized pitch variation (+/- 6%)
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'bandpass';
            const baseFreq = 2600 + (Math.random() - 0.5) * 300;
            filter.frequency.setValueAtTime(baseFreq, now);
            filter.Q.setValueAtTime(8.0, now);

            // Subtle wooden/metallic tone under the click
            const tone = this.ctx.createOscillator();
            const toneGain = this.ctx.createGain();
            tone.type = 'sine';
            tone.frequency.setValueAtTime(baseFreq * 0.5, now);
            toneGain.gain.setValueAtTime(0.3, now);
            toneGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

            source.connect(filter);
            filter.connect(out);
            tone.connect(toneGain);
            toneGain.connect(out);

            source.start(now);
            tone.start(now);
            tone.stop(now + 0.025);
        } catch (err) {
            // Silently suppress tick sound errors during rapid spins
        }
    }

    // Play reveal fanfare according to tier
    playReveal(tierId) {
        try {
            this.init();
            if (this.muted || !this.ctx) return;
            // Always schedule with a tiny safe buffer (+50ms) to ensure all ramps are in the future
            const now = this.ctx.currentTime + 0.05;
            const tier = (tierId || 'common').toLowerCase();

            switch (tier) {
                case 'common':
                    this.playCommonFanfare(now);
                    break;
                case 'rare':
                case 'standard':
                    this.playRareFanfare(now);
                    break;
                case 'epic':
                case 'heritage':
                    this.playEpicFanfare(now);
                    break;
                case 'legendary':
                    this.playLegendaryFanfare(now);
                    break;
                case 'ultimate':
                    this.playUltimateFanfare(now);
                    break;
                case 'mythic':
                    this.playMythicFanfare(now);
                    break;
                case 'transcendent':
                    this.playTranscendentFanfare(now);
                    break;
                default:
                    this.playCommonFanfare(now);
                    break;
            }
        } catch (err) {
            console.warn('Audio reveal error:', err);
        }
    }

    // Common (1 Gold / Standard): Uplifting victory flourish
    playCommonFanfare(now) {
        try {
            const out = this.getGain(0.85);
            if (!out) return;

            // Warm chord progression: C5 -> E5 -> G5 -> C6
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((freq, i) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = i === 3 ? 'triangle' : 'sine';
                const startTime = now + i * 0.09;
                osc.frequency.setValueAtTime(freq, startTime);
                gain.gain.setValueAtTime(0.45, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.5);
                osc.connect(gain);
                gain.connect(out);
                osc.start(startTime);
                osc.stop(startTime + 0.55);
            });

            // Gentle sparkle chime
            const chime = this.ctx.createOscillator();
            const chimeGain = this.ctx.createGain();
            chime.type = 'sine';
            chime.frequency.setValueAtTime(1567.98, now + 0.28); // G6
            chimeGain.gain.setValueAtTime(0.25, now + 0.28);
            chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
            chime.connect(chimeGain);
            chimeGain.connect(out);
            chime.start(now + 0.28);
            chime.stop(now + 0.95);
        } catch (e) {
            console.warn('playCommonFanfare error:', e);
        }
    }

    // Rare (2 Gold / Standard Class): Brighter brassy fanfare
    playRareFanfare(now) {
        try {
            const out = this.getGain(0.9);
            if (!out) return;

            // Triumphant rising arpeggio: D4 -> F#4 -> A4 -> D5 -> F#5
            const notes = [293.66, 369.99, 440.00, 587.33, 739.99];
            notes.forEach((freq, i) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = i % 2 === 0 ? 'triangle' : 'sawtooth';
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(2200, now);

                const startTime = now + i * 0.08;
                osc.frequency.setValueAtTime(freq, startTime);
                gain.gain.setValueAtTime(0.35, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.7);
                osc.connect(filter);
                filter.connect(gain);
                gain.connect(out);
                osc.start(startTime);
                osc.stop(startTime + 0.75);
            });

            // High shimmer bell
            [1174.66, 1479.98].forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                const startTime = now + 0.35 + idx * 0.1;
                osc.frequency.setValueAtTime(freq, startTime);
                gain.gain.setValueAtTime(0.3, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.8);
                osc.connect(gain);
                gain.connect(out);
                osc.start(startTime);
                osc.stop(startTime + 0.85);
            });
        } catch (e) {
            console.warn('playRareFanfare error:', e);
        }
    }

    // Epic (3 Gold): Heroic fanfare with rich brass and sparkling bells
    playEpicFanfare(now) {
        try {
            const out = this.getGain(0.95);
            if (!out) return;

            // Low brass power punch: A2 + E3
            [110, 164.81].forEach(freq => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now);
                gain.gain.setValueAtTime(0.5, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
                osc.connect(gain);
                gain.connect(out);
                osc.start(now);
                osc.stop(now + 0.85);
            });

            // Major fanfare chord: A4 -> C#5 -> E5 -> A5
            const chord = [440, 554.37, 659.25, 880];
            chord.forEach((freq, i) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = i % 2 === 0 ? 'sawtooth' : 'triangle';
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(1800, now);
                filter.frequency.exponentialRampToValueAtTime(800, now + 1.1);

                const startTime = now + i * 0.07;
                osc.frequency.setValueAtTime(freq, startTime);
                gain.gain.setValueAtTime(0.4, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 1.1);
                osc.connect(filter);
                filter.connect(gain);
                gain.connect(out);
                osc.start(startTime);
                osc.stop(startTime + 1.15);
            });

            // High sparkling bells
            [1318.51, 1760.00].forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                const t = now + 0.35 + idx * 0.12;
                osc.frequency.setValueAtTime(freq, t);
                gain.gain.setValueAtTime(0.3, t);
                gain.gain.exponentialRampToValueAtTime(0.001, t + 0.9);
                osc.connect(gain);
                gain.connect(out);
                osc.start(t);
                osc.stop(t + 0.95);
            });
        } catch (e) {
            console.warn('playEpicFanfare error:', e);
        }
    }

    // Legendary (4 Gold): Majestic royal fanfare with horns and glockenspiel
    playLegendaryFanfare(now) {
        try {
            const out = this.getGain(1.0);
            if (!out) return;

            // Sub bass boom impact
            const boom = this.ctx.createOscillator();
            const boomGain = this.ctx.createGain();
            boom.type = 'triangle';
            boom.frequency.setValueAtTime(120, now);
            boom.frequency.exponentialRampToValueAtTime(35, now + 0.3);
            boomGain.gain.setValueAtTime(0.85, now);
            boomGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
            boom.connect(boomGain);
            boomGain.connect(out);
            boom.start(now);
            boom.stop(now + 0.65);

            // Brass punch: D3, A3, D4, F#4
            [146.83, 220.00, 293.66, 369.99].forEach((freq) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const filter = this.ctx.createBiquadFilter();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freq, now);
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(1400, now);
                filter.frequency.exponentialRampToValueAtTime(450, now + 1.0);
                gain.gain.setValueAtTime(0.35, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);
                osc.connect(filter);
                filter.connect(gain);
                gain.connect(out);
                osc.start(now);
                osc.stop(now + 1.45);
            });

            // High flourish arpeggio (Glockenspiel)
            [587.33, 739.99, 880.00, 1174.66, 1479.98].forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                const t = now + 0.12 + idx * 0.08;
                osc.frequency.setValueAtTime(freq, t);
                gain.gain.setValueAtTime(0.4, t);
                gain.gain.exponentialRampToValueAtTime(0.001, t + 1.2);
                osc.connect(gain);
                gain.connect(out);
                osc.start(t);
                osc.stop(t + 1.25);
            });
        } catch (e) {
            console.warn('playLegendaryFanfare error:', e);
        }
    }

    // Ultimate (5 Gold): Dramatic jackpot fanfare with orchestral horns & fireworks bells
    playUltimateFanfare(now) {
        try {
            const out = this.getGain(1.0);
            if (!out) return;

            // Dramatic timpani boom
            const boom = this.ctx.createOscillator();
            const boomGain = this.ctx.createGain();
            boom.type = 'triangle';
            boom.frequency.setValueAtTime(110, now);
            boom.frequency.exponentialRampToValueAtTime(40, now + 0.35);
            boomGain.gain.setValueAtTime(0.9, now);
            boomGain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
            boom.connect(boomGain);
            boomGain.connect(out);
            boom.start(now);
            boom.stop(now + 0.95);

            // CS:GO Covert arpeggio fanfare
            const arp = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98, 2093.00];
            arp.forEach((freq, i) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sawtooth';
                const filter = this.ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(2500, now);

                const startT = now + 0.07 * i;
                osc.frequency.setValueAtTime(freq, startT);
                gain.gain.setValueAtTime(0.35, startT);
                gain.gain.exponentialRampToValueAtTime(0.001, startT + 1.4);

                osc.connect(filter);
                filter.connect(gain);
                gain.connect(out);

                osc.start(startT);
                osc.stop(startT + 1.45);
            });

            // Resonant victory bells chord
            [1046.50, 1318.51, 1567.98].forEach((freq, ci) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                const startT = now + 0.55;
                osc.frequency.setValueAtTime(freq, startT);
                gain.gain.setValueAtTime(0.35, startT);
                gain.gain.exponentialRampToValueAtTime(0.001, startT + 1.8);
                osc.connect(gain);
                gain.connect(out);
                osc.start(startT);
                osc.stop(startT + 1.85);
            });
        } catch (e) {
            console.warn('playUltimateFanfare error:', e);
        }
    }

    // Mythic: Golden shimmering celestial bells & spark sweep
    playMythicFanfare(now) {
        try {
            const out = this.getGain(1.0);
            if (!out) return;

            // Golden shimmering chord progressions
            const chords = [
                [587.33, 739.99, 880.00], // D F# A
                [659.25, 830.61, 987.77], // E G# B
                [880.00, 1108.73, 1318.51] // A C# E
            ];

            chords.forEach((chord, ci) => {
                const cTime = now + ci * 0.18;
                chord.forEach((freq) => {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, cTime);
                    gain.gain.setValueAtTime(0.35, cTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, cTime + 1.5);
                    osc.connect(gain);
                    gain.connect(out);
                    osc.start(cTime);
                    osc.stop(cTime + 1.6);
                });
            });

            // Golden spark noise sweep
            const buffer = this.ctx.createBuffer(1, Math.floor(this.ctx.sampleRate * 0.6), this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < data.length; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.sin((i / data.length) * Math.PI);
            }
            const noise = this.ctx.createBufferSource();
            noise.buffer = buffer;
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(4000, now);
            filter.frequency.linearRampToValueAtTime(8000, now + 0.6);
            filter.Q.setValueAtTime(3.0, now);

            const nGain = this.ctx.createGain();
            nGain.gain.setValueAtTime(0.25, now);
            nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

            noise.connect(filter);
            filter.connect(nGain);
            nGain.connect(out);
            noise.start(now);
        } catch (e) {
            console.warn('playMythicFanfare error:', e);
        }
    }

    // Transcendent: Sub universe rumble & celestial harmonic choir
    playTranscendentFanfare(now) {
        try {
            const out = this.getGain(1.0);
            if (!out) return;

            // Sub deep universe rumble
            const sub = this.ctx.createOscillator();
            const subGain = this.ctx.createGain();
            sub.type = 'sine';
            sub.frequency.setValueAtTime(65.41, now); // C2
            sub.frequency.exponentialRampToValueAtTime(32.7, now + 2.0);
            subGain.gain.setValueAtTime(0.9, now);
            subGain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);
            sub.connect(subGain);
            subGain.connect(out);
            sub.start(now);
            sub.stop(now + 2.3);

            // Cosmic glass choir / harmonic bells
            const freqs = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98, 2093.00];
            freqs.forEach((freq, i) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                const startTime = now + i * 0.09;
                osc.frequency.setValueAtTime(freq, startTime);
                gain.gain.setValueAtTime(0.3, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 2.5);

                osc.connect(gain);
                gain.connect(out);

                osc.start(startTime);
                osc.stop(startTime + 2.6);
            });
        } catch (e) {
            console.warn('playTranscendentFanfare error:', e);
        }
    }
}

window.soundEngine = new SoundEngine();

// Auto-unlock Web Audio on first user interaction anywhere on the page
if (typeof document !== 'undefined') {
    ['pointerdown', 'keydown', 'click'].forEach(evtType => {
        document.addEventListener(evtType, () => {
            if (window.soundEngine) {
                window.soundEngine.init();
            }
        }, { once: false, passive: true });
    });
}
