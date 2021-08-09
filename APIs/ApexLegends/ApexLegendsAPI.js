const fetch = require('node-fetch');
class Legend {
    constructor(data, gameInfo, ImgAssets) {
        this.data = [];
        data.forEach((d) => {
            this.data.push({
                name: d.name ?? "",
                value: d.value ?? 0,
                key: d.key ?? "",
                rank: {
                    rankPos: d.rank.rankPos ?? 0,
                    topPercent: d.rank.topPercent ?? 0,
                },
                rankPlatformSpecific: {
                    rankPos: d.rankPlatformSpecific.rankPos ?? 0,
                    topPercent: d.rankPlatformSpecific.topPercent ?? 0,
                },
            });
        });
        this.gameInfo = {
            badges: [],
        };
        gameInfo.badges.forEach((badge) => {
            this.gameInfo.badges.push({
                name: badge.name ?? "",
                value: badge.value ?? 0,
            });
        });
        this.ImgAssets = {
            icon: ImgAssets.icon,
            banner: ImgAssets.banner,
        };
    }
}
class Player {
    constructor(global, realtime, legends, mozambiquehere_internal, total) {
        this.global = {
            name: global.name ?? "",
            uid: global.uid ?? 0,
            avatar: global.avatar ?? "",
            platform: global.platform ?? "",
            level: global.level ?? 0,
            toNextLevelPercent: global.toNextLevelPercent ?? 0,
            internalUpdateCount: global.internalUpdateCount ?? 0,
            bans: {
                isActive: global.bans.isActive ?? false,
                remainingSeconds: global.bans.remainingSeconds ?? 0,
                last_banReason: global.bans.last_banReason ?? "",
            },
            rank: {
                rankScore: global.rank.rankScore ?? 0,
                rankName: global.rank.rankName ?? "",
                rankDiv: global.rank.rankDiv ?? 0,
                ladderPosPosition: global.rank.ladderPosPosition ?? 0,
                rankImg: global.rank.rankImg ?? "",
                rankedSeason: global.rank.rankedSeason ?? "",
            },
            arena: {
                rankScore: global.arena.rankScore ?? 0,
                rankName: global.arena.rankName ?? "",
                rankDiv: global.arena.rankDiv ?? 0,
                ladderPosPosition: global.arena.ladderPosPosition ?? 0,
                rankImg: global.arena.rankImg ?? "",
                rankedSeason: global.arena.rankedSeason ?? "",
            },
            battlepass: {
                level: global.battlepass.level ?? "",
                history: {
                    season1: global.battlepass.history.season1 ?? 0,
                    season2: global.battlepass.history.season2 ?? 0,
                    season3: global.battlepass.history.season3 ?? 0,
                    season4: global.battlepass.history.season4 ?? 0,
                    season5: global.battlepass.history.season5 ?? 0,
                    season6: global.battlepass.history.season6 ?? 0,
                    season7: global.battlepass.history.season7 ?? 0,
                    season8: global.battlepass.history.season8 ?? 0,
                    season9: global.battlepass.history.season9 ?? 0,
                    season10: global.battlepass.history.season10 ?? 0,
                }
            },
            badges: [],
        }
        global.badges.forEach((badge) => {
            this.global.badges.push({
                name: badge.name ?? "",
                value: badge.value ?? 0,
            });
        });
        this.realtime = {
            lobbyState: realtime.lobbyState ?? "",
            isOnline: realtime.isOnline ?? 0,
            isInGame: realtime.isInGame ?? 0,
            canJoin: realtime.canJoin ?? 0,
            partyFull: realtime.partyFull ?? 0,
            selectedLegend: realtime.selectedLegend ?? "",
            currentState: realtime.currentState ?? "",
            currentStateSinceTimestamp: realtime.currentStateSinceTimestamp ?? 0,
            currentStateAsText: realtime.currentStateAsText ?? "",
        };
        this.legends = {
            selected: {
                LegendName: legends.selected.LegendName ?? "",
                data: [],
                gameInfo: {
                    skin: legends.selected.gameInfo.skin ?? "",
                    skinRarity: legends.selected.gameInfo.skinRarity ?? "",
                    frame: legends.selected.gameInfo.frame ?? "",
                    frameRarity: legends.selected.gameInfo.frameRarity ?? "",
                    pose: legends.selected.gameInfo.pose ?? "",
                    poseRarity: legends.selected.gameInfo.poseRarity ?? "",
                    intro: legends.selected.gameInfo.intro ?? "",
                    introRarity: legends.selected.gameInfo.introRarity ?? "",
                    badges: [],
                },
                ImgAssets: {
                    icon: legends.select.ImgAssets.icon ?? "",
                    banner: legends.select.ImgAssets.banner ?? "",
                },
            },
            all: {
                Revanant: new Legend(legends.all.Revanant.data, legends.all.Revanant.gameInfo,legends.all.Revanant.ImgAssets),
                Crypto: new Legend(legends.all.Crypto.data, legends.all.Crypto.gameInfo,legends.all.Crypto.ImgAssets),
                Horizon: new Legend(legends.all.Horizon.data, legends.all.Horizon.gameInfo,legends.all.Horizon.ImgAssets),
                Gibraltar: new Legend(legends.all.Gibraltar.data, legends.all.Gibraltar.gameInfo,legends.all.Gibraltar.ImgAssets),
                Wattson: new Legend(legends.all.Wattson.data, legends.all.Wattson.gameInfo,legends.all.Wattson.ImgAssets),
                Fuse: new Legend(legends.all.Fuse.data, legends.all.Fuse.gameInfo,legends.all.Fuse.ImgAssets),
                Bangalore: new Legend(legends.all.Bangalore.data, legends.all.Bangalore.gameInfo,legends.all.Bangalore.ImgAssets),
                Wraith: new Legend(legends.all.Wraith.data, legends.all.Wraith.gameInfo,legends.all.Wraith.ImgAssets),
                Octane: new Legend(legends.all.Octane.data, legends.all.Octane.gameInfo,legends.all.Octane.ImgAssets),
                Bloodhound: new Legend(legends.all.Bloodhound.data, legends.all.Bloodhound.gameInfo,legends.all.Bloodhound.ImgAssets),
                Caustic: new Legend(legends.all.Caustic.data, legends.all.Caustic.gameInfo,legends.all.Caustic.ImgAssets),
                Lifeline: new Legend(legends.all.Lifeline.data, legends.all.Lifeline.gameInfo,legends.all.Lifeline.ImgAssets),
                Pathfinder: new Legend(legends.all.Pathfinder.data, legends.all.Pathfinder.gameInfo,legends.all.Pathfinder.ImgAssets),
                Mirage: new Legend(legends.all.Mirage.data, legends.all.Mirage.gameInfo,legends.all.Mirage.ImgAssets),
                Rampart: new Legend(legends.all.Rampart.data, legends.all.Revanant.gameInfo,Rampart.all.Rampart.ImgAssets),
                Valkyrie: new Legend(legends.all.Valkyrie.data, legends.all.Valkyrie.gameInfo,legends.all.Valkyrie.ImgAssets),
                Seer: new Legend(legends.all.Seer.data, legends.all.Seer.gameInfo,legends.all.Seer.ImgAssets),
            },
        }
        legends.selected.data.forEach((d) => {
            this.legends.selected.data.push({
                name: d.name ?? "",
                value: d.value ?? 0,
                key: d.key ?? "",
            });
        });
        legends.selected.gameInfo.badges.forEach((badge) => {
            this.legends.selected.gameInfo.badges.push({
                name: badge.name ?? "",
                value: badge.value ?? 0,
                category: badge.category ?? "",
            });
        });
        this.mozambiquehere_internal = {
            isNewToDB: mozambiquehere_internal.isNewToDB ?? true,
            claimedBy: mozambiquehere_internal.claimedBy ?? "",
            APIAccessType: mozambiquehere_internal.APIAccessType ?? "",
            ClusterID: mozambiquehere_internal.ClusterID ?? "",
            rate_limit: {
                max_per_second: mozambiquehere_internal.rate_limit.max_per_second ?? 0,
                current_req: mozambiquehere_internal.rate_limit.current_req ?? "",
            },
            clusterSrv: mozambiquehere_internal.clusterSrv ?? "",
        };
        this.total = total;
    };
};
class MapRotation {
    constructor(battle_royale, arenas, ranked, arenasRanked) {
        this.battle_royale = {
            current: {
                start: battle_royale.current.start ?? 0,
                end: battle_royale.current.end ?? 0,
                readableDate_start: battle_royale.current.readableDate_start ?? "",
                readableDate_end: battle_royale.current.readableDate_end ?? "",
                map: battle_royale.current.map ?? "",
                DurationInSecs: battle_royale.current.DurationInSecs ?? 0,
                DurationInMinutes: battle_royale.current.DurationInMinutes ?? 0,
                remainingSecs: battle_royale.current.remainingSecs ?? 0,
                reaminingMins: battle_royale.current.reaminingMins ?? 0,
                remainingTimer: battle_royale.current.remainingTimer ?? "",
            },
            next: {
                start: battle_royale.next.start ?? 0,
                end: battle_royale.next.end ?? 0,
                readableDate_start: battle_royale.next.readableDate_start ?? "",
                readableDate_end: battle_royale.next.readableDate_end ?? "",
                map: battle_royale.next.map ?? "",
                DurationInSecs: battle_royale.next.DurationInSecs ?? 0,
                DurationInMinutes: battle_royale.next.DurationInMinutes ?? 0,
            },
        };
        this.arenas = {
            current: {
                start: arenas.current.start ?? 0,
                end: arenas.current.end ?? 0,
                readableDate_start: arenas.current.readableDate_start ?? "",
                readableDate_end: arenas.current.readableDate_end ?? "",
                map: arenas.current.map ?? "",
                DurationInSecs: arenas.current.DurationInSecs ?? 0,
                DurationInMinutes: arenas.current.DurationInMinutes ?? 0,
                remainingSecs: arenas.current.remainingSecs ?? 0,
                reaminingMins: arenas.current.reaminingMins ?? 0,
                remainingTimer: arenas.current.remainingTimer ?? "",
            },
            next: {
                start: arenas.next.start ?? 0,
                end: arenas.next.end ?? 0,
                readableDate_start: arenas.next.readableDate_start ?? "",
                readableDate_end: arenas.next.readableDate_end ?? "",
                map: arenas.next.map ?? "",
                DurationInSecs: arenas.next.DurationInSecs ?? 0,
                DurationInMinutes: arenas.next.DurationInMinutes ?? 0,
            },
        };
        this.ranked = {
            current: {
                map: ranked.current.map ?? "",
            },
            next: {
                map: ranked.next.map ?? ""
            },
        };
        this.arenasRanked = {
            current: {
                start: arenasRanked.current.start ?? 0,
                end: arenasRanked.current.end ?? 0,
                readableDate_start: arenasRanked.current.readableDate_start ?? "",
                readableDate_end: arenasRanked.current.readableDate_end ?? "",
                map: arenasRanked.current.map ?? "",
                DurationInSecs: arenasRanked.current.DurationInSecs ?? 0,
                DurationInMinutes: arenasRanked.current.DurationInMinutes ?? 0,
                remainingSecs: arenasRanked.current.remainingSecs ?? 0,
                reaminingMins: arenasRanked.current.reaminingMins ?? 0,
                remainingTimer: arenasRanked.current.remainingTimer ?? "",
            },
            next: {
                start: arenasRanked.next.start ?? 0,
                end: arenasRanked.next.end ?? 0,
                readableDate_start: arenasRanked.next.readableDate_start ?? "",
                readableDate_end: arenasRanked.next.readableDate_end ?? "",
                map: arenasRanked.next.map ?? "",
                DurationInSecs: arenasRanked.next.DurationInSecs ?? 0,
                DurationInMinutes: arenasRanked.next.DurationInMinutes ?? 0,
            },
        };
    }
}
class News {
    constructor(title, link, img, short_desc) {
        this.title = title;
        this.link = link;
        this.img = img;
        this.short_desc = short_desc;
    }
}
class ServerStatus {
    constructor(Status, HTTPCode, ResponseTime, QueryTimestamp) {
        this.Status = Status;
        this.HTTPCode = HTTPCode;
        this.ResponseTime = ResponseTime;
        this.QueryTimestamp = QueryTimestamp;
    }
}
class ServerStatusResponse {
    constructor(message, data) {
        this.message = message;
        this.data = {
            Origin_login: {
                'EU-West': new ServerStatus(data.Origin_login['EU-West'].Status, data.Origin_login['EU-West'].HTTPCode, data.Origin_login['EU-West'].ResponseTime,data.Origin_login['EU-West'].QueryTimestamp),
                'EU-East': new ServerStatus(data.Origin_login['EU-East'].Status, data.Origin_login['EU-East'].HTTPCode, data.Origin_login['EU-East'].ResponseTime, data.Origin_login['EU-East'].QueryTimestamp),
                'US-West': new ServerStatus(data.Origin_login['US-West'].Status, data.Origin_login['US-West'].HTTPCode, data.Origin_login['US-West'].ResponseTime, data.Origin_login['US-West'].QueryTimestamp),
                'US-Central': new ServerStatus(data.Origin_login['US-Central'].Status, data.Origin_login['US-Central'].HTTPCode, data.Origin_login['US-Central'].ResponseTime, data.Origin_login['US-Central'].QueryTimestamp),
                'US-East': new ServerStatus(data.Origin_login['US-East'].Status, data.Origin_login['US-East'].HTTPCode, data.Origin_login['US-East'].ResponseTime, data.Origin_login['US-East'].QueryTimestamp),
                SouthAmerica: new ServerStatus(data.Origin_login.SouthAmerica.Status, data.Origin_login.SouthAmerica.HTTPCode, data.Origin_login.SouthAmerica.ResponseTime, data.Origin_login.SouthAmerica.QueryTimestamp),
                Asia: new ServerStatus(data.Origin_login.Asia.Status, data.Origin_login.Asia.HTTPCode, data.Origin_login.Asia.ResponseTime, data.Origin_login.Asia.QueryTimestamp) 
            },
            EA_novafusin: {
                'EU-West': new ServerStatus(data.EA_novafusin['EU-West'].Status, data.EA_novafusin['EU-West'].HTTPCode, data.EA_novafusin['EU-West'].ResponseTime,data.EA_novafusin['EU-West'].QueryTimestamp),
                'EU-East': new ServerStatus(data.EA_novafusin['EU-East'].Status, data.EA_novafusin['EU-East'].HTTPCode, data.EA_novafusin['EU-East'].ResponseTime, data.EA_novafusin['EU-East'].QueryTimestamp),
                'US-West': new ServerStatus(data.EA_novafusin['US-West'].Status, data.EA_novafusin['US-West'].HTTPCode, data.EA_novafusin['US-West'].ResponseTime, data.EA_novafusin['US-West'].QueryTimestamp),
                'US-Central': new ServerStatus(data.EA_novafusin['US-Central'].Status, data.EA_novafusin['US-Central'].HTTPCode, data.EA_novafusin['US-Central'].ResponseTime, data.EA_novafusin['US-Central'].QueryTimestamp),
                'US-East': new ServerStatus(data.EA_novafusin['US-East'].Status, data.EA_novafusin['US-East'].HTTPCode, data.EA_novafusin['US-East'].ResponseTime, data.EA_novafusin['US-East'].QueryTimestamp),
                SouthAmerica: new ServerStatus(data.EA_novafusin.SouthAmerica.Status, data.EA_novafusin.SouthAmerica.HTTPCode, data.EA_novafusin.SouthAmerica.ResponseTime, data.EA_novafusin.SouthAmerica.QueryTimestamp),
                Asia: new ServerStatus(data.EA_novafusin.Asia.Status, data.EA_novafusin.Asia.HTTPCode, data.EA_novafusin.Asia.ResponseTime, data.EA_novafusin.Asia.QueryTimestamp) 
            },
            EA_accounts: {
                'EU-West': new ServerStatus(data.EA_accounts['EU-West'].Status, data.EA_accounts['EU-West'].HTTPCode, data.EA_accounts['EU-West'].ResponseTime,data.EA_accounts['EU-West'].QueryTimestamp),
                'EU-East': new ServerStatus(data.EA_accounts['EU-East'].Status, data.EA_accounts['EU-East'].HTTPCode, data.EA_accounts['EU-East'].ResponseTime, data.EA_accounts['EU-East'].QueryTimestamp),
                'US-West': new ServerStatus(data.EA_accounts['US-West'].Status, data.EA_accounts['US-West'].HTTPCode, data.EA_accounts['US-West'].ResponseTime, data.EA_accounts['US-West'].QueryTimestamp),
                'US-Central': new ServerStatus(data.EA_accounts['US-Central'].Status, data.EA_accounts['US-Central'].HTTPCode, data.EA_accounts['US-Central'].ResponseTime, data.EA_novafusin['US-Central'].QueryTimestamp),
                'US-East': new ServerStatus(data.EA_accounts['US-East'].Status, data.EA_accounts['US-East'].HTTPCode, data.EA_accounts['US-East'].ResponseTime, data.EA_accounts['US-East'].QueryTimestamp),
                SouthAmerica: new ServerStatus(data.EA_accounts.SouthAmerica.Status, data.EA_accounts.SouthAmerica.HTTPCode, data.EA_accounts.SouthAmerica.ResponseTime, data.EA_novafusin.SouthAmerica.QueryTimestamp),
                Asia: new ServerStatus(data.EA_accounts.Asia.Status, data.EA_accounts.Asia.HTTPCode, data.EA_accounts.Asia.ResponseTime, data.EA_accounts.Asia.QueryTimestamp) 
            },
            ApexOauth_Crossplay: {
                'EU-West': new ServerStatus(data.ApexOauth_Crossplay['EU-West'].Status, data.ApexOauth_Crossplay['EU-West'].HTTPCode, data.ApexOauth_Crossplay['EU-West'].ResponseTime,data.ApexOauth_Crossplay['EU-West'].QueryTimestamp),
                'EU-East': new ServerStatus(data.ApexOauth_Crossplay['EU-East'].Status, data.ApexOauth_Crossplay['EU-East'].HTTPCode, data.ApexOauth_Crossplay['EU-East'].ResponseTime, data.ApexOauth_Crossplay['EU-East'].QueryTimestamp),
                'US-West': new ServerStatus(data.ApexOauth_Crossplay['US-West'].Status, data.ApexOauth_Crossplay['US-West'].HTTPCode, data.ApexOauth_Crossplay['US-West'].ResponseTime, data.ApexOauth_Crossplay['US-West'].QueryTimestamp),
                'US-Central': new ServerStatus(data.ApexOauth_Crossplay['US-Central'].Status, data.ApexOauth_Crossplay['US-Central'].HTTPCode, data.ApexOauth_Crossplay['US-Central'].ResponseTime, data.ApexOauth_Crossplay['US-Central'].QueryTimestamp),
                'US-East': new ServerStatus(data.ApexOauth_Crossplay['US-East'].Status, data.ApexOauth_Crossplay['US-East'].HTTPCode, data.ApexOauth_Crossplay['US-East'].ResponseTime, data.ApexOauth_Crossplay['US-East'].QueryTimestamp),
                SouthAmerica: new ServerStatus(data.ApexOauth_Crossplay.SouthAmerica.Status, data.ApexOauth_Crossplay.SouthAmerica.HTTPCode, data.ApexOauth_Crossplay.SouthAmerica.ResponseTime, data.ApexOauth_Crossplay.SouthAmerica.QueryTimestamp),
                Asia: new ServerStatus(data.ApexOauth_Crossplay.Asia.Status, data.ApexOauth_Crossplay.Asia.HTTPCode, data.ApexOauth_Crossplay.Asia.ResponseTime, data.ApexOauth_Crossplay.Asia.QueryTimestamp) 
            },
            selfCoreTest: {
                'Status-website': new ServerStatus(data.selfCoreTest['Status-website'].Status, data.selfCoreTest['Status-website'].HTTPCode, data.selfCoreTest['Status-website'].ResponseTime,data.selfCoreTest['Status-website'].QueryTimestamp),
                'Stats-API': new ServerStatus(data.selfCoreTest['Stats-API'].Status, data.selfCoreTest['Stats-API'].HTTPCode, data.selfCoreTest['Stats-API'].ResponseTime, data.selfCoreTest['Stats-API'].QueryTimestamp),
                'Overflow-#1': new ServerStatus(data.selfCoreTest['Overflow-#1'].Status, data.selfCoreTest['Overflow-#1'].HTTPCode, data.selfCoreTest['Overflow-#1'].ResponseTime, data.selfCoreTest['Overflow-#1'].QueryTimestamp),
                'Overflow-#2': new ServerStatus(data.selfCoreTest['Overflow-#2'].Status, data.selfCoreTest['Overflow-#2'].HTTPCode, data.selfCoreTest['Overflow-#2'].ResponseTime, data.selfCoreTest['Overflow-#2'].QueryTimestamp),
                'Origin-API': new ServerStatus(data.selfCoreTest['Origin-API'].Status, data.selfCoreTest['Origin-API'].HTTPCode, data.selfCoreTest['Origin-API'].ResponseTime, data.selfCoreTest['Origin-API'].QueryTimestamp),
                'Playstation-API': new ServerStatus(data.otherPlatforms['Playstation-API'].Status, data.otherPlatforms['Playstation-API'].HTTPCode, data.otherPlatforms['Playstation-API'].ResponseTime, data.otherPlatforms['Playstation-API'].QueryTimestamp),
                'Xbox-API': new ServerStatus(data.otherPlatforms['Xbox-API'].Status, data.otherPlatforms['Xbox-API'].HTTPCode, data.otherPlatforms['Xbox-API'].ResponseTime, data.otherPlatforms['Xbox-API'].QueryTimestamp),
            },
            otherPlatforms: {
                'Playstation-Network': new ServerStatus(data.otherPlatforms['Playstation-Network'].Status, data.otherPlatforms['Playstation-Network'].HTTPCode, data.otherPlatforms['Playstation-Network'].ResponseTime, data.otherPlatforms['Playstation-Network'].QueryTimestamp),
                'Xbox-Live': new ServerStatus(data.otherPlatforms['Xbox-Live'].Status, data.otherPlatforms['Xbox-Live'].HTTPCode, data.otherPlatforms['Xbox-Live'].ResponseTime, data.otherPlatforms['Xbox-Live'].QueryTimestamp),
            }
        }
    }
}
class NameToUIDResponse {
    constructor(name, uid, pid, avatar) {
        this.name = name;
        this.uid = uid;
        this.pid = pid;
        this.avatar = avatar;
    }
}
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
            }).then(res => res.json()).then((data) => {
                let Players = [];
                data.forEach((d) => {
                    Players.push(new Player(d.global, d.realtime, d.legends, d.mozambiquehere_internal, d.total));
                });
                resolve(Players);
            }).catch(reject)
        })
    }
    GetPlayerStatsByUID(platform, uids) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `bridge?version=5&platform=${platform}&player=${[...[uids]].join()}&auth=${this.authKey}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors",
            }).then(res => res.json()).then((data) => {
                let Players = [];
                data.forEach((d) => {
                    Players.push(new Player(d.global, d.realtime, d.legends, d.mozambiquehere_internal, d.total));
                });
                resolve(Players);
            }).catch(reject)
        })
    }
    GetMapRotation() {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `maprotation?version=2&auth=${this.authKey}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((data) => {
                resolve(new MapRotation(data.battle_royale, data.arenas, data.ranked, data.arenasRanked));
            }).catch(reject)
        })
    }
    GetNews() {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `news?lang=en-us&auth=${this.authKey}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((data) => {
                let news = [];
                data.forEach((d) => {
                    news.push(new News(d.title, d.link, d.img, d.short_desc));
                });
                resolve(news);
            }).catch(reject)
        })
    }
    GetServerStatus() {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `servers?auth=${this.authKey}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then(res => {
                resolve(new ServerStatusResponse("Data from apexlegendsstatus.com", res))
            }).catch(reject)
        })
    }
    NameToUID(name, platform) {
        return new Promise(async(resolve, reject) => {
            let url = this.api + `nametouid?player=${name}&platform=${platform}&auth=${this.authKey}`
            await fetch(url, {
                "method": "GET",
                "mode": "cors"
            }).then(res => res.json()).then((data) => {
                resolve(new NameToUIDResponse(data.name, data.uid, data.pid, data.avatar));
            }).catch(reject)
        })
    }
}

module.exports = {
    ApexLegendsAPI: ApexLegendsAPI
}