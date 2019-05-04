var defaultItemGrid = [
    [
        "Bow",
        "Hookshot",
        "Hammer",
        "Bombs",
        "Bombchus",
        "Scale",
        "Glove",
    ],
    [
        "KokiriSword",
        "BiggoronSword",
        "MirrorShield",
        "ZoraTunic",
        "GoronTunic",
        "IronBoots",
        "HoverBoots",
    ],
    [
        "Dins",
        "Farores",
        "Nayrus",
        "Magic",
        "Fire",
        "Ice",
        "Light",
    ],
    [
        "Slingshot",
        "Boomerang",
        "Lens",
        "Ocarina",
        "Bottle",
        "ZoraLetter",
    ],
    [
        "Wallet",
        "Skulltula",
        "Child",
        "Adult",
    ],
    [
        "ZeldasLullaby",
        "EponasSong",
        "SunsSong",
        "SariasSong",
        "SongofTime",
        "SongofStorms",
    ],
    [
        "MinuetofForest",
        "BoleroofFire",
        "SerenadeofWater",
        "NocturneofShadow",
        "RequiemofSpirit",
        "PreludeofLight",
    ],
    [
        "ForestMedallion",
        "FireMedallion",
        "WaterMedallion",
        "ShadowMedallion",
        "SpiritMedallion",
        "LightMedallion",
    ],
    [
        "KokiriEmerald",
        "GoronRuby",
        "ZoraSapphire",
    ]
]


var baseItems = {
    Bow: 0,
    Hookshot: 0,
    Hammer: false,
    Slingshot: 0,
    Boomerang: false,
    Bombs: 0,
    Bombchus: false,
    Lens: false,
    Dins: false,
    Farores: false,
    Nayrus: false,
    Fire: false,
    Ice: false,
    Light: false,
    Ocarina: 0,
    Bottle: 0,
    Wallet: 0,
    Skulltula: 0,
    Child: 0,
    Adult: 0,

    KokiriSword: false,
    BiggoronSword: false,
    MirrorShield: false,
    GoronTunic: false,
    ZoraTunic: false,
    IronBoots: false,
    HoverBoots: false,
    Glove: 0,
    Scale: 0,
    StoneofAgony: false,
    Magic: 0,
    ZoraLetter: false,

    ZeldasLullaby: false,
    EponasSong: false,
    SunsSong: false,
    SariasSong: false,
    SongofTime: false,
    SongofStorms: false,
    MinuetofForest: false,
    PreludeofLight: false,
    BoleroofFire: false,
    SerenadeofWater: false,
    NocturneofShadow: false,
    RequiemofSpirit: false,

    KokiriEmerald: false,
    GoronRuby: false,
    ZoraSapphire: false,
    ForestMedallion: false,
    FireMedallion: false,
    WaterMedallion: false,
    SpiritMedallion: false,
    ShadowMedallion: false,
    LightMedallion: false,

    blank: false,
};

var itemsMin = {
    Bow: 0,
    Slingshot: 0,
    Bombs: 0,
    Hookshot: 0,
    Ocarina: 0,
    Bottle: 0,
    Glove: 0,
    Scale: 0,
    Magic: 0,
    Wallet: 0,
    Skulltula: 0,
    Child: 0,
    Adult: 0,
};

var itemsMax = {
    Bow: 3,
    Slingshot: 3,
    Bombs: 3,
    Hookshot: 2,
    Ocarina: 2,
    Bottle: 4,
    Glove: 3,
    Scale: 2,
    Magic: 2,
    Wallet: 2,
    Skulltula: 6,
    Child: 8,
    Adult: 11,
};

var items = Object.assign(baseItems);
