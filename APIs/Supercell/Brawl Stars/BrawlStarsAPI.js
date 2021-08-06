const fetch = require("node-fetch")
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
    GetClubMembers(clubTag = "", limit = 1) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `clubs/${clubTag}/members?limit=${limit}`
            await fetch(url, {
                "headers": {
                    "Authorization": `Bearer ${this.authKey}`,
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
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
            }).then(res => res.json()).then(resolve).catch(reject);
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
            }).then(res => res.json()).then(resolve).catch(reject);
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
            }).then(res => res.json()).then(resolve).catch(reject);
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