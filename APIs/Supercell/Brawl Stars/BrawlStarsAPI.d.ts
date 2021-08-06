export type BrawlStarsPlayerBattleLogResponse = {
    battle: {},
    battleTime: string,
    event: {mode: string, id: number, map: {}}
}
export type BrawlStarsPlayerProfileResponse = {
    "club": {
      "tag": string,
      "name": string
    },
    "isQualifiedFromChampionshipChallenge": boolean,
    "3vs3Victories": number,
    "icon": {
      "id": number
    },
    "tag": string,
    "name": string,
    "trophies": number,
    "expLevel": number,
    "expPoints": number,
    "highestTrophies": number,
    "powerPlayPoints": number,
    "highestPowerPlayPoints": number,
    "soloVictories": number,
    "duoVictories": number,
    "bestRoboRumbleTime": number,
    "bestTimeAsBigBrawler": number,
    "brawlers": [
      {
        "gadgets": [
          {
            "name": {},
            "id": number
          }
        ],
        "starPowers": [
          {
            "name": {},
            "id": number
          }
        ],
        "id": number,
        "rank": number,
        "trophies": number,
        "highestTrophies": number,
        "power": number,
        "name": {}
      }
    ],
    "nameColor": string
}
export type BrawlStarsClubMemberResponse = {
    "icon": {
      "id": number
    },
    "tag": string,
    "name": string,
    "trophies": number,
    "role": string,
    "nameColor": string
}
export type BrawlStarsClubInfoResponse = {
    "tag": string,
    "name": string,
    "description": string,
    "trophies": number,
    "requiredTrophies": number,
    "members": [
      {
        "icon": {
          "id": number
        },
        "tag": string,
        "name": string,
        "trophies": number,
        "role": string,
        "nameColor": string
      }
    ],
    "type": string,
    "badgeId": number
}
export type BrawlStarsPowerPlayRankingsResponse = {
    "club": {
      "name": string
    },
    "trophies": number,
    "icon": {
      "id": number
    },
    "tag": string,
    "name": string,
    "rank": number,
    "nameColor": string
}
export type BrawlStarsPowerPlaySeasonsResponse = {
    "id": string,
    "startTime": string,
    "endTime": string
}
export type BrawlStarsClubRankingsResponse = {
    "tag": string,
    "name": string,
    "trophies": number,
    "rank": number,
    "memberCount": number,
    "badgeId": number
}
export type BrawlStarsBrawlerRankingResponse = {
    "club": {
      "name": string
    },
    "trophies": number,
    "icon": {
      "id": number
    },
    "tag": string,
    "name": string,
    "rank": number,
    "nameColor": string
}
export type BrawlStarsPlayerRankingResponse = {
    "club": {
      "name": string
    },
    "trophies": number,
    "icon": {
      "id": number
    },
    "tag": string,
    "name": string,
    "rank": number,
    "nameColor": string
}
export type BrawlStarsBrawlerInfoResponse = {
    "gadgets": [
      {
        "name": {},
        "id": number
      }
    ],
    "name": {},
    "id": number,
    "starPowers": [
      {
        "name": {},
        "id": number
      }
    ]
}
export type BrawlStarsEventRotationResponse =   {
    "event": {
      "mode": string,
      "id": number,
      "map": {}
    },
    "startTime": string,
    "endTime": string
}
export class BrawlStarsAPI {
    constructor(authKey: string);
    GetPlayerLogs(playerTag: string): Promise<BrawlStarsPlayerBattleLogResponse[]>;
    GetPlayerInfo(playerTag: string): Promise<BrawlStarsPlayerProfileResponse>;
    GetClubMembers(clubTag: string, limit: number): Promise<BrawlStarsClubMemberResponse[]>;
    GetClubInfo(clubTag: string): Promise<BrawlStarsClubInfoResponse>;
    GetPowerPlayRankingsBySeasonID(countryCode: string, seasonId: string, limit: number): Promise<BrawlStarsPowerPlayRankingsResponse[]>;
    GetPowerPlayRankings(countryCode: string, limit: number): Promise<BrawlStarsPowerPlaySeasonsResponse[]>;
    GetClubRankings(countryCode: string, limit: number): Promise<BrawlStarsClubRankingsResponse[]>;
    GetBrawlerRankings(countryCode: string, brawlerId: string, limit: number): Promise<BrawlStarsBrawlerRankingResponse[]>;
    GetPlayerRankings(countryCode: string, limit: number): Promise<BrawlStarsPlayerRankingResponse[]>;
    GetBrawlers(limit: number): Promise<BrawlStarsBrawlerInfoResponse[]>;
    GetBrawlerByID(brawlerId: string): Promise<BrawlStarsBrawlerInfoResponse>;
    GetEventRotation(): Promise<BrawlStarsEventRotationResponse>;
}