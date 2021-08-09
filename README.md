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
5. [Minecraft](#minecraft)
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
        8. [UsernamesToUUIDs](#minecraft-usernamestouuids)
            1. [Input](#minecraft-usernamestouuids-input)
            2. [Output](#minecraft-usernamestouuids-output)
            3. [Usage](#minecraft-usernamestouuids-usage)
        9. [UUIDToNameHistory](#minecraft-uuidtonamehistory)
            1. [Input](#minecraft-uuidtonamehistory-input)
            2. [Output](#minecraft-uuidtonamehistory-output)
            3. [Usage](#minecraft-uuidtonamehistory-usage)
        10. [UUIDToSkin](#minecraft-uuidtoskin)
            1. [Input](#minecraft-uuidtoskin-input)
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
    3. [Return Types](#minecraft-returntypes)
        1. [ServerStatusResponse](#minecraft-returntypes-serverstatusresponse)
        2. [AuthenticationResponse](#minecraft-returntypes-authenticationresponse)
            1. [AuthenticationProperty](#minecraft-returntypes-authenticationresponse-authenticationproperty)
            2. [AuthenticationProfile](#minecraft-returntypes-authenticationresponse-authenticationprofile)
        3. [RefreshResponse](#minecraft-returntypes-refreshresponse)
        4. [UUIDResponse](#minecraft-returntypes-uuidresponse)
        5. [ProfileInfoResponse](#minecraft-returntypes-profileinforesponse)
        6. [ProfileNameChangeInfoResponse](#minecraft-returntypes-profilenamechangeinforesponse)
6. [Overwatch](#overwatch)
    1. [Usage](#overwatch-usage)
    2. [Functions](#overwatch-functions)
        1. [GetProfile](#overwatch-getprofile)
            1. [Inputs](#overwatch-getprofile-inputs)
            2. [Output](#overwatch-getprofile-output)
            3. [Usage](#overwatch-getprofile-usage)
        2. [GetCompleteStats](#overwatch-getcompletestats)
            1. [Inputs](#overwatch-getcompletestats-inputs)
            2. [Output](#overwatch-getcompletestats-output)
            3. [Usage](#overwatch-getcompletestats-usage)
        3. [GetHeroStats](#overwatch-getherostats)
            1. [Inputs](#overwatch-getherostats-inputs)
            2. [Output](#overwatch-getherostats-output)
            3. [Usage](#overwatch-getherostats-usage)
    3. [Return Types](#overwatch-returntypes)
        1. [OverwatchProfile](#overwatch-returntypes-overwatchprofile)
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
// Your Code Here :D
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
// Your Code Here :D
});
```
#### GetMapRotation <a id="apex-legends-getmaprotation">
##### Output <a id="apex-legends-getmaprotation-output">
The GetMapRotation function returns a `Promise<MapRotation>` type
##### Usage <a id="apex-legends-getmaprotation-usage">
```javascript
const ApexLegendsAPI = new GameAPICetner.ApexLegendsAPI("DUMMYAPIKEY")
ApexLegends.GetMapRotation().then((data) => {
// Your Code Here :D
})
```
#### GetNews <a id="apex-legends-getnews">
##### Output <a id="apex-legends-getnews-output">
The GetNews function returns a `Promise<News[]>` type
##### Usage <a id="apex-legends-getnews-usage">
```javascript
const ApexLegendsAPI = new GameAPICenter.ApexLegendsAPI("DUMMYAPIKEY");
ApexLegendsAPI.GetNews().then((data) => {
// Your Code Here :D
});
```
#### GetServerStatus <a id="apex-legends-getserverstatus">
##### Output <a id="apex-legends-getserverstatus-output">
The GetServerStatus function returns a `Promise<ServerStatusResponse>` type
##### Usage <a id="apex-legends-getserverstatus-usage">
```javascript
const ApexLegendsAPI = new GameAPICenter.ApexLegendsAPI("DUMMYAPIKEY");
ApexLegendsAPI.GetServerStatus().then((data) => {
// Your Code Here :D
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
// Your Code Here :D
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
// Your Code Here :D
});
```
#### GetTowerByID <a id="bloonstd6-gettowerbyid">
Get a specific tower in BTD6.
##### Input <a id="bloonstd6-gettowerbyid-input">
```typescript
export type TowerID = "dart-monkey" | "boomerang-monkey" | "bomb-shooter" | "tack-shooter" | "ice-monkey" | "glue-gunner" | "sniper-monkey" | "monkey-sub" | "monkey-buccaneer" | "monkey-ace" | "heli-pilot" | "mortar-monkey" | "dartling-gunner" | "wizard-monkey" | "super-monkey" | "ninja-monkey" | "alchemist" | "druid" | "banana-farm" | "spike-factory" | "monkey-village" | "engineer-monkey";
```
| Input  | Type | Required | Description |  
| ------------- | ------------- | ------------- | ------------- |
| towerID  |`TowerID`  | Yes | a Tower ID ie. 'dart-monkey', 'super-monkey' |
##### Output <a id="bloonstd6-gettowerbyid-output">
The GetTowerByID function returns a `Promise<Tower>` type
##### Usage <a id="bloonstd6-gettowerbyid-usage">
```javascript
const BloonsTD6API = new GameAPICenter.BloonsTD6API();
BloonsTD6API.GetTowerByID("dart-monkey").then((data) => {
// Your Code Here :D
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
// Your Code Here :D
});
```
#### GetHeroByID <a id="bloonstd6-getherobyid">
Get a specific Hero in BTD6.
##### Input <a id="bloonstd6-getherobyid-input">
```typescript
export type HeroID = "quincy" | "gwendolin" | "striker-jones" | "captain-churchill" | "benjamin" | "ezili" | "pat-fusty" | "adora" | "admiral-brickell" | "etienne" | "sauda";
```
| Input  | Type | Required | Description |  
| ------------- | ------------- | ------------- | ------------- |
| heroID  |`HeroID`  | Yes | a Hero ID ie. 'quincy' |
##### Output <a id="bloonstd6-getherobyid-output">
The GetHeroByID function returns a `Promise<Hero>` type
##### Usage <a id="bloonstd6-getherobyid-usage">
```javascript
const BloonsTD6API = new GameAPICenter.BloonsTD6API();
BloonsTD6API.GetHeroByID("quincy").then((data) => {
// Your Code Here :D
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
// Your Code Here :D
});
```
#### GetBloonByID <a id="bloonstd6-getbloonbyid">
Get a specific Bloon in BTD6.
##### Input <a id="bloonstd6-getbloonbyid-input">
```typescript
export type BloonID = "red" | "blue" | "green" | "pink" | "black" | "white" | "purple" | "lead" | "zebra" | "rainbow" | "ceramic" | "golden" | "ghost" | "moab" | "bfb" | "zomg" | "bad" | "ddt"
```
| Input  | Type | Required | Description |  
| ------------- | ------------- | ------------- | ------------- |
| bloonID  |`BloonID`  | Yes | a Bloon ID ie. 'red', 'blue' |
##### Output <a id="bloonstd6-getbloonbyid-output">
The GetBloonByID function returns a `Promise<Bloon>` type
##### Usage <a id="bloonstd6-getbloonbyid-usage">
```javascript
const BloonsTD6API = new GameAPICenter.BloonsTD6API();
BloonsTD6API.GetBloonByID("red").then((data) => {
// Your Code Here :D
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
// Your Code Here :D
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
// Your Code Here :D
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
// Your Code Here :D
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
// Your Code Here :D
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
## Minecraft <a id="minecraft">
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
// Your Code Here :D
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
// Your Code Here :D
});
```
#### Refresh <a id="minecraft-refresh">
Refreshes a valid accessToken. It can be used to keep a user logged in between gaming sessions and is preferred over storing the user's password in a file see [lastlogin](https://wiki.vg/Lastlogin).
##### Inputs <a id="minecraft-refresh-inputs">

| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| accessToken  | `string`  | Yes | The user's accessToken|
| clientToken | `string` | Yes | The clientToken that was used to obtain accessToken in the first place |
| profileIdentifier | `string` | Yes | a hexidecimal profile identifier |
| playerName | `string` | Yes | The user's username |
##### Output <a id="minecraft-refresh-output">
The Refresh function returns a `Promise<RefreshResponse>` type
##### Usage <a id="minecraft-refresh-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.Refresh("DUMMY_ACCESS-TOKEN", "DUMMY_CLIENT-TOKEN", "DUMMY_PROFILEIDENTIFIER", "DUMMY_PLAYERNAME").then((data) => {
// Your Code Here :D
})
```
#### Validate <a id="minecraft-validate">
Checks if an accessToken is usable for authentication with a Minecraft server. The Minecraft Launcher (as of version 1.6.13) calls this endpoint on startup to verify that its saved token is still usable, and calls /refresh if this returns an error.

Note that an accessToken may be unusable for authentication with a Minecraft server, but still be good enough for /refresh. This mainly happens when one has used another client (e.g. played Minecraft on another PC with the same account). It seems only the most recently obtained accessToken for a given account can reliably be used for authentication (the next-to-last token also seems to remain valid, but don't rely on it).

/validate may be called with or without a clientToken. If a clientToken is provided, it should match the one used to obtain the accessToken. The Minecraft Launcher does send a clientToken to /validate.
##### Inputs <a id="minecraft-validate-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| accessToken  | `string`  | Yes | The user's accessToken|
| clientToken | `string` | No | The clientToken that was used to obtain accessToken in the first place |
##### Output <a id="minecraft-validate-output">
The Validate functions returns an empty payload (`Promise<any>`)
##### Usage <a id="minecraft-validate-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.Validate("DUMMY_ACCESS-TOKEN").then((data) => {
// Your Code Here :D
})
```
#### Signout <a id="minecaft-signout">
Invalidates accessTokens using an account's username and password.
##### Inputs <a id="minecraft-signout-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| username  | `string`  | Yes | The user's username |
| password | `string` | Yes | The user's password |
##### Output <a id="minecraft-signout-output">
The Signout function returns an empty payload if successful (`Promise<any>`)
##### Usage <a id="minecraft-signout-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.Signout("Notch", "Minecraft-ROCKS").then((data) => {
// Your Code Here :D
})
```
#### Invalidate <a id="minecraft-invalidate">
Invalidates accessTokens using a client/access token pair.
##### Inputs <a id="minecraft-invalidate-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| accessToken  | `string`  | Yes | The user's accessToken|
| clientToken | `string` | Yes | The clientToken that was used to obtain accessToken in the first place |
##### Output <a id="minecraft-invalidate-output">
The Invalidate function returns an empty payload if successful (`Promise<any>`)
##### Usage <a id="minecraft-invalidate-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.Invalidate("DUMMMY_ACCESS-TOKEN", "DUMMY_CLIENT-TOKEN").then((data) => {
// Your Code Here :D
})
```
#### UsernameToUUID <a id="minecraft-usernametouuid">
This will return the UUID of the username.
##### Input <a id="minecraft-usernametouuid-input">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| username  | `string`  | Yes | The user's username |
##### Output <a id="minecraft-usernametouuid-output">
The UsernameToUUID function returns a `Promise<UUIDResponse>` type
##### Usage <a id="minecraft-usernametouuid-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.UsernameToUUID("Notch").then((data) => {
// Your Code Here :D
})
```
#### UsernamesToUUIDs <a id="minecraft-usernamestouuids">
This will return player UUIDs and some extras.
##### Input <a id="minecraft-usernamestouuids-input">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| usernames  | `string[]`  | Yes | List of Usernames |
##### Output <a id="minecraft-usernamestouuids-output">
The UsernameToUUID function returns a `Promise<UUIDResponse>` type
##### Usage <a id="minecraft-usernamestouuids-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.UsernamesToUUIDs(["Notch", "jeb_"]).then((data) => {
// Your Code Here :D
})
```
#### UUIDToNameHistory <a id="minecraft-uuidtonamehistory">
Returns all the usernames this user has used in the past and the one they are using currently. The UUID must be given either without, or correctly formatted hyphens.
##### Input <a id="minecraft-uuidtonamehistory-input">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| uuid  | `string`  | Yes | The user's UUID |
##### Output <a id="minecraft-uuidtonamehistory-output">
The UUIDToNameHistory function returns a 
```javascript
Promise<[
    {
        name: string, 
        changedToAt: number
    }
]>
```
##### Usage <a id="minecraft-uuidtonamehistory-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.UUIDToNameHistory("069a79f444e94726a5befca90e38aaf5").then((data) => {
// Your Code Here :D
})
```
#### UUIDToSkin <a id="minecraft-uuidtoskin">
This will return the player's username plus any additional information about them (e.g. skins). [Example](https://sessionserver.mojang.com/session/minecraft/profile/4566e69fc90748ee8d71d7ba5aa00d20) **This has no ratelimit**.
##### Inputs <a id="minecraft-uuidtoskin-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| uuid  | `string`  | Yes | The user's UUID | 
##### Output <a id="minecraft-uuidtoskin-output">
The UUIDToSkin function returns a 
```javascript
Promise<{
    id: string, 
    name: string, 
    properties: [
        {
            name: string, 
            value: string, 
            signature: string,
        },
    ], 
    legacy: boolean,
}>
```
##### Usage <a id="minecraft-uuidtoskin-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.UUIDToSkin("4566e69fc90748ee8d71d7ba5aa00d20").then((data) => {
// Your Code Here :D
})
```
#### GetBlockedServers <a id="minecraft-getblockedservers">
Returns a list of SHA1 hashes used to check server addresses against when the client tries to connect.

Clients check the lowercase name, using the ISO-8859-1 charset, against this list. They will also attempt to check subdomains, replacing each level with a \*. Specifically, it splits based off of the . in the domain, goes through each section removing one at a time. For instance, for mc.example.com, it would try mc.example.com, \*.example.com, and \*.com. With IP addresses (verified by having 4 split sections, with each section being a valid integer between 0 and 255, inclusive) substitution starts from the end, so for 192.168.0.1, it would try 192.168.0.1, 192.168.0.\*, 192.168.\*, and 192.\*.

This check is done by the bootstrap class in netty. The default netty class is overridden by one in the com.mojang:netty dependency loaded by the launcher. This allows it to affect any version that used netty (1.7+)
##### Output <a id="minecraft-getblockedservers-output">
The GetBlockedServers function returns a `Promise<string[]>` type
##### Usage <a id="minecraft-getblockedservers-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.GetBlockedServers().then((data) => {
// Your Code Here :D
})
```
#### GetStatistics <a id="minecraft-getstatistics">
Get statistics on the sales of Minecraft.
##### Input <a id="minecraft-getstatistics-input">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| metricKeys  | `["item_sold_minecraft", "prepaid_card_redeemed_minecraft"]`  | Yes | The Statistics you want |
##### Output <a id="minecraft-getstatistics-output">
The GetStatistics function returns a
```javascript
Promise<{
    total: number, 
    last24h: number, 
    saleVelocityPerSeconds: number,
}>
```
##### Usage <a id="minecraft-getstatistics-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.GetStatistics(["item_sold_minecraft"]).then((data) => {
// Your Code Here :D
})
```
#### GetProfileInfo <a id="minecraft-getprofileinfo">
This API endpoint fetches information about the current account including UUID, username, skins, and capes.
##### Input <a id="minecraft-getprofileinfo-input">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| accessToken  | `string`  | Yes | The user's accessToken|
##### Output <a id="minecraft-getprofileinfo-output">
The GetProfileInfo function returns a `Promise<ProfileInfoResponse>` type
##### Usage <a id="minecraft-getprofileinfo-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.GetProfileInfo("DUMMY_ACCESS-TOKEN").then((data) => {
// Your Code Here :D
})
```
#### GetProfileNameChangeInfo <a id="minecraft-getprofilenamechangeinfo">
This API endpoint fetches information about the profile name such as the date the name was changed and the date the account was created.
##### Input <a id="minecraft-getprofilenamechangeinfo-input">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| accessToken  | `string`  | Yes | The user's accessToken|
##### Output <a id="minecraft-getprofilenamechangeinfo-output">
The GetProfileNameChangeInfo function returns a `Promise<ProfileNameChangeInfoResponse>` type
##### Usage <a id="minecraft-getprofilenamechangeinfo-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.GetProfileNameChangeInfo("DUMMY_ACCESS-TOKEN").then((data) => {
// Your Code Here :D
})
```
#### CheckNameAvailability <a id="minecraft-checknameavailability">
This API endpoints check if the given name is available.
##### Inputs <a id="minecraft-checknameavailability-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| name | `string` | Yes | The username you want to check availability of |
| accessToken  | `string`  | Yes | The user's accessToken|
##### Output <a id="minecraft-checknameavailability-output">
The CheckNameAvailability function returns a
```javascript
Promise<{
    status: "DUPLICATE" | "AVAILABLE"
}>
```
##### Usage <a id="minecraft-checknameavailability-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.CheckNameAvailability("Notch", "DUMMY_ACCESS-TOKEN").then((data) => {
// Your Code Here :D
})
```
#### ChangeName <a id="minecraft-changename">
This will set the name for the account that the access token in the Authorization header belongs to.
##### Inputs <a id="minecraft-changename-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| newName | `string` | Yes | The username you want |
| accessToken  | `string`  | Yes | The user's accessToken|
##### Output <a id="minecraft-changename-output">
The ChangeName function returns a `Promise<ProfileInfoResponse>` type if successful or `Promise<ChangeNameError>` type if not.
##### Usage <a id="minecraft-changename-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.ChangeName("Notch", "DUMMY_ACCESS-TOKEN").then((data) => {
// Your Code Here :D
})
```
#### ChangeSkin <a id="minecraft-changeskin">
This will set the skin for the selected profile, but Mojang's servers will fetch the skin from a URL.
##### Inputs <a id="minecraft-changeskin-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| variant | `"classic" \| "slim"` | Yes | The skin type |
| url | `string` | Yes | The URL to the skin | 
| accessToken  | `string`  | Yes | The user's accessToken|
##### Output <a id="minecraft-changeskin-output">
Upon error, the server will send back a JSON with the error. (Success is a blank payload) `Promise<any>`
##### Usage <a id="minecraft-changeskin-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
MinecraftAPI.ChangeSkin("slim", "https://thereisaskinhere.com/minecraft/totallyarealskin.png", "DUMMY_ACCESS-TOKEN").then((data) => {
// Your Code Here :D
})
```
#### ResetSkin <a id="minecraft-resetskin">
Resets the user's skin to the default one.
##### Inputs <a id="minecraft-resetskin-inputs">
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| uuid | `string` | Yes | The Unique User Identifier of the User |
| accessToken  | `string`  | Yes | The user's accessToken|
##### Output <a id="minecraft-resetskin-output">
No response unless an error occurred.
##### Usage <a id="minecraft-resetskin-usage">
```javascript
const MinecraftAPI = new GameAPICenter.MinecraftAPI();
(async () => {
await MinecraftAPI.ResetSkin("DUMMY_ACCESS-TOKEN", "069a79f444e94726a5befca90e38aaf5")
})();
```
### Return Types <a id="minecraft-returntypes">
#### ServerStatusResponse <a id="minecraft-returntypes-serverstatusresponse">
```typescript
export type ServerStatusResponse = {
    "minecraft.net": string,
    "session.minecraft.net": string,
    "account.mojang.com": string,
    "authserver.mojang.com": string,
    "api.mojang.com": string,
    "textures.minecraft.net": string,
    "mojang.com": string
}
```
#### AuthenticationResponse <a id="minecraft-returntypes-authenticationresponse">
```typescript
export type AuthenticationResponse = {
    user: {
        username: string,
        properties: AuthenticationProperty[],
        id: string,
    },
    clientToken: string,
    accessToken: string,
    availableProfiles: AuthenticationProfile[],
    selectedProfile: AuthenticationProfile
}
```
##### AuthenticationProperty <a id="minecraft-returntypes-authenticationresponse-authenticationproperty">
```typescript
export type AuthenticationProperty = {
    name: string,
    value: string
}
```
##### AuthenticationProfile <a id="minecraft-returntypes-authenticationresponse-authenticationprofile">
```typescript
export type AuthenticationProfile = {
    name: string,
    id: string
}
```
#### RefreshResponse <a id="minecraft-returntypes-refreshresponse">
```typescript
export type RefreshResponse = {
    accessToken: string,
    clientToken: string,
    selectedProfile: {
        id: string, 
        name: string
    },
    user: {
        id: string, 
        properties: [
            {
                name: string, 
                value: string
            }, 
            {
                name: string, 
                value: string
            }
        ]
    }
}
```
#### UUIDResponse <a id="minecraft-returntypes-uuidresponse">
```typescript
export type UUIDReponse = {
    name: string,
    id: string,
}
```
#### ProfileInfoResponse <a id="minecraft-returntypes-profileinforesponse">
```typescript
export type ProfileInfoResponse = {
    id: string,
    name: string,
    skins: [
        {
            id: string, 
            state: string, 
            url: string, 
            variant: string
        }
    ],
    capes: [];
}
```
#### ProfileNameChangeInfoResponse <a id="minecraft-returntypes-profilenamechangeinforesponse">
```typescript
export type ProfileNameChangeInfoResponse = {
    changedAt: string,
    createdAt: string,
    nameChangeAllowed: boolean;
}
```
## Overwatch <a id="overwatch">
**This is an Unoffical API** [Unoffical Docs](https://ow-api.com/docs/)
### Usage <a id="overwatch-usage">
```javascript
const GameAPICenter = require("gameapicenter");
const OverwatchAPI = new GameAPICenter.OverwatchAPI();
```
### Functions <a id="overwatch-functions">
#### GetProfile <a id="overwatch-getprofile">
This endpoint retrieves stats commonly used by bots and other services.
##### Inputs <a id="overwatch-getprofile-inputs">
```typescript
export type OverwatchPlatform = "pc" | "xbox" | "ps4" | "nintendo-switch";
export type OverwatchRegion = "us" | "eu" | "asia";
```
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| platform | `OverwatchPlatform` | Yes | The platform of the user |
| region  | `OverwatchRegion`  | Yes | The region of the user |
| battletag | `string` | Yes | The battletag of the user ie. My_Name_Is_Jeff_From_The_OW_Team#11561 |
##### Output <a id="overwatch-getprofile-output">
The GetProfile function returns a `Promise<OverwatchProfile>`
##### Usage <a id="overwatch-getprofile-usage">
```javascript
const OverwatchAPI = new GameAPICenter.OverwatchAPI();
OverwatchAPI.GetProfile("pc", "us", "My_Name_Is_Jeff_From_The_OW_Team#11561").then((data) => {
// Your Code Here :D
})
```
#### GetCompleteStats <a id="overwatch-getcompletestats">
##### Inputs <a id="overwatch-getcompletestats-inputs">
```typescript
export type OverwatchPlatform = "pc" | "xbox" | "ps4" | "nintendo-switch";
export type OverwatchRegion = "us" | "eu" | "asia";
```
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| platform | `OverwatchPlatform` | Yes | The platform of the user |
| region  | `OverwatchRegion`  | Yes | The region of the user |
| battletag | `string` | Yes | The battletag of the user ie. My_Name_Is_Jeff_From_The_OW_Team#11561 |
##### Output <a id="overwatch-getcompletestats-output">
The GetCompleteStats function returns something im too lazy to add type def for so `Promise<any>` is what you get.
##### Usage <a id="overwatch-getcompletestats-usage">
```javascript
const OverwatchAPI = new GameAPICenter.OverwatchAPI();
OverwatchAPI.GetCompleteStats("pc", "us", "My_Name_Is_Jeff_From_The_OW_Team#11561").then((data) => {
// Your Code Here :D
})
```
#### GetHeroStats <a id="overwatch-getherostats">
##### Inputs <a id="overwatch-getherostats-inputs">
```typescript
export type OverwatchPlatform = "pc" | "xbox" | "ps4" | "nintendo-switch";
export type OverwatchRegion = "us" | "eu" | "asia";
export type OverwatchHeros = ['ana' , 'ashe' , 'baptiste' , 'bastion' , 'brigitte' , 'doomfist' , 'dva' , 'echo' , 'genji' , 'hammond' , 'hanzo' , 'junkrat' , 'lucio' , 'mccree' , 'mei' , 'mercy' , 'moira' , 'orisa' , 'pharah' , 'reaper' , 'reinhardt' , 'roadhog' , 'sigma' , 'soldier' , 'sombra' , 'symmetra' , 'torbjorn' , 'tracer' , 'widowmaker' , 'winston' , 'zarya' , 'zenyatta'];
```
| Parameter  | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
| platform | `OverwatchPlatform` | Yes | The platform of the user |
| region  | `OverwatchRegion`  | Yes | The region of the user |
| battletag | `string` | Yes | The battletag of the user ie. My_Name_Is_Jeff_From_The_OW_Team#11561 |
| heros | `OverwatchHeros` | Yes | An Array of heros you want stats for.
##### Output <a id="overwatch-getherostats-output">
The GetHeroStats function returns something i was also too lazy to type def so `Promise<any>` is your best friend.
##### Usage <a id="overwatch-getherostats-usage">
```javascript
const OverwatchAPI = new GameAPICenter.OverwatchAPI();
OverwatchAPI.GetHeroStats("pc", "us", "My_Name_Is_Jeff_From_The_OW_Team#11561", ["genji", "hanzo"]).then((data) => {
// Your Code Here :D
})
```
### Return Types <a id="overwatch-returntypes">
#### OverwatchProfile <a id="overwatch-returntypes-overwatchprofile">
```typescript
export type OverwatchProfile = {
    competitiveStats: {
        awards: {
            cards: number,
            medals: number,
            medalsBronze: number,
            medalsSilver: number,
            medalsGold: number
        },
        games: {
            played: number, 
            won: number
        },
    },
    endorsment: number,
    endorsementIcon: string,
    gamesWon: number,
    icon: string,
    level: number,
    levelIcon: string,
    name: string,
    prestige: number,
    prestigeIcon: string,
    private: boolean,
    quickPlayStats: {
        awards: {
            cards: number,
            medals: number,
            medalsBronze: number,
            medalsSilver: number,
            medalsGold: number,
        },
        games: {played: number, won: number},
    },
    rating: number,
    ratingIcon: string,
    ratings: [
        {
            level: number, 
            role: string, 
            roleIcon: string
        },
    ];
}
```