const fetch = require("node-fetch")
class Tower {
    constructor (id, name, description, type, cost, stats, footprint, defaultHotkey, paths) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
        this.cost = {
            easy: cost.easy ?? 0,
            medium: cost.medium ?? 0,
            hard: cost.hard ?? 0,
            impoppable: cost.impoppable ?? 0,
        };
        this.stats = {
            damage: stats.damage ?? "",
            pierce: stats.pierce ?? "",
            attackSpeed: stats.attackSpeed ?? "",
            range: stats.range ?? "",
            type: stats.type ?? "",
        };
        this.footprint = footprint;
        this.defaultHotkey = defaultHotkey;
        this.paths = {
            path1: {
                crosspaths: {
                    first: {
                        name: paths.path1.crosspaths.first.name ?? "",
                        path: paths.path1.crosspaths.first.path ?? "",
                        score: paths.path1.crosspaths.first.score ?? "",
                        reason: paths.path1.crosspaths.first.reason ?? ""
                    },
                    second: {
                        name: paths.path1.crosspaths.second.name ?? "",
                        path: paths.path1.crosspaths.second.path ?? "",
                        score: paths.path1.crosspaths.second.score ?? "",
                        reason: paths.path1.crosspaths.second.reason ?? ""
                    }
                },
                upgrades: []
            }
        }
        paths.path1.upgrades.forEach(upgrade => {
            this.paths.path1.upgrades.push({
                name: upgrade.name,
                description: upgrade.description,
                cost: {
                    easy: upgrade.cost.easy ?? 0,
                    medium: upgrade.cost.medium ?? 0,
                    hard: upgrade.cost.hard ?? 0,
                    impoppable: upgrade.cost.impoppable ?? 0,
                },
                unlockXp: upgrade.unlockXp,
                effects: upgrade.effects,
                source: upgrade.source,
            })
        })
    }
}
class Hero {
    constructor (id, name, description, skinChange, skins, cost, stats, unlock, levelSpeed, levels) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.skinChange = skinChange;
        this.skins = [];
        skins.forEach(skin => {
            this.skins.push({
                id: skin.id ?? "",
                name: skin.name ?? "",
            });
        });
        this.cost = {
            easy: cost.easy ?? 0,
            medium: cost.medium ?? 0,
            hard: cost.hard ?? 0,
            impoppable: cost.impoppable ?? 0,
        };
        this.stats = {
            damage: stats.damage ?? "",
            pierce: stats.pierce ?? "",
            attackSpeed: stats.attackSpeed ?? "",
            range: stats.range ?? "",
            type: stats.type ?? "",
            special: [],
        };
        stats.special.forEach((special) => {
            this.stats.special.push({
                name: special.name ?? "",
                value: special.value ?? "",
            });
        });
        this.unlock = {
            how: unlock.how ?? "",
            value: unlock.value ?? "",
        };
        this.levelSpeed = levelSpeed;
        this.levels = [];
        levels.forEach((level) => {
            this.levels.push({
                level: level.level ?? 0,
                description: level.description ?? "",
                xp: level.xp ?? 0,
                rounds: {
                    easy: level.rounds.easy ?? "",
                    medium: level.rounds.medium ?? "",
                    hard: level.rounds.hard ?? "",
                    impoppable: level.rounds.impoppable ?? "",
                },
                effects: level.effects,
                source: level.srouce
            });
        });
    }
}
class Bloon {
    constructor(id, name, type, rbe, speed, types, immunity, children, parents, initalRound, initalRoundABR) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.rbe = rbe;
        this.speed = speed;
        this.types = types;
        this.immunity = immunity;
        this.children = [];
        children.forEach((child) => {
            this.children.push({
                id: child.id ?? "",
                count: child.count ?? 0,
                type: child.type ?? ""
            });
        });
        this.parents = [];
        parents.forEach((parent) => {
            this.parents.push({
                id: parent.id ?? "",
            });
        });
        this.initalRound = initalRound;
        this.initalRoundABR = initalRoundABR;
    }
}
class BloonsTD6API {
    constructor() {
        this.api = "https://statsnite.com/api/btd/v1/"
        this.apiv2 = "https://statsnite.com/api/btd/v2/"
        this.imageAPI = "https://statsnite.com/images/btd/"
        this.offical = false
    }
    GetAllTowers() {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `towers`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((data) => {
                let Towers = [];
                data.forEach(tower => {
                    Towers.push(new Tower(tower.id, tower.name, tower.description, tower.type, tower.cost, tower.stats, tower.footprint, tower.defaultHotkey, tower.paths))
                })
                resolve(Towers);
            }).catch(reject)
        })
    } 
    GetTowerByID(towerID) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `tower/${towerID}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((data) => {
                resolve(new Tower(data.id, data.name, data.description, data.type, data.cost, data.stats, data.footprint, data.defaultHotkey, data.paths))
            }).catch(reject)
        })
    }
    GetAllHeros() {
        return new Promise(async(resolve, reject) => {
            let url = this.apiv2 + `heroes`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((data) => {
                let Heros = [];
                data.forEach((hero) => {
                    Heros.push(new Hero(hero.id, hero.name, hero.description, hero.skinChange, hero.skins, hero.cost, hero.stats, hero.unlock, hero.levelSpeed, hero.levels));
                })
                resolve(Heros);
            }).catch(reject);
        })
    }
    GetHeroByID(heroID) {
        return new Promise(async(resolve, reject) => {
            let url = this.apiv2 + `hero/${heroID}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((data) => {
                resolve(new Hero(data.id, data.name, data.description, data.skinChange, data.skins, data.cost, data.stats, data.unlock, data.levelSpeed, data.levels));
            }).catch(reject);
        })
    }
    GetAllBloons() {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `bloons`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((data) => {
                let Bloons = [];
                data.forEach((bloon) => {
                    Bloons.push(new Bloon(bloon.id, bloon.name, bloon.type, bloon.rbe, bloon.speed, bloon.types, bloon.immunity, bloon.children, bloon.parents, bloon.initalRound, bloon.initalRoundABR))
                });
                resolve(Bloons);
            }).catch(reject);
        })
    }
    GetBloonByID(bloonID) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `bloon/${bloonID}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((data) => {
                resolve(new Bloon(data.id, data.name, data.type, data.rbe, data.speed, data.types, data.immunity, data.children, data.parents, data.initalRound, data.initalRoundABR));
            }).catch(reject);
        })
    }
}
module.exports = {
    BloonsTD6API: BloonsTD6API
}