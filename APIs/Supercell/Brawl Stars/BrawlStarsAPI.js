const fetch = require("node-fetch")
class BrawlStarsPlayerBattleLogResponse {
    constructor(battle, battleTime, event) {
        this.battle = battle ?? {},
        this.battleTime = battleTime;
        this.event = {
            mode: event.mode ?? "",
            id: event.id ?? "",
            map: event.map ?? {},
        };
    };
}
class BrawlStarsPlayerProfileResponse {
    constructor(club, isQualifiedFromChampionshipChallange, threevsthreeVictories, icon, tag, name, trophies, expLevel, expPoints, highestTrophies, powerPlayPoints, highestPowerPlayPoints, soloVictories, duoVictories, bestRoboRumbleTime, bestTimeAsBigBrawler, brawlers, nameColor) {
        this.club = {
            tag: club.tag ?? "",
            name: club.name ?? "",
        };
        this.isQualifiedFromChampionshipChallange = isQualifiedFromChampionshipChallange ?? false;
        this["3vs3Victories"] = threevsthreeVictories;
        this.icon = {
            id: icon.id ?? 0,
        };
        this.tag = tag;
        this.name = name;
        this.trophies = trophies;
        this.expLevel = expLevel;
        this.expPoints = expPoints;
        this.highestTrophies = highestTrophies;
        this.powerPlayPoints = powerPlayPoints;
        this.highestPowerPlayPoints = highestPowerPlayPoints;
        this.soloVictories = soloVictories;
        this.duoVictories = duoVictories;
        this.bestRoboRumbleTime = bestRoboRumbleTime;
        this.bestTimeAsBigBrawler = bestTimeAsBigBrawler;
        this.brawlers = [];
        brawlers.forEach((d) => {
            this.brawlers.push(
                {
                    gadgets: d.gadgets ?? [],
                    starPowers: d.starPowers ?? [],
                    id: d.id ?? 0,
                    rank: d.rank ?? 0,
                    trophies: d.trophies ?? 0,
                    highestTrophies: d.highestTrophies ?? 0,
                    power: d.power ?? 0,
                    name: d.name ?? {},
                }
            )
        });
        this.nameColor = nameColor;
    }
}
class BrawlStarsClubMemberResponse {
    constructor(icon, tag, name, trophies, role, nameColor) {
        this.icon = {
            id: icon.id ?? 0,
        };
        this.tag = tag;
        this.name = name;
        this.trophies = trophies;
        this.role = role;
        this.nameColor = nameColor;
    }
}
class BrawlStarsClubInfoResponse {
    constructor(tag, name, description, trophies, requiredTrophies, members, type, badgeId) {
        this.tag = tag;
        this.name = name;
        this.description = description;
        this.trophies = trophies;
        this.requiredTrophies = requiredTrophies;
        this.members = [];
        members.forEach((d) => {
            this.members.push(
                {
                    icon: {
                        id: d.icon.id ?? 0,
                    },
                    tag: d.tag ?? "",
                    name: d.name ?? "",
                    trophies: d.trophies ?? 0,
                    role: d.role ?? "",
                    nameColor: d.nameColor ?? ""
                }
            )
        });
        this.type = type;
        this.badgeId = badgeId;
    }
}
class BrawlStarsPowerPlayRankingsResponse {
    constructor(club, trophies, icon, tag, name, rank, nameColor) {
        this.club = {
            name: club.name ?? "",
        };
        this.trophies = trophies;
        this.icon = {
            id: icon.id ?? "",
        };
        this.tag = tag;
        this.name = name;
        this.rank = rank;
        this.nameColor = nameColor;
    }
}
class BrawlStarsPowerPlayerSeasonsResponse {
    constructor(id, startTime, endTime) {
        this.id = id;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
class BrawlStarsClubRankingsResponse {
    constructor(tag, name, trophies, rank, memberCount, badgeId) {
        this.tag = tag;
        this.name = name;
        this.trophies = trophies;
        this.rank = rank;
        this.memberCount = memberCount;
        this.badgeId = badgeId;
    }
}
class BrawlStarsBrawlerRankingResponse {
    constructor(club, trophies, icon, tag, name, rank, nameColor) {
        this.club = {
            name: club.name ?? "",
        };
        this.trophies = trophies;
        this.icon = {
            id: icon.id ?? 0,
        };
        this.tag = tag;
        this.name = name;
        this.rank = rank;
        this.nameColor = nameColor;
    }
}
class BrawlStarsPlayerRankingResponse {
    constructor(club, trophies, icon, tag, name, rank, nameColor) {
        this.club = {
            name: club.name ?? "",
        };
        this.trophies = trophies;
        this.icon = {
            id: icon.id ?? 0,
        };
        this.tag = tag;
        this.name = name;
        this.rank = rank;
        this.nameColor = nameColor;
    }
}
class BrawlStarsBrawlerInfoResponse {
    constructor(gadgets, name, id, starPowers) {
        this.gadgets = [];
        gadgets.forEach(gadget => {
            this.gadgets.push({
                name: gadget.name ?? {},
                id: gadget.id ?? 0,
            });
        });
        this.name = name ?? {};
        this.id = id;
        this.starPowers = [];
        starPowers.forEach((starPower) => {
            this.starPowers.push({
                name: starPower.name ?? {},
                id: starPower.id ?? 0,
            });
        });
    }
}
class BrawlStarsEventRotationResponse {
    constructor(event, startTime, endTime) {
        this.event = {
            mode: event.mode ?? "",
            id: event.id ?? 0,
            map: event.map ?? {},
        };
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
class BrawlStarsAPI {
    constructor(authKey) {
        this.api = "https://api.brawlstars.com/v1/"
        this.authKey = authKey
        this.offical = true
    }
    GetPlayerLogs(playerTag = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `players/${playerTag}/battlelog`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((r) => {
                let PlayerLogs = [];
                r.forEach((log) => {
                    PlayerLogs.push(new BrawlStarsPlayerBattleLogResponse(log.battle, log.battleTime, log.event));
                })
                resolve(PlayerLogs);
            }).catch(reject);
        })
    }
    GetPlayerInfo(playerTag = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `players/${playerTag}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((r) => {
                resolve(new BrawlStarsPlayerProfileResponse(r.club, r.isQualifiedFromChampionshipChallange, r.threevsthreeVictories, r.icon, r.tag, r.name, r.trophies, r.expLevel, r.expPoints, r.highestTrophies, r.powerPlayPoints, r.highestPowerPlayPoints, r.soloVictories, r.duoVictories, r.bestRoboRumbleTime, r.bestTimeAsBigBrawler, r.brawlers, r.nameColor));
            }).catch(reject);
        })
    }
    GetClubMembers(clubTag = "", limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `clubs/${clubTag}/members?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((r) => {
                let members = [];
                r.forEach((member) => {
                    members.push(new BrawlStarsClubMemberResponse(member.icon, member.tag, member.name, member.trophies, member.role, member.nameColor));
                })
                resolve(members);
            }).catch(reject);
        })
    }
    GetClubInfo(clubTag = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `clubs/${clubTag}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((r) => {
                resolve(new BrawlStarsClubInfoResponse(r.tag, r.name, r.description, r.trophies, r.requiredTrophies, r.members, r.type, r.badgeId));
            }).catch(reject);
        })
    }
    GetPowerPlayRankingsBySeasonID(countryCode = "global", seasonId = "", limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `rankings/${countryCode}/powerplay/seasons/${seasonId}?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((r) => {
                let PowerPlayRankings = [];
                r.forEach((pp) => {
                    PowerPlayRankings.push(new BrawlStarsPowerPlayRankingsResponse(pp.club, pp.trophies, pp.icon, pp.tag, pp.name, pp.rank, pp.nameColor));
                })
                resolve(PowerPlayRankings);
            }).catch(reject);
        })
    }
    GetPowerPlayRankings(countryCode = "global", limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `rankings/${countryCode}/powerplay/seasons?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((r) => {
                let PowerPlay = [];
                r.forEach((pp) => {
                    PowerPlay.push(new BrawlStarsPowerPlayerSeasonsResponse(pp.id, pp.startTime, pp.endTime));
                })
                resolve(PowerPlay);
            }).catch(reject);
        })
    }
    GetClubRankings(countryCode = "global", limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `rankings/${countryCode}/clubs?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetBrawlerRankings(countryCode = "global", brawlerId = "",  limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `rankings/${countryCode}/brawlers/${brawlerId}?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetPlayerRankings(countryCode = "global", limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `rankings/${countryCode}/players?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetBrawlers(limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `brawlers?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetBrawlerByID(brawlerId = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `brawlers/${brawlerId}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetEventRotation() {
        return new Promise(async(resolve, reject) => {
            let url = this.api + "events/rotation"
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
}
module.exports = {
    BrawlStarsAPI: BrawlStarsAPI
}