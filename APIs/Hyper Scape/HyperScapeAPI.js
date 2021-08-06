const fetch = require("node-fetch")
class HyperScapeAPI {
    constructor(authKey) {
        this.api = "https://public-api.tracker.gg/v2/hyper-scape/standard/"
        this.authKey = authKey
        this.offical = false
    }
    GetPlayerProfile(platform = "uplay", platformIdentifer) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `profile/${platform}/${platformIdentifer}`
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
    HyperScapeAPI: HyperScapeAPI
}