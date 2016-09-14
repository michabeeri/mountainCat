var Trail = {
    name: 'Bear Flat Trail',
    children: [] //ids of paths
}

var PathType = {
    NORMAL: 'NORMAL',
    STEEP: 'STEEP',
    CLIFF: 'CLIFF',
    CHASM: 'CHASM',
    RIVER: 'RIVER'
}

var path = {
    id: 'p001', // id
    from: 's001', // spot id
    to: 's002', // spot id
    trail: 't01', // trail id
    type: PathType.NORMAL,
    length: 8.0, // km
    speedFactor: 1, // no slowdown
    survivalChance: 1
}

var SpotAttributes = {
    WATER: 'WATER',
    CAMPABLE: 'CAMPABLE',
    WIND_SHELTER: 'WIND_PROTECTION',
    RAIN_SNOW_SHELTER: 'RAIN_SNOW_PROTECTION',
    STRUCTURE: 'STRUCTURE',
    FIREWOOD: 'FIREWOOD',
    FOOD: 'FOOD',
    MOUNTAINEERING_GEAR: 'MOUNTAINEERING_GEAR'
}

var Spot = {
    id: 's001', // id
    paths: ['p001'], // paths ids
    name: '', //name
    attributes: []
}

var EffectTypes = {
    ADRENALINE_RUSH: 'ADRENALINE_RUSH',
    FEVER: 'FEVER',
    SPRAINED_ANKLE: 'SPRAINED_ANKLE',
    BLEEDING: 'BLEEDING',
    BROKEN_LEG: 'BROKEN_LEG',
    BROKEN_HAND: 'BROKEN_HAND',
    POISONING: 'POISONING',
    SNAKE_BITE: 'SNAKE_BITE',
    INTERNAL_INJURY: 'INTERNAL_INJURY',
    LOST: 'LOST'
}

var player = {
    Hunger: 0,
    Thirst: 0,
    Cold: 0,
    exhaustion: 0,
    HP: 1,
    effects: []
}
