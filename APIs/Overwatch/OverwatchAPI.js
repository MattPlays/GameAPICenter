const fetch = require("node-fetch")
class OverwatchProfile {
    constructor(competitiveStats, endorsement, endorsementIcon, gamesWon, icon, level, levelIcon, prestige, prestigeIcon, privateProfile, quickPlayStats, rating, ratingIcon, ratingsArr) {
        this.competitiveStats = {
            awards: {
                cards: competitiveStats.awards.cards ?? 0,
                medals: competitiveStats.awards.medals ?? 0,
                medalsBronze: competitiveStats.awards.medalsBronze ?? 0,
                medalsSilver: competitiveStats.awards.medalsSilver ?? 0,
                medalsGold: competitiveStats.awards.medalsGold ?? 0,
            },
            games: {
                played: competitiveStats.games.played ?? 0,
                won: competitiveStats.games.won ?? 0,
            },
        };
        this.endorsement = endorsement;
        this.endorsementIcon = endorsementIcon;
        this.gamesWon = gamesWon;
        this.icon = icon;
        this.level = level;
        this.levelIcon = levelIcon;
        this.prestige = prestige;
        this.prestigeIcon = prestigeIcon;
        this.private = privateProfile;
        this.quickPlayStats = {
            awards: {
                cards: quickPlayStats.awards.cards ?? 0,
                medals: quickPlayStats.awards.medals ?? 0,
                medalsBronze: quickPlayStats.awards.medalsBronze ?? 0,
                medalsSilver: quickPlayStats.awards.medalsSilver ?? 0,
                medalsGold: quickPlayStats.awards.medalsGold ?? 0,
            },
            games: {
                played: quickPlayStats.games.played ?? 0,
                won: quickPlayStats.games.won ?? 0,
            },
        };
        this.rating = rating;
        this.ratingIcon = ratingIcon;
        this.ratings = [];
        ratingsArr.forEach(r => {
            this.ratings.push({level: r.level, role: r.role, rankIcon: r.rankIcon, roleIcon: r.roleIcon})
        })
    }
}
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
            }).then(res => res.json()).then((temp) => {
                let profile = new OverwatchProfile(temp.competitiveStats, temp.endorsement, temp.endorsementIcon, temp.gamesWon, temp.icon, temp.level, temp.levelIcon, temp.prestige, temp.prestigeIcon, temp.private, temp.quickPlayStats, temp.rating, temp.ratingIcon, temp.ratings);
                resolve(profile);
            }).catch(reject)
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