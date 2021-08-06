const fetch = require("node-fetch")
class ClashOfClansAPI {
    constructor(authKey) {
        this.api = "https://api.clashofclans.com/v1/";
        this.authKey = authKey
        this.offical = true
    }
    GetClanCurrentWarLeagueGroup(clanTag = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `clans/${clanTag}/currentwar/leaguegroup`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetClanWarInfo(warTag = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `clanwarleagues/wars/${warTag}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetClanWarLog(clanTag = "", limit = 1) {
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
    GetClans(name = "", warFreqency = "", locationId, minMembers, maxMembers, minClanPoints, minClanLevel, limit = 1, labelIds = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `clans?name=${name}&warFreqency=${warFreqency}&locationId=${locationId}&minMembers=${minMembers}&maxMembers=${maxMembers}&minClanPoints=${minClanPoints}&minClanLevel=${minClanLevel}&limit=${limit}&labelIds=${labelIds}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetClanCurrentWarInfo(clanTag = "") {
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
    GetClanMembers(clanTag = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `clans/${clanTag}/members`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
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
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    VerifyPlayerToken(playerTag = "", playerToken = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `players/${playerTag}/verifytoken`
            let payload = {
                "token": playerToken
            }
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "POST",
                "mode": "cors",
                "body": JSON.stringify(payload)
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetLeagues(limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `leagues?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetLeagueSeasonRankings(leagueId = "", seasonId = "", limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `leagues/${leagueId}/seasons/${seasonId}?limit=${limit}&after=${after}&before=${after}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetLeagueInfo(leagueId = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `leagues/${leagueId}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetLeagueSeasons(leagueId = "", limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `leagues/${leagueId}/seasons?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetWarLeagueInfo(leagueId = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `warleagues/${leagueId}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetWarLeagues(limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `warleagues?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetClanRankingsForLocation(locationId, limit = 1) {
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
    GetPlayerRankingsForLocation(locationId, limit = 1) {
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
    GetClanVersusRankingsForLocation(locationId, limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `locations/${locationId}/rankings/clans-versus?limit${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetPlayerVersusRankingsForLocation(locationId, limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `locations/${locationId}/rankings/players-versus?limit=${limit}`
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
    GetLocationInfo(locationId) {
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
    GetCurrentGoldPassSeasonInfo() {
        return new Promise(async(resolve, reject) => {
            let url = this.api + "goldpass/seasons/current"
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetPlayerLabels(limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `labels/players?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetClanLabels(limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `labels/clans?limit=${limit}`
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
    ClashOfClansAPI: ClashOfClansAPI
}