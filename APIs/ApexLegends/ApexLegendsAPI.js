const fetch = require('node-fetch');
class ApexLegendsAPI {
    constructor(authKey) {
        this.api = "https://api.mozambiquehe.re/",
        this.authKey = authKey
        this.offical = true
    }
    GetPlayerStatsByName(platform, players) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `bridge?version=5&platform=${platform}&player=${[...[players]].join()}&auth=${this.authKey}`

            await fetch(url, {
                "method": "GET",
                "mode": "cors",
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetPlayerStatsByUID(platform, uids) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `bridge?version=5&platform=${platform}&player=${[...[uids]].join()}&auth=${this.authKey}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors",
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetMapRotation() {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `maprotation?version=2&auth=${this.authKey}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetNews() {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `news?lang=en-us&auth=${this.authKey}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetServerStatus() {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `servers?auth=${this.authKey}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(res => {resolve(
                {
                    "Message": "Data from apexlegendsstatus.com",
                    "data": res
                }
            )}).catch(reject)
        })
    }
    NameToUID(name, platform) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `nametouid?player=${name}&platform=${platform}&auth=${this.authKey}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
}

module.exports = {
    ApexLegendsAPI: ApexLegendsAPI
}