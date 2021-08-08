# GameAPICenter
GameAPICenter is a centralized place with access to Game API's

# Installation
```bash
npm install gameapicenter
```

# Table of Contents
1. [Apex Legends](#apex-legends)
   1. [Usage](#apex-legends-usage)
   2. [Functions](#apex-legends-functions)
      1. [GetPlayerStatsByName](#apex-legends-getplayerstatsbyname)
          1. [Inputs](#apex-legends-getplayerstatsbyname-inputs)
          2. [Output](#apex-legends-getplayerstatsbyname-output)
          3. [Usage](#apex-legends-getplayerstatsbyname-usage)
      2. [GetPlayerStatsByUID](#apex-legends-getplayerstatsbyuid)
          1. [Inputs](#apex-legends-getplayerstatsbyuid-inputs)
          2. [Output](#apex-legends-getplayerstatsbyuid-output)
          3. [Usage](#apex-legends-getplayerstatsbyuid-usage)
      3. [GetMapRotation](#apex-legends-getmaprotation)
          1. [Output](#apex-legends-getmaprotation-output)
          2. [Usage](#apex-legends-getmaprotation-usage)
      4. [GetNews](#apex-legends-getnews)
          1. [Output](#apex-legends-getnews-output)
          2. [Usage](#apex-legends-getnews-usage)
      5. [GetServerStatus](#apex-legends-getserverstatus)
          1. [Output](#apex-legends-getserverstatus-output)
          2. [Usage](#apex-legends-getserverstatus-usage)
      6. [NameToUID](#apex-legends-nametouid)
      	  1. [Inputs](#apex-legends-nametouid-inputs)
      	  2. [Output](#apex-legends-nametouid-output)
      	  3. [Usage](#apex-legends-nametouid-usage)
    3. [Return Types](#apex-legends-returntypes)
    	1. [Player](#apex-legends-returntypes-player)
            1. [Legend](#apex-legends-returntypes-legend)
    	2. [MapRotation](#apex-legends-returntypes-maprotation)
    	3. [News](#apex-legends-returntypes-news)
    	4. [ServerStatusResponse](#apex-legends-returntypes-serverstatusresponse)
            1. [ServerStatus](#apex-legends-returntypes-serverstatusresponse-serverstatus)
    	5. [NameToUIDResponse](#apex-legends-returntypes-nametouidresponse)
2. [Bloons TD 6](#bloonstd6)
    1. [Usage](#bloonstd6-usage)
    2. [Functions](#bloonstd6-functions)
        1. [GetAllTowers](#bloonstd6-getalltowers)
            1. [Output](#bloonstd6-getalltowers-output)
            2. [Usage](#bloonstd6-getalltowers-usage)
        2. [GetTowerByID](#bloonstd6-gettowerbyid)
            1. [Input](#bloonstd6-gettowerbyid-input)
            2. [Output](#bloonstd6-gettowerbyid-output)
            3. [Usage](#bloonts6-gettowerbyid-usage)
        3. [GetAllHeros](#bloonstd6-getallheros)
            1. [Output](#bloonstd6-getallheros-output)
            2. [Usage](#bloonstd6-getallheros-usage)
        4. [GetHeroByID](#bloonstd6-getherobyid)
            1. [Input](#bloonstd6-getherobyid-input)
            2. [Output](#bloonstd6-getherobyid-output)
            3. [Usage](#bloonstd6-getherobyid-usage)
        5. [GetAllBloons](#bloonstd6-getallbloons)
            1. [Output](#bloonstd6-getallbloons-output)
            2. [Usage](#bloonstd6-getallbloons-usage)
        6. [GetBloonByID](#bloonstd6-getbloonbyid)
            1. [Input](#bloonstd6-getbloonbyid-input)
            2. [Output](#bloonstd6-getbloonbyid-output)
            3. [Usage](#bloonstd6-getbloonbyid-usage)
    3. [Return Types](#bloonstd6-returntypes)
        1. [Tower](#bloonstd6-returntypes-tower)
        2. [Hero](#bloonstd6-returntypes-hero)
        3. [Bloon](#bloonstd6-returntypes-bloon)
3. [Counter Strike Global Offensive](#csgo)
    1. [Usage](#csgo-usage)
    2. [Functions](#csgo-functions)
        1. [GetPlayerStats](#csgo-getplayerstats)
            1. [Input](#csgo-getplayerstats-input)
            2. [Output](#csgo-getplayerstats-output)
            3. [Usage](#csgo-getplayerstats-usage)
        2. [GetStatSegment](#csgo-getstatsegment)
            1. [Inputs](#csgo-getstatsegment-inputs)
            2. [Output](#csgo-getstatsegment-output)
            3. [Usage](#csgo-getstatsegment-usage)
        3. [SearchForPlayer](#csgo-searchforplayer)
            1. [Input](#csgo-searchforplayer-input)
            2. [Output](#csgo-searchforplayer-output)
            3. [Usage](#csgo-searchforplayer-usage)
    3. [Return Types](#csgo-returntypes)
        1. [Profile](#csgo-returntypes-profile)
            1. [Stat](#csgo-returntypes-profile-stat)
        2. [SegmentResponse](#csgo-returntypes-segmentresponse)
            1. [Stat](#csgo-returntypes-profile-stat)
        3. [SearchResult](#csgo-returntypes-searchresult)
4. [Hyper Scape](#hyperscape)
    1. [Usage](#hyperscape-usage)
    2. [Functions](#hyperscape-functions)
        1. [GetPlayerProfile](#hyperscape-getplayerprofile)
            1. [Inputs](#hyperscape-getplayerprofile-inputs)
            2. [Output](#hyperscape-getplayerprofile-output)
            3. [Usage](#hyperscape-getplayerprofile-usage)
    3. [Return Types](#hyperscape-returntypes)
        1. [Profile](#hyperscape-returntypes-profile)
            1. [platformInfo](#hyperscape-returntypes-profile-platforminfo)
            2. [userInfo](#hyperscape-returntypes-profile-userinfo)
                1. [SocialAccount](#hyperscape-returntypes-profile-userinfo-socialaccount)
            3. [Segment](#hyperscape-returntypes-profile-segment)
                1. [Stat](#hyperscape-returntypes-profile-segment-stat)
<!-- 5. [Minecraft](#minecraft)
    1. [Usage](#minecraft-usage)
    2. [Functions](#minecraft-functions)
        1. [GetAPIStatus](#minecraft-getapistatus)
            1. [Output](#minecraft-getapistatus-output)
            2. [Usage](#minecraft-getapistatus-usage)
        2. [Authenticate](#minecraft-authenticate)
            1. [Inputs](#minecraft-authenticate-inputs)
            2. [Output](#minecraft-authenticate-output)
            3. [Usage](#minecraft-authenticate-usage)
        3. [Refresh](#minecraft-refresh)
            1. [Inputs](#minecraft-refresh-inputs)
            2. [Output](#minecraft-refresh-output)
            3. [Usage](#minecraft-refresh-usage)
        4. [Validate](#minecraft-validate)
            1. [Inputs](#minecraft-validate-inputs)
            2. [Output](#minecraft-validate-output)
            3. [Usage](#minecraft-validate-usage)
        5. [Signout](#minecraft-signout)
            1. [Inputs](#minecraft-signout-inputs)
            2. [Output](#minecraft-signout-output)
            3. [Usage](#minecraft-signout-usage)
        6. [Invalidate](#minecraft-invalidate)
            1. [Inputs](#minecraft-invalidate-inputs)
            2. [Output](#minecraft-invalidate-output)
            3. [Usage](#minecraft-invalidate-usage)
        7. [UsernametoUUID](#minecraft-usernametouuid)
            1. [Input](#minecraft-usernametouuid-input)
            2. [Output](#minecraft-usernametouuid-output)
            3. [Usage](#minecraft-usernametouuid-usage)
        8. [UsernameToUUIDs](#minecraft-usernametouuids)
            1. [Input](#minecraft-usernametouuids-input)
            2. [Output](#minecraft-usernametouuids-output)
            3. [Usage](#minecraft-usernametouuids-usage)
        9. [UUIDToNameHistory](#minecraft-uuidtonamehistory)
            1. [Input](#minecraft-uuidtonamehistory-input)
            2. [Output](#minecraft-uuidtonamehistory-output)
            3. [Usage](#minecraft-uuidtonamehistory-usage)
        10. [UUIDToSkin](#minecraft-uuidtoskin)
            1. [Inputs](#minecraft-uuidtoskin-inputs)
            2. [Output](#minecraft-uuidtoskin-output)
            3. [Usage](#minecraft-uuidtoskin-usage)
        11. [GetBlockedServers](#minecraft-getblockedservers)
            1. [Output](#minecraft-getblockedservers-output)
            2. [Usage](#minecraft-getblockedservers-usage)
        12. [GetStatistics](#minecraft-getstatistics)
            1. [Output](#minecraft-getstatistics-output)
            2. [Usage](#minecraft-getstatistics-usage)
        13. [GetPlayerInfo](#minecraft-getplayerinfo)
            1. [Input](#minecraft-getplayerinfo-input)
            2. [Output](#minecraft-getplayerinfo-output)
            3. [Usage](#minecraft-getplayerinfo-usage)
        14. [GetPlayerNameChangeInfo](#minecraft-getplayernamechangeinfo)
            1. [Input](#minecraft-getplayernamechangeinfo-input)
            2. [Output](#minecraft-getplayernamechangeinfo-output)
            3. [Usage](#minecraft-getplayernamechangeinfo-usage)
        15. [CheckNameAvailability](#minecraft-checknameavailability)
            1. [Inputs](#minecraft-checknameavailability-inputs)
            2. [Output](#minecraft-checknameavailability-output)
            3. [Usage](#minecraft-checknameavailability-usage)
        16. [ChangeName](#minecraft-changename)
            1. [Inputs](#minecraft-changename-inputs)
            2. [Output](#minecraft-changename-output)
            3. [Usage](#minecraft-changename-usage)
        17. [ChangeSkin](#minecraft-changeskin)
            1. [Inputs](#minecraft-changeskin-inputs)
            2. [Output](#minecraft-changeskin-output)
            3. [Usage](#minecraft-changeskin-usage)
        18. [ResetSkin](#minecraft-resetskin)
            1. [Inputs](#minecraft-resetskin-inputs)
            2. [Output](#minecraft-resetskin-output)
            3. [Usage](#minecraft-resetskin-usage)
        20. [RedeemMinecraftAccount](#minecraft-redeemminecraftaccount)
            1. [Inputs](#minecraft-redeemminecraftaccount-inputs)
            2. [Output](#minecraft-redeemminecraftaccount-output)
            3. [Usage](#minecraft-redeemminecraftaccount-usage)
    3. [Return Types](#minecraft-returntypes)
        1. [ServerStatusResponse](#minecraft-returntypes-serverstatusresponse)
        2. [AuthenticationResponse](#minecraft-returntypes-authenticationresponse)
            1. [AuthenticationProperty](#minecraft-returntypes-authenticationresponse-authenticationproperty)
            2. [AuthenticationProfile](#minecraft-returntypes-authenticationresponse-authenticationprofile)
        3. [RefreshResponse](#minecraft-returntypes-refreshresponse)
        4. [UUIDResponse](#minecraft-returntypes-uuidresponse)
        5. [ProfileInfoResponse](#minecraft-returntypes-profileinforesponse)
        6. [ProfileNameChangeInfoResponse](#minecraft-returntypes-profilenamechangeinforesponse) -->
## Apex Legends
**This is an Offical API** [Offical Docs](https://apexlegendsapi.com/documentation.php)
### Usage <a id="apex-legends-usage">
```javascript
const GameAPICenter = require("gameapicenter");
const ApexLegendsAPI = new GameAPICenter.ApexLegendsAPI(authKey = "");
```
### Functions <a id="apex-legends-functions">
#### GetPlayerStatsByName <a id="apex-legends-getplayerstatsbyname">
##### Inputs <a id="apex-legends-getplayerstatsbyname-inputs">
| Input  | Type |
| ------------- | ------------- |
| platform  |`string`  |
| players  |`string[]`  |
##### Output <a id="apex-legends-getplayerstatsbyname-output">
The GetPlayerStatsByName function returns a `Promise<Player[]>` type
##### Usage <a id="apex-legends-getplayerstatsbyname-usage">
```javascript
const ApexLegendsAPI = new GameAPICenter.ApexLegendsAPI("DUMMYAPIKEY");
ApexLegendsAPI.GetPlayerStatsByName("PC", ["DUMMYPLAYER1", "DUMMYPLAYER2"]).then((data) => {
//Your Code Here
});
```
#### GetPlayerStatsByUID <a id="apex-legends-getplayerstatsbyuid">
##### Inputs <a id="apex-legends-getplayerstatsbyuid-inputs">
| Input  | Type |
| ------------- | ------------- |
| platform  |`string`  |
| uids  |`string[]`  |
##### Output <a id="apex-legends-getplayerstatsbyuid-output">
The GetPlayerStatsByUID function returns a `Promise<Player[]>` type
##### Usage <a id="apex-legends-getplayerstatsbyuid-usage">
```javascript
const ApexLegendsAPI = new GameAPICenter.ApexLegendsAPI("DUMMYAPIKEY");
ApexLegendsAPI.GetPlayerStatsByName("PC", ["1000575543540"]).then((data) => {
//Your Code Here
});
```
#### GetMapRotation <a id="apex-legends-getmaprotation">
##### Output <a id="apex-legends-getmaprotation-output">
The GetMapRotation function returns a `Promise<MapRotation>` type
##### Usage <a id="apex-legends-getmaprotation-usage">
```javascript
const ApexLegendsAPI = new GameAPICetner.ApexLegendsAPI("DUMMYAPIKEY")
ApexLegends.GetMapRotation().then((data) => {
//Your Code Here
})
```
#### GetNews <a id="apex-legends-getnews">
##### Output <a id="apex-legends-getnews-output">
The GetNews function returns a `Promise<News[]>` type
##### Usage <a id="apex-legends-getnews-usage">
```javascript
const ApexLegendsAPI = new GameAPICenter.ApexLegendsAPI("DUMMYAPIKEY");
ApexLegendsAPI.GetNews().then((data) => {
//Your Code Here
});
```
#### GetServerStatus <a id="apex-legends-getserverstatus">
##### Output <a id="apex-legends-getserverstatus-output">
The GetServerStatus function returns a `Promise<ServerStatusResponse>` type
##### Usage <a id="apex-legends-getserverstatus-usage">
```javascript
const ApexLegendsAPI = new GameAPICenter.ApexLegendsAPI("DUMMYAPIKEY");
ApexLegendsAPI.GetServerStatus().then((data) => {
//Your Code Here
});
```
#### NameToUID <a id="apex-legends-nametouid">
##### Inputs <a id="apex-legends-nametouid-inputs">
| Input  | Type |
| ------------- | ------------- |
| name  |`string`  |
| platform  |`string`  |
##### Output <a id="apex-legends-nametouid-output">
The NameToUID function returns a `Promise<NameToUIDResponse>` type
##### Usage <a id="apex-legends-nametouid-usage">
```javascript
const ApexLegendsAPI = new GameAPICenter.ApexLegendsAPI("DUMMYAPIKEY");
ApexLegendsAPI.NameToUID("DUMMYPLAYER1", "PC").then((data) => {
//Your Code Here
});
```

### Return Types <a id="apex-legends-returntypes">
#### Player <a id="apex-legends-returntypes-player">
##### Legend <a id="apex-legends-returntypes-legend">
```typescript
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
```
```typescript
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
```
#### MapRotation <a id="apex-legends-returntypes-maprotation">
```typescript
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
```
#### News <a id="apex-legends-returntypes-news">
```typescript
export type News = {
    title: string,
    link: string,
    img: string,
    short_desc: string,
}
```
#### ServerStatusResponse <a id="apex-legends-returntypes-serverstatusresponse">
##### ServerStatus <a id="apex-legends-returntypes-serverstatusresponse-serverstatus">
```typescript
export type ServerStatus = {
    Status: string,
    HTTPCode: number,
    ResponseTime: number,
    QueryTimestamp: number
}
```
```typescript
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
```
#### NameToUIDResponse <a id="apex-legends-returntypes-nametouidresponse">
```typescript
export type NameToUIDResponse = {
    name: string,
    uid: string,
    pid: string,
    avatar: string
}
```
## Bloons TD 6 <a id="bloonstd6">
**This is an Unoffical API** [Unoffical API Docs](https://statsnite.com/btd/api)
### Usage <a id="bloonstd6-usage">
```javascript
const GameAPICenter = require("gameapicenter");
const BloonsTD6API = new GameAPICenter.BloonsTD6API(); //No API Key Required
```
### Functions <a id="bloonstd6-functions">
#### GetAllTowers <a id="bloonstd6-getalltowers">
List all towers in BTD6
##### Output <a id="bloonstd6-getalltowers-output">
The GetAllTowers function returns a `Promise<Tower[]>` type
##### Usage <a id="bloonstd6-getalltowers-usage">
```javascript
const BloonsTD6API = new GameAPICenter.BloonsTD6API();
BloonsTD6API.GetAllTowers().then((data) => {
//Your Code Here
});
```
#### GetTowerByID <a id="bloonstd6-gettowerbyid">
Get a specific tower in BTD6.
##### Input <a id="bloonstd6-gettowerbyid-input">
| Input  | Type | Required | Description |  
| ------------- | ------------- | ------------- | ------------- |
| towerID  |`string`  | Yes | a Tower ID ie. 'dart-monkey', 'super-monkey' |
##### Output <a id="bloonstd6-gettowerbyid-output">
The GetTowerByID function returns a `Promise<Tower>` type
##### Usage <a id="bloonstd6-gettowerbyid-usage">
```javascript
const BloonsTD6API = new GameAPICenter.BloonsTD6API();
BloonsTD6API.GetTowerByID("dart-monkey").then((data) => {
//Your Code Here
});
```
#### GetAllHeros <a id="bloonstd6-getallheros">
List all Heros in BTD6.
##### Output <a id="bloonstd6-getallheros-output">
The GetAllHeros function returns a `Promise<Hero[]>` type
##### Usage <a id="bloonstd6-getallheros-usage">
```javascript
const BloonsTD6API = new GameAPICenter.BloonsTD6API();
BloonsTD6API.GetAllHeros().then((data) => {
//Your Code Here
});
```
#### GetHeroByID <a id="bloonstd6-getherobyid">
Get a specific Hero in BTD6.
##### Input <a id="bloonstd6-getherobyid-input">
| Input  | Type | Required | Description |  
| ------------- | ------------- | ------------- | ------------- |
| heroID  |`string`  | Yes | a Hero ID ie. 'quincy' |
##### Output <a id="bloonstd6-getherobyid-output">
The GetHeroByID function returns a `Promise<Hero>` type
##### Usage <a id="bloonstd6-getherobyid-usage">
```javascript
const BloonsTD6API = new GameAPICenter.BloonsTD6API();
BloonsTD6API.GetHeroByID("quincy").then((data) => {
//Your Code Here
});
```
#### GetAllBloons <a id="bloonstd6-getallbloons">
List all bloons in BTD6
##### Output <a id="bloonstd6-getallbloons-output">
The GetAllBloons function returns a `Promise<Bloon[]>` type
##### Usage <a id="bloonstd6-getallbloons-usage">
```javascript
const BloonsTD6API = new GameAPICenter.BloonsTD6API();
BloonsTD6API.GetAllBloons().then((data) => {
//Your Code Here
});
```
#### GetBloonByID <a id="bloonstd6-getbloonbyid">
Get a specific Bloon in BTD6.
##### Input <a id="bloonstd6-getbloonbyid-input">
| Input  | Type | Required | Description |  
| ------------- | ------------- | ------------- | ------------- |
| bloonID  |`string`  | Yes | a Bloon ID ie. 'red', 'blue' |
##### Output <a id="bloonstd6-getbloonbyid-output">
The GetBloonByID function returns a `Promise<Bloon>` type
##### Usage <a id="bloonstd6-getbloonbyid-usage">
```javascript
const BloonsTD6API = new GameAPICenter.BloonsTD6API();
BloonsTD6API.GetBloonByID("red").then((data) => {
//Your Code Here
});
```
### Return Types <a id="bloonstd6-returntypes">
#### Tower <a id="bloonstd6-returntypes-tower">
```typescript
export type Tower = {
    id: number;
    name: string;
    description: string
    type: string;
    cost: {
        easy: number,
        medium: number,
        hard: number,
        impoppable: number,
    };
    stats: {
        damage: string;
        pierce: string;
        attackSpeed: string;
        range: string;
        type: string;
    }
    footprint: number;
    defaultHotkey: string;
    paths: {
        path1: {
            crosspaths: {
                first: {
                    name: string,
                    path: string,
                    score: string,
                    reason: string,
                },
                second: {
                    name: string,
                    path: string,
                    score: string,
                    reason: string,
                }
            },
            upgrades: [
                {
                    name: string,
                    description: string,
                    cost: {easy: number, medium: number, hard: number, impoppable: number},
                    unlockXp: number,
                    effects: string[],
                    source: string
                }
            ]
        }
    }
}
```
#### Hero <a id="bloonstd6-returntypes-hero">
```typescript
export type Hero = {
    id: string;
    name: string;
    description: string;
    skinChange: number[];
    skins: [
        {id: string, name: string}
    ];
    cost: {easy: number, medium: number, hard: number, impoppable: number};
    stats: {
        damage: string;
        pierce: string;
        attackSpeed: string;
        range: string;
        type: string;
        special: [
            {name: string, value: string}
        ]
    };
    unlock: {how: string, value: string};
    levelSpeed: string;
    levels: [
        {
            level: number,
            description: string,
            xp: number,
            rounds: {easy: string, medium: string, hard: string, impoppable: string},
            effects: string[],
            source: string,
        }
    ]
}
```
#### Bloon <a id="bloonstd6-returntypes-bloon">
```typescript
export type Bloon = {
    id: string;
    name: string;
    type: string;
    rbe: number;
    speed: number;
    types: string[];
    immunity: string[];
    children: [
        {
        id: string,
        count: number,
        type: string
        },
    ] | [];
    parents: [
        {id: string},
    ] | [];
    initalRound: number;
    initalRoundABR: number;
}
```
## Counter Strike Global Offensive <a id="csgo">
**This is an Unoffical API** [Unoffical Docs](https://tracker.gg/developers/docs/titles/csgo)
### Usage <a id="csgo-usage">
```javascript
const GameAPICenter = require("gameapicenter");
const CSGOAPI = new GameAPICenter.CSGOAPI("DUMMYAUTHKEY");
```
### Functions <a id="csgo-functions">
#### GetPlayerStats <a id="csgo-getplayerstats">
Retrieve career stats for an CSGO player.
##### Input <a id="csgo-getplayerstats-input">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- | 
| playerIdentifier  |`string`  | Yes | The user's handle on Steam, ie. a Steam ID, Steam Community URL, Steam Vanity Username, etc. |
##### Output <a  id="csgo-getplayerstats-output">
The GetPlayerStats function returns a `Promise<Profile>` type
##### Usage <a id="csgo-getplayerstats-usage">
```javascript
const CSGOAPI = new GameAPICenter.CSGOAPI("DUMMYAPIKEY");
CSGOAPI.GetPlayerStats("DUMMY-PLAYER-IDENTIFIER").then((data) => {
//Your Code Here
});
```
#### GetStatSegment <a id="csgo-getstatsegment">
Retrieve a portion of the stats for a CSGO player. We divide stats into logical segments, such as playlists, seasons, heroes, etc. (whatever happens to be useful for a specific game.)
##### Inputs <a id="csgo-getstatsegment-inputs">
| Input  | Type | Required | Description |
| ------------- | ------------- | ------------- |------------- | 
| playerIdentifier  | `string`  | Yes | The user's handle on Steam, ie. a Steam ID, Steam Community URL, Steam Vanity Username, etc. |
| segmentType | `string` | Yes | The type of segment you want to return, ie. 'map', or 'weapon'. | 
##### Output <a id="csgo-getstatsegment-output">
The GetStatSegment function returns a `Promise<SegmentResponse>` type
##### Usage <a id="csgo-getstatsegment-usage">
```javascript
const CSGOAPI = new GameAPICenter.CSGOAPI("DUMMYAUTHKEY");
CSGOAPI.GetStatSegment("DUMMY-PLAYER-IDENTIFIER", "map").then((data) => {
//Your Code Here
});
```
#### SearchForPlayer <a id="csgo-searchforplayer">
Allows you to perform a search for a CSGO player using a unique identifier (a Steam ID, Steam Community URL, Steam Vanity Username, etc.) The result set is not guaranteed to be an exhaustive list of players that match the search.
##### Input <a id="csgo-searchforplayer-input">
| Input  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| query  | `string`  | Yes | The user's handle on Steam, ie. a Steam ID, Steam Community URL, Steam Vanity Username, etc. |
##### Output <a id="csgo-searchforplayer-output">
The SearchForPlayer function returns a `Promise<SearchResult[]>` type
##### Usage <a id="csgo-searchforplayer-output">
```javascript
const CSGOAPI = new GameAPICenter.CSGOAPI("DUMMYAUTHKEY");
CSGOAPI.SearchForPlayer("DUMMY-STEAM-ID").then((data) => {
//Your Code Here
});
```
### Return Types <a id="csgo-returntypes">
#### Profile <a id="csgo-returntypes-profile">
##### Stat <a id="csgo-returntypes-profile-stat">
```typescript
export type Stat = {
    rank: string | null,
    percentile: number,
    displayName: string,
    displayCategory: string,
    category: string,
    metadata: [],
    value: number,
    displayValue: string,
    displayType: string,
}
```
```typescript
export type Profile = {
    data: {
        platformInfo: {
            platformSlug: string,
            platformUserId: string,
            platformUserHandle: string,
            platformUserIdentifier: string,
            avatarUrl: string,
            additionalParameters: string[] | null,
        },
        userInfo: {
            userId: number | null,
            isPremium: boolean,
            isVerified: boolean,
            isInfluencer: boolean,
            isPartner: boolean,
            countryCode: string | null,
            customAvatarUrl: string | null,
            customHeroUrl: string | null,
            socialAccounts: string[] | null,
            oageviews: null,
            isSuspicious: boolean | null,
        },
        metadata: {},
        segments: [
            {
            type: string, 
            attributes: {}, 
            metadata: {
                name: string
            }, 
            expiryDate: string, 
            stats: {
                timePlayed: Stat,
                score: Stat,
                Kills: Stat,
                deaths: Stat,
                kd: Stat,
                damage: Stat,
                headshots: Stat,
                dominations: Stat,
                shotsFired: Stat,
                shotsHit: Stat,
                shotsAccuracy: Stat,
                snipersKilled: Stat,
                dominationOverkills: Stat,
                dominationRevenges: Stat,
                BombsPlanted: Stat,
                BombsDefused: Stat,
                moneyEarned: Stat,
                hostagesRescued: Stat,
                mvp: Stat,
                wins: Stat,
                ties: Stat,
                matchesPlayed: Stat,
                losses: Stat,
                roundsPlayed: Stat,
                roundsWon: Stat,
                wlPercentage: Stat,
                headshotPct: Stat,
            }},
        ],
        availableSegments: [],
        expiryDate: string
    }
}
```
#### SegmentResponse <a id="csgo-returntypes-segmentresponse">
##### Stat <a id="csgo-returntypes-segmentresponse-stat">
```typescript
export type Stat = {
    rank: string | null,
    percentile: number,
    displayName: string,
    displayCategory: string,
    category: string,
    metadata: [],
    value: number,
    displayValue: string,
    displayType: string,
}
```
```typescript
export type SegmentResponse = {
    type: string,
    attributes: {
        key: string,
    },
    metadata: {
        name: string,
        imageUrl: string,
        category: {
            value: string, 
            displayValue: string,
        },
    },
    expiryDate: string,
    stats: {
        kills: Stat,
        shotsFired: Stat,
        shotsHit: Stat,
        shotsAccuracy: Stat,
    },
}
```
#### SearchResult <a id="csgo-returntypes-searchresult">
```typescript
export type SearchResult = {
    data: [
        {
            platformId: number,
            platformSlug: string,
            platformUserIdentifier: string,
            platformUserId: string,
            platformUserHandle: string,
            avatarUrl: string,
            status: string | null,
            additionalParameters: string[] | null,
        }
    ]
}
```
## Hyper Scape <a id="hyperscape">
**This is an Unoffical API** [Unoffical Docs](https://tracker.gg/developers/docs/titles/hyper-scape)
### Usage <a id="hyperscape-usage">
```javascript
const GameAPICenter = require("gameapicenter");
const HyperScapeAPI = new GameAPICenter.HyperScapeAPI("DUMMYAUTHKEY");
```
### Functions <a id="hyperscape-functions">
#### GetPlayerProfile <a id="hyperscape-getplayerprofile">
Retrieve career stats for a Hyper Scape player.
##### Inputs <a id="hyperscape-getplayerprofile-inputs">
```typescript
export type platform = "uplay" | "psn" | "xbl"
```
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| platform  | `platform`  | Yes |The platform slug, must be one of 'uplay', 'psn', 'xbl'. |
| platformIdentifier | `string` | Yes | The user's handle on the platform, ie. a Uplay username, PSN ID, Xbox Live gamertag, etc. |

##### Output <a id="hyperscape-getplayerprofile-output">
The GetPlayerProfile function returns a `Promise<Profile>` type
##### Usage <a id="hyperscape-getplayerprofile-usage">
```javascript
const HyperScapeAPI = new GameAPICenter.HyperScapeAPI("DUMMYAUTHKEY");
HyperScapeAPI.GetPlayerProfile("uplay", "DUMMY-PLATFORM-IDENTIFIER").then((data) => {
//Your Code Here
});
```
### Return Types <a id="hyperscape-returntypes">
#### Profile <a id="hyperscape-returntypes-profile">
```typescript
export type Profile = {
    data: {
        platformInfo: platformInfo,
        userInfo: userInfo,
        metadata: {
            lastUpdated: {
                value: string,
                displayValue: string
            }
        },
        segments: Segment[],
        availableSegments: [],
        expiryDate: string,
    }
}
```
##### platformInfo <a id="hyperscape-returntypes-profile-platforminfo">
```typescript
export type platformInfo = {
    platformSlug: string,
    platformUserId: string | null,
    platformUserHandle: string,
    platformUserIdentifier: string,
    avatarUrl: string,
    additionalParameters: string[] | null;
}
```
##### userInfo <a id="hyperscape-returntypes-profile-userinfo">
```typescript
export type userInfo = {
    userId: number,
    isPremium: boolean,
    isVerified: boolean,
    isInfluencer: boolean,
    isPartner: boolean,
    countryCode: string
    customAvatarUrl: string,
    customHeroUrl: string | null,
    socialAccounts: SocialAccount[],
    pageviews: null,
    isSuspicious: boolean | null;
}
```
###### SocialAccount <a id="hyperscape-returntypes-profile-userinfo-socialaccount">
```typescript
export type SocialAccount = {
    platformSlug: string,
    platformUserHandle: string,
    platformUserIdentifier: string
}
```
##### Segment <a id="hyperscape-returntypes-profile-segment">
```typescript
export type Segment = {
    type: string,
    attributes: {},
    metadata: {name: string},
    expiryDate: string,
    stats: {
        finalBlows: Stat,
        chestsBroken: Stat,
        assists: Stat,
        damageDone: Stat,
        closeRangeDamageDone: Stat,
        longRangeDamageDone: Stat,
        fullRangeDamageDone: Stat,
        fullFusionDamageDone: Stat,
        fusions: Stat,
        fullFusion: Stat,
        headshotDamage: Stat,
        lastRank: Stat,
        revives: Stat,
        timePlayed: Stat,
        matchesPlayed: Stat,
        crownPickups: Stat,
        crownWins: Stat,
        crownPct: Stat,
        Wins: Stat,
        showdown: Stat,
        squadTop: Stat,
        kdRatio: Stat,
        killsPerGame: Stat,
        killsPerMin: Stat,
        avgTimeAlive: Stat,
        headshotDamageAccuracy: Stat,
        winPercentage: Stat,
        weaponFinalBlows: Stat,
        weaponDamageDone: Stat,
        weaponCloseRangeDamageDone: Stat,
        weaponLongRangeDamageDone: Stat,
        weaponFullFusionDamageDone: Stat,
        weaponFusions: Stat,
        weaponFullFusions: Stat,
        weaponHeadshotDamage: Stat,
        weaponHeadshotDamageAccuracy: Stat,
        hackFinalBlows: Stat,
        hackDamageDone: Stat,
        hackCloseRangeDamageDone: Stat,
        hackLongRangeDamageDone: Stat,
        hackFullFusionDamageDone: Stat,
        hackFusions: Stat,
        hackFullFusions: Stat,
        otherFinalBlows: Stat,
        otherDamageDone: Stat
    }
}
```
###### Stat <a id="hyperscape-returntypes-profile-segment-stat">
```typescript
export type Stat = {
    rank: string | null;
    percentile: number;
    displayName: string;
    displayCategory: string;
    category: string;
    metadata: [];
    value: number;
    displayValue: string;
    displayType: string;
}
```
<!-- ## Minecraft <a id="minecraft">
**This is an Offical API** [Offical Docs](https://wiki.vg/Mojang_API)
### Usage <a id="minecraft-usage">
```javascript
const GameAPICenter = require("gameapicenter");
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
```
### Functions <a id="minecraft-functions">
#### GetAPIStatus <a id="minecraft-getapistatus">
Returns status of various Mojang services. Possible values are green (no issues), yellow (some issues), red (service unavailable).
##### Output <a id="minecraft-getapistatus-output">
The GetAPIStatus function returns a `Promise<ServerStatusResponse>` type
##### Usage <a id="minecraft-getapistatus-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.GetAPIStatus().then((data) => {
//Your Code Here
});
```
#### Authenticate <a id="minecraft-authenticate">
Authenticates a user using their password.
##### Inputs <a id="minecraft-authenticate-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| username  | `string`  | Yes | The user's username |
| password | `string` | Yes | The user's password |
##### Output <a id="minecraft-authenticate-output">
The Authenticate function returns a `Promise<AuthenticationResponse>` type
##### Usage <a id="minecraft-authenticate-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.Authenticate("Notch", "MINECRAFTROCKS").then((data) => {
//Your Code Here
});
```
#### Refresh <a id="minecraft-refresh">
Refreshes a valid accessToken. It can be used to keep a user logged in between gaming sessions and is preferred over storing the user's password in a file see [lastlogin](https://wiki.vg/Lastlogin).
##### Inputs <a id="minecraft-refresh-inputs">

| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| accessToken  | `string`  | Yes | The user's accessToken|
| clientToken | `string` | Yes | The clientToken that was used to obtain accessToken in the first place |
| profileIdentifier | `string` | Yes |  | -->