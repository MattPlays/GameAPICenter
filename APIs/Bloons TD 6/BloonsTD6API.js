const fetch = require("node-fetch")
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
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    } 
    GetTowerByID(towerID = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `tower/${towerID}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetAllHeros() {
        return new Promise(async(resolve, reject) => {
            let url = this.apiv2 + `heroes`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetHeroByID(heroID = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.apiv2 + `hero/${heroID}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetAllBloons() {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `bloons`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetBloonByID(bloonID = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `bloon/${bloonID}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
}
module.exports = {
    BloonsTD6API: BloonsTD6API
}