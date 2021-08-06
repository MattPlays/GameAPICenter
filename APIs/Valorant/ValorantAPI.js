const fetch = require("node-fetch")
class ValorantAPI {
    constructor(authKey) {
        this.api = function(region) {
            return `https://${region}.api.riotgames.com/val/`
        }
        this.authKey = authKey
        this.offical = true
    }
    GetContent(region = "NA") {
        return new Promise(async(resolve, reject) => {
            let url = this.api(region) + `content/v1/contents?api_key=${this.authKey}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetMatchByID(region = "NA", matchId = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api(region) + `val/match/v1/matches/${matchId}?api_key=${this.authKey}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetMatchListByPUUID(region = "NA", puuid = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api(region) + `val/match/v1/matchlists/by-puuid/${puuid}?api_key=${this.authKey}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetRecentMatchesByQueue(region = "NA", queue = "unrated") {
        return new Promise(async(resolve, reject) => {
            let url = this.api(region) + `val/match/v1/recent-matches/by-queue/${queue}?api_key=${this.authKey}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetRankedLeaderboard(region = "NA", actId = "", size = 200, startIndex = 0) {
        return new Promise(async(resolve, reject) => {
            let url = this.api(region) + `val/ranked/v1/leaderboards/by-act/${actId}?api_key=${this.authKey}&size=${size}&startIndex=${startIndex}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetValorantStatus(region = "NA") {
        return new Promise(async(resolve, reject) => {
            let url = this.api(region) + `val/status/v1/platform-data?api_key=${this.authKey}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
}
module.exports = {
    ValorantAPI: ValorantAPI
}