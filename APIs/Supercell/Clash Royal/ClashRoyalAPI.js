const fetch = require("node-fetch")
class ClashRoyalAPI {
    constructor(authKey) {
        this.api = "https://api.clashroyale.com/v1/"
        this.authKey = authKey
        this.offical = true
    }
    GetClanWarLogs(clanTag = "", limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `clans/${clanTag}/warlog?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetClans(name = "", locationId, minMembers, maxMembers, minScore, limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `clans?name=${name}&locationId=${locationId}&minMembers=${minMembers}&maxMembers=${maxMembers}&minScore=${minScore}&limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetClanRiverRaceLog(clanTag = "", limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `clans/${clanTag}/riverracelog?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetClanCurrentWar(clanTag = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `clans/${clanTag}/currentwar`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetClanInfo(clanTag = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `clans/${clanTag}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetClanMembers(clanTag = "", limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `clans/${clanTag}/members?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetCurrentRiverRace(clanTag = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `clans/${clanTag}/currentriverrace`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetPlayerByTag(playerTag = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `players/${playerTag}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetPlayerUpcomingChests(playerTag = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `players/${playerTag}/upcomingchests`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetPlayerBottleLog(playerTag = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `players/${playerTag}/battlelog`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetCards(limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `cards?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetTournaments(clanName = "", limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `tournaments?name=${clanName}&limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetTournamentByTag(tournamentTag = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `tournaments/${tournamentTag}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetClanRankingsForLocation(locationId = "global", limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `locations/${locationId}/rankings/clans?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetPlayerRankingsForLocation(locationId = "global", limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `locations/${locationId}/rankings/players?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        }) 
    }
    GetClanWarRankingsForLocation(locationId = "global", limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `locations/${locationId}/rankings/clanwars?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        }) 
    }
    GetTopPlayerBySeasonID(seasonId = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `locations/global/seasons/${seasonId}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetTopPlayerRankingsBySeasonID(seasonId = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `locations/global/seasons/${seasonId}/rankings/players`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetTopPlayerSeasons() {
        return new Promise(async(resolve, reject) => {
            let url = this.api + "locations/global/seasons"
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetLocations(limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `locations?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetLocationInfoByID(locationId = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `locations/${locationId}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetGlobalTournaments() {
        return new Promise(async(resolve, reject) => {
            let url = this.api + "globaltournaments"
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
    ClashRoyalAPI: ClashRoyalAPI
}