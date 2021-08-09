const fetch = require("node-fetch")
class Stat {
    constructor(rank, percentile, displayName, displayCategory, category, metadata, value, displayValue, displayType) {
        this.rank = rank;
        this.percentile = percentile;
        this.displayName = displayName;
        this.displayCategory = displayCategory;
        this.category = category;
        this.metadata = metadata;
        this.value = value;
        this.displayValue = displayValue;
        this.displayType = displayType;
    }
}
class Profile {
    constructor(data) {
        this.data = {
            platformInfo: {
                platformSlug: data.platformInfo.platformSlug ?? "",
                platformUserId: data.platformInfo.platformUserId ?? "",
                platformUserHandle: data.platformInfo.platformUserHandle ?? "",
                platformUserIdentifier: data.platformInfo.platformUserIdentifier ?? "",
                avatarUrl: data.platformInfo.avatarUrl ?? "",
                additionalParameters: data.platformInfo.additionalParameters ?? null,
            },
            userInfo: {
                userId: data.userInfo.userId ?? 0,
                isPremium: data.userInfo.isPremium ?? false,
                isVerified: data.userInfo.isVerified ?? false,
                isInfluencer: data.userInfo.isInfluencer ?? false,
                isPartner: data.userInfo.isPartner ?? false,
                countryCode: data.userInfo.countryCode ?? "",
                customAvatarUrl: data.userInfo.customAvatarUrl ?? "",
                customHeroUrl: data.userInfo.customHeroUrl ?? "",
                socialAccounts: data.userInfo.socialAccounts ?? [""],
                pageviews: data.userInfo.pageviews ?? 0,
                isSuspicious: data.userInfo.isSuspicious ?? false,
            },
            metadata: data.metadata,
            segments: [],
            availableSegments: data.availableSegments ?? [],
            expiryDate: data.expiryDate ?? ""
        }
        data.segments.forEach((segment) => {
            this.data.segments.push({
                type: segment.type ?? "",
                attributes: data.attributes ?? {},
                metadata: {
                    name: segment.metadata.name ?? "",
                },
                expiryDate: segment.expiryDate ?? "",
                stats: {
                    timePlayed: new Stat(segment.stats.timePlayed.rank, segment.stats.timePlayed.percentile, segment.stats.timePlayed.displayName, segment.stats.timePlayed.displayCategory, segment.stats.timePlayed.category, segment.stats.timePlayed.metadata, segment.stats.timePlayed.value, segment.stats.timePlayed.displayValue, segment.stats.timePlayed.displayType),
                    score: new Stat(segment.stats.score.rank, segment.stats.score.percentile, segment.stats.score.displayName, segment.stats.score.displayCategory, segment.stats.score.category, metadata, segment.stats.score.value, segment.stats.score.displayValue, segment.stats.score.displayType),
                    Kills: new Stat(segment.stats.Kills.rank, segment.stats.Kills.percentile, segment.stats.Kills.displayName, segment.stats.Kills.displayCategory, segment.stats.Kills.category, metadata, segment.stats.Kills.value, segment.stats.Kills.displayValue, segment.stats.Kills.displayType),
                    deaths: new Stat(segment.stats.deaths.rank, segment.stats.deaths.percentile, segment.stats.deaths.displayName, segment.stats.deaths.displayCategory, segment.stats.deaths.category, metadata, segment.stats.deaths.value, segment.stats.deaths.displayValue, segment.stats.deaths.displayType),
                    kd: new Stat(segment.stats.kd.rank, segment.stats.kd.percentile, segment.stats.kd.displayName, segment.stats.kd.displayCategory, segment.stats.kd.category, metadata, segment.stats.kd.value, segment.stats.kd.displayValue, segment.stats.kd.displayType),
                    damage: new Stat(segment.stats.damage.rank, segment.stats.damage.percentile, segment.stats.damage.displayName, segment.stats.damage.displayCategory, segment.stats.damage.category, metadata, segment.stats.damage.value, segment.stats.damage.displayValue, segment.stats.damage.displayType),
                    headshots: new Stat(segment.stats.headshots.rank, segment.stats.headshots.percentile, segment.stats.headshots.displayName, segment.stats.headshots.displayCategory, segment.stats.headshots.category, metadata, segment.stats.headshots.value, segment.stats.headshots.displayValue, segment.stats.headshots.displayType),
                    dominations: new Stat(segment.stats.dominations.rank, segment.stats.dominations.percentile, segment.stats.dominations.displayName, segment.stats.dominations.displayCategory, segment.stats.dominations.category, metadata, segment.stats.dominations.value, segment.stats.dominations.displayValue, segment.stats.dominations.displayType),
                    shotsFired: new Stat(segment.stats.shotsFired.rank, segment.stats.shotsFired.percentile, segment.stats.shotsFired.displayName, segment.stats.shotsFired.displayCategory, segment.stats.shotsFired.category, metadata, segment.stats.shotsFired.value, segment.stats.shotsFired.displayValue, segment.stats.shotsFired.displayType),
                    shotsHit: new Stat(segment.stats.shotsHit.rank, segment.stats.shotsHit.percentile, segment.stats.shotsHit.displayName, segment.stats.shotsHit.displayCategory, segment.stats.shotsHit.category, metadata, segment.stats.shotsHit.value, segment.stats.shotsHit.displayValue, segment.stats.shotsHit.displayType),
                    shotsAccuracy: new Stat(segment.stats.shotsAccuracy.rank, segment.stats.shotsAccuracy.percentile, segment.stats.shotsAccuracy.displayName, segment.stats.shotsAccuracy.displayCategory, segment.stats.shotsAccuracy.category, metadata, segment.stats.shotsAccuracy.value, segment.stats.shotsAccuracy.displayValue, segment.stats.shotsAccuracy.displayType),
                    snipersKilled: new Stat(segment.stats.snipersKilled.rank, segment.stats.snipersKilled.percentile, segment.stats.snipersKilled.displayName, segment.stats.snipersKilled.displayCategory, segment.stats.snipersKilled.category, metadata, segment.stats.snipersKilled.value, segment.stats.snipersKilled.displayValue, segment.stats.snipersKilled.displayType),
                    dominationOverkills: new Stat(segment.stats.dominationOverkills.rank, segment.stats.dominationOverkills.percentile, segment.stats.dominationOverkills.displayName, segment.stats.dominationOverkills.displayCategory, segment.stats.dominationOverkills.category, metadata, segment.stats.dominationOverkills.value, segment.stats.dominationOverkills.displayValue, segment.stats.dominationOverkills.displayType),
                    dominationRevenges: new Stat(segment.stats.dominationRevenges.rank, segment.stats.dominationRevenges.percentile, segment.stats.dominationRevenges.displayName, segment.stats.dominationRevenges.displayCategory, segment.stats.dominationRevenges.category, metadata, segment.stats.dominationRevenges.value, segment.stats.dominationRevenges.displayValue, segment.stats.dominationRevenges.displayType),
                    BombsPlanted: new Stat(segment.stats.BombsPlanted.rank, segment.stats.BombsPlanted.percentile, segment.stats.BombsPlanted.displayName, segment.stats.BombsPlanted.displayCategory, segment.stats.BombsPlanted.category, metadata, segment.stats.BombsPlanted.value, segment.stats.BombsPlanted.displayValue, segment.stats.BombsPlanted.displayType),
                    BombsDefused: new Stat(segment.stats.BombsDefused.rank, segment.stats.BombsDefused.percentile, segment.stats.BombsDefused.displayName, segment.stats.BombsDefused.displayCategory, segment.stats.BombsDefused.category, metadata, segment.stats.BombsDefused.value, segment.stats.BombsDefused.displayValue, segment.stats.BombsDefused.displayType),
                    moneyEarned: new Stat(segment.stats.moneyEarned.rank, segment.stats.moneyEarned.percentile, segment.stats.moneyEarned.displayName, segment.stats.moneyEarned.displayCategory, segment.stats.moneyEarned.category, metadata, segment.stats.moneyEarned.value, segment.stats.moneyEarned.displayValue, segment.stats.moneyEarned.displayType),
                    hostagesRescued: new Stat(segment.stats.hostagesRescued.rank, segment.stats.hostagesRescued.percentile, segment.stats.hostagesRescued.displayName, segment.stats.hostagesRescued.displayCategory, segment.stats.hostagesRescued.category, metadata, segment.stats.hostagesRescued.value, segment.stats.hostagesRescued.displayValue, segment.stats.hostagesRescued.displayType),
                    mvp: new Stat(segment.stats.mvp.rank, segment.stats.mvp.percentile, segment.stats.mvp.displayName, segment.stats.mvp.displayCategory, segment.stats.mvp.category, metadata, segment.stats.mvp.value, segment.stats.mvp.displayValue, segment.stats.mvp.displayType),
                    wins: new Stat(segment.stats.wins.rank, segment.stats.wins.percentile, segment.stats.wins.displayName, segment.stats.wins.displayCategory, segment.stats.wins.category, metadata, segment.stats.wins.value, segment.stats.wins.displayValue, segment.stats.wins.displayType),
                    ties: new Stat(segment.stats.ties.rank, segment.stats.ties.percentile, segment.stats.ties.displayName, segment.stats.ties.displayCategory, segment.stats.ties.category, metadata, segment.stats.ties.value, segment.stats.ties.displayValue, segment.stats.ties.displayType),
                    matchesPlayed: new Stat(segment.stats.matchesPlayed.rank, segment.stats.matchesPlayed.percentile, segment.stats.matchesPlayed.displayName, segment.stats.matchesPlayed.displayCategory, segment.stats.matchesPlayed.category, metadata, segment.stats.matchesPlayed.value, segment.stats.matchesPlayed.displayValue, segment.stats.matchesPlayed.displayType),
                    losses: new Stat(segment.stats.losses.rank, segment.stats.losses.percentile, segment.stats.losses.displayName, segment.stats.losses.displayCategory, segment.stats.losses.category, metadata, segment.stats.losses.value, segment.stats.losses.displayValue, segment.stats.losses.displayType),
                    roundsPlayed: new Stat(segment.stats.roundsPlayed.rank, segment.stats.roundsPlayed.percentile, segment.stats.roundsPlayed.displayName, segment.stats.roundsPlayed.displayCategory, segment.stats.roundsPlayed.category, metadata, segment.stats.roundsPlayed.value, segment.stats.roundsPlayed.displayValue, segment.stats.roundsPlayed.displayType),
                    roundsWon: new Stat(segment.stats.roundsWon.rank, segment.stats.roundsWon.percentile, segment.stats.roundsWon.displayName, segment.stats.roundsWon.displayCategory, segment.stats.roundsWon.category, metadata, segment.stats.roundsWon.value, segment.stats.roundsWon.displayValue, segment.stats.roundsWon.displayType),
                    wlPercentage: new Stat(segment.stats.wlPercentage.rank, segment.stats.wlPercentage.percentile, segment.stats.wlPercentage.displayName, segment.stats.wlPercentage.displayCategory, segment.stats.wlPercentage.category, metadata, segment.stats.wlPercentage.value, segment.stats.wlPercentage.displayValue, segment.stats.wlPercentage.displayType),
                    headshotPct: new Stat(segment.stats.headshotPct.rank, segment.stats.headshotPct.percentile, segment.stats.headshotPct.displayName, segment.stats.headshotPct.displayCategory, segment.stats.headshotPct.category, metadata, segment.stats.headshotPct.value, segment.stats.headshotPct.displayValue, segment.stats.headshotPct.displayType),
                }
            })
        })
    }
}
class SegmentResponse {
    constructor(type, attributes, metadata, expiryDate, stats) {
        this.type = type;
        this.attributes = {
            key: attributes.key ?? "",
        };
        this.metadata = {
            name: metadata.name ?? "",
            imageUrl: metadata.imageUrl ?? "",
            category: {
                value: metadata.category.value ?? "",
                displayValue: metadata.category.displayValue ?? "",
            },
        };
        this.expiryDate = expiryDate;
        this.stats = {
            kills: new Stat(stats.kills.rank, stats.kills.percentile, stats.kills.displayName, stats.kills.displayCategory, stats.kills.category, stats.kills.metadata, stats.kills.value, stats.kills.displayName, stats.kills.displayType),
            shotsFired: new Stat(stats.shotsFired.rank, stats.shotsFired.percentile, stats.shotsFired.displayName, stats.shotsFired.displayCategory, stats.shotsFired.category, stats.shotsFired.metadata, stats.shotsFired.value, stats.shotsFired.displayValue, stats.shotsFired.displayType),
            shotsHit: new Stat(stats.shotsHit.rank, stats.shotsHit.percentile, stats.shotsHit.displayName, stats.shotsHit.displayCategory, stats.shotsHit.category, stats.shotsHit.metadata, stats.shotsHit.value, stats.shotsHit.displayValue, stats.shotsHit.displayType),
            shotsAccuracy: new Stat(stats.shotsAccuracy.rank, stats.shotsAccuracy.percentile, stats.shotsAccuracy.displayName, stats.shotsAccuracy.displayCategory, stats.shotsAccuracy.category, stats.shotsAccuracy.metadata, stats.shotsAccuracy.value, stats.shotsAccuracy.displayValue, stats.shotsAccuracy.displayType),
        }
    }
}
class SearchResult {
    constructor(platformId, platformSlug, platformUserIdentifier, platformUserId, platformUserHandle, avatarUrl, status, additionalParameters) {
        this.platformId = platformId;
        this.platformSlug = platformSlug;
        this.platformUserIdentifier = platformUserIdentifier;
        this.platformUserId = platformUserId;
        this.platformUserHandle = platformUserHandle;
        this.avatarUrl = avatarUrl;
        this.status = status;
        this.additionalParameters = additionalParameters;
    }
}
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
            }).then(res => res.json()).then((data) => {
                resolve(new Profile(data.data))
            }).catch(reject)
        })
    }
    GetStatSegement(playerIndentifer, segmentType) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `profile/steam/${playerIndentifer}/segments/${segmentType}`
            await fetch(url, {
                "headers": {
                    "TRN-Api-Key": this.authKey,
                    "Accept": "application/json",
                },
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((data) => {
                let Segments = [];
                data.forEach((d) => {
                    Segments.push(new SegmentResponse(d.type, d.attributes, d.metadata, d.expiryDate, d.stats));
                });
                resolve(Segments);
            }).catch(reject)
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
            }).then(res => res.json()).then((data) => {
                let Results = [];
                data.data.forEach((d) => {
                    Results.push(new SearchResult(d.platformId, d.platformSlug, d.platformUserIdentifier, d.platformUserId, d.platformUserHandle, d.avatarUrl, d.stats, d.additionalParameters));
                });
                resolve(Results);
            }).catch(reject)
        })
    }
}
module.exports = {
    CSGOAPI: CSGOAPI
}