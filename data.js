// data.js - Contém todos os dados de configuração estáticos para o jogo Defesa do Castelo.

// ### INÍCIO: Definição dos Mods e Modpacks Padrão ###

const NIGHTMARE_MODS = [
    {
        id: 'nightmare_abomination',
        type: 'monster',
        name: 'Abominação Rastejante',
        health: 80,
        damage: 4,
        speed: 0.4,
        money: 40,
        spawnWaves: [8, 12, 16, 20],
        spawnCount: 1,
        isFlying: false,
        width: 50,
        height: 35,
        gridWidth: 16,
        gridHeight: 16,
        abilities: [{ type: 'regen', amount: 1, interval: 1000 }],
        pixelData: ['transparent','transparent','transparent','transparent','#2E0A2E','#3A0C3A','#3A0C3A','#2E0A2E','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#2E0A2E','#3A0C3A','#460E46','#521052','#521052','#460E46','#3A0C3A','#2E0A2E','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#3A0C3A','#521052','#691469','#751675','#751675','#691469','#521052','#460E46','#3A0C3A','transparent','transparent','transparent','transparent','transparent','transparent','#3A0C3A','#521052','#691469','#811881','#811881','#811881','#691469','#521052','#3A0C3A','transparent','transparent','transparent','transparent','transparent','transparent','#460E46','#691469','#811881','#811881','#9D1C9D','#811881','#811881','#691469','#460E46','#3A0C3A','transparent','transparent','transparent','transparent','#521052','#751675','#8D1A8D','#9D1C9D','#9D1C9D','#8D1A8D','#811881','#691469','#521052','#460E46','transparent','transparent','transparent','transparent','#3A0C3A','#521052','#811881','#9D1C9D','#FF0000','#9D1C9D','#9D1C9D','#811881','#691469','#460E46','#3A0C3A','transparent','transparent','transparent','#2E0A2E','#460E46','#691469','#811881','#9D1C9D','#9D1C9D','#9D1C9D','#811881','#811881','#691469','#460E46','#2E0A2E','transparent','transparent','transparent','transparent','#3A0C3A','#521052','#691469','#811881','#8D1A8D','#811881','#691469','#521052','#3A0C3A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#2E0A2E','#460E46','#521052','#691469','#521052','#460E46','#2E0A2E','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#3A0C3A','#3A0C3A','#3A0C3A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    },
    {
        id: 'nightmare_spectre',
        type: 'monster',
        name: 'Espectro Caçador',
        health: 25,
        damage: 3.5,
        speed: 2.0,
        money: 25,
        spawnWaves: [10, 14, 18, 22],
        spawnCount: 2,
        isFlying: true,
        width: 30,
        height: 55,
        gridWidth: 16,
        gridHeight: 16,
        pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#3C3C3C','#3C3C3C','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#2B2B2B','#3C3C3C','#FFFFFF','#FFFFFF','#3C3C3C','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#3C3C3C','#3C3C3C','#3C3C3C','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#3C3C3C','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#1A1A1A','transparent','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    },
    {
        id: 'nightmare_abyss_eye',
        type: 'monster',
        name: 'Olho do Abismo',
        health: 40,
        damage: 1,
        speed: 0.8,
        money: 50,
        spawnWaves: [15, 19, 23],
        spawnCount: 1,
        isFlying: true,
        width: 45,
        height: 45,
        gridWidth: 16,
        gridHeight: 16,
        attackType: 'ranged',
        projectile: { type: 'corrupting_bolt', damage: 15, speed: 5, cooldown: 3000, range: 450 },
        pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#1A1A1A','#1A1A1A','#1A1A1A','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#2B2B2B','#3C3C3C','#3C3C3C','#2B2B2B','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#3C3C3C','#4F4F4F','#691469','#691469','#4F4F4F','#3C3C3C','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','#2B2B2B','#4F4F4F','#691469','#8D1A8D','#8D1A8D','#8D1A8D','#691469','#4F4F4F','#2B2B2B','transparent','transparent','transparent','transparent','#2B2B2B','#691469','#8D1A8D','#FF0000','#FF0000','#8D1A8D','#8D1A8D','#691469','#2B2B2B','transparent','transparent','transparent','transparent','#3C3C3C','#691469','#8D1A8D','#FF0000','#000000','#FF0000','#8D1A8D','#691469','#3C3C3C','transparent','transparent','transparent','transparent','#3C3C3C','#691469','#8D1A8D','#FF0000','#FF0000','#8D1A8D','#8D1A8D','#691469','#3C3C3C','transparent','transparent','transparent','transparent','#2B2B2B','#691469','#8D1A8D','#8D1A8D','#8D1A8D','#8D1A8D','#8D1A8D','#691469','#2B2B2B','transparent','transparent','transparent','transparent','#2B2B2B','#4F4F4F','#691469','#691469','#691469','#691469','#691469','#4F4F4F','#2B2B2B','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#3C3C3C','#4F4F4F','#4F4F4F','#4F4F4F','#3C3C3C','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#2B2B2B','#2B2B2B','#2B2B2B','#2B2B2B','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#1A1A1A','#1A1A1A','#1A1A1A','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    }
];
const NIGHTMARE_MODPACK = {
    id: 'default_nightmare_mode',
    name: 'NIGHTMARE MODE',
    mods: ['nightmare_abomination', 'nightmare_spectre', 'nightmare_abyss_eye'],
    active: false,
    isDefault: true
};
const GOLD_RUSH_MODS = [
    {
        id: 'gr_thief_goblin',
        type: 'monster',
        name: 'Goblin Ladrão',
        health: 15,
        damage: 0,
        speed: 2.5,
        money: 1,
        spawnWaves: [3, 6, 9, 12, 15],
        spawnCount: 3,
        isFlying: false,
        width: 30,
        height: 40,
        gridWidth: 16,
        gridHeight: 16,
        abilities: [{ type: 'steal_money', percentage: 0.1 }],
        pixelData: ['transparent','transparent','transparent','transparent','transparent','#228B22','#228B22','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#228B22','#006400','#006400','#006400','#228B22','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#228B22','#3CB371','#000000','#000000','#3CB371','#228B22','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#228B22','#3CB371','#3CB371','#3CB371','#228B22','transparent','transparent','transparent','#D2691E','#A0522D','transparent','transparent','transparent','#D2691E','#A0522D','#006400','#228B22','#228B22','#A0522D','#D2691E','transparent','transparent','#D2691E','#A0522D','#A0522D','transparent','transparent','#D2691E','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#D2691E','transparent','#A0522D','#FFD700','#FFD700','#A0522D','transparent','#D2691E','#FFD700','#FFD700','#FFD700','#FFD700','#FFD700','#FFD700','#D2691E','#A0522D','#FFD700','#B8860B','#FFD700','#A0522D','#D2691E','#FFD700','#FFD700','#B8860B','#FFD700','#FFD700','#FFD700','#D2691E','#A0522D','#FFD700','#FFD700','#FFD700','#A0522D','#D2691E','#FFD700','#FFD700','#FFD700','#FFD700','#FFD700','#FFD700','#D2691E','#A0522D','#A0522D','#A0522D','#A0522D','#D2691E','#A0522D','#B8860B','#B8860B','#B8860B','#B8860B','#B8860B','#B8860B','#D2691E','transparent','#D2691E','#D2691E','#D2691E','transparent','transparent','#228B22','#228B22','#228B22','#228B22','#228B22','#228B22','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#006400','#006400','transparent','transparent','#006400','#006400','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    },
    {
        id: 'gr_golden_golem',
        type: 'monster',
        name: 'Golem Dourado',
        health: 2000,
        damage: 2,
        speed: 0.2,
        money: 800,
        spawnWaves: [10, 20],
        spawnCount: 1,
        isFlying: false,
        width: 70,
        height: 70,
        gridWidth: 16,
        gridHeight: 16,
        pixelData: ['transparent','transparent','transparent','#808080','#696969','#696969','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#808080','#696969','#FFD700','#B8860B','#696969','#696969','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A9A9A9','#808080','#FFD700','#FFD700','#B8860B','#B8860B','#808080','#A9A9A9','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A9A9A9','#808080','#808080','#808080','#808080','#808080','#A9A9A9','transparent','transparent','transparent','transparent','transparent','transparent','#696969','#A9A9A9','#808080','#808080','#808080','#808080','#A9A9A9','#FFD700','#B8860B','#696969','transparent','transparent','transparent','#808080','#FFD700','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#B8860B','#FFD700','#808080','transparent','transparent','transparent','#696969','#B8860B','#A9A9A9','#C0C0C0','#C0C0C0','#A9A9A9','#A9A9A9','#FFD700','#B8860B','#696969','transparent','transparent','transparent','#808080','#FFD700','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#B8860B','#FFD700','#808080','transparent','transparent','transparent','#696969','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#696969','transparent','transparent','transparent','transparent','transparent','#696969','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#A9A9A9','#696969','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#808080','#A9A9A9','#FFD700','#B8860B','#A9A9A9','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#696969','#808080','#808080','#808080','#696969','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#696969','#696969','transparent','transparent','#696969','#696969','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    },
    {
        id: 'gr_mimic',
        type: 'monster',
        name: 'Mímico',
        health: 120,
        damage: 25,
        speed: 1.5,
        money: 150,
        spawnWaves: [8, 14, 18],
        spawnCount: 1,
        isFlying: false,
        width: 45,
        height: 40,
        gridWidth: 16,
        gridHeight: 16,
        abilities: [{ type: 'disguise' }],
        pixelData: ['transparent','transparent','#A0522D','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#A0522D','transparent','transparent','transparent','transparent','transparent','#8B4513','#FFD700','#FFD700','#A0522D','#A0522D','#A0522D','#A0522D','#FFD700','#FFD700','#8B4513','transparent','transparent','transparent','transparent','#A0522D','#FFD700','#8B4513','#D2691E','#D2691E','#D2691E','#D2691E','#8B4513','#FFD700','#A0522D','transparent','transparent','transparent','transparent','#A0522D','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#A0522D','transparent','transparent','transparent','transparent','#A0522D','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#D2691E','#A0522D','transparent','transparent','transparent','transparent','#8B4513','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#8B4513','transparent','transparent','transparent','transparent','transparent','#A0522D','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#FFFFFF','#FFFFFF','#A0522D','#A0522D','#FFFFFF','#FFFFFF','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#FFFFFF','#FFFFFF','#8B4513','#8B4513','#FFFFFF','#FFFFFF','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    },
    {
        id: 'gr_bait_barricade',
        type: 'barricade',
        name: 'Barricada Isca',
        health: 25,
        cost: 10,
        width: 40,
        height: 40,
        gridWidth: 16,
        gridHeight: 16,
        pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#8B4513','#FFD700','#FFD700','#FFD700','#8B4513','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#8B4513','#FFD700','#B8860B','#FFD700','#8B4513','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#8B4513','#FFD700','#FFD700','#FFD700','#8B4513','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    },
    {
        id: 'gr_mercenary',
        type: 'guardian',
        name: 'Mercenário',
        cost: 800,
        damage: 250,
        cooldown: 3000,
        range: 500,
        projectileSpeed: 15,
        projectileSize: 12,
        projectileColor: '#FF4500',
        width: 40,
        height: 50,
        gridWidth: 16,
        gridHeight: 16,
        pixelData: ['transparent','transparent','transparent','transparent','#2F4F4F','#2F4F4F','#2F4F4F','#2F4F4F','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#2F4F4F','#36454F','#36454F','#36454F','#2F4F4F','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#2F4F4F','#C0C0C0','#808080','#808080','#C0C0C0','#2F4F4F','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#36454F','#C0C0C0','#C0C0C0','#C0C0C0','#C0C0C0','#36454F','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#DEB887','#FFE4C4','#FFE4C4','#DEB887','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#36454F','#DEB887','#8B0000','#DEB887','#36454F','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#2F4F4F','#36454F','#DEB887','#DEB887','#36454F','#2F4F4F','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','#8B4513','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#36454F','#36454F','#36454F','#36454F','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#36454F','#transparent','#transparent','#36454F','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A0522D','#A0522D','transparent','transparent','#A0522D','#A0522D','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    }
];
const GOLD_RUSH_MODPACK = {
    id: 'default_gold_rush',
    name: 'GOLD RUSH',
    mods: ['gr_thief_goblin', 'gr_golden_golem', 'gr_mimic', 'gr_bait_barricade', 'gr_mercenary'],
    active: false,
    isDefault: true
};
const CYBER_SIEGE_MODS = [
    {
        id: 'cs_attack_drone',
        type: 'monster',
        name: 'Drone de Ataque',
        health: 20,
        damage: 1,
        speed: 1.8,
        money: 8,
        spawnWaves: [4, 7, 11, 15],
        spawnCount: 5,
        isFlying: true,
        width: 35,
        height: 35,
        gridWidth: 16,
        gridHeight: 16,
        attackType: 'ranged',
        projectile: { type: 'laser_bolt', damage: 3, speed: 8, cooldown: 1200, range: 350 },
        pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#505050','#505050','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#505050','#606060','#707070','#707070','#606060','#505050','transparent','transparent','transparent','transparent','transparent','transparent','#707070','#808080','#909090','#909090','#808080','#707070','transparent','#404040','#404040','transparent','transparent','transparent','#404040','#505050','#909090','#FF0000','#909090','#505050','#404040','transparent','#505050','#505050','transparent','transparent','#505050','#606060','#808080','#A0A0A0','#A0A0A0','#808080','#606060','#505050','transparent','transparent','transparent','transparent','transparent','#505050','#606060','#707070','#707070','#606060','#505050','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#505050','#505050','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    },
    {
        id: 'cs_brute_unit',
        type: 'monster',
        name: 'Unidade Brutamontes',
        health: 250,
        damage: 8,
        speed: 0.4,
        money: 40,
        spawnWaves: [9, 13, 17, 21],
        spawnCount: 2,
        isFlying: false,
        width: 60,
        height: 55,
        gridWidth: 16,
        gridHeight: 16,
        abilities: [{ type: 'energy_shield', shieldHealth: 150 }],
        pixelData: ['transparent','transparent','#404040','#505050','#606060','#606060','#505050','#404040','#404040','#505050','#606060','#606060','#505050','#404040','transparent','transparent','transparent','#505050','#707070','#808080','#909090','#909090','#808080','#707070','#707070','#808080','#909090','#909090','#808080','#707070','#505050','transparent','transparent','#606060','#808080','#A0A0A0','#A0A0A0','#A0A0A0','#A0A0A0','#808080','#808080','#A0A0A0','#A0A0A0','#A0A0A0','#A0A0A0','#808080','#606060','transparent','transparent','#606060','#808080','#00FFFF','#00FFFF','#00FFFF','#A0A0A0','#808080','#808080','#A0A0A0','#00FFFF','#00FFFF','#00FFFF','#808080','#606060','transparent','transparent','#505050','#707070','#808080','#A0A0A0','#A0A0A0','#808080','#707070','#707070','#808080','#A0A0A0','#A0A0A0','#808080','#707070','#505050','transparent','transparent','#404040','#606060','#707070','#808080','#808080','#707070','#606060','#606060','#707070','#808080','#808080','#707070','#606060','#404040','transparent','transparent','transparent','#404040','#505050','#606060','#606060','#505050','#404040','#404040','#505050','#606060','#606060','#505050','#404040','transparent','transparent','transparent','transparent','#303030','#404040','#404040','#303030','transparent','transparent','transparent','#303030','#404040','#404040','#303030','transparent','transparent','transparent','transparent','#202020','#303030','#303030','#202020','transparent','transparent','transparent','#202020','#303030','#303030','#202020','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    },
    {
        id: 'cs_emp_disruptor',
        type: 'monster',
        name: 'Disruptor PEM',
        health: 80,
        damage: 0,
        speed: 0.9,
        money: 30,
        spawnWaves: [12, 16, 20],
        spawnCount: 1,
        isFlying: false,
        width: 50,
        height: 40,
        gridWidth: 16,
        gridHeight: 16,
        abilities: [{ type: 'emp_blast', range: 250, duration: 5000 }],
        pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#303030','#404040','#404040','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#404040','#303030','transparent','transparent','#303030','#505050','#606060','#606060','#606060','#606060','#606060','#606060','#606060','#606060','#606060','#505050','#303030','transparent','transparent','#404050','#606070','#808090','#00BFFF','#00BFFF','#808090','#808090','#00BFFF','#00BFFF','#808090','#606070','#404050','transparent','transparent','transparent','#404050','#606070','#808090','#808090','#808090','#606070','#606070','#808090','#808090','#808090','#606070','#404050','transparent','transparent','transparent','#303030','#505050','#606060','#606060','#505050','#505050','#606060','#606060','#505050','#303030','transparent','transparent','transparent','transparent','#303030','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#303030','transparent','transparent','transparent','transparent','#303030','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#303030','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    },
    {
        id: 'cs_plasma_turret',
        type: 'guardian',
        name: 'Torre de Plasma',
        cost: 220,
        damage: 60,
        cooldown: 2500,
        range: 300,
        projectileSpeed: 4,
        projectileSize: 20,
        projectileColor: '#00FF00',
        width: 40,
        height: 50,
        gridWidth: 16,
        gridHeight: 16,
        pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#606060','#707070','#707070','#606060','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#606060','#808080','#909090','#808080','#606060','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#00FF00','#00FF00','#00FF00','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#505050','#00FF00','#505050','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#505050','#606060','#505050','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#505050','#606060','#505050','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#505050','#606060','#707070','#707070','#606060','#505050','transparent','transparent','transparent','transparent','transparent','transparent','#303030','#404040','#505050','#505050','#404040','#303030','transparent','transparent','transparent','transparent','transparent','transparent','#303030','#404040','#404040','#404040','#404040','#303030','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    },
    {
        id: 'cs_tesla_cannon',
        type: 'guardian',
        name: 'Canhão Tesla',
        cost: 300,
        damage: 15,
        cooldown: 1800,
        range: 280,
        projectileSpeed: 20,
        projectileSize: 5,
        projectileColor: '#00FFFF',
        abilities: [{ type: 'chain_lightning', chains: 3, bounceRange: 100 }],
        width: 40,
        height: 50,
        gridWidth: 16,
        gridHeight: 16,
        pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','#00FFFF','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#00FFFF','#C0C0C0','#00FFFF','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#00FFFF','#C0C0C0','#C0C0C0','#C0C0C0','#00FFFF','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#606060','#808080','#A0A0A0','#808080','#606060','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#606060','#808080','#606060','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#505050','#606060','#505050','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#404040','#505050','#606060','#505050','#404040','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#505050','#606060','#707070','#707070','#606060','#505050','transparent','transparent','transparent','transparent','transparent','transparent','#303030','#404040','#505050','#505050','#404040','#303030','transparent','transparent','transparent','transparent','transparent','transparent','#303030','#404040','#404040','#404040','#404040','#303030','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    }
];
const CYBER_SIEGE_MODPACK = {
    id: 'default_cyber_siege',
    name: 'CYBER SIEGE',
    mods: ['cs_attack_drone', 'cs_brute_unit', 'cs_emp_disruptor', 'cs_plasma_turret', 'cs_tesla_cannon'],
    active: false,
    isDefault: true
};
const ELEMENTAL_FURY_MODS = [
    {
        id: 'ef_magma_elemental',
        type: 'monster',
        name: 'Elemental de Magma',
        health: 150,
        damage: 5,
        speed: 0.6,
        money: 25,
        spawnWaves: [5, 10, 15, 20],
        spawnCount: 3,
        isFlying: false,
        width: 45,
        height: 55,
        gridWidth: 16,
        gridHeight: 16,
        abilities: [{ type: 'immunity', damageType: 'fire' }, { type: 'lava_trail' }],
        pixelData: ['transparent','transparent','transparent','#401000','#8B0000','#FF4500','#8B0000','#401000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#8B0000','#FF4500','#FFA500','#FFA500','#FF4500','#8B0000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#8B0000','#FF4500','#FF4500','#FF4500','#FF4500','#8B0000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#FF4500','#FFA500','#FFFF00','#FFFF00','#FFA500','#FF4500','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#FF4500','#FFA500','#FFA500','#FFA500','#FF4500','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#8B0000','#FF4500','#FF4500','#FF4500','#FF4500','#8B0000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#401000','#8B0000','#FFA500','#FFA500','#8B0000','#401000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#401000','#8B0000','#8B0000','#401000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#8B0000','#401000','#401000','#8B0000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#FF4500','#8B0000','transparent','transparent','#8B0000','#FF4500','transparent','transparent','transparent','transparent','transparent','transparent','#FFA500','#401000','transparent','transparent','#401000','#FFA500','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    },
    {
        id: 'ef_ice_golem',
        type: 'monster',
        name: 'Golem de Gelo',
        health: 300,
        damage: 10,
        speed: 0.3,
        money: 50,
        spawnWaves: [12, 18, 22],
        spawnCount: 1,
        isFlying: false,
        width: 60,
        height: 65,
        gridWidth: 16,
        gridHeight: 16,
        abilities: [{ type: 'immunity', effectType: 'slow' }, { type: 'frost_nova', chance: 0.2 }],
        pixelData: ['transparent','transparent','transparent','#F0F8FF','#FFFFFF','#FFFFFF','#F0F8FF','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#ADD8E6','#F0F8FF','#FFFFFF','#FFFFFF','#F0F8FF','#ADD8E6','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#87CEEB','#ADD8E6','#F0F8FF','#FFFFFF','#F0F8FF','#ADD8E6','#87CEEB','transparent','transparent','transparent','transparent','transparent','transparent','#87CEEB','#ADD8E6','#ADD8E6','#ADD8E6','#ADD8E6','#87CEEB','transparent','transparent','transparent','transparent','transparent','#B0E0E6','#87CEEB','#ADD8E6','#ADD8E6','#ADD8E6','#ADD8E6','#87CEEB','#B0E0E6','transparent','transparent','transparent','#F0F8FF','#B0E0E6','#87CEEB','#87CEEB','#87CEEB','#87CEEB','#87CEEB','#B0E0E6','#F0F8FF','transparent','transparent','#FFFFFF','#F0F8FF','#B0E0E6','#B0E0E6','#B0E0E6','#B0E0E6','#B0E0E6','#B0E0E6','#F0F8FF','#FFFFFF','transparent','transparent','#ADD8E6','#F0F8FF','#B0E0E6','#B0E0E6','#B0E0E6','#B0E0E6','#B0E0E6','#F0F8FF','#ADD8E6','transparent','transparent','transparent','transparent','#ADD8E6','#F0F8FF','#B0E0E6','#B0E0E6','#F0F8FF','#ADD8E6','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#87CEEB','#ADD8E6','#ADD8E6','#ADD8E6','#87CEEB','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#B0E0E6','#87CEEB','transparent','transparent','#87CEEB','#B0E0E6','transparent','transparent','transparent','transparent','transparent','transparent','#F0F8FF','#ADD8E6','transparent','transparent','#ADD8E6','#F0F8FF','transparent','transparent','transparent','transparent','transparent']
    },
    {
        id: 'ef_storm_spirit',
        type: 'monster',
        name: 'Espírito da Tempestade',
        health: 70,
        damage: 3,
        speed: 1.2,
        money: 35,
        spawnWaves: [9, 14, 19],
        spawnCount: 2,
        isFlying: true,
        width: 40,
        height: 60,
        gridWidth: 16,
        gridHeight: 16,
        abilities: [{ type: 'blink', interval: 4000, duration: 1500 }],
        pixelData: ['transparent','transparent','transparent','transparent','transparent','#FFFF00','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#808080','#A9A9A9','#A9A9A9','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A9A9A9','#C0C0C0','#FFFFFF','#FFFFFF','#C0C0C0','#A9A9A9','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#C0C0C0','#FFFFFF','#D3D3D3','#D3D3D3','#FFFFFF','#C0C0C0','transparent','transparent','transparent','transparent','transparent','transparent','#A9A9A9','#C0C0C0','#FFFFFF','#FFFFFF','#C0C0C0','#A9A9A9','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#808080','#A9A9A9','#C0C0C0','#A9A9A9','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A9A9A9','#C0C0C0','#C0C0C0','#A9A9A9','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#808080','#A9A9A9','#A9A9A9','#A9A9A9','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A9A9A9','#C0C0C0','#808080','#A9A9A9','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#808080','#A9A9A9','#A9A9A9','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#A9A9A9','#808080','#808080','#A9A9A9','transparent','transparent','transparent','transparent','transparent','transparent','#808080','#A9A9A9','transparent','#A9A9A9','#808080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    },
    {
        id: 'ef_fire_mage',
        type: 'guardian',
        name: 'Mago de Fogo',
        cost: 250,
        damage: 20,
        cooldown: 2000,
        range: 320,
        projectileSpeed: 8,
        projectileSize: 15,
        projectileColor: '#FF4500',
        abilities: [{ type: 'apply_burn', dps: 5, duration: 3000 }],
        width: 40,
        height: 50,
        gridWidth: 16,
        gridHeight: 16,
        pixelData: ['transparent','transparent','transparent','transparent','#8B0000','#8B0000','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#B22222','#FF4500','#FF4500','#B22222','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#B22222','#FF4500','#FFA500','#FF4500','#B22222','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#4B0082','#6A5ACD','#6A5ACD','#4B0082','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#4B0082','#DEB887','#FFFF00','#DEB887','#4B0082','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#4B0082','#6A5ACD','#DEB887','#6A5ACD','#4B0082','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#800080','#4B0082','#4B0082','#800080','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#800080','#800080','#4B0082','#4B0082','#4B0082','#800080','transparent','transparent','transparent','transparent','transparent','transparent','#4B0082','#800080','#4B0082','#4B0082','#800080','#4B0082','transparent','transparent','transparent','transparent','transparent','transparent','#4B0082','#4B0082','transparent','transparent','#4B0082','#4B0082','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    },
    {
        id: 'ef_freezing_tower',
        type: 'guardian',
        name: 'Torre Congelante',
        cost: 180,
        damage: 10,
        cooldown: 2200,
        range: 250,
        projectileSpeed: 6,
        projectileSize: 18,
        projectileColor: '#00FFFF',
        abilities: [{ type: 'area_slow', radius: 60, slowFactor: 0.5 }],
        width: 40,
        height: 50,
        gridWidth: 16,
        gridHeight: 16,
        pixelData: ['transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#87CEEB','#ADD8E6','#ADD8E6','#87CEEB','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#87CEEB','#F0F8FF','#FFFFFF','#F0F8FF','#87CEEB','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#4682B4','#87CEEB','#00FFFF','#87CEEB','#4682B4','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#4682B4','#5F9EA0','#87CEEB','#5F9EA0','#4682B4','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#4682B4','#5F9EA0','#5F9EA0','#5F9EA0','#4682B4','transparent','transparent','transparent','transparent','transparent','transparent','transparent','#4682B4','#5F9EA0','#5F9EA0','#5F9EA0','#4682B4','transparent','transparent','transparent','transparent','transparent','transparent','#1E90FF','#4682B4','#5F9EA0','#5F9EA0','#4682B4','#1E90FF','transparent','transparent','transparent','transparent','transparent','#0000CD','#1E90FF','#4682B4','#4682B4','#1E90FF','#0000CD','transparent','transparent','transparent','transparent','transparent','#00008B','#0000CD','#1E90FF','#1E90FF','#0000CD','#00008B','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent','transparent']
    }
];
const ELEMENTAL_FURY_MODPACK = {
    id: 'default_elemental_fury',
    name: 'ELEMENTAL FURY',
    mods: ['ef_magma_elemental', 'ef_ice_golem', 'ef_storm_spirit', 'ef_fire_mage', 'ef_freezing_tower'],
    active: false,
    isDefault: true
};

// --- Configurações do Jogo ---
const weapons = [ { name: "Cuspe", damage: 2, cost: 0, cooldown: 500, color: '#add8e6', size: 8, speed: 8, cssClass: 'spit' }, { name: "Pedra", damage: 8, cost: 50, cooldown: 400, color: '#8B4513', size: 12, speed: 10, cssClass: 'stone' }, { name: "Bomba de Tinta", damage: 20, cost: 150, cooldown: 800, color: '#FF00FF', size: 20, speed: 6, cssClass: 'ink', effect: 'slow' }, { name: "Bola de Fogo", damage: 50, cost: 400, cooldown: 1200, color: '#FF4500', size: 25, speed: 7, cssClass: 'fire' }, { name: "Papergun", damage: 10, cost: 500, cooldown: 250, color: '#e9ecef', size: 10, speed: 12, cssClass: 'paper' } ];
const baseBarricadeTypes = [ { id: 'barricade_wood', name: "Madeira", health: 10, cost: 15, width: 40, height: 60, color: '#a0522d', border: '2px solid #8b4513' }, { id: 'barricade_blue', name: "Azul", health: 20, cost: 30, width: 45, height: 65, color: '#4682b4', border: '2px solid #36648b' }, { id: 'barricade_stone', name: "Pedra", health: 35, cost: 60, width: 50, height: 70, color: '#808080', border: '3px solid #696969' }, { id: 'barricade_metal', name: "Metal", health: 80, cost: 120, width: 55, height: 75, color: '#c0c0c0', border: '4px solid #a9a9a9' } ];
const baseMonsterTypes = [ { id:'goblin', name: "Goblin", health: 10, damage: 1.5, speed: 1.0, money: 5, width: 30, height: 30, elementCreator: createGoblinElement }, { id:'bat', name: "Morcego", health: 8, damage: 0.5, speed: 1.8, money: 3, width: 30, height: 20, elementCreator: createBatElement, isFlying: true }, { id:'slime', name: "Slime", health: 20, damage: 2, speed: 0.8, money: 10, width: 45, height: 45, elementCreator: createSlimeElement }, { id:'zombie', name: "Zumbi", health: 30, damage: 2.5, speed: 0.7, money: 15, width: 40, height: 50, elementCreator: createZombieElement }, { id:'skeleton', name: "Esqueleto", health: 25, damage: 1, speed: 1.2, money: 20, width: 40, height: 50, elementCreator: createSkeletonElement, attackType: 'ranged', projectile: { type: 'arrow', damage: 5, speed: 7, cooldown: 1500, range: 300 } }, { id:'ghost', name: "Fantasma", health: 15, damage: 1.0, speed: 1.5, money: 25, width: 40, height: 50, elementCreator: createGhostElement, isFlying: true }, { id:'ogre', name: "Ogre", health: 60, damage: 5, speed: 0.5, money: 30, width: 60, height: 60, elementCreator: createOgreElement }, { id:'dark-mage', name: "Mago Sombrio", health: 30, damage: 2, speed: 0.9, money: 35, width: 40, height: 50, elementCreator: createDarkMageElement, attackType: 'ranged', projectile: { type: 'magic-orb', damage: 10, speed: 6, cooldown: 2000, range: 400 } }, { id:'stone-golem', name: "Golem de Pedra", health: 100, damage: 7, speed: 0.3, money: 50, width: 60, height: 60, elementCreator: createStoneGolemElement }, { id:'dragon', name: "Dragão", health: 250, damage: 15, speed: 0.4, money: 100, width: 80, height: 70, elementCreator: createDragonElement, isFlying: true, attackType: 'ranged', projectile: { type: 'fireball', damage: 20, speed: 5, cooldown: 2500, range: 500 } }, ];
const specialItems = { 'full_heal': { name: "Recuperação Total", cost: 15, costType: 'diamond' } };
const castles = {
    'wood': [ { name: "Madeira", cost: 0, maxHealth: 30, abilities: [], cssClass: 'castle-wood' } ],
    'clay': [ { name: "Barro", cost: 50, maxHealth: 20, abilities: [{ type: 'regen', amount: 1, interval: 2000 }], cssClass: 'castle-clay' }, { name: "Barro", cost: 35, maxHealth: 25, abilities: [{ type: 'regen', amount: 1, interval: 1300 }], cssClass: 'castle-clay castle-clay-1' }, { name: "Barro", cost: 70, maxHealth: 25, abilities: [{ type: 'regen', amount: 1, interval: 1000 }], cssClass: 'castle-clay castle-clay-2' }, { name: "Barro", cost: 180, maxHealth: 35, abilities: [{ type: 'regen', amount: 1, interval: 600 }], cssClass: 'castle-clay castle-clay-3' }, ],
    'stone': [ { name: "Pedra", cost: 200, maxHealth: 30, abilities: [{ type: 'auto-attack', weaponIndex: 1, interval: 1000 }], cssClass: 'castle-stone' }, { name: "Pedra", cost: 150, maxHealth: 35, abilities: [{ type: 'auto-attack', weaponIndex: 1, damage: 10, interval: 1000 }], cssClass: 'castle-stone castle-stone-1' }, { name: "Pedra", cost: 325, maxHealth: 40, abilities: [{ type: 'auto-attack', weaponIndex: 1, damage: 15, interval: 1000 }], cssClass: 'castle-stone castle-stone-2' }, { name: "Pedra", cost: 690, maxHealth: 50, abilities: [{ type: 'auto-attack', weaponIndex: 2, interval: 1000 }], cssClass: 'castle-stone castle-stone-3' }, ],
    'aluminum': [ { name: "Alumínio", cost: 400, maxHealth: 60, abilities: [], cssClass: 'castle-aluminum' }, { name: "Alumínio", cost: 200, maxHealth: 80, abilities: [], cssClass: 'castle-aluminum castle-aluminum-1' }, { name: "Alumínio", cost: 430, maxHealth: 95, abilities: [], cssClass: 'castle-aluminum castle-aluminum-2' }, { name: "Alumínio", cost: 900, maxHealth: 145, abilities: [], cssClass: 'castle-aluminum castle-aluminum-3' }, ],
    'emerald': [ { name: "Esmeralda", cost: 50, maxHealth: 40, abilities: [{ type: 'generate-money', amount: 30, interval: 10000 }], cssClass: 'castle-emerald', costType: 'diamond' } ]
};
const baseGuardianTypes = {
    'archer': { id: 'archer', name: 'Arqueiro', evolutions: [ { cost: 75, damage: 6, cooldown: 1000, range: 350 }, { cost: 150, damage: 9, cooldown: 850, range: 400 }, { cost: 300, damage: 14, cooldown: 700, range: 450 }, { cost: 550, damage: 20, cooldown: 650, range: 475 } ], projectile: { speed: 10, size: 8, color: '#8B4513', cssClass: 'arrow' }, width: 40, height: 50 },
    'cannon': { id: 'cannon', name: 'Canhão', evolutions: [ { cost: 200, damage: 40, cooldown: 4500, range: 280, aoeRadius: 40 }, { cost: 350, damage: 65, cooldown: 4200, range: 320, aoeRadius: 50 }, { cost: 600, damage: 90, cooldown: 4000, range: 350, aoeRadius: 60 }, { cost: 1100, damage: 125, cooldown: 3800, range: 370, aoeRadius: 65 } ], projectile: { speed: 5, size: 18, color: '#333', cssClass: 'cannonball' }, width: 40, height: 50 },
    'ice_mage': { id: 'ice_mage', name: 'Mago Gelo', evolutions: [ { cost: 180, damage: 5, cooldown: 2000, range: 300 }, { cost: 300, damage: 8, cooldown: 1800, range: 350 }, { cost: 550, damage: 12, cooldown: 1600, range: 400 }, { cost: 900, damage: 18, cooldown: 1500, range: 425 } ], projectile: { speed: 7, size: 12, color: '#00c0ff', cssClass: 'ice_bolt', effect: 'slow' }, width: 40, height: 50 },
    'machine_gun': { id: 'machine_gun', name: 'Metralha', evolutions: [ { cost: 400, damage: 4, cooldown: 150, range: 250 }, { cost: 650, damage: 6, cooldown: 120, range: 280 }, { cost: 900, damage: 8, cooldown: 100, range: 300 }, { cost: 1500, damage: 11, cooldown: 90, range: 320 } ], projectile: { speed: 15, size: 6, color: '#ffc107', cssClass: 'bullet' }, width: 40, height: 50 },
    'heavy_crossbow': { id: 'heavy_crossbow', name: 'Besta P.', evolutions: [ { cost: 350, damage: 60, cooldown: 3500, range: 500 }, { cost: 600, damage: 100, cooldown: 3200, range: 550 }, { cost: 1000, damage: 150, cooldown: 3000, range: 600 }, { cost: 1800, damage: 220, cooldown: 2900, range: 650 } ], projectile: { speed: 12, size: 10, color: '#5d4037', cssClass: 'crossbow_bolt' }, width: 40, height: 50 },
};
const BOBS_SHOP_ITEMS = {
    zap: {
        name: "Raio",
        description: "Atordoa e causa dano a inimigos em uma pequena área.",
        usage: "Abra o inventário, selecione o Raio e dê um clique duplo na área onde deseja lançá-lo.",
        cost: 150, icon: "⚡", type: 'targeted',
        effect: { type: 'area_stun', damage: 15, radius: 60, duration: 2000 }
    },
    arrows: {
        name: "Flechas",
        description: "Uma chuva de flechas atinge uma grande área, causando dano a todos os inimigos no local.",
        usage: "Abra o inventário, selecione as Flechas e dê um clique duplo na área alvo.",
        cost: 200, icon: "🏹", type: 'targeted',
        effect: { type: 'rain_damage', damagePerArrow: 5, radius: 100, arrowCount: 15 }
    },
    rage: {
        name: "Fúria",
        description: "Aumenta o dano de todas as suas defesas (guardiões e castelo) em 50% por 10 segundos.",
        usage: "Abra o inventário e clique na poção para ativá-la instantaneamente.",
        cost: 400, icon: "😡", type: 'instant',
        effect: { type: 'rage_buff', multiplier: 1.5, duration: 10000 }
    },
    survival1: {
        name: "Sobrevida I",
        description: "Aumenta a vida máxima do seu castelo em +5 permanentemente. O efeito é imediato.",
        usage: "Abra o inventário e clique na poção para consumi-la e ganhar o bônus.",
        cost: 300, icon: "❤️", type: 'instant',
        effect: { type: 'max_health_increase', amount: 5 }
    },
    survival2: {
        name: "Sobrevida II",
        description: "Aumenta a vida máxima do seu castelo em +10 permanentemente.",
        usage: "Abra o inventário e clique na poção para consumi-la e ganhar o bônus.",
        cost: 550, icon: "🧡", type: 'instant',
        effect: { type: 'max_health_increase', amount: 10 }
    },
    survival3: {
        name: "Sobrevida III",
        description: "Aumenta a vida máxima do seu castelo em +20 permanentemente.",
        usage: "Abra o inventário e clique na poção para consumi-la e ganhar o bônus.",
        cost: 1000, icon: "💛", type: 'instant',
        effect: { type: 'max_health_increase', amount: 20 }
    }
};
const guardianSlotPositions = [ { x: 105, y: 30 }, { x: 120, y: 50 }, { x: 105, y: 70 }];
const aiPhrases = {
    start: ["Vamos lá! Boa sorte para nós.", "Que comece a defesa!", "Espero que você seja um bom parceiro.", "Vamos mostrar pra eles!", "Pela honra do nosso castelo!", "Que nossas defesas sejam impenetráveis."],
    danger: ["Estou com problemas aqui!", "Preciso de ajuda! Minha vida está baixa!", "Cuidado, estou quase caindo!", "Eles estão focando em mim!", "Isso não parece bom...", "Estou em uma situação complicada!"],
    emoteReaction: { '😀': ["Hehe, que bom humor!", "É isso aí! Positividade!", "👍"], '😂': ["Hahaha, essa foi boa!", "Muito engraçado!", "😂"], '👍': ["Valeu pelo apoio!", "Tamo junto!", "Aprovado! 👍"], '⚔️': ["PARA A BATALHA!", "Sem piedade!", "Esmaguem eles!"], '💰': ["Foco no din din!", "Ouro é poder!", "Vamos ficar ricos!"], '😢': ["Oh não, o que aconteceu?", "Não fique triste, vamos vencer!", "Fique firme!"], '😠': ["Calma! A raiva não nos ajudará.", "Foque essa energia nos monstros!", "Respira fundo."], '😱': ["O que foi isso?!", "Que susto! Mantenha a calma!", "AHHH! Cuidado!"], '❓': ["Não entendi. Foco na batalha!", "Sem tempo para perguntas, temos que lutar!", "O que quer dizer?"], '🙏': ["Estou torcendo por nós também!", "Com sorte, venceremos.", "Que os deuses da defesa nos ajudem!"] },
    waveStart: ["Atenção, mais uma onda vindo!", "Se preparem!", "Lá vem mais deles!", "Posições! Nova horda a caminho.", "Aí vem problema.", "Fechem os portões! Eles chegaram."],
    waveEnd: ["Ufa, essa foi por pouco.", "Onda finalizada. Bom trabalho!", "Respirem fundo, a próxima será pior.", "Conseguimos! Por enquanto...", "Sobrevivemos. Por ora.", "Uma pequena pausa antes da próxima tempestade."],
    guardianPurchase: ["Reforço novo na área!", "Contratei um ajudante.", "Bem-vindo ao time, amigão.", "Mais um para a nossa causa."],
    guardianEvolve: ["Meu guardião está mais forte!", "Sentiram o poder?!", "Evolução completa!", "Sinta o poder da evolução!"],
    castleUpgrade: ["Nosso lar está mais seguro!", "Fiz um upgrade no castelo.", "Agora sim, uma fortaleza!", "Nossas muralhas estão mais fortes."],
    idle: [ "Você está se saindo bem.", "Fique de olho no seu ouro.", "Essa horda não tem fim?", "Acho que vi um goblin gigante...", "Lembre-se de evoluir os guardiões.", "Será que a gente ganha um dia de folga depois disso?", "Cada moeda conta.", "Esses monstros são persistentes.", "Cuidado com os voadores, eles são traiçoeiros.", "Estamos fazendo um bom trabalho de equipe!", "Minha torre parece mais alta que a sua...", "Será que tem pizza depois?", "Ugh, odeio slimes."]
};
