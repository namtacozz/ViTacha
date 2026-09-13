// ViTacha - TFT Set 18 Data
// Auto-generated from OP.GG & MetaTFT

const CHAMPION_RARITIES = {
  "1": {
    "id": "common",
    "name": "Common",
    "nameVi": "Thông Thường",
    "color": "#9AA4AF",
    "cost": 1,
    "weight": 50.0
  },
  "2": {
    "id": "rare",
    "name": "Rare",
    "nameVi": "Hiếm",
    "color": "#00AE0A",
    "cost": 2,
    "weight": 28.0
  },
  "3": {
    "id": "epic",
    "name": "Epic",
    "nameVi": "Sử Thi",
    "color": "#0093FF",
    "cost": 3,
    "weight": 14.0
  },
  "4": {
    "id": "legendary",
    "name": "Legendary",
    "nameVi": "Huyền Thoại",
    "color": "#E537A2",
    "cost": 4,
    "weight": 6.5
  },
  "5": {
    "id": "ultimate",
    "name": "Ultimate",
    "nameVi": "Tối Thượng",
    "color": "#EB9C00",
    "cost": 5,
    "weight": 1.5
  }
};

const ORIGIN_RARITIES = {
  "common": {
    "id": "common",
    "name": "Common",
    "nameVi": "Thông Thường",
    "color": "#9AA4AF",
    "weight": 35.0
  },
  "rare": {
    "id": "rare",
    "name": "Rare",
    "nameVi": "Hiếm",
    "color": "#00AE0A",
    "weight": 26.0
  },
  "epic": {
    "id": "epic",
    "name": "Epic",
    "nameVi": "Sử Thi",
    "color": "#0093FF",
    "weight": 18.0
  },
  "heritage": {
    "id": "heritage",
    "name": "Heritage",
    "nameVi": "Di Sản",
    "color": "#00D2D2",
    "weight": 10.0
  },
  "legendary": {
    "id": "legendary",
    "name": "Legendary",
    "nameVi": "Huyền Thoại",
    "color": "#E537A2",
    "weight": 6.0
  },
  "ultimate": {
    "id": "ultimate",
    "name": "Ultimate",
    "nameVi": "Tối Thượng",
    "color": "#EB9C00",
    "weight": 3.3
  },
  "mythic": {
    "id": "mythic",
    "name": "Mythic",
    "nameVi": "Thần Thoại",
    "color": "#FF4B93",
    "weight": 1.5
  },
  "transcendent": {
    "id": "transcendent",
    "name": "Transcendent",
    "nameVi": "Vô Thượng",
    "color": "#ffffff",
    "weight": 0.2
  }
};

const CLASS_RARITY = {
  "id": "standard",
  "name": "Standard",
  "nameVi": "Đồng Hạng",
  "color": "#5383E8",
  "weight": 8.333333333333334
};

const CHAMPIONS = [
  {
    "id": "akali",
    "name": "Akali",
    "cost": 1,
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "cost": 1,
      "weight": 50.0
    },
    "origins": [
      "Hỏa Ngục"
    ],
    "classes": [
      "Thích Ứng",
      "Tàn Phá"
    ],
    "image": "Champions/Cost_1/T_18_Akali_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Akali.jpg",
    "abilityName": "Phi Đao Song Kích",
    "abilityDesc": "Thích Ứng : Phóng một loạt phi đao vào mục tiêu, gây 155 / 235 / 370 sát thương vật lý. Nếu mục tiêu đang bị Thiêu Đốt, gây thêm 35 / 52 / 80 sát thương.<br><br>Thích Ứng : Nếu Kỹ Năng kết liễu mục tiêu, thi triển thêm lần nữa.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Akali.webp",
    "mana": 30,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "camille",
    "name": "Camille",
    "cost": 1,
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "cost": 1,
      "weight": 50.0
    },
    "origins": [
      "Tiên Hắc Ám"
    ],
    "classes": [
      "Tàn Phá"
    ],
    "image": "Champions/Cost_1/T_18_Camille_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Camille.jpg",
    "abilityName": "Đá Quét Phòng Ngự",
    "abilityDesc": "Chém mục tiêu gây 170 / 255 / 435 sát thương vật lý và nhận 60 / 90 / 200 Lá Chắn trong 2 giây.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Camille.webp",
    "mana": 25,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "cinderling",
    "name": "Cinderling",
    "cost": 1,
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "cost": 1,
      "weight": 50.0
    },
    "origins": [
      "Quái Rừng"
    ],
    "classes": [
      "Thợ Săn"
    ],
    "image": "Champions/Cost_1/T_18_Cinderling_PCHighres.webp",
    "tileIcon": "Champions/Cost_1/T_18_Cinderling_PCHighres.webp",
    "abilityName": "Kỹ Năng",
    "abilityDesc": "",
    "abilityIcon": "",
    "mana": 0,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "karma",
    "name": "Karma",
    "cost": 1,
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "cost": 1,
      "weight": 50.0
    },
    "origins": [
      "Hoa Linh"
    ],
    "classes": [
      "Thuật Sư"
    ],
    "image": "Champions/Cost_1/T_18_Karma_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Karma.jpg",
    "abilityName": "Liên Kết Nghiệp Duyên",
    "abilityDesc": "Nối liên kết với mục tiêu hiện tại, gây 280 / 420 / 630 sát thương phép trong 1.5 giây. Rồi giải phóng một luồng sức mạnh xung quanh kẻ đó, gây 120 / 180 / 270 sát thương phép lên tất cả kẻ địch trong phạm vi 1 Ô và Làm Chậm chúng đi 30% trong 2 giây.<br><br>Làm Chậm: Giảm Tốc Độ Đánh",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Karma.webp",
    "mana": 40,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "kobuko",
    "name": "Kobuko",
    "cost": 1,
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "cost": 1,
      "weight": 50.0
    },
    "origins": [
      "Tinh Nghịch"
    ],
    "classes": [
      "Đấu Sĩ"
    ],
    "image": "Champions/Cost_1/T_18_Kobuko_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Kobuko.jpg",
    "abilityName": "Vũ Điệu Đời Thường",
    "abilityDesc": "Hồi lại 314 / 364 / 509 Máu trong vòng 2 giây. Đòn đánh tiếp theo được thay thế bằng một cú nện gây 140 / 175 / 220 sát thương phép.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Kobuko.webp",
    "mana": 90,
    "initialMana": 30,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "leona",
    "name": "Leona",
    "cost": 1,
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "cost": 1,
      "weight": 50.0
    },
    "origins": [
      "Mặt Trời"
    ],
    "classes": [
      "Vệ Quân"
    ],
    "image": "Champions/Cost_1/T_18_Leona_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Leona.jpg",
    "abilityName": "Nện Khiên",
    "abilityDesc": "Nội Tại: Bắt đầu giao tranh với 60 / 70 / 80 Giáp và Kháng Phép cộng thêm, giảm dần trong 12 giây.<br><br>Kích Hoạt: Đập vào mục tiêu hiện tại, gây 60 / 108 / 162 sát thương phép và Làm Choáng chúng trong 1.5 giây.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Leona.webp",
    "mana": 100,
    "initialMana": 40,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "ornn",
    "name": "Ornn",
    "cost": 1,
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "cost": 1,
      "weight": 50.0
    },
    "origins": [
      "Thần Rừng"
    ],
    "classes": [
      "Vệ Quân"
    ],
    "image": "Champions/Cost_1/T_18_Ornn_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Ornn.jpg",
    "abilityName": "Thổi Bễ",
    "abilityDesc": "Kích Hoạt: Nhận 400 / 460 / 550 Lá Chắn trong 4 giây và gây 200 / 300 / 450 sát thương phép lên kẻ địch trong phạm vi hình nón.<br><br>Nhiệm Vụ: Mỗi giao tranh người chơi, Ornn tích trữ sát thương đã chặn thành Sức Mạnh Lò Rèn, nhân đôi ở mốc 3 sao. Nhận 1 Gói Trang Bị Tạo Tác mỗi khi ông nhận đủ Sức Mạnh Lò Rèn. (Sức Mạnh Lò Rèn:  / )",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Ornn.webp",
    "mana": 100,
    "initialMana": 40,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "pebbles",
    "name": "Pebbles",
    "cost": 1,
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "cost": 1,
      "weight": 50.0
    },
    "origins": [
      "Quái Rừng"
    ],
    "classes": [
      "Thuật Sĩ"
    ],
    "image": "Champions/Cost_1/T_18_Sentry_PCHighres.webp",
    "tileIcon": "Champions/Cost_1/T_18_Sentry_PCHighres.webp",
    "abilityName": "Kỹ Năng",
    "abilityDesc": "",
    "abilityIcon": "",
    "mana": 0,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "rakan",
    "name": "Rakan",
    "cost": 1,
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "cost": 1,
      "weight": 50.0
    },
    "origins": [
      "Tiên Linh"
    ],
    "classes": [
      "Dũng Sĩ",
      "Tiên Phong"
    ],
    "image": "Champions/Cost_1/T_18_Rakan_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Rakan.jpg",
    "abilityName": "Điệu Vũ Mê Hồn",
    "abilityDesc": "Nhận 270 / 320 / 415 Lá Chắn trong 4 giây. Sau đó, ban cho đồng minh đã gây nhiều sát thương nhất trong giao tranh này 1.9 / 2 / 2.3 Tốc Độ Đánh giảm dần trong 4 giây.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Rakan.webp",
    "mana": 105,
    "initialMana": 35,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "reksai",
    "name": "Rek'Sai",
    "cost": 1,
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "cost": 1,
      "weight": 50.0
    },
    "origins": [
      "Gai Đen"
    ],
    "classes": [
      "Đấu Sĩ"
    ],
    "image": "Champions/Cost_1/T_18_Reksai_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/RekSai.jpg",
    "abilityName": "Nhổ Rễ",
    "abilityDesc": "Nội Tại: Hồi 17 / 21 / 27 Máu mỗi giây, tăng gấp ba trong 3 giây sau khi tung chiêu.<br><br>Kích Hoạt: Lao lên từ mặt đất, Làm Choáng những kẻ địch liền kề trong 1 giây và gây 70 / 105 / 160 sát thương phép lên chúng.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/RekSai.webp",
    "mana": 100,
    "initialMana": 40,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "varus",
    "name": "Varus",
    "cost": 1,
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "cost": 1,
      "weight": 50.0
    },
    "origins": [
      "Hỏa Ngục"
    ],
    "classes": [
      "Liên Kích"
    ],
    "image": "Champions/Cost_1/T_18_Varus_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Varus.jpg",
    "abilityName": "Mũi Tên Xuyên Phá",
    "abilityDesc": "Vận sức, sau đó bắn một mũi tên theo đường thẳng có nhiều kẻ địch nhất xuyên qua mục tiêu. Nó gây 415 / 625 / 995 sát thương vật lý lên các kẻ địch trúng đòn, giảm đi 40% với mỗi kẻ địch nó đi qua (tối thiểu 40%).",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Varus.webp",
    "mana": 120,
    "initialMana": 30,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "veigar",
    "name": "Veigar",
    "cost": 1,
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "cost": 1,
      "weight": 50.0
    },
    "origins": [
      "Gai Đen",
      "Tinh Nghịch"
    ],
    "classes": [
      "Thuật Sư"
    ],
    "image": "Champions/Cost_1/T_18_Veigar_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Veigar.jpg",
    "abilityName": "Vụ Nổ Vũ Trụ",
    "abilityDesc": "Phóng ra một luồng năng lượng khổng lồ vào mục tiêu, gây 175 / 265 / 395 sát thương phép, tăng thành 265 / 400 / 595 nếu mục tiêu còn dưới 30% Máu tối đa.<br><br>Nếu mục tiêu bị hạ gục, nhận vĩnh viễn 1.5% Sức Mạnh Phép Thuật.<br><br>Thưởng hiện tại: %",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Veigar.webp",
    "mana": 30,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "xayah",
    "name": "Xayah",
    "cost": 1,
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "cost": 1,
      "weight": 50.0
    },
    "origins": [
      "Thần Rừng",
      "Tiên Linh"
    ],
    "classes": [
      "Liên Kích"
    ],
    "image": "Champions/Cost_1/T_18_Xayah_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Xayah.jpg",
    "abilityName": "Bộ Cánh Chết Người",
    "abilityDesc": "Nhận 50% Tốc Độ Đánh trong 5 đòn đánh tiếp theo. Những đòn đánh này được thay thế bằng các lông vũ gây 72 / 108 / 165 sát thương vật lý và giảm Giáp đi 2 / 2 / 2.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Xayah.webp",
    "mana": 50,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "yorick",
    "name": "Yorick",
    "cost": 1,
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "cost": 1,
      "weight": 50.0
    },
    "origins": [
      "Hoa Linh"
    ],
    "classes": [
      "Dũng Sĩ",
      "Triệu Hồi"
    ],
    "image": "Champions/Cost_1/T_18_Yorick_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Yorick.jpg",
    "abilityName": "Tử Lễ",
    "abilityDesc": "Nội Tại: Khi bị hạ gục, sinh ra 1 Lữ Khách với 330 / 530 / 880 Máu tối đa, lập tức khiêu khích và buộc kẻ địch phải tấn công nó.<br><br>Kích Hoạt: Hồi lại 280 / 325 / 435 Máu và ra đòn lên mục tiêu, gây 150 / 225 / 340 sát thương vật lý.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Yorick.webp",
    "mana": 110,
    "initialMana": 50,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "alistar",
    "name": "Alistar",
    "cost": 2,
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "cost": 2,
      "weight": 28.0
    },
    "origins": [
      "Thần Rừng"
    ],
    "classes": [
      "Đấu Sĩ"
    ],
    "image": "Champions/Cost_2/T_18_Alistar_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Alistar.jpg",
    "abilityName": "Tiếng Gầm Chiến Thắng",
    "abilityDesc": "Gầm thét, hồi lại 276 / 336 / 396 Máu, loại bỏ hiệu ứng khống chế, và hồi máu cho hai đồng minh có phần trăm Máu thấp nhất với 80 / 105 / 130. Sau đó nện vào mục tiêu hiện tại, gây 100 / 150 / 225 sát thương phép và làm choáng chúng trong 1.5 giây.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Alistar.webp",
    "mana": 90,
    "initialMana": 30,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "caitlyn",
    "name": "Caitlyn",
    "cost": 2,
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "cost": 2,
      "weight": 28.0
    },
    "origins": [
      "Tiên Hắc Ám"
    ],
    "classes": [
      "Thợ Săn"
    ],
    "image": "Champions/Cost_2/T_18_Caitlyn_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Caitlyn.jpg",
    "abilityName": "Thiện Xạ",
    "abilityDesc": "Nội Tại: Mỗi đòn đánh thứ ba được thay thế bằng phát bắn Thiện Xạ gây 220 / 330 / 545 sát thương vật lý.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Caitlyn.webp",
    "mana": 3,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "elise",
    "name": "Elise",
    "cost": 2,
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "cost": 2,
      "weight": 28.0
    },
    "origins": [
      "Tiên Hắc Ám"
    ],
    "classes": [
      "Tiên Phong"
    ],
    "image": "Champions/Cost_2/T_18_Elise_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Elise.jpg",
    "abilityName": "Nữ Hoàng Nhền Nhện",
    "abilityDesc": "Hóa thành nhện và nhận 375 / 475 / 725 Máu tối đa. Đòn đánh trong dạng nhện gây 35 / 50 / 80 sát thương phép cộng thêm và hồi 55 / 90 / 170 máu. Các lần tung chiêu tiếp theo nhận 175% Tốc Độ Đánh giảm dần trong 4 giây.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Elise.webp",
    "mana": 70,
    "initialMana": 20,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "gromp",
    "name": "Gromp",
    "cost": 2,
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "cost": 2,
      "weight": 28.0
    },
    "origins": [
      "Quái Rừng"
    ],
    "classes": [
      "Thích Ứng"
    ],
    "image": "Champions/Cost_2/T_18_Gromp_PCHighres.webp",
    "tileIcon": "Champions/Cost_2/T_18_Gromp_PCHighres.webp",
    "abilityName": "Kỹ Năng",
    "abilityDesc": "",
    "abilityIcon": "",
    "mana": 0,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "kayle",
    "name": "Kayle",
    "cost": 2,
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "cost": 2,
      "weight": 28.0
    },
    "origins": [
      "Mặt Trời"
    ],
    "classes": [
      "Liên Kích"
    ],
    "image": "Champions/Cost_2/T_18_Kayle_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Kayle.jpg",
    "abilityName": "Phán Quyết Mặt Trời",
    "abilityDesc": "Nội Tại: Kayle thăng hoa dựa trên cấp sao của mình, cho cô các hiệu ứng thưởng cộng dồn.<br><br>Thăng Hoa 1: Đòn đánh gây 56 / 84 / 98 sát thương phép cộng thêm.<br>Thăng Hoa 2: Đòn đánh gây Cào Xé 20% lên kẻ địch trong 2 giây.<br>Thăng Hoa 3: Đòn đánh phóng ra sóng năng lượng, gây 40 / 40 / 40 sát thương phép lên tất cả các đơn vị khác trúng đòn.<br>Thăng Hoa 4: Nhận tầm đánh vô hạn. Mỗi đợt sóng thứ 3 sẽ lớn hơn nhiều.<br><br>Cào Xé: Giảm Kháng Phép",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Kayle.webp",
    "mana": 0,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "leblanc",
    "name": "LeBlanc",
    "cost": 2,
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "cost": 2,
      "weight": 28.0
    },
    "origins": [
      "Thần Rừng"
    ],
    "classes": [
      "Thuật Sư"
    ],
    "image": "Champions/Cost_2/T_18_Leblanc_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/LeBlanc.jpg",
    "abilityName": "Ảo Ảnh",
    "abilityDesc": "Nội Tại: Sau giao tranh người chơi, LeBlanc mạnh nhất của bạn có 10% / 15% / 40% cơ hội tạo ra 1 bản sao của 1 đồng minh trên bàn của bạn, tăng thêm 4% cho mỗi lần tham gia hạ gục.<br><br>Kích Hoạt: Phóng 1 ảo ảnh vào mục tiêu hiện tại, gây 250 / 375 / 565 sát thương phép và 85 / 130 / 190 sát thương lên những kẻ địch liền kề.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/LeBlanc.webp",
    "mana": 40,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "murkwolf",
    "name": "Murkwolf",
    "cost": 2,
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "cost": 2,
      "weight": 28.0
    },
    "origins": [
      "Quái Rừng"
    ],
    "classes": [
      "Tàn Phá"
    ],
    "image": "Champions/Cost_2/T_18_MurkWolf_PCHighres.webp",
    "tileIcon": "Champions/Cost_2/T_18_MurkWolf_PCHighres.webp",
    "abilityName": "Kỹ Năng",
    "abilityDesc": "",
    "abilityIcon": "",
    "mana": 0,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "scuttlecrab",
    "name": "Scuttlecrab",
    "cost": 2,
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "cost": 2,
      "weight": 28.0
    },
    "origins": [
      "Quái Rừng"
    ],
    "classes": [
      "Dũng Sĩ"
    ],
    "image": "Champions/Cost_2/T_18_Scuttlecrab_PCHighres.webp",
    "tileIcon": "Champions/Cost_2/T_18_Scuttlecrab_PCHighres.webp",
    "abilityName": "Kỹ Năng",
    "abilityDesc": "",
    "abilityIcon": "",
    "mana": 0,
    "initialMana": 0,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "sejuani",
    "name": "Sejuani",
    "cost": 2,
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "cost": 2,
      "weight": 28.0
    },
    "origins": [
      "Mặt Trời"
    ],
    "classes": [
      "Dũng Sĩ"
    ],
    "image": "Champions/Cost_2/T_18_Sejuani_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Sejuani.jpg",
    "abilityName": "Mặt Trời Thịnh Nộ",
    "abilityDesc": "Nhận 315 / 340 / 365 Lá Chắn trong 4 giây Sau đó, quét theo hình nón gây 90 / 135 / 205 sát thương phép và tấn công theo một đường thẳng, gây 120 / 180 / 270 sát thương phép lên những kẻ địch trúng chiêu.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Sejuani.webp",
    "mana": 100,
    "initialMana": 40,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "shen",
    "name": "Shen",
    "cost": 2,
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "cost": 2,
      "weight": 28.0
    },
    "origins": [
      "Hỏa Ngục"
    ],
    "classes": [
      "Vệ Quân"
    ],
    "image": "Champions/Cost_2/T_18_Shen_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Shen.jpg",
    "abilityName": "Lá Chắn Kiếm Khí",
    "abilityDesc": "Trao 325 / 400 / 500 Lá Chắn cho Shen và 200 / 275 / 375 Lá Chắn cho 1 đồng minh đã chịu sát thương gần đó trong 4 giây. 3 đòn đánh tiếp theo của cả hai được tăng 40% Tốc Độ Đánh và gây 35 / 55 / 80 sát thương phép cộng thêm.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Shen.webp",
    "mana": 90,
    "initialMana": 30,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "teemo",
    "name": "Teemo",
    "cost": 2,
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "cost": 2,
      "weight": 28.0
    },
    "origins": [
      "Tinh Nghịch"
    ],
    "classes": [
      "Thuật Sĩ"
    ],
    "image": "Champions/Cost_2/T_18_Teemo_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Teemo.jpg",
    "abilityName": "Nấm Nhỏ Nấm To",
    "abilityDesc": "Ném 2 cụm nấm gây 60 / 90 / 135 sát thương phép lên 3 kẻ địch gần nhất. Sau đó ném 1 cây nấm khổng lồ gây 135 / 200 / 310 sát thương phép lên mục tiêu.<br><br>Mỗi lần thi triển có 10% / 12% / 15% cơ hội tìm thêm một cây nấm có thể thu thập để nhận hiệu ứng thưởng.<br><br>Đỏ: 1 Lượt Đổi (Nấm Đỏ Đã Nhận: )<br>Xanh Lá: 1 Máu Linh Thú (Nấm Xanh Lá Đã Nhận: )<br>Vàng: 2 XP (Nấm Vàng Đã Nhận: )",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Teemo.webp",
    "mana": 50,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "warwick",
    "name": "Warwick",
    "cost": 2,
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "cost": 2,
      "weight": 28.0
    },
    "origins": [
      "Gai Đen"
    ],
    "classes": [
      "Tàn Phá"
    ],
    "image": "Champions/Cost_2/T_18_Warwick_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Warwick.jpg",
    "abilityName": "Cắn Xé",
    "abilityDesc": "Cắn mục tiêu hiện tại, gây 200 / 300 / 450 sát thương vật lý và hồi máu bằng 0.2 / 0.2 / 0.2 lượng sát thương gây ra. Nhận 20% Tốc Độ Đánh cho đến hết giao tranh.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Warwick.webp",
    "mana": 40,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "yunara",
    "name": "Yunara",
    "cost": 2,
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "cost": 2,
      "weight": 28.0
    },
    "origins": [
      "Hoa Linh"
    ],
    "classes": [
      "Đao Phủ"
    ],
    "image": "Champions/Cost_2/T_18_Yunara_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Yunara.jpg",
    "abilityName": "Kết Linh Thành Châu",
    "abilityDesc": "Lướt và phóng một quả cầu vào mục tiêu hiện tại, gây 165 / 245 / 375 sát thương vật lý và tách ra, gây 57.75 / 85.75 / 131.25 sát thương vật lý lên 2 kẻ địch ở gần.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Yunara.webp",
    "mana": 35,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "azir",
    "name": "Azir",
    "cost": 3,
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "cost": 3,
      "weight": 14.0
    },
    "origins": [
      "Gai Đen"
    ],
    "classes": [
      "Đao Phủ",
      "Triệu Hồi"
    ],
    "image": "Champions/Cost_3/T_18_Azir_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Azir.jpg",
    "abilityName": "Trỗi Dậy!",
    "abilityDesc": "Nhận 150% Tốc Độ Đánh và triệu hồi 2 lính cát trong 6 đòn đánh tiếp theo. Những đòn đánh này được thay thế bằng các lệnh chỉ huy mỗi lính cát gây 46 / 69 / 110 sát thương phép mỗi đòn đánh.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Azir.webp",
    "mana": 35,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "cassiopeia",
    "name": "Cassiopeia",
    "cost": 3,
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "cost": 3,
      "weight": 14.0
    },
    "origins": [
      "Tiên Hắc Ám"
    ],
    "classes": [
      "Thuật Sư"
    ],
    "image": "Champions/Cost_3/T_18_Cassiopeia_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Cassiopeia.jpg",
    "abilityName": "Vụ Nổ Độc Hại",
    "abilityDesc": "Hạ độc mục tiêu và kẻ địch gần nhất chưa trúng độc, gây 425 / 640 / 1020 sát thương phép trong 15 giây. Độc có thể cộng dồn.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Cassiopeia.webp",
    "mana": 30,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "diana",
    "name": "Diana",
    "cost": 3,
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "cost": 3,
      "weight": 14.0
    },
    "origins": [
      "Mặt Trăng"
    ],
    "classes": [
      "Tàn Phá",
      "Tiên Phong"
    ],
    "image": "Champions/Cost_3/T_18_Diana_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Diana.jpg",
    "abilityName": "Lá Chắn Nhợt Nhạt",
    "abilityDesc": "Nhận 150 / 225 / 300 lá chắn trong 2 giây và phóng ra 6 cầu ánh trăng tỏa ra kẻ địch trong phạm vi 2 ô, mỗi quả cầu gây 65 / 100 / 155 sát thương phép.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Diana.webp",
    "mana": 40,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "fiddlesticks",
    "name": "Fiddlesticks",
    "cost": 3,
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "cost": 3,
      "weight": 14.0
    },
    "origins": [
      "Thực Vật"
    ],
    "classes": [
      "Vệ Quân",
      "Thuật Sư"
    ],
    "image": "Champions/Cost_3/T_18_Fiddlesticks_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Fiddlesticks.jpg",
    "abilityName": "Thu Hoạch",
    "abilityDesc": "Giảm Kháng Phép của 3 kẻ địch gần nhất đi 10. Sau đó hút sinh lực từ chúng trong 2 giây, hồi phục 395 / 470 / 790 Máu và gây 70 / 105 / 170 sát thương phép lên mỗi mục tiêu trong suốt thời gian hiệu lực.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Fiddlesticks.webp",
    "mana": 90,
    "initialMana": 30,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "hecarim",
    "name": "Hecarim",
    "cost": 3,
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "cost": 3,
      "weight": 14.0
    },
    "origins": [
      "Thần Rừng"
    ],
    "classes": [
      "Tiên Phong"
    ],
    "image": "Champions/Cost_3/T_18_Hecarim_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Hecarim.jpg",
    "abilityName": "Nhiếp Hồn Trận",
    "abilityDesc": "Nhận 50 Giáp và Kháng Phép trong 3 giây và hồi lại 375 / 475 / 685 Máu trong thời gian hiệu lực. Phóng các bóng ma kị sĩ về phía 3 kẻ địch gần nhất, gây 80 / 120 / 195 sát thương phép và Làm Choáng chúng trong 1.5 / 1.75 / 3 giây.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Hecarim.webp",
    "mana": 110,
    "initialMana": 30,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "khazix",
    "name": "Kha'Zix",
    "cost": 3,
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "cost": 3,
      "weight": 14.0
    },
    "origins": [
      "Khắc Tinh"
    ],
    "classes": [],
    "image": "Champions/Cost_3/T_18_Khazix_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/KhaZix.jpg",
    "abilityName": "Nếm Mùi Sợ Hãi",
    "abilityDesc": "Leap to the farthest enemy within 2.7 Hexes, dealing 260 / 370 / 550 magic damage. If they have no adjacent allies, deal 310 / 445 / 660 magic damage instead and gain 10 mana.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/KhaZix.webp",
    "mana": 25,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "kogmaw",
    "name": "Kog'Maw",
    "cost": 3,
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "cost": 3,
      "weight": 14.0
    },
    "origins": [
      "Ăn Mòn"
    ],
    "classes": [
      "Thích Ứng",
      "Thuật Sĩ"
    ],
    "image": "Champions/Cost_3/T_18_KogMaw_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/KogMaw.jpg",
    "abilityName": "Đạn Pháo Oanh Tạc",
    "abilityDesc": "Thích Ứng : Phóng axit vào mục tiêu và kẻ địch gần nhất còn lại, gây 165 / 250 / 425 sát thương vật lý. Kẻ địch dưới 50% Máu tối đa sẽ nhận 231 / 350 / 595 sát thương vật lý.<br><br>Thích Ứng: Gây sát thương theo thời gian lên kẻ địch.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/KogMaw.webp",
    "mana": 55,
    "initialMana": 15,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "krug",
    "name": "Krug",
    "cost": 3,
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "cost": 3,
      "weight": 14.0
    },
    "origins": [
      "Quái Rừng"
    ],
    "classes": [
      "Đấu Sĩ"
    ],
    "image": "Champions/Cost_3/T_18_Krug_PCHighres.webp",
    "tileIcon": "Champions/Cost_3/T_18_Krug_PCHighres.webp",
    "abilityName": "Kỹ Năng",
    "abilityDesc": "",
    "abilityIcon": "",
    "mana": 0,
    "initialMana": 0,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "mama_beak",
    "name": "Mama Beak",
    "cost": 3,
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "cost": 3,
      "weight": 14.0
    },
    "origins": [
      "Quái Rừng"
    ],
    "classes": [
      "Triệu Hồi",
      "Liên Kích"
    ],
    "image": "Champions/Cost_3/T_18_CrimsonRaptor_PCHighres.webp",
    "tileIcon": "Champions/Cost_3/T_18_CrimsonRaptor_PCHighres.webp",
    "abilityName": "Kỹ Năng",
    "abilityDesc": "",
    "abilityIcon": "",
    "mana": 0,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "master_yi",
    "name": "Master Yi",
    "cost": 3,
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "cost": 3,
      "weight": 14.0
    },
    "origins": [
      "Hoa Linh"
    ],
    "classes": [
      "Thích Ứng"
    ],
    "image": "Champions/Cost_3/T_18_MasterYi_Highres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/MasterYi.jpg",
    "abilityName": "Võ Thuật Wuju",
    "abilityDesc": "Nội Tại: Mỗi đòn đánh thứ 3 là một cú Chém Đôi. Khi tham gia hạ gục, tăng mạnh tốc độ di chuyển trong thời gian ngắn.<br><br>Thích Ứng : Cú Chém Đôi cho 0.15 / 0.15 / 0.15 Tốc Độ Đánh cộng dồn.<br><br>Thích Ứng : Cú Chém Đôi gây sát thương cộng thêm và hồi máu.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/MasterYi.webp",
    "mana": 3,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "rammus",
    "name": "Rammus",
    "cost": 3,
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "cost": 3,
      "weight": 14.0
    },
    "origins": [
      "Tinh Nghịch"
    ],
    "classes": [
      "Vệ Quân"
    ],
    "image": "Champions/Cost_3/T_18_Rammus_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Rammus.jpg",
    "abilityName": "Thế Thủ",
    "abilityDesc": "Khiêu khích, buộc kẻ địch tấn công tướng này. Trong 4 giây, nhận 350 / 450 / 550 Lá Chắn cùng 60 Giáp và Kháng Phép.<br><br>Khi Lá Chắn vỡ, gây 50 / 75 / 120 sát thương vật lý lên kẻ địch trong phạm vi 2 ô.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Rammus.webp",
    "mana": 80,
    "initialMana": 30,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "rengar",
    "name": "Rengar",
    "cost": 3,
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "cost": 3,
      "weight": 14.0
    },
    "origins": [
      "Khắc Tinh"
    ],
    "classes": [],
    "image": "Champions/Cost_3/T_18_Rengar_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Rengar.jpg",
    "abilityName": "Tàn Ác",
    "abilityDesc": "Nhảy tới kẻ địch có phần trăm Máu thấp nhất trong phạm vi 3 ô và đâm nạn nhân, gây 255 / 385 / 615 sát thương vật lý. Sau đó hồi 70 / 70 / 70 máu, tăng lên tối đa thành 150 / 220 / 220 dựa trên lượng Máu đã mất của kẻ địch.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Rengar.webp",
    "mana": 50,
    "initialMana": 10,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "tristana",
    "name": "Tristana",
    "cost": 3,
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "cost": 3,
      "weight": 14.0
    },
    "origins": [
      "Tiên Linh",
      "Tinh Nghịch"
    ],
    "classes": [
      "Thợ Săn"
    ],
    "image": "Champions/Cost_3/T_18_Tristana_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Tristana.jpg",
    "abilityName": "Bọc Thuốc Nổ",
    "abilityDesc": "Gắn một bọc thuốc súng lên mục tiêu, tồn tại trong 4 giây. Khi kích hoạt, nhận tầm đánh vô hạn và 0.6 / 0.6 / 0.6 Tốc Độ Đánh. Sau khi hết thời gian, bọc thuốc súng phát nổ và chia sát thương lên tất cả kẻ địch trong phạm vi 2 ô, gây 160 / 240 / 385 sát thương vật lý + 10 / 15 / 25 cho mỗi đòn đánh trong lúc thi triển.<br><br>Nếu kẻ địch đang dính bọc thuốc súng bị hạ gục, bọc thuốc súng sẽ gắn lên mục tiêu mới của Tristana.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Tristana.webp",
    "mana": 60,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "vi",
    "name": "Vi",
    "cost": 3,
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "cost": 3,
      "weight": 14.0
    },
    "origins": [
      "Nguyên Sinh"
    ],
    "classes": [
      "Dũng Sĩ"
    ],
    "image": "Champions/Cost_3/T_18_VI_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Vi.jpg",
    "abilityName": "Nắm Đấm Cuồng Nộ",
    "abilityDesc": "Nội Tại: Khi tung đòn đánh, hồi lại 22 / 22 / 22 Máu.<br><br>Kích Hoạt: Phát ra một tiếng gầm nguyên thủy, hồi lại 225 / 300 / 400 Máu. Sau đó nhận 85% / 100% / 125% Tốc Độ Đánh, 15% Chống Chịu, và trở nên Không Thể Cản Phá trong 3 giây.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Vi.webp",
    "mana": 60,
    "initialMana": 0,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "ahri",
    "name": "Ahri",
    "cost": 4,
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "cost": 4,
      "weight": 6.5
    },
    "origins": [
      "Hoa Linh"
    ],
    "classes": [
      "Thuật Sư"
    ],
    "image": "Champions/Cost_4/T_18_Ahri_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Ahri.jpg",
    "abilityName": "Quả Cầu Linh Hồn",
    "abilityDesc": "Phóng một quả cầu linh hồn vào khu vực trong phạm vi 4 ô có nhiều kẻ địch xung quanh nhất. Quả cầu gây 485 / 735 / 3500 sát thương phép lên kẻ địch trong bán kính 3 ô, giảm đi 20% mỗi ô cách xa tâm chấn.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Ahri.webp",
    "mana": 100,
    "initialMana": 20,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "amumu",
    "name": "Amumu",
    "cost": 4,
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "cost": 4,
      "weight": 6.5
    },
    "origins": [
      "Hỏa Ngục"
    ],
    "classes": [
      "Dũng Sĩ"
    ],
    "image": "Champions/Cost_4/T_18_Amumu_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Amumu.jpg",
    "abilityName": "Giận Dữ",
    "abilityDesc": "Nội tại: Mỗi giây, hồi phục 29.04 / 29.15 / 56 Máu và gây 12 / 18 / 150 sát thương phép lên kẻ địch trong phạm vi 1 ô.Kích hoạt: Gây 100 / 150 / 2000 sát thương phép lên kẻ địch trong phạm vi 2 ô và Làm Choáng chúng trong 1 / 6 giây, tăng lên 2.5 / 2.5 / 12.5 giây nếu mục tiêu đang Bỏng.Bỏng: Gây sát thương chuẩn mỗi giây bằng một phần phần trăm Máu tối đa của mục tiêu.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Amumu.webp",
    "mana": 140,
    "initialMana": 30,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "aphelios",
    "name": "Aphelios",
    "cost": 4,
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "cost": 4,
      "weight": 6.5
    },
    "origins": [
      "Mặt Trăng"
    ],
    "classes": [
      "Liên Kích"
    ],
    "image": "Champions/Cost_4/T_18_Aphelios_PChighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Aphelios.jpg",
    "abilityName": "Xung Kích Ánh Trăng",
    "abilityDesc": "Trang bị Súng Huyết Tinh và quét mục tiêu 5 / 5 / 5 lần trong 2 giây, mỗi lần gây 70 / 105 / 850 sát thương vật lý.<br><br>Sau khi đợt tấn công kết thúc, bắn ra một luồng năng lượng gây 490 / 735 / 5225 sát thương vật lý, chia đều cho tất cả kẻ địch trong bán kính 2 Ô.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Aphelios.webp",
    "mana": 70,
    "initialMana": 20,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "brambleback",
    "name": "Brambleback",
    "cost": 4,
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "cost": 4,
      "weight": 6.5
    },
    "origins": [
      "Quái Rừng"
    ],
    "classes": [
      "Tàn Phá"
    ],
    "image": "Champions/Cost_4/T_18_Brambleback_PCHighres.webp",
    "tileIcon": "Champions/Cost_4/T_18_Brambleback_PCHighres.webp",
    "abilityName": "Kỹ Năng",
    "abilityDesc": "",
    "abilityIcon": "",
    "mana": 0,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "ezreal",
    "name": "Ezreal",
    "cost": 4,
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "cost": 4,
      "weight": 6.5
    },
    "origins": [
      "Thần Rừng"
    ],
    "classes": [
      "Đao Phủ"
    ],
    "image": "Champions/Cost_4/T_18_Ezreal_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Ezreal.jpg",
    "abilityName": "Loạn Chiến Rừng Thẳm",
    "abilityDesc": "Dịch chuyển tránh xa mục tiêu hiện tại, gây 235 / 355 / 1200 sát thương vật lý lên nạn nhân và nhận 0.25 / 0.25 / 1 Tốc Độ Đánh.<br><br>Mỗi lần thi triển thứ 4 sẽ tiêu hao Tốc Độ Đánh nhận được từ Thịnh Nộ Thiên Nhiên và bắn ra một luồng năng lượng xuyên qua khu vực đông kẻ địch nhất, gây 385 / 580 / 2500 sát thương vật lý, giảm đi 25% với mỗi kẻ địch mà nó xuyên qua (tối thiểu 50%).",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Ezreal.webp",
    "mana": 30,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "lillia",
    "name": "Lillia",
    "cost": 4,
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "cost": 4,
      "weight": 6.5
    },
    "origins": [
      "Tiên Linh"
    ],
    "classes": [
      "Vệ Quân"
    ],
    "image": "Champions/Cost_4/T_18_Lillia_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Lillia.jpg",
    "abilityName": "Khúc Ru Rừng Thẳm",
    "abilityDesc": "Hồi lại 300 / 400 / 800 Máu và phóng 4 cánh bướm về phía kẻ địch gần đó. Kẻ địch trúng chiêu chịu 90 / 135 / 2000 sát thương phép và bị Ngủ trong 1.5 / 1.75 / 8 giây. Nếu kẻ địch nhận 1000 sát thương, chúng sẽ tỉnh dậy và chịu thêm 10% sát thương phép theo Máu tối đa.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Lillia.webp",
    "mana": 140,
    "initialMana": 40,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "malphite",
    "name": "Malphite",
    "cost": 4,
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "cost": 4,
      "weight": 6.5
    },
    "origins": [
      "Gai Đen",
      "Cự Thạch"
    ],
    "classes": [],
    "image": "Champions/Cost_4/T_18_Malphite_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Malphite.jpg",
    "abilityName": "Vỏ Cây Hóa Đá",
    "abilityDesc": "Nhận 700 / 850 / 2000 Lá Chắn trong 4 giây và trở nên hóa đá. Khi lá chắn vỡ, giải phóng một làn sóng năng lượng hắc ám, gây 82 / 123 / 3398.6 sát thương phép lên các kẻ địch trong phạm vi 2 / 3 ô.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Malphite.webp",
    "mana": 80,
    "initialMana": 30,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "morgana",
    "name": "Morgana",
    "cost": 4,
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "cost": 4,
      "weight": 6.5
    },
    "origins": [
      "Tiên Hắc Ám"
    ],
    "classes": [
      "Thuật Sĩ"
    ],
    "image": "Champions/Cost_4/T_18_Morgana_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Morgana.jpg",
    "abilityName": "Lời Nguyền Tàn Úa",
    "abilityDesc": "Nội tại: Nhận 25% Hút Máu Toàn Phần.<br><br>Kích hoạt: Bắn một luồng hắc ám vào 3 kẻ địch gần đó, gây 60 / 90 / 500 sát thương phép và nguyền rủa chúng trong 4 giây. Sau đó, tạo ra một 2 vùng ép góc Ô héo mòn trong cùng khoảng thời gian, gây 33 / 50 / 500 sát thương phép mỗi giây. Kẻ địch bị Nguyền Rủa chịu thêm 22 / 33 / 240 sát thương cho mỗi lần bị nguyền.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Morgana.webp",
    "mana": 60,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "nidalee",
    "name": "Nidalee",
    "cost": 4,
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "cost": 4,
      "weight": 6.5
    },
    "origins": [
      "Nguyên Sinh"
    ],
    "classes": [
      "Thích Ứng"
    ],
    "image": "Champions/Cost_4/T_18_Nidalee_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Nidalee.jpg",
    "abilityName": "Phóng Lao",
    "abilityDesc": "Thích Ứng : Nhận 150% Tốc Độ Đánh trong 3 / 99 đòn đánh tiếp theo. Những đòn đánh này được thay thế bằng phóng lao, gây 170 / 255 / 2000 sát thương phép. Đòn đánh thứ 3 sẽ nhắm vào kẻ địch xa nhất, có ít trang bị nhất và gây 320 / 480 / 3000 sát thương phép.<br><br>Thích Ứng : Biến hình thành một Sát Thủ dạng báo Cận Chiến để tấn công kẻ địch.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Nidalee.webp",
    "mana": 40,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "sentinel",
    "name": "Sentinel",
    "cost": 4,
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "cost": 4,
      "weight": 6.5
    },
    "origins": [
      "Quái Rừng"
    ],
    "classes": [
      "Tiên Phong",
      "Thuật Sĩ"
    ],
    "image": "Champions/Cost_4/T_18_Sentinel_PCHighres.webp",
    "tileIcon": "Champions/Cost_4/T_18_Sentinel_PCHighres.webp",
    "abilityName": "Kỹ Năng",
    "abilityDesc": "",
    "abilityIcon": "",
    "mana": 0,
    "initialMana": 0,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "sett",
    "name": "Sett",
    "cost": 4,
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "cost": 4,
      "weight": 6.5
    },
    "origins": [
      "Hoa Linh"
    ],
    "classes": [
      "Đấu Sĩ"
    ],
    "image": "Champions/Cost_4/T_18_Sett_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Sett.jpg",
    "abilityName": "Cuồng Long Quyền",
    "abilityDesc": "Nội Tại: Khi xuống dưới 40% Máu tối đa lần đầu tiên mỗi giao tranh, nhận 100 năng lượng.<br><br>Kích Hoạt: Vung một cú đấm lớn, nhanh chóng hồi lại 369 / 419 / 2144 trước khi gây 222 / 297 / 5072 sát thương vật lý theo hình nón rộng.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Sett.webp",
    "mana": 135,
    "initialMana": 60,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "sivir",
    "name": "Sivir",
    "cost": 4,
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "cost": 4,
      "weight": 6.5
    },
    "origins": [
      "Nguyên Sinh"
    ],
    "classes": [
      "Thợ Săn"
    ],
    "image": "Champions/Cost_4/T_18_Sivir_PCHIghres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Sivir.jpg",
    "abilityName": "Gươm Boomerang",
    "abilityDesc": "Ném một phi tiêu chữ thập lớn gây 205 / 305 / 1150 sát thương vật lý lên mục tiêu hiện tại và nảy 8 lần giữa các kẻ địch lân cận, gây 41 / 61 / 460 sát thương vật lý mỗi lần nảy. Khi kỹ năng này hạ gục một kẻ địch, nảy thêm 3 / 6 / 10 lần nữa.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Sivir.webp",
    "mana": 40,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "soraka",
    "name": "Soraka",
    "cost": 4,
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "cost": 4,
      "weight": 6.5
    },
    "origins": [
      "Thực Vật"
    ],
    "classes": [
      "Đao Phủ"
    ],
    "image": "Champions/Cost_4/T_18_Soraka_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Soraka.jpg",
    "abilityName": "Vẫn Tinh",
    "abilityDesc": "Gọi xuống 1 tinh tú vào mục tiêu hiện tại, gây 190 / 285 / 1000 sát thương phép. Nếu một tinh tú trước đó đã rơi trúng mục tiêu, gọi xuống thêm 3 tinh tú, mỗi tinh tú gây 100 / 150 / 1000 sát thương phép.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Soraka.webp",
    "mana": 30,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "zyra",
    "name": "Zyra",
    "cost": 4,
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "cost": 4,
      "weight": 6.5
    },
    "origins": [
      "Vườn Gai"
    ],
    "classes": [
      "Triệu Hồi"
    ],
    "image": "Champions/Cost_4/T_18_Zyra_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Zyra.jpg",
    "abilityName": "Sum Sê",
    "abilityDesc": "Triệu hồi 2 / 4 cái cây quanh chiến trường để tấn công kẻ địch gần nhất 10 lần. Mỗi đòn đánh gây 37 / 55 / 225 sát thương phép.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Zyra.webp",
    "mana": 45,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "alune",
    "name": "Alune",
    "cost": 5,
    "rarity": {
      "id": "ultimate",
      "name": "Ultimate",
      "nameVi": "Tối Thượng",
      "color": "#EB9C00",
      "cost": 5,
      "weight": 1.5
    },
    "origins": [
      "Hòa Hợp",
      "Mặt Trăng"
    ],
    "classes": [
      "Thuật Sư"
    ],
    "image": "Champions/Cost_5/T_18_Alune_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Alune.jpg",
    "abilityName": "Trăng Mờ",
    "abilityDesc": "Gọi 9 mảnh trăng rơi xuống, chia đều cho 3 kẻ địch gần nhất, gây 50 / 75 / 500 sát thương phép với mỗi mục tiêu.<br><br>Nếu trăng tròn, cả mặt trăng sẽ giáng xuống sân đấu, gây 2350 / 3600 / 7500 sát thương phép chia đều cho tất cả kẻ địch.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Alune.webp",
    "mana": 35,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "ashe",
    "name": "Ashe",
    "cost": 5,
    "rarity": {
      "id": "ultimate",
      "name": "Ultimate",
      "nameVi": "Tối Thượng",
      "color": "#EB9C00",
      "cost": 5,
      "weight": 1.5
    },
    "origins": [
      "Hoa Linh"
    ],
    "classes": [
      "Thợ Săn"
    ],
    "image": "Champions/Cost_5/T_18_Ashe_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Ashe.jpg",
    "abilityName": "Khe Nứt Tâm Linh",
    "abilityDesc": "Bắn một mũi tên xuyên qua nhiều kẻ địch nhất theo đường thẳng, gây 440 / 660 / 1000 sát thương vật lý, giảm đi 80% / 40% với mỗi kẻ địch trúng phải (tối thiểu 20%).<br><br>Mũi tên để lại một vệt dài trong 4 / 20 giây, gây 7 / 11 / 220 + 2% / 3% / 10% sát thương vật lý mỗi giây theo Máu tối đa lên các kẻ địch trong phạm vi, đồng thời Làm Chậm chúng đi 20%.<br><br>Làm Chậm: Giảm Tốc Độ Đánh",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Ashe.webp",
    "mana": 80,
    "initialMana": 20,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "draven",
    "name": "Draven",
    "cost": 5,
    "rarity": {
      "id": "ultimate",
      "name": "Ultimate",
      "nameVi": "Tối Thượng",
      "color": "#EB9C00",
      "cost": 5,
      "weight": 1.5
    },
    "origins": [
      "Săn Thưởng"
    ],
    "classes": [],
    "image": "Champions/Cost_5/T_18_Draven_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Draven.jpg",
    "abilityName": "Lốc Xoáy Tử Vong",
    "abilityDesc": "Nội Tại: Đòn đánh nhắm vào kẻ địch ngẫu nhiên trong tầm đánh và áp dụng 1 cộng dồn chảy máu, gây 140 / 210 / 3000 sát thương vật lý trong vòng 12 giây. Mỗi đòn đánh có 0.12 / 0.12 / 0.12 cơ hội gây 50% / 900% sát thương vật lý cộng thêm và áp dụng 2 cộng dồn chảy máu.<br><br>Kích Hoạt: Ném 2 chiếc rìu khổng lồ về phía kẻ địch bị chảy máu nhiều nhất. Gây 100 / 150 / 400 sát thương vật lý lên những kẻ địch trúng chiêu và tiêu hao cộng dồn chảy máu, lập tức gây ra toàn bộ lượng sát thương còn lại. Sau đó thu rìu về, gây 30 / 45 / 100 sát thương vật lý lên những kẻ địch trúng chiêu.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Draven.webp",
    "mana": 120,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "elder_dragon",
    "name": "Elder Dragon",
    "cost": 5,
    "rarity": {
      "id": "ultimate",
      "name": "Ultimate",
      "nameVi": "Tối Thượng",
      "color": "#EB9C00",
      "cost": 5,
      "weight": 1.5
    },
    "origins": [
      "Bá Chủ",
      "Quái Rừng"
    ],
    "classes": [],
    "image": "Champions/Cost_5/T_18_Elder_Dragon_PCHighres.webp",
    "tileIcon": "Champions/Cost_5/T_18_Elder_Dragon_PCHighres.webp",
    "abilityName": "Kỹ Năng",
    "abilityDesc": "",
    "abilityIcon": "",
    "mana": 0,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "gnar",
    "name": "Gnar",
    "cost": 5,
    "rarity": {
      "id": "ultimate",
      "name": "Ultimate",
      "nameVi": "Tối Thượng",
      "color": "#EB9C00",
      "cost": 5,
      "weight": 1.5
    },
    "origins": [
      "Thần Rừng",
      "Tinh Nghịch"
    ],
    "classes": [
      "Đấu Sĩ"
    ],
    "image": "Champions/Cost_5/T_18_Gnar_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Gnar.jpg",
    "abilityName": "Đột Biến Gien",
    "abilityDesc": "Nội Tại: Nhận 5 / 50 / 10 Nộ mỗi giây và 5 Nộ mỗi đòn đánh.<br><br>Kích Hoạt: Biến hình thành Gnar Khổng Lồ và nhảy vào nhóm kẻ địch đông nhất trong phạm vi 3 ô. Sau đó, gây 100 / 150 / 2000 sát thương vật lý lên các kẻ địch trong phạm vi 2 / 10 ô, giảm Giáp và Kháng Phép của chúng đi 15 / 20 / 100, và Làm Choáng chúng trong 1 / 15 giây. Gnar Khổng Lồ nhận thêm 400 / 600 / 10000 Máu và thay thế Kỹ Năng của mình bằng Nắm & Quăng.<br><br>Nắm & Quăng: Quăng mục tiêu về phía kẻ địch xa nhất, gây 380 / 570 / 9000 sát thương vật lý lên mục tiêu và 135 / 205 / 4500 sát thương vật lý lên những kẻ địch mà mục tiêu bay xuyên qua. Nếu chỉ còn 1 kẻ địch, ném kẻ đó khỏi sàn đấu.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Gnar.webp",
    "mana": 70,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "ivern",
    "name": "Ivern",
    "cost": 5,
    "rarity": {
      "id": "ultimate",
      "name": "Ultimate",
      "nameVi": "Tối Thượng",
      "color": "#EB9C00",
      "cost": 5,
      "weight": 1.5
    },
    "origins": [
      "Thụ Thần"
    ],
    "classes": [],
    "image": "Champions/Cost_5/T_18_Ivern_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Ivern.jpg",
    "abilityName": "Hạt Hư Hỏng",
    "abilityDesc": "Nội Tại: Lá chắn từ Kỹ Năng này có thể chí mạng với Chuẩn Xác.<br><br>Kích hoạt: Ban cho 2 / 10 đồng minh  Lá Chắn và 10% / 15% / 100% Khuếch Đại Sát Thương trong 6 giây. Sau đó gây 140 / 210 / 2000 sát thương phép lên kẻ địch liền kề chúng. Sau khi thi triển 6 lần, cũng sẽ cho mục tiêu 100% Tốc Độ Đánh cộng dồn.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Ivern.webp",
    "mana": 80,
    "initialMana": 50,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "kennen",
    "name": "Kennen",
    "cost": 5,
    "rarity": {
      "id": "ultimate",
      "name": "Ultimate",
      "nameVi": "Tối Thượng",
      "color": "#EB9C00",
      "cost": 5,
      "weight": 1.5
    },
    "origins": [
      "Hỏa Ngục"
    ],
    "classes": [
      "Đao Phủ"
    ],
    "image": "Champions/Cost_5/T_18_Kennen_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Kennen.jpg",
    "abilityName": "Bão Lửa",
    "abilityDesc": "Tích tụ sức mạnh, nhận 15% Sức Mạnh Phép Thuật cho mỗi kẻ địch bị Thiêu Đốt. Sau đó, nhận 250 / 350 / 3000 Lá Chắn trong 2.5 giây và lao qua một nhóm kẻ địch gần đó, gây 80 / 120 / 1500 sát thương phép lên mỗi kẻ địch.<br><br>Sau khi lao tới, giải phóng một cơn bão lửa có phạm vi 2 Ô, gây tổng cộng 450 / 675 / 5000 sát thương phép, chia đều cho tất cả kẻ địch trúng phải trong vòng 2 giây.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Kennen.webp",
    "mana": 40,
    "initialMana": 0,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "lux",
    "name": "Lux",
    "cost": 5,
    "rarity": {
      "id": "ultimate",
      "name": "Ultimate",
      "nameVi": "Tối Thượng",
      "color": "#EB9C00",
      "cost": 5,
      "weight": 1.5
    },
    "origins": [
      "Thế Thần"
    ],
    "classes": [],
    "image": "Champions/Cost_5/T_18_Lux_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/LuxSolar.jpg",
    "abilityName": "Cầu Vồng Tối Thượng",
    "abilityDesc": "Nội Tại: Khi dùng chiêu, tất cả đồng minh có chung một tộc/hệ với Lux nhận 3 / 3 / 100 năng lượng.<br><br>Kích Hoạt: Bắn một tia laser về phía có đông kẻ địch nhất gây 330 / 520 / 5000 sát thương phép, giảm đi 25% / 10% với mỗi kẻ địch trúng chiêu.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/LuxSolar.webp",
    "mana": 70,
    "initialMana": 20,
    "subRole": "carry",
    "subRoleVi": "Chủ Lực"
  },
  {
    "id": "maokai",
    "name": "Maokai",
    "cost": 5,
    "rarity": {
      "id": "ultimate",
      "name": "Ultimate",
      "nameVi": "Tối Thượng",
      "color": "#EB9C00",
      "cost": 5,
      "weight": 1.5
    },
    "origins": [
      "Cổ Thụ"
    ],
    "classes": [
      "Dũng Sĩ"
    ],
    "image": "Champions/Cost_5/T_18_Maokai_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Maokai.jpg",
    "abilityName": "Gieo Hạt Giống",
    "abilityDesc": "Nội Tại: Sau mỗi 650 / 300 / 200 sát thương chặn được, 1 chồi non nhảy về phía 1 kẻ địch lân cận và gây 77 / 77 / 825 sát thương phép. Khi bị hạ gục, 3 / 5 / 10 chồi non sẽ nhảy ra.<br><br>Kích Hoạt: Gây 66 / 66 / 1100 sát thương phép lên mục tiêu và hồi lại 330 / 400 / 2000 + 10% / 100% Máu đã mất.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Maokai.webp",
    "mana": 100,
    "initialMana": 40,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  },
  {
    "id": "taric",
    "name": "Taric",
    "cost": 5,
    "rarity": {
      "id": "ultimate",
      "name": "Ultimate",
      "nameVi": "Tối Thượng",
      "color": "#EB9C00",
      "cost": 5,
      "weight": 1.5
    },
    "origins": [
      "Lục Bảo"
    ],
    "classes": [
      "Tiên Phong"
    ],
    "image": "Champions/Cost_5/T_18_Taric_PCHighres.webp",
    "tileIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/tiles/Taric.jpg",
    "abilityName": "Lục Bảo Huy Hoàng",
    "abilityDesc": "Nội Tại: Lần đầu tiên Taric hoặc đồng minh được ghép cặp giảm xuống dưới 50% Máu, giải phóng năng lượng lục bảo từ cả hai, tạo 305 / 480 / 11300 Lá Chắn cho các đồng minh trong phạm vi 3 ô trong 3 / 99 giây.<br><br>Kích Hoạt: Hồi 200 / 300 / 3000 Máu. Taric và đồng minh được ghép cặp gây 100 / 150 / 1000 sát thương phép cộng thêm trong 2 đòn đánh tiếp theo.",
    "abilityIcon": "https://c-tft-api.op.gg/img/set/18/tft-champion/skills/Taric.webp",
    "mana": 65,
    "initialMana": 0,
    "subRole": "tank",
    "subRoleVi": "Chống Chịu"
  }
];

const ORIGINS = [
  {
    "id": "riftbeast",
    "name": "Quái Rừng",
    "nameEn": "Riftbeast",
    "type": "origin",
    "tier": "common",
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "weight": 35.0
    },
    "icon": "Traits/Origin/Trait_Icon_18_Riftbeast_Large_White.webp",
    "champions": [
      "Cinderling",
      "Pebbles",
      "Gromp",
      "Murkwolf",
      "Scuttlecrab",
      "Krug",
      "Mama Beak",
      "Brambleback",
      "Sentinel",
      "Elder Dragon"
    ],
    "avgCost": 2.7,
    "count": 10
  },
  {
    "id": "solar",
    "name": "Mặt Trời",
    "nameEn": "Solar",
    "type": "origin",
    "tier": "common",
    "rarity": {
      "id": "common",
      "name": "Common",
      "nameVi": "Thông Thường",
      "color": "#9AA4AF",
      "weight": 35.0
    },
    "icon": "Traits/Origin/Trait_Icon_18_Solar_Large_White.webp",
    "champions": [
      "Leona",
      "Kayle",
      "Sejuani"
    ],
    "avgCost": 1.6666666666666667,
    "count": 3
  },
  {
    "id": "blackthorn",
    "name": "Gai Đen",
    "nameEn": "Blackthorn",
    "type": "origin",
    "tier": "rare",
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "weight": 26.0
    },
    "icon": "Traits/Origin/Trait_Icon_18_Blackthorn_Large_White.webp",
    "champions": [
      "Rek'Sai",
      "Veigar",
      "Warwick",
      "Azir",
      "Malphite"
    ],
    "avgCost": 2.2,
    "count": 5
  },
  {
    "id": "elderwood",
    "name": "Thần Rừng",
    "nameEn": "Elderwood",
    "type": "origin",
    "tier": "rare",
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "weight": 26.0
    },
    "icon": "Traits/Origin/Trait_Icon_18_Elderwood_Large_White.webp",
    "champions": [
      "Ornn",
      "Xayah",
      "Alistar",
      "LeBlanc",
      "Hecarim",
      "Ezreal",
      "Gnar"
    ],
    "avgCost": 2.5714285714285716,
    "count": 7
  },
  {
    "id": "sprykin",
    "name": "Tinh Nghịch",
    "nameEn": "Sprykin",
    "type": "origin",
    "tier": "rare",
    "rarity": {
      "id": "rare",
      "name": "Rare",
      "nameVi": "Hiếm",
      "color": "#00AE0A",
      "weight": 26.0
    },
    "icon": "Traits/Origin/Trait_Icon_18_Sprykin_Large_White.webp",
    "champions": [
      "Kobuko",
      "Veigar",
      "Teemo",
      "Rammus",
      "Tristana",
      "Gnar"
    ],
    "avgCost": 2.5,
    "count": 6
  },
  {
    "id": "fae",
    "name": "Tiên Linh",
    "nameEn": "Fae",
    "type": "origin",
    "tier": "epic",
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "weight": 18.0
    },
    "icon": "Traits/Origin/Trait_Icon_18_Fae_Large_White.webp",
    "champions": [
      "Rakan",
      "Xayah",
      "Tristana",
      "Lillia"
    ],
    "avgCost": 2.25,
    "count": 4
  },
  {
    "id": "coven",
    "name": "Tiên Hắc Ám",
    "nameEn": "Coven",
    "type": "origin",
    "tier": "epic",
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "weight": 18.0
    },
    "icon": "Traits/Origin/Trait_Icon_18_Coven_Large_White.webp",
    "champions": [
      "Camille",
      "Caitlyn",
      "Elise",
      "Cassiopeia",
      "Morgana"
    ],
    "avgCost": 2.4,
    "count": 5
  },
  {
    "id": "blossom",
    "name": "Hoa Linh",
    "nameEn": "Blossom",
    "type": "origin",
    "tier": "epic",
    "rarity": {
      "id": "epic",
      "name": "Epic",
      "nameVi": "Sử Thi",
      "color": "#0093FF",
      "weight": 18.0
    },
    "icon": "Traits/Origin/Trait_Icon_18_Blossom_Large_White.webp",
    "champions": [
      "Karma",
      "Yorick",
      "Yunara",
      "Master Yi",
      "Ahri",
      "Sett",
      "Ashe"
    ],
    "avgCost": 2.857142857142857,
    "count": 7
  },
  {
    "id": "rival",
    "name": "Khắc Tinh",
    "nameEn": "Rival",
    "type": "origin",
    "tier": "heritage",
    "rarity": {
      "id": "heritage",
      "name": "Heritage",
      "nameVi": "Di Sản",
      "color": "#00D2D2",
      "weight": 10.0
    },
    "icon": "Traits/Origin/Trait_Icon_18_Rival_Large_White.webp",
    "champions": [
      "Kha'Zix",
      "Rengar"
    ],
    "avgCost": 3.0,
    "count": 2
  },
  {
    "id": "flora_fatalis",
    "name": "Thực Vật",
    "nameEn": "Flora Fatalis",
    "type": "origin",
    "tier": "heritage",
    "rarity": {
      "id": "heritage",
      "name": "Heritage",
      "nameVi": "Di Sản",
      "color": "#00D2D2",
      "weight": 10.0
    },
    "icon": "Traits/Origin/Trait_Icon_18_FloraFatalis_Large_White.webp",
    "champions": [
      "Fiddlesticks",
      "Soraka"
    ],
    "avgCost": 3.5,
    "count": 2
  },
  {
    "id": "inferno",
    "name": "Hỏa Ngục",
    "nameEn": "Inferno",
    "type": "origin",
    "tier": "legendary",
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "weight": 6.0
    },
    "icon": "Traits/Origin/Trait_Icon_18_Inferno_Large_White.webp",
    "champions": [
      "Akali",
      "Varus",
      "Shen",
      "Amumu",
      "Kennen"
    ],
    "avgCost": 2.6,
    "count": 5
  },
  {
    "id": "primal",
    "name": "Nguyên Sinh",
    "nameEn": "Primal",
    "type": "origin",
    "tier": "legendary",
    "rarity": {
      "id": "legendary",
      "name": "Legendary",
      "nameVi": "Huyền Thoại",
      "color": "#E537A2",
      "weight": 6.0
    },
    "icon": "Traits/Origin/Trait_Icon_18_Primal_Large_White.webp",
    "champions": [
      "Vi",
      "Nidalee",
      "Sivir"
    ],
    "avgCost": 3.6666666666666665,
    "count": 3
  },
  {
    "id": "lunar",
    "name": "Mặt Trăng",
    "nameEn": "Lunar",
    "type": "origin",
    "tier": "ultimate",
    "rarity": {
      "id": "ultimate",
      "name": "Ultimate",
      "nameVi": "Tối Thượng",
      "color": "#EB9C00",
      "weight": 3.3
    },
    "icon": "Traits/Origin/Trait_Icon_18_Lunar_Large_White.webp",
    "champions": [
      "Diana",
      "Aphelios",
      "Alune"
    ],
    "avgCost": 4.0,
    "count": 3
  },
  {
    "id": "monolith",
    "name": "Cự Thạch",
    "nameEn": "Monolith",
    "type": "origin",
    "tier": "ultimate",
    "rarity": {
      "id": "ultimate",
      "name": "Ultimate",
      "nameVi": "Tối Thượng",
      "color": "#EB9C00",
      "weight": 3.3
    },
    "icon": "Traits/Origin/Trait_Icon_18_Monolith_Large_White.webp",
    "champions": [
      "Malphite"
    ],
    "avgCost": 4.0,
    "count": 1
  },
  {
    "id": "thornmaiden",
    "name": "Vườn Gai",
    "nameEn": "Thornmaiden",
    "type": "origin",
    "tier": "ultimate",
    "rarity": {
      "id": "ultimate",
      "name": "Ultimate",
      "nameVi": "Tối Thượng",
      "color": "#EB9C00",
      "weight": 3.3
    },
    "icon": "Traits/Origin/Trait_Icon_18_Thornmaiden_Large_White.webp",
    "champions": [
      "Zyra"
    ],
    "avgCost": 4.0,
    "count": 1
  },
  {
    "id": "caustic",
    "name": "Ăn Mòn",
    "nameEn": "Caustic",
    "type": "origin",
    "tier": "mythic",
    "rarity": {
      "id": "mythic",
      "name": "Mythic",
      "nameVi": "Thần Thoại",
      "color": "#FF4B93",
      "weight": 1.5
    },
    "icon": "Traits/Origin/Trait_Icon_18_Caustic_Large_White.webp",
    "champions": [
      "Kog'Maw"
    ],
    "avgCost": 3.0,
    "count": 1
  },
  {
    "id": "avatar",
    "name": "Thế Thần",
    "nameEn": "Avatar",
    "type": "origin",
    "tier": "mythic",
    "rarity": {
      "id": "mythic",
      "name": "Mythic",
      "nameVi": "Thần Thoại",
      "color": "#FF4B93",
      "weight": 1.5
    },
    "icon": "Traits/Origin/Trait_Icon_18_Avatar_Large_White.webp",
    "champions": [
      "Lux"
    ],
    "avgCost": 5.0,
    "count": 1
  },
  {
    "id": "attuned",
    "name": "Hòa Hợp",
    "nameEn": "Attuned",
    "type": "origin",
    "tier": "mythic",
    "rarity": {
      "id": "mythic",
      "name": "Mythic",
      "nameVi": "Thần Thoại",
      "color": "#FF4B93",
      "weight": 1.5
    },
    "icon": "Traits/Origin/Trait_Icon_18_Attuned_Large_White.webp",
    "champions": [
      "Alune"
    ],
    "avgCost": 5.0,
    "count": 1
  },
  {
    "id": "bounty_seeker",
    "name": "Săn Thưởng",
    "nameEn": "Bounty Seeker",
    "type": "origin",
    "tier": "mythic",
    "rarity": {
      "id": "mythic",
      "name": "Mythic",
      "nameVi": "Thần Thoại",
      "color": "#FF4B93",
      "weight": 1.5
    },
    "icon": "Traits/Origin/Trait_Icon_18_BountySeeker_Large_White.webp",
    "champions": [
      "Draven"
    ],
    "avgCost": 5.0,
    "count": 1
  },
  {
    "id": "apex_predator",
    "name": "Bá Chủ",
    "nameEn": "Apex Predator",
    "type": "origin",
    "tier": "mythic",
    "rarity": {
      "id": "mythic",
      "name": "Mythic",
      "nameVi": "Thần Thoại",
      "color": "#FF4B93",
      "weight": 1.5
    },
    "icon": "Traits/Origin/Trait_Icon_18_ApexPredator_Large_White.webp",
    "champions": [
      "Elder Dragon"
    ],
    "avgCost": 5.0,
    "count": 1
  },
  {
    "id": "greenfather",
    "name": "Thụ Thần",
    "nameEn": "Greenfather",
    "type": "origin",
    "tier": "mythic",
    "rarity": {
      "id": "mythic",
      "name": "Mythic",
      "nameVi": "Thần Thoại",
      "color": "#FF4B93",
      "weight": 1.5
    },
    "icon": "Traits/Origin/Trait_Icon_18_Greenfather_Large_White.webp",
    "champions": [
      "Ivern"
    ],
    "avgCost": 5.0,
    "count": 1
  },
  {
    "id": "old_growth",
    "name": "Cổ Thụ",
    "nameEn": "Old Growth",
    "type": "origin",
    "tier": "mythic",
    "rarity": {
      "id": "mythic",
      "name": "Mythic",
      "nameVi": "Thần Thoại",
      "color": "#FF4B93",
      "weight": 1.5
    },
    "icon": "Traits/Origin/Trait_Icon_18_OldGrowth_Large_White.webp",
    "champions": [
      "Maokai"
    ],
    "avgCost": 5.0,
    "count": 1
  },
  {
    "id": "emerald_aspect",
    "name": "Lục Bảo",
    "nameEn": "Emerald Aspect",
    "type": "origin",
    "tier": "mythic",
    "rarity": {
      "id": "mythic",
      "name": "Mythic",
      "nameVi": "Thần Thoại",
      "color": "#FF4B93",
      "weight": 1.5
    },
    "icon": "Traits/Origin/Trait_Icon_18_EmeraldAspect_Large_White.webp",
    "champions": [
      "Taric"
    ],
    "avgCost": 5.0,
    "count": 1
  },
  {
    "id": "eclipse",
    "name": "Thiên Thực",
    "nameEn": "Eclipse",
    "type": "origin",
    "tier": "transcendent",
    "rarity": {
      "id": "transcendent",
      "name": "Transcendent",
      "nameVi": "Vô Thượng",
      "color": "#ffffff",
      "weight": 0.2
    },
    "icon": "Traits/Origin/Trait_Icon_18_Eclipse_Large_White.webp",
    "champions": [],
    "avgCost": 5.0,
    "count": 0
  }
];

const CLASSES = [
  {
    "id": "adaptor",
    "name": "Thích Ứng",
    "nameEn": "Adaptor",
    "type": "class",
    "tier": "standard",
    "rarity": {
      "id": "standard",
      "name": "Standard",
      "nameVi": "Đồng Hạng",
      "color": "#5383E8",
      "weight": 8.333333333333334
    },
    "icon": "Traits/Class/Trait_Icon_18_Adaptor_Large_White.webp",
    "champions": [
      "Akali",
      "Gromp",
      "Kog'Maw",
      "Master Yi",
      "Nidalee"
    ],
    "avgCost": 2.6,
    "count": 5
  },
  {
    "id": "brawler",
    "name": "Đấu Sĩ",
    "nameEn": "Brawler",
    "type": "class",
    "tier": "standard",
    "rarity": {
      "id": "standard",
      "name": "Standard",
      "nameVi": "Đồng Hạng",
      "color": "#5383E8",
      "weight": 8.333333333333334
    },
    "icon": "Traits/Class/Trait_Icon_18_Brawler_Large_White.webp",
    "champions": [
      "Kobuko",
      "Rek'Sai",
      "Alistar",
      "Krug",
      "Sett",
      "Gnar"
    ],
    "avgCost": 2.6666666666666665,
    "count": 6
  },
  {
    "id": "defender",
    "name": "Vệ Quân",
    "nameEn": "Defender",
    "type": "class",
    "tier": "standard",
    "rarity": {
      "id": "standard",
      "name": "Standard",
      "nameVi": "Đồng Hạng",
      "color": "#5383E8",
      "weight": 8.333333333333334
    },
    "icon": "Traits/Class/Trait_Icon_18_Defender_Large_White.webp",
    "champions": [
      "Leona",
      "Ornn",
      "Shen",
      "Fiddlesticks",
      "Rammus",
      "Lillia"
    ],
    "avgCost": 2.3333333333333335,
    "count": 6
  },
  {
    "id": "executioner",
    "name": "Đao Phủ",
    "nameEn": "Executioner",
    "type": "class",
    "tier": "standard",
    "rarity": {
      "id": "standard",
      "name": "Standard",
      "nameVi": "Đồng Hạng",
      "color": "#5383E8",
      "weight": 8.333333333333334
    },
    "icon": "Traits/Class/Trait_Icon_18_Executioner_Large_White.webp",
    "champions": [
      "Yunara",
      "Azir",
      "Ezreal",
      "Soraka",
      "Kennen"
    ],
    "avgCost": 3.6,
    "count": 5
  },
  {
    "id": "hunter",
    "name": "Thợ Săn",
    "nameEn": "Hunter",
    "type": "class",
    "tier": "standard",
    "rarity": {
      "id": "standard",
      "name": "Standard",
      "nameVi": "Đồng Hạng",
      "color": "#5383E8",
      "weight": 8.333333333333334
    },
    "icon": "Traits/Class/Trait_Icon_18_Hunter_Large_White.webp",
    "champions": [
      "Cinderling",
      "Caitlyn",
      "Tristana",
      "Sivir",
      "Ashe"
    ],
    "avgCost": 3.0,
    "count": 5
  },
  {
    "id": "invoker",
    "name": "Thuật Sĩ",
    "nameEn": "Invoker",
    "type": "class",
    "tier": "standard",
    "rarity": {
      "id": "standard",
      "name": "Standard",
      "nameVi": "Đồng Hạng",
      "color": "#5383E8",
      "weight": 8.333333333333334
    },
    "icon": "Traits/Class/Trait_Icon_18_Invoker_Large_White.webp",
    "champions": [
      "Pebbles",
      "Teemo",
      "Kog'Maw",
      "Morgana",
      "Sentinel"
    ],
    "avgCost": 2.8,
    "count": 5
  },
  {
    "id": "juggernaut",
    "name": "Dũng Sĩ",
    "nameEn": "Juggernaut",
    "type": "class",
    "tier": "standard",
    "rarity": {
      "id": "standard",
      "name": "Standard",
      "nameVi": "Đồng Hạng",
      "color": "#5383E8",
      "weight": 8.333333333333334
    },
    "icon": "Traits/Class/Trait_Icon_18_Juggernaut_Large_White.webp",
    "champions": [
      "Rakan",
      "Yorick",
      "Scuttlecrab",
      "Sejuani",
      "Vi",
      "Amumu",
      "Maokai"
    ],
    "avgCost": 2.5714285714285716,
    "count": 7
  },
  {
    "id": "rapidfire",
    "name": "Liên Kích",
    "nameEn": "Rapidfire",
    "type": "class",
    "tier": "standard",
    "rarity": {
      "id": "standard",
      "name": "Standard",
      "nameVi": "Đồng Hạng",
      "color": "#5383E8",
      "weight": 8.333333333333334
    },
    "icon": "Traits/Class/Trait_Icon_18_Rapidfire_Large_White.webp",
    "champions": [
      "Varus",
      "Xayah",
      "Kayle",
      "Mama Beak",
      "Aphelios"
    ],
    "avgCost": 2.2,
    "count": 5
  },
  {
    "id": "ravager",
    "name": "Tàn Phá",
    "nameEn": "Ravager",
    "type": "class",
    "tier": "standard",
    "rarity": {
      "id": "standard",
      "name": "Standard",
      "nameVi": "Đồng Hạng",
      "color": "#5383E8",
      "weight": 8.333333333333334
    },
    "icon": "Traits/Class/Trait_Icon_18_Ravager_Large_White.webp",
    "champions": [
      "Akali",
      "Camille",
      "Murkwolf",
      "Warwick",
      "Diana",
      "Brambleback"
    ],
    "avgCost": 2.1666666666666665,
    "count": 6
  },
  {
    "id": "spellweaver",
    "name": "Thuật Sư",
    "nameEn": "Spellweaver",
    "type": "class",
    "tier": "standard",
    "rarity": {
      "id": "standard",
      "name": "Standard",
      "nameVi": "Đồng Hạng",
      "color": "#5383E8",
      "weight": 8.333333333333334
    },
    "icon": "Traits/Class/Trait_Icon_18_Spellweaver_Large_White.webp",
    "champions": [
      "Karma",
      "Veigar",
      "LeBlanc",
      "Cassiopeia",
      "Fiddlesticks",
      "Ahri",
      "Alune"
    ],
    "avgCost": 2.7142857142857144,
    "count": 7
  },
  {
    "id": "summoner",
    "name": "Triệu Hồi",
    "nameEn": "Summoner",
    "type": "class",
    "tier": "standard",
    "rarity": {
      "id": "standard",
      "name": "Standard",
      "nameVi": "Đồng Hạng",
      "color": "#5383E8",
      "weight": 8.333333333333334
    },
    "icon": "Traits/Class/Trait_Icon_18_Summoner_Large_White.webp",
    "champions": [
      "Yorick",
      "Azir",
      "Mama Beak",
      "Zyra"
    ],
    "avgCost": 2.75,
    "count": 4
  },
  {
    "id": "vanguard",
    "name": "Tiên Phong",
    "nameEn": "Vanguard",
    "type": "class",
    "tier": "standard",
    "rarity": {
      "id": "standard",
      "name": "Standard",
      "nameVi": "Đồng Hạng",
      "color": "#5383E8",
      "weight": 8.333333333333334
    },
    "icon": "Traits/Class/Trait_Icon_18_Vanguard_Large_White.webp",
    "champions": [
      "Rakan",
      "Elise",
      "Diana",
      "Hecarim",
      "Sentinel",
      "Taric"
    ],
    "avgCost": 3.0,
    "count": 6
  }
];

const META_COMPS = [
  {
    "id": "423000",
    "name": "DA_18_Lunar, DA_18_Aphelios, DA_Nidalee18_AP",
    "tier": "S",
    "units": [
      "Varus",
      "KogMawAD",
      "Diana",
      "Vi",
      "Sentinel",
      "NidaleeAP",
      "Amumu",
      "Alune",
      "Aphelios"
    ],
    "carries": [
      {
        "unit": "NidaleeAP",
        "items": [
          "DA_InfinityEdge",
          "DA_SpearOfShojin",
          "DA_SteraksGage"
        ]
      },
      {
        "unit": "Aphelios",
        "items": [
          "DA_Deathblade",
          "DA_GuinsoosRageblade",
          "DA_KrakensFury"
        ]
      }
    ]
  },
  {
    "id": "423001",
    "name": "DA_18_Hunter, DA_18_Sivir",
    "tier": "S",
    "units": [
      "Shen",
      "Tristana",
      "Amumu",
      "Lillia",
      "Sivir",
      "Vi",
      "Kennen",
      "Ivern",
      "Ashe"
    ],
    "carries": [
      {
        "unit": "Ashe",
        "items": [
          "DA_LastWhisper",
          "DA_RedBuff",
          "DA_SpearOfShojin"
        ]
      },
      {
        "unit": "Sivir",
        "items": [
          "DA_InfinityEdge",
          "DA_SpearOfShojin",
          "DA_StrikersFlail"
        ]
      }
    ]
  },
  {
    "id": "423002",
    "name": "DA_18_Sprykin, DA_18_Malphite",
    "tier": "S",
    "units": [
      "Kobuko",
      "Veigar",
      "Rek'Sai",
      "Teemo",
      "Rammus",
      "Fiddlesticks",
      "Malphite",
      "Tristana",
      "Azir",
      "Taric"
    ],
    "carries": [
      {
        "unit": "Malphite",
        "items": [
          "DA_BrambleVest",
          "DA_GargoyleStoneplate",
          "DA_WarmogsArmor"
        ]
      },
      {
        "unit": "Veigar",
        "items": [
          "DA_18_EmblemFloraFatalisAugment",
          "DA_BlueBuff",
          "DA_JeweledGauntlet"
        ]
      }
    ]
  },
  {
    "id": "423003",
    "name": "DA_18_Vanguard, DA_18_KhaZix",
    "tier": "S",
    "units": [
      "Kha'Zix",
      "Fiddlesticks",
      "Diana",
      "Hecarim",
      "LeBlanc",
      "Soraka",
      "Ornn",
      "GnarSmall",
      "Kennen",
      "Ornn",
      "Hecarim",
      "Kha'Zix",
      "Hecarim",
      "Diana",
      "Kha'Zix",
      "Diana",
      "Fiddlesticks",
      "Soraka",
      "Fiddlesticks"
    ],
    "carries": [
      {
        "unit": "Kha'Zix",
        "items": [
          "DA_EdgeOfNight",
          "DA_HandOfJustice",
          "DA_RabadonsDeathcap"
        ]
      },
      {
        "unit": "Hecarim",
        "items": [
          "DA_GargoyleStoneplate",
          "DA_SpiritVisage",
          "DA_WarmogsArmor"
        ]
      }
    ]
  },
  {
    "id": "423004",
    "name": "DA_18_Blossom, DA_18_Sett, DA_18_Sivir",
    "tier": "S",
    "units": [
      "Yorick",
      "Karma",
      "Vi",
      "Sivir",
      "GnarSmall",
      "Zyra",
      "Sett",
      "Ashe",
      "Ahri"
    ],
    "carries": [
      {
        "unit": "Ashe",
        "items": [
          "DA_LastWhisper",
          "DA_RedBuff",
          "DA_SpearOfShojin"
        ]
      },
      {
        "unit": "Sett",
        "items": [
          "DA_GargoyleStoneplate",
          "DA_SpiritVisage",
          "DA_WarmogsArmor"
        ]
      }
    ]
  },
  {
    "id": "423005",
    "name": "DA_18_Rapidfire, DA_18_Aphelios",
    "tier": "A",
    "units": [
      "Rakan",
      "Varus",
      "Xayah",
      "Brambleback",
      "Aphelios",
      "CrimsonRaptor",
      "Amumu",
      "Sentinel",
      "Diana",
      "Sentry",
      "Cinderling",
      "Murkwolf"
    ],
    "carries": [
      {
        "unit": "Aphelios",
        "items": [
          "DA_InfinityEdge",
          "DA_KrakensFury",
          "DA_StrikersFlail"
        ]
      },
      {
        "unit": "Brambleback",
        "items": [
          "DA_18_EmblemRapidfire",
          "DA_EdgeOfNight",
          "DA_Quicksilver"
        ]
      }
    ]
  },
  {
    "id": "423006",
    "name": "DA_18_Invoker, DA_18_Ahri",
    "tier": "A",
    "units": [
      "Sentry",
      "Krug",
      "Karma",
      "Ahri",
      "Sentinel",
      "Taric",
      "Sett",
      "Ivern",
      "Morgana"
    ],
    "carries": [
      {
        "unit": "Ahri",
        "items": [
          "DA_18_EmblemInvoker",
          "DA_JeweledGauntlet",
          "DA_RabadonsDeathcap"
        ]
      },
      {
        "unit": "Morgana",
        "items": [
          "DA_Morellonomicon",
          "DA_RabadonsDeathcap",
          "DA_VoidStaff"
        ]
      }
    ]
  },
  {
    "id": "423007",
    "name": "DA_18_Executioner, DA_18_Sett",
    "tier": "A",
    "units": [
      "Yunara",
      "Ornn",
      "Ahri",
      "Fiddlesticks",
      "Sett",
      "GnarSmall",
      "Soraka",
      "Ezreal",
      "Kennen"
    ],
    "carries": [
      {
        "unit": "Sett",
        "items": [
          "DA_GargoyleStoneplate",
          "DA_GargoyleStoneplate",
          "DA_WarmogsArmor"
        ]
      },
      {
        "unit": "Ahri",
        "items": [
          "DA_AdaptiveHelm",
          "DA_Morellonomicon",
          "DA_VoidStaff"
        ]
      }
    ]
  },
  {
    "id": "423008",
    "name": "DA_Riftbeast18, DA_18_Malphite",
    "tier": "A",
    "units": [
      "Krug",
      "KogMawAD",
      "Rek'Sai",
      "Cinderling",
      "Sivir",
      "Malphite",
      "Sentinel",
      "NidaleeAP",
      "Ashe"
    ],
    "carries": [
      {
        "unit": "Malphite",
        "items": [
          "DA_Crownguard",
          "DA_GargoyleStoneplate",
          "DA_WarmogsArmor"
        ]
      },
      {
        "unit": "Sivir",
        "items": [
          "DA_InfinityEdge",
          "DA_RedBuff",
          "DA_StrikersFlail"
        ]
      }
    ]
  },
  {
    "id": "423009",
    "name": "DA_18_Elderwood, DA_18_Ezreal, DA_Draven18",
    "tier": "A",
    "units": [
      "Ezreal",
      "Maokai",
      "Taric",
      "Alistar",
      "Ivern",
      "Kennen",
      "GnarSmall",
      "Amumu",
      "Draven"
    ],
    "carries": [
      {
        "unit": "Draven",
        "items": [
          "DA_Deathblade",
          "DA_GuinsoosRageblade",
          "DA_KrakensFury"
        ]
      },
      {
        "unit": "Maokai",
        "items": [
          "DA_GargoyleStoneplate",
          "DA_SpiritVisage",
          "DA_WarmogsArmor"
        ]
      }
    ]
  },
  {
    "id": "423010",
    "name": "DA_18_Elderwood, DA_18_Aphelios, DA_18_Ezreal",
    "tier": "B",
    "units": [
      "Xayah",
      "LeBlanc",
      "Ornn",
      "Hecarim",
      "Diana",
      "Alistar",
      "Alune",
      "Aphelios",
      "Ezreal",
      "GnarSmall"
    ],
    "carries": [
      {
        "unit": "Aphelios",
        "items": [
          "DA_18_EmblemElderwood",
          "DA_GuinsoosRageblade",
          "DA_KrakensFury"
        ]
      },
      {
        "unit": "Ezreal",
        "items": [
          "DA_InfinityEdge",
          "DA_LastWhisper",
          "DA_RedBuff"
        ]
      }
    ]
  },
  {
    "id": "423011",
    "name": "DA_18_Sprykin, DA_18_Teemo",
    "tier": "B",
    "units": [
      "Veigar",
      "Teemo",
      "Alistar",
      "Kobuko",
      "LeBlanc",
      "Hecarim",
      "Sentry",
      "Zyra",
      "Kobuko",
      "Hecarim",
      "Alistar",
      "Alistar",
      "Teemo",
      "LeBlanc",
      "Teemo",
      "LeBlanc",
      "Veigar"
    ],
    "carries": [
      {
        "unit": "Alistar",
        "items": [
          "DA_GargoyleStoneplate",
          "DA_GargoyleStoneplate",
          "DA_WarmogsArmor"
        ]
      },
      {
        "unit": "Teemo",
        "items": [
          "DA_RedBuff",
          "DA_SpearOfShojin",
          "DA_VoidStaff"
        ]
      }
    ]
  },
  {
    "id": "423012",
    "name": "DA_18_Elderwood, DA_18_Rengar",
    "tier": "B",
    "units": [
      "Rengar",
      "LeBlanc",
      "Kha'Zix",
      "Hecarim",
      "Diana",
      "Ezreal",
      "Alune",
      "Aphelios",
      "Rengar",
      "Rengar",
      "Kha'Zix",
      "Kha'Zix",
      "Diana",
      "Hecarim",
      "LeBlanc"
    ],
    "carries": [
      {
        "unit": "Rengar",
        "items": [
          "DA_EdgeOfNight",
          "DA_GuinsoosRageblade",
          "DA_TitansResolve"
        ]
      },
      {
        "unit": "Kha'Zix",
        "items": [
          "DA_EdgeOfNight",
          "DA_HandOfJustice",
          "DA_RabadonsDeathcap"
        ]
      }
    ]
  },
  {
    "id": "423013",
    "name": "DA_18_Invoker, DA_18_Morgana, DA_Taric18",
    "tier": "B",
    "units": [
      "Sentry",
      "Morgana",
      "Taric",
      "Hecarim",
      "Diana",
      "KogMawAD",
      "Sentinel",
      "Alune",
      "Brambleback"
    ],
    "carries": [
      {
        "unit": "Morgana",
        "items": [
          "DA_Morellonomicon",
          "DA_RabadonsDeathcap",
          "DA_VoidStaff"
        ]
      },
      {
        "unit": "Sentinel",
        "items": [
          "DA_ProtectorsVow",
          "DA_ProtectorsVow",
          "DA_ProtectorsVow"
        ]
      }
    ]
  },
  {
    "id": "423014",
    "name": "DA_Juggernaut18, DA_18_Caitlyn",
    "tier": "B",
    "units": [
      "Rakan",
      "Caitlyn",
      "Tristana",
      "Vi",
      "Sejuani",
      "Scuttlecrab",
      "Amumu",
      "Ashe",
      "Sivir"
    ],
    "carries": [
      {
        "unit": "Caitlyn",
        "items": [
          "DA_GuinsoosRageblade",
          "DA_HextechGunblade",
          "DA_KrakensFury"
        ]
      },
      {
        "unit": "Sivir",
        "items": [
          "DA_InfinityEdge",
          "DA_LastWhisper",
          "DA_RedBuff"
        ]
      }
    ]
  },
  {
    "id": "423015",
    "name": "DA_18_Executioner, DA_18_Malphite",
    "tier": "C",
    "units": [
      "Soraka",
      "Fiddlesticks",
      "Malphite",
      "Azir",
      "Zyra",
      "Amumu",
      "Yorick",
      "Kennen",
      "Yorick",
      "Sentinel",
      "Soraka",
      "GrompAP",
      "Amumu",
      "Zyra",
      "Sentry",
      "Malphite",
      "Krug",
      "Murkwolf",
      "Azir"
    ],
    "carries": [
      {
        "unit": "Malphite",
        "items": [
          "DA_Crownguard",
          "DA_GargoyleStoneplate",
          "DA_WarmogsArmor"
        ]
      },
      {
        "unit": "Zyra",
        "items": [
          "DA_18_EmblemExecutioner",
          "DA_SpearOfShojin",
          "DA_VoidStaff"
        ]
      }
    ]
  },
  {
    "id": "423016",
    "name": "DA_18_Fae, DA_18_Tristana, DA_18_Sivir",
    "tier": "C",
    "units": [
      "Vi",
      "Tristana",
      "Rammus",
      "Kobuko",
      "Rakan",
      "Xayah",
      "Sivir",
      "Lillia"
    ],
    "carries": [
      {
        "unit": "Sivir",
        "items": [
          "DA_18_EmblemFae",
          "DA_LastWhisper",
          "DA_RedBuff"
        ]
      },
      {
        "unit": "Tristana",
        "items": [
          "DA_GiantSlayer",
          "DA_GuinsoosRageblade",
          "DA_HextechGunblade"
        ]
      }
    ]
  },
  {
    "id": "423017",
    "name": "DA_Primal18, DA_Nidalee18_AP",
    "tier": "C",
    "units": [
      "Tristana",
      "Vi",
      "Shen",
      "Sivir",
      "Lillia",
      "Kennen",
      "NidaleeAP",
      "Ashe",
      "Amumu"
    ],
    "carries": [
      {
        "unit": "NidaleeAP",
        "items": [
          "DA_18_EmblemHunter",
          "DA_Bloodthirster",
          "DA_SteraksGage"
        ]
      },
      {
        "unit": "Sivir",
        "items": [
          "DA_InfinityEdge",
          "DA_RedBuff",
          "DA_StrikersFlail"
        ]
      }
    ]
  },
  {
    "id": "423018",
    "name": "DA_Riftbeast18, DA_18_Sentry",
    "tier": "C",
    "units": [
      "Sentry",
      "Krug",
      "Cinderling",
      "Murkwolf",
      "Scuttlecrab",
      "CrimsonRaptor",
      "Elder Dragon",
      "Brambleback",
      "Sentinel",
      "GnarSmall",
      "Malphite",
      "Brambleback",
      "Krug",
      "Murkwolf",
      "Scuttlecrab",
      "Cinderling",
      "Cinderling",
      "Sentry"
    ],
    "carries": [
      {
        "unit": "Elder Dragon",
        "items": [
          "DA_InfinityEdge",
          "DA_LastWhisper",
          "DA_StrikersFlail"
        ]
      },
      {
        "unit": "Sentry",
        "items": [
          "DA_BlueBuff",
          "DA_JeweledGauntlet",
          "DA_RabadonsDeathcap"
        ]
      }
    ]
  },
  {
    "id": "423019",
    "name": "DA_18_Invoker, DA_18_Morgana, DA_Brambleback18",
    "tier": "C",
    "units": [
      "Sentry",
      "KogMawAD",
      "Taric",
      "Hecarim",
      "Morgana",
      "Alune",
      "Brambleback",
      "Diana",
      "Sentinel"
    ],
    "carries": [
      {
        "unit": "Sentinel",
        "items": [
          "DA_GargoyleStoneplate",
          "DA_ProtectorsVow",
          "DA_WarmogsArmor"
        ]
      },
      {
        "unit": "Morgana",
        "items": [
          "DA_HextechGunblade",
          "DA_RedBuff",
          "DA_VoidStaff"
        ]
      }
    ]
  },
  {
    "id": "423020",
    "name": "DA_18_Adaptor, DA_18_MasterYi_AD",
    "tier": "D",
    "units": [
      "Rengar",
      "Yorick",
      "KogMawAD",
      "Master Yi",
      "Sett",
      "Vi",
      "NidaleeAP",
      "Krug"
    ],
    "carries": [
      {
        "unit": "Master Yi",
        "items": [
          "DA_18_EmblemBrawler",
          "DA_EdgeOfNight",
          "DA_GuinsoosRageblade"
        ]
      },
      {
        "unit": "Vi",
        "items": [
          "DA_BrambleVest",
          "DA_GargoyleStoneplate",
          "DA_WarmogsArmor"
        ]
      }
    ]
  },
  {
    "id": "423021",
    "name": "DA_18_Defender, DA_18_Cassiopeia",
    "tier": "D",
    "units": [
      "Ornn",
      "Leona",
      "Fiddlesticks",
      "Rammus",
      "Cassiopeia",
      "Soraka",
      "Shen",
      "Lillia"
    ],
    "carries": [
      {
        "unit": "Cassiopeia",
        "items": [
          "DA_ArchangelsStaff",
          "DA_ArchangelsStaff",
          "DA_HextechGunblade"
        ]
      },
      {
        "unit": "Fiddlesticks",
        "items": [
          "DA_ArchangelsStaff",
          "DA_ArchangelsStaff",
          "DA_TitansResolve"
        ]
      }
    ]
  },
  {
    "id": "423022",
    "name": "DA_18_Vanguard, DA_18_Aphelios",
    "tier": "D",
    "units": [
      "Diana",
      "CrimsonRaptor",
      "Varus",
      "Brambleback",
      "Sentinel",
      "Aphelios",
      "Xayah",
      "Rakan",
      "Amumu",
      "Scuttlecrab",
      "CrimsonRaptor",
      "Murkwolf"
    ],
    "carries": [
      {
        "unit": "Aphelios",
        "items": [
          "DA_Deathblade",
          "DA_GiantSlayer",
          "DA_RedBuff"
        ]
      },
      {
        "unit": "Sentinel",
        "items": [
          "DA_GargoyleStoneplate",
          "DA_ProtectorsVow",
          "DA_WarmogsArmor"
        ]
      }
    ]
  },
  {
    "id": "423023",
    "name": "DA_18_Sprykin, DA_18_Veigar",
    "tier": "D",
    "units": [
      "Veigar",
      "Rek'Sai",
      "Kobuko",
      "Fiddlesticks",
      "Teemo",
      "Rammus",
      "Tristana",
      "Alistar",
      "Rek'Sai",
      "Kobuko",
      "Kobuko",
      "Teemo",
      "Rammus",
      "Fiddlesticks",
      "Veigar",
      "Veigar"
    ],
    "carries": [
      {
        "unit": "Veigar",
        "items": [
          "DA_18_EmblemFloraFatalisAugment",
          "DA_BlueBuff",
          "DA_JeweledGauntlet"
        ]
      },
      {
        "unit": "Rek'Sai",
        "items": [
          "DA_GargoyleStoneplate",
          "DA_GargoyleStoneplate",
          "DA_WarmogsArmor"
        ]
      }
    ]
  },
  {
    "id": "423024",
    "name": "DA_18_Executioner, DA_18_Yunara",
    "tier": "D",
    "units": [
      "Yunara",
      "LeBlanc",
      "Alistar",
      "Soraka",
      "Ahri",
      "Ezreal",
      "Azir",
      "Sett",
      "Azir",
      "Ezreal",
      "Ahri",
      "Yunara",
      "Soraka",
      "LeBlanc",
      "Alistar",
      "Alistar",
      "LeBlanc",
      "Yunara"
    ],
    "carries": [
      {
        "unit": "Yunara",
        "items": [
          "DA_Deathblade",
          "DA_SpearOfShojin",
          "DA_StrikersFlail"
        ]
      },
      {
        "unit": "Alistar",
        "items": [
          "DA_BrambleVest",
          "DA_GargoyleStoneplate",
          "DA_WarmogsArmor"
        ]
      }
    ]
  }
];

// Expose globals for application
window.CHAMPION_RARITIES = CHAMPION_RARITIES;
window.ORIGIN_RARITIES = ORIGIN_RARITIES;
window.CLASS_RARITY = CLASS_RARITY;
window.CHAMPIONS = CHAMPIONS;
window.ORIGINS = ORIGINS;
window.CLASSES = CLASSES;
window.META_COMPS = META_COMPS;

const CARRY_CHAMPIONS = CHAMPIONS.filter(c => c.subRole === 'carry');
const TANK_CHAMPIONS = CHAMPIONS.filter(c => c.subRole === 'tank');

window.CARRY_CHAMPIONS = CARRY_CHAMPIONS;
window.TANK_CHAMPIONS = TANK_CHAMPIONS;
