export type Legend = {
    data: [
        {
            name: string,
            value: number,
            key: string,
            rank: {rankPos: number, topPercent: number},
            rankPlatformSpecific: {rankPos: number, topPercent: number}
        },
    ],
    gameInfo: {
        badges: [
            {name: string, value: number}
        ]
    }
    ImgAssets: {icon: string, banner: string}
}
export type Player = {
    global: {
        name: string,
        uid: number,
        avatar: string,
        platform: string,
        level: number,
        toNextLevelPercent: number,
        internalUpdateCount: number,
        bans: {
            isActive: boolean,
            remainingSeconds: number,
            last_banReason: string
        },
        rank: {
            rankScore: number,
            rankName: string,
            rankDiv: number,
            ladderPosPosition: number,
            rankImg: string,
            rankedSeason: string
        },
        battlepass: {
            level: string,
            history: {
                season1: number,
                season2: number,
                season3: number,
                season4: number,
                season5: number,
                season6: number,
                season7: number,
                season8: number,
                season9: number,
                season10: number,
            }
        },
        badges: [
            {name: string, value: number}
        ]
    },
    realtime: {
        lobbyState: string,
        isOnline: number,
        isInGame: number,
        canJoin: number,
        partyFull: number,
        selectedLegend: string,
        currentState: string,
        currentStateSinceTimestamp: number,
        currentStateAsText: string
    },
    legends: {
        selected: {
            LegendName: string,
            data: [
                {name: string, value: number, key: string}
            ],
            gameInfo: {
                skin: string,
                skinRarity: string,
                frame: string,
                frameRarity: string,
                pose: string,
                poseRarity: string,
                intro: string,
                introRarity: string,
                badges: [
                    {name: string, value: number, category: string},
                ]
            },
            ImgAssets: {
                icon: string,
                banner: string
            }
        },
        all: {
            Revenant: Legend,
            Crypto: Legend,
            Horizon: Legend,
            Gibraltar: Legend,
            Wattson: Legend,
            Fuse: Legend,
            Bangalore: Legend,
            Wraith: Legend,
            Octane: Legend,
            Bloodhound: Legend,
            Caustic: Legend,
            Lifeline: Legend,
            Pathfinder: Legend,
            Mirage: Legend,
            Rampart: Legend,
            Valkyrie: Legend,
            Seer: Legend
        }
    },
    mozambiquehere_internal: {
        isNewToDB: boolean,
        claimedBy: string,
        APIAccessType: string,
        ClusterID: string,
        rate_limit: {
            max_per_second: number,
            current_req: string
        },
        clusterSrv: string
    },
    total: {
        kills: {name: string, value: number},
        wins_season_3: {name: string, value: number},
        wins_season_4: {name: string, value: number},
        games_played: {name: string, value: number},
        wins_season_1: {name: string, value: number},
        creeping_barrage_damage: {name: string, value: number},
        kills_season_1: {name: string, value: number},
        wins_season_2: {name: string, value: number},
        top_3: {name: string, value: number},
        beast_of_the_hunt_kills: {name: string, value: number},
        damage: {name: string, value: number},
        dropped_items_for_squadmates: {name: string, value: number},
        pistol_kills: {name: string, value: number},
        beacons_scanned: {name: string, value: number},
        ar_kills: {name: string, value: number},
        kd: {name: string, value: number},
    }
}
export type MapRotation = {
    battle_royale: {
        current: {
            start: number,
            end: number,
            readableDate_start: string,
            readableDate_end: string,
            map: string,
            DurationInSecs: number,
            DurationInMinutes: number,
            remainingSecs: number,
            remainingMins: number,
            remainingTimer: string
        },
        next: {
            start: number,
            end: number,
            readableDate_start: string,
            readableDate_end: string,
            map: string,
            DurationInSecs: number,
            DurationInMinutes: number
        }
    },
    arenas: {
        current: {
            start: number,
            end: number,
            readableDate_start: string,
            readableDate_end: string,
            map: string,
            DurationInSecs: number,
            DurationInMinutes: number,
            remainingSecs: number,
            remainingMins: number,
            remainingTimer: string
        },
        next: {
            start: number,
            end: number,
            readableDate_start: string,
            readableDate_end: string,
            map: string,
            DurationInSecs: number,
            DurationInMinutes: number
        }
    },
    ranked: {current: {map: string}, next: {map: string}},
    arenasRanked: {
        current: {
            start: number,
            end: number,
            readableDate_start: string,
            readableDate_end: string,
            map: string,
            DurationInSecs: number,
            DurationInMinutes: number,
            remainingSecs: number,
            remainingMins: number,
            remainingTimer: string
        },
        next: {
            start: number,
            end: number,
            readableDate_start: string,
            readableDate_end: string,
            map: string,
            DurationInSecs: number,
            DurationInMinutes: number
        }
    }
}
export type News = {
    title: string,
    link: string,
    img: string,
    short_desc: string,
}
export type ServerStatus = {
    Status: string,
    HTTPCode: number,
    ResponseTime: number,
    QueryTimestamp: number
}
export type ServerStatusResponse = {
    Message: string,
    data: {
        Origin_login: {
            'EU-West': ServerStatus,
            'EU-East': ServerStatus,
            'US-West': ServerStatus,
            'US-Central': ServerStatus,
            'US-East': ServerStatus,
            SouthAmerica: ServerStatus,
            Asia: ServerStatus 
        },
        EA_novafusin: {
            'EU-West': ServerStatus,
            'EU-East': ServerStatus,
            'US-West': ServerStatus,
            'US-Central': ServerStatus,
            'US-East': ServerStatus,
            SouthAmerica: ServerStatus,
            Asia: ServerStatus 
        },
        EA_accounts: {
            'EU-West': ServerStatus,
            'EU-East': ServerStatus,
            'US-West': ServerStatus,
            'US-Central': ServerStatus,
            'US-East': ServerStatus,
            SouthAmerica: ServerStatus,
            Asia: ServerStatus 
        },
        ApexOauth_Crossplay: {
            'EU-West': ServerStatus,
            'EU-East': ServerStatus,
            'US-West': ServerStatus,
            'US-Central': ServerStatus,
            'US-East': ServerStatus,
            SouthAmerica: ServerStatus,
            Asia: ServerStatus 
        },
        selfCoreTest: {
            'Status-website': ServerStatus,
            'Stats-API': ServerStatus,
            'Overflow-#1': ServerStatus,
            'Overflow-#2': ServerStatus,
            'Origin-API': ServerStatus,
            'Playstation-API': ServerStatus,
            'Xbox-API': ServerStatus
        },
        otherPlatforms: {'Playstaion-Network': ServerStatus, 'Xbox-Live': ServerStatus}
    }
}
export type NameToUIDResponse = {
    name: string,
    uid: string,
    pid: string,
    avatar: string
}
export class ApexLegendsAPI {
    constructor(authKey: string);
    GetPlayerStatsByName(platform: string, players: string[]): Promise<Player[]>;
    GetPlayerStatsByUID(platform: string, uids: string[]): Promise<Player[]>;
    GetMapRotation(): Promise<MapRotation>;
    GetNews(): Promise<News[]>;
    GetServerStatus(): Promise<ServerStatusResponse>;
    NameToUID(name: string, platform: string): Promise<NameToUIDResponse>;
}