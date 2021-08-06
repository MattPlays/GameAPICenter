const fetch = require("node-fetch")
class PUBGAPI {
    constructor(authKey) {
        this.api = "https://api.pubg.com/shards/"
        this.authKey = authKey
        this.offical = true
    }
    GetPlayersByName(players = [], platform = "steam") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + platform + `/players?filter[playerNames]=${players.join()}`
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetPlayersByAccountIDs(ids = [], platform = "steam") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + platform + `/players?filter[playerIds]=${ids.join()}`
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetPlayerByAccountID(id = "", platform = "steam") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + platform + `/players/${id}`
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject)
        })
    }
    GetSeasons(platform = "steam") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + platform + "/seasons"
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetPlayerRankedStats(platform = "steam", accountId = "", seasonId = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + platform + `/players/${accountId}/seasons/${seasonId}/ranked`
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetPlayerSeasonStats(platform = "steam", accountId = "", seasonId = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + platform + `/players/${accountId}/seasons/${seasonId}`
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetPlayersSeasonStats(platform = "steam", seasonId = "", gameMode = "", player_ids = [], gamepad = false) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + platform + `/seasons/${seasonId}/gameMode/${gameMode}/players?filter[playerIds]=${player_ids.join()}&filter[gamepad]=${gamepad}`
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetPlayerLifetimeStats(platform = "steam", accountId = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + platform + `/players/${accountId}/seasons/lifetime`
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetPlayersLifetimeStats(platform = "steam", player_ids = [], gameMode, gamepad) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + platform + `/seasons/lifetime/gameMode/${gameMode}/players?filter[playerIds]=${player_ids.join()}&filter[gamepad]=${gamepad}`
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetWeaponMastery(platform = "steam", accountId = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + platform + `/players/${accountId}/weapon_mastery`
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetSurvivalMastery(platform = "steam", accountId = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + platform + `/players/${accountId}/survival_mastery`
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetMatchStats(platform = "steam", matchId = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + platform + `/matches/${matchId}`
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetGameModeLeaderboard(platform = "steam", region = "na", seasonId = "", gameMode = "") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `${platform}-${region}/leaderboards/${seasonId}/${gameMode}`
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetTournaments() {
        return new Promise(async(resolve, reject) => {
            let url = "https://api.pubg.com/leaderboards"
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetTournamentById(tournamentId = "") {
        return new Promise(async(resolve, reject) => {
            let url = "https://api.pubg.com/leaderboards/" + tournamentId
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetSampleMatches(platform = "steam") {
        return new Promise(async(resolve, reject) => {
            let url = this.api + platform + "/samples"
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
    GetAPIStatus() {
        return new Promise(async(resolve, reject) => {
            let url = "https://api.pubg.com/status"
            await fetch(url, {
                "headers": {
                    "accept": "application/vnd.api+json",
                    "Authorization": `Bearer ${this.authKey}`
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(resolve).catch(reject);
        })
    }
}
module.exports = {
    PUBGAPI: PUBGAPI
}