const fetch = require("node-fetch")
class OverwatchAPI {
    constructor() {
        this.api = "https://ow-api.com/v1/stats/"
        this.offical = false
    }
    GetProfile(platform, region, battletag) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `${platform}/${region}/${battletag.replace("#", "-")}/profile`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetCompleteStats(platform, region, battletag) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `${platform}/${region}/${battletag.replace("#", "-")}/complete`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetHeroStats(platform, region, battletag, heros) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `${platform}/${region}/${battletag.replace("#", "-")}/heroes/${heros.join()}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
}
module.exports = {
    OverwatchAPI: OverwatchAPI
}