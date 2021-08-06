export type ClashOfClansCurrentWarLeagueGroupResponse = {
    "tag": string,
    "state": string,
    "season": string,
    "clans": [
      {
        "tag": string,
        "clanLevel": number,
        "name": string,
        "members": [
          {
            "tag": string,
            "townHallLevel": number,
            "name": string
          }
        ],
        "badgeUrls": {}
      }
    ],
    "rounds": [
      {
        "warTags": [
          string
        ]
      }
    ]
}
export type ClashOfClansClanWarInfoResponse = {
    "tag": string,
    "state": string,
    "season": string,
    "clans": [
      {
        "tag": string,
        "clanLevel": number,
        "name": string,
        "members": [
          {
            "tag": string,
            "townHallLevel": number,
            "name": string
          }
        ],
        "badgeUrls": {}
      }
    ],
    "rounds": [
      {
        "warTags": [
          string
        ]
      }
    ]
}
export type ClashOfClansClanWarLogResponse = {
    "clan": {
      "destructionPercentage": {},
      "tag": string,
      "name": string,
      "badgeUrls": {},
      "clanLevel": number,
      "attacks": number,
      "stars": number,
      "expEarned": number,
      "members": [
        {
          "tag": string,
          "name": string,
          "mapPosition": number,
          "townhallLevel": number,
          "opponentAttacks": number,
          "bestOpponentAttack": {
            "order": number,
            "attackerTag": string,
            "defenderTag": string,
            "stars": number,
            "destructionPercentage": number,
            "duration": number
          },
          "attacks": [
            {
              "order": number,
              "attackerTag": string,
              "defenderTag": string,
              "stars": number,
              "destructionPercentage": number,
              "duration": number
            }
          ]
        }
      ]
    },
    "teamSize": number,
    "opponent": {
      "destructionPercentage": {},
      "tag": string,
      "name": string,
      "badgeUrls": {},
      "clanLevel": number,
      "attacks": number,
      "stars": number,
      "expEarned": number,
      "members": [
        {
          "tag": string,
          "name": string,
          "mapPosition": number,
          "townhallLevel": number,
          "opponentAttacks": number,
          "bestOpponentAttack": {
            "order": number,
            "attackerTag": string,
            "defenderTag": string,
            "stars": number,
            "destructionPercentage": number,
            "duration": number
          },
          "attacks": [
            {
              "order": number,
              "attackerTag": string,
              "defenderTag": string,
              "stars": number,
              "destructionPercentage": number,
              "duration": number
            }
          ]
        }
      ]
    },
    "endTime": string,
    "result": string
}
export type ClashOfClansClanInfoResponse = {
    "warLeague": {
      "name": {},
      "id": number
    },
    "memberList": [
      {
        "league": {
          "name": {},
          "id": number,
          "iconUrls": {}
        },
        "tag": string,
        "name": string,
        "role": string,
        "expLevel": number,
        "clanRank": number,
        "previousClanRank": number,
        "donations": number,
        "donationsReceived": number,
        "trophies": number,
        "versusTrophies": number
      }
    ],
    "tag": string,
    "warFrequency": string,
    "clanLevel": number,
    "chatLanguage": {
      "name": string,
      "id": number,
      "languageCode": string
    },
    "warWins": number,
    "warTies": number,
    "clanVersusPoints": number,
    "requiredTrophies": number,
    "requiredVersusTrophies": number,
    "requiredTownhallLevel": number,
    "isWarLogPublic": boolean,
    "warWinStreak": number,
    "warLosses": number,
    "clanPoints": number,
    "name": string,
    "location": {
      "localizedName": string,
      "id": number,
      "name": string,
      "isCountry": boolean,
      "countryCode": string
    },
    "type": string,
    "members": number,
    "labels": [
      {
        "name": {},
        "id": number,
        "iconUrls": {}
      }
    ],
    "description": string,
    "badgeUrls": {}
}
export type ClashOfClansClanCurrentWarInfoResponse = {
    "clan": {
      "destructionPercentage": {},
      "tag": string,
      "name": string,
      "badgeUrls": {},
      "clanLevel": number,
      "attacks": number,
      "stars": number,
      "expEarned": number,
      "members": [
        {
          "tag": string,
          "name": string,
          "mapPosition": number,
          "townhallLevel": number,
          "opponentAttacks": number,
          "bestOpponentAttack": {
            "order": number,
            "attackerTag": string,
            "defenderTag": string,
            "stars": number,
            "destructionPercentage": number,
            "duration": number
          },
          "attacks": [
            {
              "order": number,
              "attackerTag": string,
              "defenderTag": string,
              "stars": number,
              "destructionPercentage": number,
              "duration": number
            }
          ]
        }
      ]
    },
    "teamSize": number,
    "opponent": {
      "destructionPercentage": {},
      "tag": string,
      "name": string,
      "badgeUrls": {},
      "clanLevel": number,
      "attacks": number,
      "stars": number,
      "expEarned": number,
      "members": [
        {
          "tag": string,
          "name": string,
          "mapPosition": number,
          "townhallLevel": number,
          "opponentAttacks": number,
          "bestOpponentAttack": {
            "order": number,
            "attackerTag": string,
            "defenderTag": string,
            "stars": number,
            "destructionPercentage": number,
            "duration": number
          },
          "attacks": [
            {
              "order": number,
              "attackerTag": string,
              "defenderTag": string,
              "stars": number,
              "destructionPercentage": number,
              "duration": number
            }
          ]
        }
      ]
    },
    "startTime": string,
    "state": string,
    "endTime": string,
    "preparationStartTime": string
}
export type ClashOfClansClanMembersResponse = {
    "league": {
      "name": {},
      "id": number,
      "iconUrls": {}
    },
    "tag": string,
    "name": string,
    "role": string,
    "expLevel": number,
    "clanRank": number,
    "previousClanRank": number,
    "donations": number,
    "donationsReceived": number,
    "trophies": number,
    "versusTrophies": number
}
export type ClashOfClansPlayerInfoResponse = {
    "league": {
      "name": {},
      "id": number,
      "iconUrls": {}
    },
    "clan": {
      "tag": string,
      "clanLevel": number,
      "name": string,
      "badgeUrls": {}
    },
    "role": string,
    "attackWins": number,
    "defenseWins": number,
    "townHallLevel": number,
    "townHallWeaponLevel": number,
    "versusBattleWins": number,
    "legendStatistics": {
      "currentSeason": {
        "trophies": number,
        "id": string,
        "rank": number
      },
      "previousSeason": {
        "trophies": number,
        "id": string,
        "rank": number
      },
      "previousVersusSeason": {
        "trophies": number,
        "id": string,
        "rank": number
      },
      "bestVersusSeason": {
        "trophies": number,
        "id": string,
        "rank": number
      },
      "legendTrophies": number,
      "bestSeason": {
        "trophies": number,
        "id": string,
        "rank": number
      }
    },
    "troops": [
      {
        "level": number,
        "name": {},
        "maxLevel": number,
        "village": string,
        "superTroopIsActive": boolean
      }
    ],
    "heroes": [
      {
        "level": number,
        "name": {},
        "maxLevel": number,
        "village": string,
        "superTroopIsActive": boolean
      }
    ],
    "spells": [
      {
        "level": number,
        "name": {},
        "maxLevel": number,
        "village": string,
        "superTroopIsActive": boolean
      }
    ],
    "labels": [
      {
        "name": {},
        "id": number,
        "iconUrls": {}
      }
    ],
    "tag": string,
    "name": string,
    "expLevel": number,
    "trophies": number,
    "bestTrophies": number,
    "donations": number,
    "donationsReceived": number,
    "builderHallLevel": number,
    "versusTrophies": number,
    "bestVersusTrophies": number,
    "warStars": number,
    "achievements": [
      {
        "stars": number,
        "value": number,
        "name": {},
        "target": number,
        "info": {},
        "completionInfo": {},
        "village": string
      }
    ],
    "versusBattleWinCount": number
}
export type ClashOfClansVerifyPlayerTokenResponse = {
    "tag": string,
    "token": string,
    "status": string
}
export type ClashOfClansLeagueInfoResponse =   {
    "name": {},
    "id": number,
    "iconUrls": {}
}
export type ClashOfClansLeagueSeasonRankingResponse = {
    "league": {
      "name": {},
      "id": number,
      "iconUrls": {}
    },
    "clan": {
      "tag": string,
      "name": string,
      "badgeUrls": {}
    },
    "attackWins": number,
    "defenseWins": number,
    "tag": string,
    "name": string,
    "expLevel": number,
    "rank": number,
    "previousRank": number,
    "trophies": number
}
export type ClashOfClansLeagueSeasonResponse = {
    "id": string
}
export type ClashOfClansWarLeagueInfoResponse = {
    "name": {},
    "id": number
}
export type ClashOfClansClanRankingForLocationResponse = {
    "clanLevel": number,
    "clanPoints": number,
    "location": {
      "localizedName": string,
      "id": number,
      "name": string,
      "isCountry": boolean,
      "countryCode": string
    },
    "members": number,
    "tag": string,
    "name": string,
    "rank": number,
    "previousRank": number,
    "badgeUrls": {}
}
export type ClashOfClansPlayerRankingForLocationResponse = {
    "league": {
      "name": {},
      "id": number,
      "iconUrls": {}
    },
    "clan": {
      "tag": string,
      "name": string,
      "badgeUrls": {}
    },
    "attackWins": number,
    "defenseWins": number,
    "tag": string,
    "name": string,
    "expLevel": number,
    "rank": number,
    "previousRank": number,
    "trophies": number
}
export type ClashOfClansClanVersusRankingForLocationResponse = {
    "clanVersusPoints": number,
    "clanPoints": number
}
export type ClashOfClansPlayersVersusRankingForLocationResponse = {
    "clan": {
      "tag": string,
      "name": string,
      "badgeUrls": {}
    },
    "versusBattleWins": number,
    "tag": string,
    "name": string,
    "expLevel": number,
    "rank": number,
    "previousRank": number,
    "versusTrophies": number
}
export type ClashOfClansLocationInfoResponse =   {
    "localizedName": string,
    "id": number,
    "name": string,
    "isCountry": boolean,
    "countryCode": string
}
export type ClashOfClansCurrentGoldpassInfoResponse = {
    "startTime": string,
    "endTime": string
}
export type ClashOfClansLabelInfoReponse =   {
    "name": {},
    "id": number,
    "iconUrls": {}
}
export class ClashOfClansAPI {
    constructor(authKey: string);
    GetClanCurrentWarLeagueGroup(clanTag: string): Promise<ClashOfClansCurrentWarLeagueGroupResponse>;
    GetClanWarInfo(warTag: string): Promise<ClashOfClansClanWarInfoResponse>;
    GetClanWarLog(clanTag: string, limit: number): Promise<ClashOfClansClanWarLogResponse[]>;
    GetClans(name: string, warFreqency: string, locationId: string, minMembers: number, maxMembers: number, minClanPoints: number, minClanLevel: number, limit: number, labelIds: string): Promise<ClashOfClansClanInfoResponse[]>;
    GetClanCurrentWarInfo(clanTag: string): Promise<ClashOfClansClanCurrentWarInfoResponse>;
    GetClanInfo(clanTag: string): Promise<ClashOfClansClanInfoResponse>;
    GetClanMembers(clanTag: string): Promise<ClashOfClansClanMembersResponse[]>;
    GetPlayerInfo(playerTag: string): Promise<ClashOfClansPlayerInfoResponse>;
    VerifyPlayerToken(playerTag: string, playerToken: string): Promise<ClashOfClansVerifyPlayerTokenResponse>;
    GetLeagues(limit: number): Promise<ClashOfClansLeagueInfoResponse[]>;
    GetLeagueSeasonRankings(leagueId: string, seasonId: string, limit: number): Promise<ClashOfClansLeagueSeasonRankingResponse[]>;
    GetLeagueInfo(leagueId: string): Promise<ClashOfClansLeagueInfoResponse>;
    GetLeagueSeasons(leagueId: string, limit: number): Promise<ClashOfClansLeagueSeasonResponse[]>;
    GetWarLeagueInfo(leagueId: string): Promise<ClashOfClansWarLeagueInfoResponse>;
    GetWarLeagues(limit: number): Promise<ClashOfClansWarLeagueInfoResponse[]>;
    GetClanRankingsForLocation(locationId: string, limit: number): Promise<ClashOfClansClanRankingForLocationResponse[]>;
    GetPlayerRankingsForLocation(locationId: string, limit: number): Promise<ClashOfClansPlayerRankingForLocationResponse[]>;
    GetClanVersusRankingsForLocation(locationId: string, limit: number): Promise<ClashOfClansClanVersusRankingForLocationResponse[]>
    GetPlayerVersusRankingsForLocation(locationId: string, limit: number): Promise<ClashOfClansPlayersVersusRankingForLocationResponse[]>;
    GetLocations(limit: number): Promise<ClashOfClansLocationInfoResponse[]>;
    GetLocationInfo(locationId: string): Promise<ClashOfClansLocationInfoResponse>;
    GetCurrentGoldPassSeasonInfo(): Promise<ClashOfClansCurrentGoldpassInfoResponse>;
    GetPlayerLabels(limit: number): Promise<ClashOfClansLabelInfoReponse[]>;
    GetClanLabels(limit: number): Promise<ClashOfClansLabelInfoReponse[]>;
}