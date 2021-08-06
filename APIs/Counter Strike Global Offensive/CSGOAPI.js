const fetch = require("node-fetch")
class CSGOAPI {
    constructor(authKey) {
        this.api = "https://public-api.tracker.gg/v2/csgo/standard/"
        this.authKey = authKey
        this.offical = false
    }
    GetPlayerStats(playerIndentifer) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `profile/steam/${playerIndentifer}`
            await fetch(url, {
                "headers": {
                    "TRN-Api-Key": this.authKey,
                    "Accept": "application/json",
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetStatsSegement(platformIdentifer, segmentType) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `profile/steam/${platformIdentifer}/segments/${segmentType}`
            await fetch(url, {
                "headers": {
                    "TRN-Api-Key": this.authKey,
                    "Accept": "application/json",
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    SearchForPlayer(query = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `search?platform=steam&query=${query}`
            await fetch(url, {
                "headers": {
                    "TRN-Api-Key": this.authKey,
                    "Accept": "application/json",
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
}
module.exports = {
    CSGOAPI: CSGOAPI
}