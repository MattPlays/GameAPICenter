const fetch = require("node-fetch")
class PUBGProfile {
    constructor(data, links, meta) {
        this.data = [];
        data.forEach((d) => {
            this.data.push(
                {
                    type: d.type ?? "",
                    id: d.id ?? "",
                    attributes: {
                        name: d.attributes.name ?? "",
                        shardId: d.attributes.shardId ?? "",
                        stats: d.attributes.stats ?? {},
                        createdAt: d.attributes.createdAt ?? "",
                        updatedAt: d.attributes.updatedAt ?? "",
                        patchVersion: d.attributes.patchVersion ?? "",
                        titleId: d.attributes.titleId ?? "",
                    },
                    relationships: {
                        assets: {
                            data: d.relationships.assets.data ?? {},
                        },
                    },
                    matches: {
                        data: [],
                    },
                    links: {
                        schema: d.links.schema ?? "",
                        self: d.links.self ?? "",
                    },
                }
            );
        });
        data.matches.forEach((match) => {
            this.data.matches.push({
                id: match.id ?? "",
                type: match.type ?? "",
            });
        });
        this.links = {
            self: links.self ?? "",
        };
        this.meta = meta ?? {};
    }
}
class PUBGSeasonsResponse {
    constructor(data, links, meta) {
        this.data = [];
        data.forEach((d) => {
            this.data.push(
                {
                    type: d.type ?? "",
                    id: d.id ?? "",
                    attributes: {
                        isCurrentSeason: d.attributes.isCurrentSeason ?? false,
                        isOffseason: d.attributes.isOffseason ?? false,
                    },
                }
            );
        });
        this.links = {
            self: links.self ?? "",
        };
        this.meta = meta ?? {};
    }
}
class PUBGRankedProfile {
    constructor(data, links, meta) {
        this.data = {
            type: data.type ?? "",
            attributes: {
                rankedGameModeStats: {
                    squad: {
                        currentRankPoint: data.attributes.rankedGameModeStats.squad.currentRankPoint ?? 0,
                        bestRankPoint: data.attributes.rankedGameModeStats.squad.bestRankPoint ?? 0,
                        currentTier: {
                            tier: data.attributes.rankedGameModeStats.squad.currentTier.tier ?? "",
                            subTier: data.attributes.rankedGameModeStats.squad.currentTier.subTier ?? "",
                        },
                        bestTier: {
                            tier: data.attributes.rankedGameModeStats.squad.bestTier.tier ?? "",
                            subTier: data.attributes.rankedGameModeStats.squad.bestTier.subTier ?? "",
                        },
                        roundsPlayed: data.attributes.rankedGameModeStats.squad.roundsPlayed ?? 0,
                        avgRank: data.attributes.rankedGameModeStats.squad.avgRank ?? 0,
                        avgSurvivalTime: data.attributes.rankedGameModeStats.squad.avgSurvivalTime ?? 0,
                        top10Ratio: data.attributes.rankedGameModeStats.squad.top10Ratio ?? 0,
                        winRatio: data.attributes.rankedGameModeStats.squad.winRatio ?? 0,
                        assists: data.attributes.rankedGameModeStats.squad.assets ?? 0,
                        wins: data.attributes.rankedGameModeStats.squad.wins ?? 0,
                        kda: data.attributes.rankedGameModeStats.squad.kda ?? 0,
                        kdr: data.attributes.rankedGameModeStats.squad.kdr ?? 0,
                        kills: data.attributes.rankedGameModeStats.squad.kills ?? 0,
                        deaths: data.attributes.rankedGameModeStats.squad.deaths ?? 0,
                        roundMostKills: data.attributes.rankedGameModeStats.squad.roundMostKills ?? 0,
                        longestKill: data.attributes.rankedGameModeStats.squad.longestKill ?? 0,
                        headshotKills: data.attributes.rankedGameModeStats.squad.headshotKills ?? 0,
                        headshotKillRatio: data.attributes.rankedGameModeStats.squad.headshotKillRatio ?? 0,
                        damageDealt: data.attributes.rankedGameModeStats.squad.damageDealt ?? 0,
                        dBNOs: data.attributes.rankedGameModeStats.squad.dBNOs ?? 0,
                        reviveRatio: data.attributes.rankedGameModeStats.squad.reviveRatio ?? 0,
                        revives: data.attributes.rankedGameModeStats.squad.revives ?? 0,
                        heals: data.attributes.rankedGameModeStats.squad.heals ?? 0,
                        boosts: data.attributes.rankedGameModeStats.squad.boosts ?? 0,
                        weaponsAcquired: data.attributes.rankedGameModeStats.squad.weaponsAcquired ?? 0,
                        teamKills: data.attributes.rankedGameModeStats.squad.teamKills ?? 0,
                        playTime: data.attributes.rankedGameModeStats.squad.playTime ?? 0,
                        killStreak: data.attributes.rankedGameModeStats.squad.killStreak ?? 0,
                    },
                    "squad-fpp": {
                        currentRankPoint: data.attributes.rankedGameModeStats["squad-fpp"].currentRankPoint ?? 0,
                        bestRankPoint: data.attributes.rankedGameModeStats["squad-fpp"].bestRankPoint ?? 0,
                        currentTier: {
                            tier: data.attributes.rankedGameModeStats["squad-fpp"].currentTier.tier ?? "",
                            subTier: data.attributes.rankedGameModeStats["squad-fpp"].currentTier.subTier ?? "",
                        },
                        bestTier: {
                            tier: data.attributes.rankedGameModeStats["squad-fpp"].bestTier.tier ?? "",
                            subTier: data.attributes.rankedGameModeStats["squad-fpp"].bestTier.subTier ?? "",
                        },
                        roundsPlayed: data.attributes.rankedGameModeStats["squad-fpp"].roundsPlayed ?? 0,
                        avgRank: data.attributes.rankedGameModeStats["squad-fpp"].avgRank ?? 0,
                        avgSurvivalTime: data.attributes.rankedGameModeStats["squad-fpp"].avgSurvivalTime ?? 0,
                        top10Ratio: data.attributes.rankedGameModeStats["squad-fpp"].top10Ratio ?? 0,
                        winRatio: data.attributes.rankedGameModeStats["squad-fpp"].winRatio ?? 0,
                        assists: data.attributes.rankedGameModeStats["squad-fpp"].assets ?? 0,
                        wins: data.attributes.rankedGameModeStats["squad-fpp"].wins ?? 0,
                        kda: data.attributes.rankedGameModeStats["squad-fpp"].kda ?? 0,
                        kdr: data.attributes.rankedGameModeStats["squad-fpp"].kdr ?? 0,
                        kills: data.attributes.rankedGameModeStats["squad-fpp"].kills ?? 0,
                        deaths: data.attributes.rankedGameModeStats["squad-fpp"].deaths ?? 0,
                        roundMostKills: data.attributes.rankedGameModeStats["squad-fpp"].roundMostKills ?? 0,
                        longestKill: data.attributes.rankedGameModeStats["squad-fpp"].longestKill ?? 0,
                        headshotKills: data.attributes.rankedGameModeStats["squad-fpp"].headshotKills ?? 0,
                        headshotKillRatio: data.attributes.rankedGameModeStats["squad-fpp"].headshotKillRatio ?? 0,
                        damageDealt: data.attributes.rankedGameModeStats["squad-fpp"].damageDealt ?? 0,
                        dBNOs: data.attributes.rankedGameModeStats["squad-fpp"].dBNOs ?? 0,
                        reviveRatio: data.attributes.rankedGameModeStats["squad-fpp"].reviveRatio ?? 0,
                        revives: data.attributes.rankedGameModeStats["squad-fpp"].revives ?? 0,
                        heals: data.attributes.rankedGameModeStats["squad-fpp"].heals ?? 0,
                        boosts: data.attributes.rankedGameModeStats["squad-fpp"].boosts ?? 0,
                        weaponsAcquired: data.attributes.rankedGameModeStats["squad-fpp"].weaponsAcquired ?? 0,
                        teamKills: data.attributes.rankedGameModeStats["squad-fpp"].teamKills ?? 0,
                        playTime: data.attributes.rankedGameModeStats["squad-fpp"].playTime ?? 0,
                        killStreak: data.attributes.rankedGameModeStats["squad-fpp"].killStreak ?? 0,
                    }
                }
            },
            relationships: {
                player: {
                    data: {
                        type: data.relationships.player.data.type ?? "",
                        id: data.relationships.player.data.id ?? "",
                    },
                },
                season: {
                    data: {
                        type: data.relationships.season.data.type ?? "",
                        id: data.relationships.season.data.id ?? "",
                    },
                }
            },
        };
        this.links = {
            self: links.self ?? ""
        };
        this.meta = meta ?? {};
    }
}
class PUBGStats {
    constructor(data, links, meta) {
        this.data = {
            type: data.type ?? "",
            attributes: {
                gameModeStats: {
                    duo: {
                        assists: data.attributes.gameModeStats.duo.assists ?? 0,
                        boosts: data.attributes.gameModeStats.duo.boosts ?? 0,
                        dBNOs: data.attributes.gameModeStats.duo.dBNOs ?? 0,
                        dailyKills: data.attributes.gameModeStats.duo.dailyKills ?? 0,
                        damageDealt: data.attributes.gameModeStats.duo.damageDealt ?? 0,
                        days: data.attributes.gameModeStats.duo.days ?? 0,
                        dailyWins: data.attributes.gameModeStats.duo.dailyWins ?? 0,
                        headshotKills: data.attributes.gameModeStats.duo.headshotKills ?? 0,
                        heals: data.attributes.gameModeStats.duo.heals ?? 0,
                        killPoints: data.attributes.gameModeStats.duo.killPoints ?? 0,
                        kills: data.attributes.gameModeStats.duo.kills ?? 0,
                        longestKill: data.attributes.gameModeStats.duo.longestKill ?? 0,
                        longestTimeSurvived: data.attributes.gameModeStats.duo.longestTimeSurvived ?? 0,
                        losses: data.attributes.gameModeStats.duo.losses ?? 0,
                        maxKillStreaks: data.attributes.gameModeStats.duo.maxKillStreaks ?? 0,
                        mostSurvivalTime: data.attributes.gameModeStats.duo.mostSurvivalTime ?? 0,
                        rankPoints: data.attributes.gameModeStats.duo.rankPoints ?? 0,
                        rankPointsTitle: data.attributes.gameModeStats.duo.rankPointsTitle ?? "",
                        revives: data.attributes.gameModeStats.duo.revives ?? 0,
                        rideDistance: data.attributes.gameModeStats.duo.rideDistance ?? 0,
                        roadKills: data.attributes.gameModeStats.duo.roadKills ?? 0,
                        roundMostKills: data.attributes.gameModeStats.duo.roundMostKills ?? 0,
                        roundsPlayed: data.attributes.gameModeStats.duo.roundsPlayed ?? 0,
                        suicides: data.attributes.gameModeStats.duo.suicides ?? 0,
                        swimDistance: data.attributes.gameModeStats.duo.swimDistance ?? 0,
                        teamKills: data.attributes.gameModeStats.duo.teamKills ?? 0,
                        timeSurvived: data.attributes.gameModeStats.duo.timeSurvived ?? 0,
                        top10s: data.attributes.gameModeStats.duo.top10s ?? 0,
                        vehicleDestroys: data.attributes.gameModeStats.duo.vehicleDestroys ?? 0,
                        walkDistance: data.attributes.gameModeStats.duo.walkDistance ?? 0,
                        weaponsAcquired: data.attributes.gameModeStats.duo.weaponsAcquired ?? 0,
                        weeklyKills: data.attributes.gameModeStats.duo.weeklyKills ?? 0,
                        weeklyWins: data.attributes.gameModeStats.duo.weeklyWins ?? 0,
                        winPoints: data.attributes.gameModeStats.duo.winPoints ?? 0,
                        wins: data.attributes.gameModeStats.duo.wins ?? 0
                    },
                    "duo-fpp": {
                        assists: data.attributes.gameModeStats["duo-fpp"].assists ?? 0,
                        boosts: data.attributes.gameModeStats["duo-fpp"].boosts ?? 0,
                        dBNOs: data.attributes.gameModeStats["duo-fpp"].dBNOs ?? 0,
                        dailyKills: data.attributes.gameModeStats["duo-fpp"].dailyKills ?? 0,
                        damageDealt: data.attributes.gameModeStats["duo-fpp"].damageDealt ?? 0,
                        days: data.attributes.gameModeStats["duo-fpp"].days ?? 0,
                        dailyWins: data.attributes.gameModeStats["duo-fpp"].dailyWins ?? 0,
                        headshotKills: data.attributes.gameModeStats["duo-fpp"].headshotKills ?? 0,
                        heals: data.attributes.gameModeStats["duo-fpp"].heals ?? 0,
                        killPoints: data.attributes.gameModeStats["duo-fpp"].killPoints ?? 0,
                        kills: data.attributes.gameModeStats["duo-fpp"].kills ?? 0,
                        longestKill: data.attributes.gameModeStats["duo-fpp"].longestKill ?? 0,
                        longestTimeSurvived: data.attributes.gameModeStats["duo-fpp"].longestTimeSurvived ?? 0,
                        losses: data.attributes.gameModeStats["duo-fpp"].losses ?? 0,
                        maxKillStreaks: data.attributes.gameModeStats["duo-fpp"].maxKillStreaks ?? 0,
                        mostSurvivalTime: data.attributes.gameModeStats["duo-fpp"].mostSurvivalTime ?? 0,
                        rankPoints: data.attributes.gameModeStats["duo-fpp"].rankPoints ?? 0,
                        rankPointsTitle: data.attributes.gameModeStats["duo-fpp"].rankPointsTitle ?? "",
                        revives: data.attributes.gameModeStats["duo-fpp"].revives ?? 0,
                        rideDistance: data.attributes.gameModeStats["duo-fpp"].rideDistance ?? 0,
                        roadKills: data.attributes.gameModeStats["duo-fpp"].roadKills ?? 0,
                        roundMostKills: data.attributes.gameModeStats["duo-fpp"].roundMostKills ?? 0,
                        roundsPlayed: data.attributes.gameModeStats["duo-fpp"].roundsPlayed ?? 0,
                        suicides: data.attributes.gameModeStats["duo-fpp"].suicides ?? 0,
                        swimDistance: data.attributes.gameModeStats["duo-fpp"].swimDistance ?? 0,
                        teamKills: data.attributes.gameModeStats["duo-fpp"].teamKills ?? 0,
                        timeSurvived: data.attributes.gameModeStats["duo-fpp"].timeSurvived ?? 0,
                        top10s: data.attributes.gameModeStats["duo-fpp"].top10s ?? 0,
                        vehicleDestroys: data.attributes.gameModeStats["duo-fpp"].vehicleDestroys ?? 0,
                        walkDistance: data.attributes.gameModeStats["duo-fpp"].walkDistance ?? 0,
                        weaponsAcquired: data.attributes.gameModeStats["duo-fpp"].weaponsAcquired ?? 0,
                        weeklyKills: data.attributes.gameModeStats["duo-fpp"].weeklyKills ?? 0,
                        weeklyWins: data.attributes.gameModeStats["duo-fpp"].weeklyWins ?? 0,
                        winPoints: data.attributes.gameModeStats["duo-fpp"].winPoints ?? 0,
                        wins: data.attributes.gameModeStats["duo-fpp"].wins ?? 0
                    },
                    solo: {
                        assists: data.attributes.gameModeStats.solo.assists ?? 0,
                        boosts: data.attributes.gameModeStats.solo.boosts ?? 0,
                        dBNOs: data.attributes.gameModeStats.solo.dBNOs ?? 0,
                        dailyKills: data.attributes.gameModeStats.solo.dailyKills ?? 0,
                        damageDealt: data.attributes.gameModeStats.solo.damageDealt ?? 0,
                        days: data.attributes.gameModeStats.solo.days ?? 0,
                        dailyWins: data.attributes.gameModeStats.solo.dailyWins ?? 0,
                        headshotKills: data.attributes.gameModeStats.solo.headshotKills ?? 0,
                        heals: data.attributes.gameModeStats.solo.heals ?? 0,
                        killPoints: data.attributes.gameModeStats.solo.killPoints ?? 0,
                        kills: data.attributes.gameModeStats.solo.kills ?? 0,
                        longestKill: data.attributes.gameModeStats.solo.longestKill ?? 0,
                        longestTimeSurvived: data.attributes.gameModeStats.solo.longestTimeSurvived ?? 0,
                        losses: data.attributes.gameModeStats.solo.losses ?? 0,
                        maxKillStreaks: data.attributes.gameModeStats.solo.maxKillStreaks ?? 0,
                        mostSurvivalTime: data.attributes.gameModeStats.solo.mostSurvivalTime ?? 0,
                        rankPoints: data.attributes.gameModeStats.solo.rankPoints ?? 0,
                        rankPointsTitle: data.attributes.gameModeStats.solo.rankPointsTitle ?? "",
                        revives: data.attributes.gameModeStats.solo.revives ?? 0,
                        rideDistance: data.attributes.gameModeStats.solo.rideDistance ?? 0,
                        roadKills: data.attributes.gameModeStats.solo.roadKills ?? 0,
                        roundMostKills: data.attributes.gameModeStats.solo.roundMostKills ?? 0,
                        roundsPlayed: data.attributes.gameModeStats.solo.roundsPlayed ?? 0,
                        suicides: data.attributes.gameModeStats.solo.suicides ?? 0,
                        swimDistance: data.attributes.gameModeStats.solo.swimDistance ?? 0,
                        teamKills: data.attributes.gameModeStats.solo.teamKills ?? 0,
                        timeSurvived: data.attributes.gameModeStats.solo.timeSurvived ?? 0,
                        top10s: data.attributes.gameModeStats.solo.top10s ?? 0,
                        vehicleDestroys: data.attributes.gameModeStats.solo.vehicleDestroys ?? 0,
                        walkDistance: data.attributes.gameModeStats.solo.walkDistance ?? 0,
                        weaponsAcquired: data.attributes.gameModeStats.solo.weaponsAcquired ?? 0,
                        weeklyKills: data.attributes.gameModeStats.solo.weeklyKills ?? 0,
                        weeklyWins: data.attributes.gameModeStats.solo.weeklyWins ?? 0,
                        winPoints: data.attributes.gameModeStats.solo.winPoints ?? 0,
                        wins: data.attributes.gameModeStats.solo.wins ?? 0
                    },
                    "solo-fpp": {
                        assists: data.attributes.gameModeStats["solo-fpp"].assists ?? 0,
                        boosts: data.attributes.gameModeStats["solo-fpp"].boosts ?? 0,
                        dBNOs: data.attributes.gameModeStats["solo-fpp"].dBNOs ?? 0,
                        dailyKills: data.attributes.gameModeStats["solo-fpp"].dailyKills ?? 0,
                        damageDealt: data.attributes.gameModeStats["solo-fpp"].damageDealt ?? 0,
                        days: data.attributes.gameModeStats["solo-fpp"].days ?? 0,
                        dailyWins: data.attributes.gameModeStats["solo-fpp"].dailyWins ?? 0,
                        headshotKills: data.attributes.gameModeStats["solo-fpp"].headshotKills ?? 0,
                        heals: data.attributes.gameModeStats["solo-fpp"].heals ?? 0,
                        killPoints: data.attributes.gameModeStats["solo-fpp"].killPoints ?? 0,
                        kills: data.attributes.gameModeStats["solo-fpp"].kills ?? 0,
                        longestKill: data.attributes.gameModeStats["solo-fpp"].longestKill ?? 0,
                        longestTimeSurvived: data.attributes.gameModeStats["solo-fpp"].longestTimeSurvived ?? 0,
                        losses: data.attributes.gameModeStats["solo-fpp"].losses ?? 0,
                        maxKillStreaks: data.attributes.gameModeStats["solo-fpp"].maxKillStreaks ?? 0,
                        mostSurvivalTime: data.attributes.gameModeStats["solo-fpp"].mostSurvivalTime ?? 0,
                        rankPoints: data.attributes.gameModeStats["solo-fpp"].rankPoints ?? 0,
                        rankPointsTitle: data.attributes.gameModeStats["solo-fpp"].rankPointsTitle ?? "",
                        revives: data.attributes.gameModeStats["solo-fpp"].revives ?? 0,
                        rideDistance: data.attributes.gameModeStats["solo-fpp"].rideDistance ?? 0,
                        roadKills: data.attributes.gameModeStats["solo-fpp"].roadKills ?? 0,
                        roundMostKills: data.attributes.gameModeStats["solo-fpp"].roundMostKills ?? 0,
                        roundsPlayed: data.attributes.gameModeStats["solo-fpp"].roundsPlayed ?? 0,
                        suicides: data.attributes.gameModeStats["solo-fpp"].suicides ?? 0,
                        swimDistance: data.attributes.gameModeStats["solo-fpp"].swimDistance ?? 0,
                        teamKills: data.attributes.gameModeStats["solo-fpp"].teamKills ?? 0,
                        timeSurvived: data.attributes.gameModeStats["solo-fpp"].timeSurvived ?? 0,
                        top10s: data.attributes.gameModeStats["solo-fpp"].top10s ?? 0,
                        vehicleDestroys: data.attributes.gameModeStats["solo-fpp"].vehicleDestroys ?? 0,
                        walkDistance: data.attributes.gameModeStats["solo-fpp"].walkDistance ?? 0,
                        weaponsAcquired: data.attributes.gameModeStats["solo-fpp"].weaponsAcquired ?? 0,
                        weeklyKills: data.attributes.gameModeStats["solo-fpp"].weeklyKills ?? 0,
                        weeklyWins: data.attributes.gameModeStats["solo-fpp"].weeklyWins ?? 0,
                        winPoints: data.attributes.gameModeStats["solo-fpp"].winPoints ?? 0,
                        wins: data.attributes.gameModeStats["solo-fpp"].wins ?? 0
                    },
                    squad: {
                        assists: data.attributes.gameModeStats.squad.assists ?? 0,
                        boosts: data.attributes.gameModeStats.squad.boosts ?? 0,
                        dBNOs: data.attributes.gameModeStats.squad.dBNOs ?? 0,
                        dailyKills: data.attributes.gameModeStats.squad.dailyKills ?? 0,
                        damageDealt: data.attributes.gameModeStats.squad.damageDealt ?? 0,
                        days: data.attributes.gameModeStats.squad.days ?? 0,
                        dailyWins: data.attributes.gameModeStats.squad.dailyWins ?? 0,
                        headshotKills: data.attributes.gameModeStats.squad.headshotKills ?? 0,
                        heals: data.attributes.gameModeStats.squad.heals ?? 0,
                        killPoints: data.attributes.gameModeStats.squad.killPoints ?? 0,
                        kills: data.attributes.gameModeStats.squad.kills ?? 0,
                        longestKill: data.attributes.gameModeStats.squad.longestKill ?? 0,
                        longestTimeSurvived: data.attributes.gameModeStats.squad.longestTimeSurvived ?? 0,
                        losses: data.attributes.gameModeStats.squad.losses ?? 0,
                        maxKillStreaks: data.attributes.gameModeStats.squad.maxKillStreaks ?? 0,
                        mostSurvivalTime: data.attributes.gameModeStats.squad.mostSurvivalTime ?? 0,
                        rankPoints: data.attributes.gameModeStats.squad.rankPoints ?? 0,
                        rankPointsTitle: data.attributes.gameModeStats.squad.rankPointsTitle ?? "",
                        revives: data.attributes.gameModeStats.squad.revives ?? 0,
                        rideDistance: data.attributes.gameModeStats.squad.rideDistance ?? 0,
                        roadKills: data.attributes.gameModeStats.squad.roadKills ?? 0,
                        roundMostKills: data.attributes.gameModeStats.squad.roundMostKills ?? 0,
                        roundsPlayed: data.attributes.gameModeStats.squad.roundsPlayed ?? 0,
                        suicides: data.attributes.gameModeStats.squad.suicides ?? 0,
                        swimDistance: data.attributes.gameModeStats.squad.swimDistance ?? 0,
                        teamKills: data.attributes.gameModeStats.squad.teamKills ?? 0,
                        timeSurvived: data.attributes.gameModeStats.squad.timeSurvived ?? 0,
                        top10s: data.attributes.gameModeStats.squad.top10s ?? 0,
                        vehicleDestroys: data.attributes.gameModeStats.squad.vehicleDestroys ?? 0,
                        walkDistance: data.attributes.gameModeStats.squad.walkDistance ?? 0,
                        weaponsAcquired: data.attributes.gameModeStats.squad.weaponsAcquired ?? 0,
                        weeklyKills: data.attributes.gameModeStats.squad.weeklyKills ?? 0,
                        weeklyWins: data.attributes.gameModeStats.squad.weeklyWins ?? 0,
                        winPoints: data.attributes.gameModeStats.squad.winPoints ?? 0,
                        wins: data.attributes.gameModeStats.squad.wins ?? 0
                    },
                    "squad-fpp": {
                        assists: data.attributes.gameModeStats["squad-fpp"].assists ?? 0,
                        boosts: data.attributes.gameModeStats["squad-fpp"].boosts ?? 0,
                        dBNOs: data.attributes.gameModeStats["squad-fpp"].dBNOs ?? 0,
                        dailyKills: data.attributes.gameModeStats["squad-fpp"].dailyKills ?? 0,
                        damageDealt: data.attributes.gameModeStats["squad-fpp"].damageDealt ?? 0,
                        days: data.attributes.gameModeStats["squad-fpp"].days ?? 0,
                        dailyWins: data.attributes.gameModeStats["squad-fpp"].dailyWins ?? 0,
                        headshotKills: data.attributes.gameModeStats["squad-fpp"].headshotKills ?? 0,
                        heals: data.attributes.gameModeStats["squad-fpp"].heals ?? 0,
                        killPoints: data.attributes.gameModeStats["squad-fpp"].killPoints ?? 0,
                        kills: data.attributes.gameModeStats["squad-fpp"].kills ?? 0,
                        longestKill: data.attributes.gameModeStats["squad-fpp"].longestKill ?? 0,
                        longestTimeSurvived: data.attributes.gameModeStats["squad-fpp"].longestTimeSurvived ?? 0,
                        losses: data.attributes.gameModeStats["squad-fpp"].losses ?? 0,
                        maxKillStreaks: data.attributes.gameModeStats["squad-fpp"].maxKillStreaks ?? 0,
                        mostSurvivalTime: data.attributes.gameModeStats["squad-fpp"].mostSurvivalTime ?? 0,
                        rankPoints: data.attributes.gameModeStats["squad-fpp"].rankPoints ?? 0,
                        rankPointsTitle: data.attributes.gameModeStats["squad-fpp"].rankPointsTitle ?? "",
                        revives: data.attributes.gameModeStats["squad-fpp"].revives ?? 0,
                        rideDistance: data.attributes.gameModeStats["squad-fpp"].rideDistance ?? 0,
                        roadKills: data.attributes.gameModeStats["squad-fpp"].roadKills ?? 0,
                        roundMostKills: data.attributes.gameModeStats["squad-fpp"].roundMostKills ?? 0,
                        roundsPlayed: data.attributes.gameModeStats["squad-fpp"].roundsPlayed ?? 0,
                        suicides: data.attributes.gameModeStats["squad-fpp"].suicides ?? 0,
                        swimDistance: data.attributes.gameModeStats["squad-fpp"].swimDistance ?? 0,
                        teamKills: data.attributes.gameModeStats["squad-fpp"].teamKills ?? 0,
                        timeSurvived: data.attributes.gameModeStats["squad-fpp"].timeSurvived ?? 0,
                        top10s: data.attributes.gameModeStats["squad-fpp"].top10s ?? 0,
                        vehicleDestroys: data.attributes.gameModeStats["squad-fpp"].vehicleDestroys ?? 0,
                        walkDistance: data.attributes.gameModeStats["squad-fpp"].walkDistance ?? 0,
                        weaponsAcquired: data.attributes.gameModeStats["squad-fpp"].weaponsAcquired ?? 0,
                        weeklyKills: data.attributes.gameModeStats["squad-fpp"].weeklyKills ?? 0,
                        weeklyWins: data.attributes.gameModeStats["squad-fpp"].weeklyWins ?? 0,
                        winPoints: data.attributes.gameModeStats["squad-fpp"].winPoints ?? 0,
                        wins: data.attributes.gameModeStats["squad-fpp"].wins ?? 0
                    }
                },
                bestRankPoint: data.attributes.bestRankPoint ?? 0,
            },
            relationships: {
                player: {
                    data: {
                        type: data.relationships.player.data.type ?? "",
                        id: data.relationships.player.data.id ?? "",
                    },
                },
                matchesSolo: {
                    data: [],
                },
                matchesSoloFPP: {
                    data: [],
                },
                matchesDuo: {
                    data: [],
                },
                matchesDuoFPP: {
                    data: [],
                },
                matchesSquad: {
                    data: [],
                },
                matchesSquadFPP: {
                    data: [],
                },
                season: {
                    data: {
                        type: data.relationships.season.data.type ?? "",
                        id: data.relationships.season.data.id ?? "",
                    },
                }
            },
        };
        data.relationships.matchesSolo.data.forEach((d) => {
            this.data.relationships.matchesSolo.data.push(
                {
                    type: data.type ?? "",
                    id: data.id ?? ""
                },
            );
        });
        data.relationships.matchesSoloFPP.data.forEach((d) => {
            this.data.relationships.matchesSoloFPP.data.push(
                {
                    type: data.type ?? "",
                    id: data.id ?? ""
                },
            );
        });
        data.relationships.matchesDuo.data.forEach((d) => {
            this.data.relationships.matchesDuo.data.push(
                {
                    type: data.type ?? "",
                    id: data.id ?? ""
                },
            );
        });
        data.relationships.matchesDuoFPP.data.forEach((d) => {
            this.data.relationships.matchesDuoFPP.data.push(
                {
                    type: data.type ?? "",
                    id: data.id ?? ""
                },
            );
        });
        data.relationships.matchesSquad.data.forEach((d) => {
            this.data.relationships.matchesSquad.data.push(
                {
                    type: data.type ?? "",
                    id: data.id ?? ""
                },
            );
        });
        data.relationships.matchesSquadFPP.data.forEach((d) => {
            this.data.relationships.matchesSquadFPP.data.push(
                {
                    type: data.type ?? "",
                    id: data.id ?? ""
                },
            );
        });
        this.links = {
            self: links.self ?? ""
        };
        this.meta = meta ?? {};
    }
}
class PUBGWeaponMasteryStats {
    constructor(data, links, meta) {
        this.data = {
            type: data.type ?? "",
            id: data.id ?? "",
            attributes: {
                latestMatchId: data.attributes.latestMatchId ?? "",
                platform: data.attributes.platform ?? "",
                seasonId: data.attributes.seasonId ?? "",
                weaponSummaries: {
                    Medals: [],
                },
            }
        };
        for(const weapon in data.attributes.weaponSummaries) {
            this.data.attributes.weaponSummaries[weapon] = data.attributes.weaponSummaries[weapon];
        };
        data.attributes.weaponSummaries.Medals.forEach((medal) => {
            this.data.attributes.weaponSummaries.Medals.push(
                {
                    MedalId: medal.MedalId ?? "",
                    Count: medal.Count ?? 0,
                },
            );
        });
        this.links = {
            self: links.self ?? ""
        };
        this.meta = meta ?? {};
    }
}
class PUBGSurvivalMasteryStats {
    constructor(data, links, meta) {
        this.data = {
            type: data.type ?? "",
            id: data.id ?? "",
            attributes: {
                xp: data.attributes.xp ?? 0,
                level: data.attributes.level ?? 0,
                totalMatchesPlayed: data.attributes.totalMatchesPlayed ?? 0,
                latestMatchId: data.attributes.latestMatchId ?? "",
                stats: {}
            },
        };
        for(const stat in data.attributes.stats) {
            this.data.attributes.stats[stat] = data.attributes.stats[stat];
        };
        this.links = {
            self: links.self ?? ""
        };
        this.meta = meta ?? {};
    }
}
class PUBGMatchStats {
    constructor(data, included, links, meta) {
        this.data = {
            type: data.type ?? "",
            id: data.id ?? "",
            attributes: {
                createdAt: data.attributes.createdAt ?? "",
                duration: data.attributes.duration ?? 0,
                matchType: data.attributes.matchType ?? "",
                gameMode: data.attributes.gameMode ?? "",
                mapName: data.attributes.mapName ?? "",
                isCustomMatch: data.attributes.isCustomMatch ?? false,
                patchVersion: data.attributes.patchVersion ?? "",
                seasonState: data.attributes.seasonState ?? "",
                shardId: data.attributes.shardId ?? "",
                stats: data.attributes.stats ?? {},
                tags: data.attributes.tags ?? {},
                titleId: data.attributes.titleId ?? "",
            },
            relationships: {
                assets: {
                    data: [],
                },
                rosters: {
                    data: [],
                },
                rounds: data.relationships.rounds ?? {},
                spectators: data.relationships.spectators ?? {}
            },
            links: {
                schema: data.links.schema ?? "",
                self: data.links.self ?? ""
            }
        };
        data.relationships.assets.data.forEach((d) => {
            this.data.relationships.assets.data.push(
                {
                    type: d.type ?? "",
                    id: d.id ?? "",
                },
            );
        });
        data.relationships.rosters.data.forEach((d) => {
            this.data.relationships.rosters.data.push(
                {
                    type: d.type ?? "",
                    id: d.id ?? "",
                },
            );
        });
        this.included = included ?? [];
        this.links = {
            self: links.self ?? ""
        };
        this.meta = meta ?? {};
    }
}
class PUBGGameModeLeaderboard {
    constructor(data) {
        this.data = {
            type: data.type ?? "",
            id: data.id ?? "",
            attributes: {
                shardId: data.attributes.shardId ?? "",
                gameMode: data.attributes.gameMode ?? "",
                seasonId: data.attributes.seasonId ?? "",
            },
            relationships: {
                players: {
                    data: [],
                },
            },
            included: [],
            links: {
                self: data.links.self ?? "",
            },
            meta: data.meta ?? {}
        }
        data.relationships.players.data.forEach((d) => {
            this.data.relationships.players.data.push(
                {
                    type: d.type ?? "",
                    id: d.id ?? "",
                },
            );
        });
        data.included.forEach((d) => {
            this.data.included.push(
                {
                    type: d.type ?? "",
                    id: d.id ?? "",
                    attributes: {
                        name: d.attributes.name ?? "",
                        rank: d.attributes.rank ?? 0,
                        stats: {
                            rankPoints: d.attributes.stats.rankPoints ?? 0,
                            wins: d.attributes.stats.wins ?? 0,
                            games: d.attributes.stats.games ?? 0,
                            winRatio: d.attributes.stats.winRatio ?? 0,
                            averageDamage: d.attributes.stats.averageDamage ?? 0,
                            kills: d.attributes.stats.kills ?? 0,
                            killDeathRatio: d.attributes.stats.killDeathRatio ?? 0,
                            kda: d.attributes.stats.kda ?? 0,
                            averageRank: d.attributes.stats.averageRank ?? 0,
                            tier: d.attributes.stats.tier ?? "",
                            subTier: d.attributes.stats.subTier ?? "",
                        }
                    }
                }
            )
        })
    }
}
class PUBGTournamentsResponse {
    constructor(data, links, meta) {
        this.data = [];
        data.forEach((d) => {
            this.data.push(
                {
                    type: d.type ?? "",
                    id: d.id ?? "",
                    attributes: {
                        createdAt: d.attributes.createdAt ?? "",
                    }
                }
            )
        })
        this.links = {
            self: links.self ?? ""
        };
        this.meta = meta ?? {};
    }
}
class PUBGTournamentStats {
    constructor(data, included, links, meta) {
        this.data = {
            type: data.type ?? "",
            id: data.id ?? "",
            relationships: {
                matches: {
                    data: [],
                }
            }
        };
        data.relationships.matches.data.forEach((d) => {
            this.data.relationships.matches.data.push(
                {
                    type: d.type ?? "",
                    id: d.id ?? ""
                }
            )
        })
        this.included = [];
        included.forEach((d) => {
            this.included.push(
                {
                    type: d.type ?? "",
                    id: d.id ?? "",
                    attributes: {
                        createdAt: d.attributes.createdAt ?? "",
                    }
                }
            )
        })
        this.links = {
            self: links.self ?? ""
        };
        this.meta = meta ?? {};
    }
}
class PUBGSampleMatchesReponse {
    constructor(data, relationships) {
        this.data = {
            type: data.type ?? "",
            id: data.id ?? "",
            attributes: {
                createdAt: data.attributes.createdAt ?? "",
                shardId: data.attributes.shardId ?? "",
                titleId: data.attributes.titleId ?? "",
            }
        };
        this.relationships = {
            matches: {
                data: [],
            }
        };
        relationships.matches.data.forEach((d) => {
            this.relationships.matches.data.push(
                {
                    type: d.type ?? "",
                    id: d.id ?? ""
                }
            )
        });
    }
}
class PUBGAPIStatusResponse {
    constructor(data) {
        this.data = {
            type: data.type ?? "",
            id: data.id ?? ""
        }
    }
}
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
            }).then(res => res.json()).then((data) => {
                let players = [];
                data.forEach((d) => {
                    players.push(new PUBGProfile(d.data, d.links, d.meta));
                })
                resolve(players);
            }).catch(reject)
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
            }).then(res => res.json()).then((data) => {
                let players = [];
                data.forEach((d) => {
                    players.push(new PUBGProfile(d.data, d.links, d.meta));
                })
                resolve(players);
            }).catch(reject)
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
            }).then(res => res.json()).then((data) => {
                resolve(new PUBGProfile(data.data, data.links, data.meta));
            }).catch(reject)
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
            }).then(res => res.json()).then((data) => {
                resolve(new PUBGSeasonsResponse(data.data, data.links, data.meta));
            }).catch(reject);
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
            }).then(res => res.json()).then((data) => {
                resolve(new PUBGRankedProfile(data.data, data.links, data.meta));
            }).catch(reject);
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
            }).then(res => res.json()).then((data) => {
                resolve(new PUBGStats(data.data, data.links, data.meta));
            }).catch(reject);
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
            }).then(res => res.json()).then((data) => {
                let players = [];
                data.forEach((d) => {
                    players.push(new PUBGStats(d.data, d.links, d.meta));
                })
                resolve(players);
            }).catch(reject);
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
            }).then(res => res.json()).then((data) => {
                resolve(new PUBGStats(data.data, data.links, data.meta));
            }).catch(reject);
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
            }).then(res => res.json()).then((data) => {
                let players = [];
                data.forEach((d) => {
                    players.push(new PUBGStats(d.data, d.links, d.meta));
                })
                resolve(players);
            }).catch(reject);
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
            }).then(res => res.json()).then((data) => {
                resolve(new PUBGWeaponMasteryStats(data.data, data.links, data.meta));
            }).catch(reject);
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
            }).then(res => res.json()).then((data) => {
                resolve(new PUBGSurvivalMasteryStats(data.data, data.links, data.meta));
            }).catch(reject);
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
            }).then(res => res.json()).then((data) => {
                resolve(new PUBGMatchStats(data.data, data.included, data.links, data.meta));
            }).catch(reject);
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
            }).then(res => res.json()).then((data) => {
                resolve(new PUBGGameModeLeaderboard(data.data));
            }).catch(reject);
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
            }).then(res => res.json()).then((data) => {
                resolve(new PUBGTournamentsResponse(data.data, data.links, data.meta));
            }).catch(reject);
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
            }).then(res => res.json()).then((data) => {
                resolve(new PUBGTournamentStats(data.data, data.included, data.links, data.meta));
            }).catch(reject);
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
            }).then(res => res.json()).then((data) => {
                resolve(new PUBGSampleMatchesReponse(data.data, data.relationships));
            }).catch(reject);
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
            }).then(res => res.json()).then((data) => {
                resolve(new PUBGAPIStatusResponse(data.data));
            }).catch(reject);
        })
    }
}
module.exports = {
    PUBGAPI: PUBGAPI
}