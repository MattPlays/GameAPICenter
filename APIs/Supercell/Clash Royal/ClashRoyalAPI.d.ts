export type ClashRoyalClanWarLogResponse = {
    "standings": [
      {
        "trophyChange": number,
        "clan": {
          "tag": string,
          "clanScore": number,
          "crowns": number,
          "badgeId": number,
          "name": string,
          "participants": number,
          "battlesPlayed": number,
          "wins": number
        }
      }
    ],
    "seasonId": number,
    "participants": [
      {
        "tag": string,
        "name": string,
        "cardsEarned": number,
        "battlesPlayed": number,
        "wins": number,
        "collectionDayBattlesPlayed": number,
        "numberOfBattles": number
      }
    ],
    "createdDate": string
}
export type ClashRoyalClanInfoResponse =  {
    "memberList": [
      {
        "arena": {
          "name": {},
          "id": number,
          "iconUrls": {}
        },
        "clanChestPoints": number,
        "lastSeen": string,
        "tag": string,
        "name": string,
        "role": string,
        "expLevel": number,
        "trophies": number,
        "clanRank": number,
        "previousClanRank": number,
        "donations": number,
        "donationsReceived": number
      }
    ],
    "tag": string,
    "clanChestStatus": string,
    "clanChestLevel": number,
    "clanScore": number,
    "clanChestMaxLevel": number,
    "clanWarTrophies": number,
    "requiredTrophies": number,
    "donationsPerWeek": number,
    "badgeId": number,
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
    "description": string,
    "clanChestPoints": number,
    "badgeUrls": {}
}
export type ClashRoyalClanRiverRaceLogInfoResponse = {
    "standings": [
      {
        "rank": number,
        "trophyChange": number,
        "clan": {
          "tag": string,
          "clanScore": number,
          "badgeId": number,
          "name": string,
          "fame": number,
          "repairPoints": number,
          "finishTime": string,
          "participants": [
            {
              "tag": string,
              "name": string,
              "fame": number,
              "repairPoints": number,
              "boatAttacks": number,
              "decksUsed": number,
              "decksUsedToday": number
            }
          ],
          "periodPoints": number
        }
      }
    ],
    "seasonId": number,
    "createdDate": string,
    "sectionIndex": number
}
export type ClashRoyalClanWarInfoResponse = {
    "state": string,
    "clan": {
      "tag": string,
      "clanScore": number,
      "crowns": number,
      "badgeId": number,
      "name": string,
      "participants": number,
      "battlesPlayed": number,
      "wins": number
    },
    "participants": [
      {
        "tag": string,
        "name": string,
        "cardsEarned": number,
        "battlesPlayed": number,
        "wins": number,
        "collectionDayBattlesPlayed": number,
        "numberOfBattles": number
      }
    ],
    "clans": [
      {
        "tag": string,
        "clanScore": number,
        "crowns": number,
        "badgeId": number,
        "name": string,
        "participants": number,
        "battlesPlayed": number,
        "wins": number
      }
    ],
    "collectionEndTime": string,
    "warEndTime": string
}
export type ClashRoyalClanMemberInfoResponse = {
    "arena": {
      "name": {},
      "id": number,
      "iconUrls": {}
    },
    "clanChestPoints": number,
    "lastSeen": string,
    "tag": string,
    "name": string,
    "role": string,
    "expLevel": number,
    "trophies": number,
    "clanRank": number,
    "previousClanRank": number,
    "donations": number,
    "donationsReceived": number
}
export type ClashRoyalPlayerInfoResponse = {
    "clan": {
      "badgeId": number,
      "tag": string,
      "name": string,
      "badgeUrls": {}
    },
    "arena": {
      "name": {},
      "id": number,
      "iconUrls": {}
    },
    "role": string,
    "wins": number,
    "losses": number,
    "totalDonations": number,
    "leagueStatistics": {
      "previousSeason": {
        "trophies": number,
        "rank": number,
        "bestTrophies": number,
        "id": string
      },
      "bestSeason": {
        "trophies": number,
        "rank": number,
        "bestTrophies": number,
        "id": string
      },
      "currentSeason": {
        "trophies": number,
        "rank": number,
        "bestTrophies": number,
        "id": string
      }
    },
    "cards": [
      {
        "id": number,
        "count": number,
        "level": number,
        "starLevel": number,
        "name": {},
        "maxLevel": number,
        "iconUrls": {}
      }
    ],
    "currentFavouriteCard": {
      "iconUrls": {},
      "name": {},
      "id": number,
      "maxLevel": number
    },
    "badges": [
      {
        "maxLevel": number,
        "progress": number,
        "level": number,
        "target": number,
        "name": string
      }
    ],
    "tag": string,
    "name": string,
    "expLevel": number,
    "trophies": number,
    "bestTrophies": number,
    "donations": number,
    "donationsReceived": number,
    "achievements": [
      {
        "stars": number,
        "value": number,
        "name": {},
        "target": number,
        "info": {},
        "completionInfo": {}
      }
    ],
    "battleCount": number,
    "threeCrownWins": number,
    "challengeCardsWon": number,
    "challengeMaxWins": number,
    "tournamentCardsWon": number,
    "tournamentBattleCount": number,
    "currentDeck": [
      {
        "id": number,
        "count": number,
        "level": number,
        "starLevel": number,
        "name": {},
        "maxLevel": number,
        "iconUrls": {}
      }
    ],
    "warDayWins": number,
    "clanCardsCollected": number,
    "starPoints": number
}
export type ClashRoyalChestInfoResponse = {
    "items": [
      {
        "name": {},
        "index": number,
        "iconUrls": {}
      }
    ]
}
export type ClashRoyalPlayerBattleLogInfoResponse = {
    "arena": {
      "name": {},
      "id": number,
      "iconUrls": {}
    },
    "gameMode": {
      "id": number,
      "name": string
    },
    "deckSelection": string,
    "challengeWinCountBefore": number,
    "boatBattleSide": string,
    "newTowersDestroyed": number,
    "prevTowersDestroyed": number,
    "remainingTowers": number,
    "boatBattleWon": boolean,
    "opponent": [
      {
        "clan": {
          "badgeId": number,
          "tag": string,
          "name": string,
          "badgeUrls": {}
        },
        "cards": [
          {
            "id": number,
            "count": number,
            "level": number,
            "starLevel": number,
            "name": {},
            "maxLevel": number,
            "iconUrls": {}
          }
        ],
        "tag": string,
        "name": string,
        "startingTrophies": number,
        "trophyChange": number,
        "crowns": number,
        "kingTowerHitPoints": number,
        "princessTowersHitPoints": [
          number
        ]
      }
    ],
    "type": string,
    "team": [
      {
        "clan": {
          "badgeId": number,
          "tag": string,
          "name": string,
          "badgeUrls": {}
        },
        "cards": [
          {
            "id": number,
            "count": number,
            "level": number,
            "starLevel": number,
            "name": {},
            "maxLevel": number,
            "iconUrls": {}
          }
        ],
        "tag": string,
        "name": string,
        "startingTrophies": number,
        "trophyChange": number,
        "crowns": number,
        "kingTowerHitPoints": number,
        "princessTowersHitPoints": [
          number
        ]
      }
    ],
    "battleTime": string,
    "challengeId": number,
    "tournamentTag": string,
    "challengeTitle": string,
    "isLadderTournament": boolean,
    "isHostedMatch": boolean
}
export type ClashRoyalCardInfoResponse =  {
    "iconUrls": {},
    "name": {},
    "id": number,
    "maxLevel": number
}
export type ClashRoyalTournamentInfoResponse = {
    "firstPlaceCardPrize": number,
    "gameMode": {
      "id": number,
      "name": string
    },
    "status": string,
    "preparationDuration": number,
    "createdTime": string,
    "duration": number,
    "type": string,
    "tag": string,
    "creatorTag": string,
    "name": string,
    "description": string,
    "capacity": number,
    "maxCapacity": number,
    "levelCap": number
}
export type ClashRoyalTournamentResponse = {
    "startedTime": string,
    "endedTime": string,
    "firstPlaceCardPrize": number,
    "gameMode": {
      "id": number,
      "name": string
    },
    "membersList": [
      {
        "previousRank": number,
        "clan": {
          "badgeId": number,
          "tag": string,
          "name": string,
          "badgeUrls": {}
        },
        "rank": number,
        "tag": string,
        "name": string,
        "score": number
      }
    ],
    "status": string,
    "preparationDuration": number,
    "createdTime": string,
    "duration": number,
    "type": string,
    "tag": string,
    "creatorTag": string,
    "name": string,
    "description": string,
    "capacity": number,
    "maxCapacity": number,
    "levelCap": number
}
export type ClashRoyalClanRankingForLocationInfoResponse = {
    "clanScore": number,
    "badgeId": number,
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
export type ClashRoyalPlayerRankingForLocationInfoResponse =  {
    "clan": {
      "badgeId": number,
      "tag": string,
      "name": string,
      "badgeUrls": {}
    },
    "arena": {
      "name": {},
      "id": number,
      "iconUrls": {}
    },
    "tag": string,
    "name": string,
    "expLevel": number,
    "rank": number,
    "previousRank": number,
    "trophies": number
}
export type ClashRoyalClanWarRankingForLocationInfoResponse = {
    "clanScore": number,
    "badgeId": number,
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
export type ClashRoyalTopPlayerBySeasonResponse = {
    "id": string
}
export type ClashRoyalTopPlayerRankingsBySeasonResponse = {
    "clan": {
      "badgeId": number,
      "tag": string,
      "name": string,
      "badgeUrls": {}
    },
    "arena": {
      "name": {},
      "id": number,
      "iconUrls": {}
    },
    "tag": string,
    "name": string,
    "expLevel": number,
    "rank": number,
    "previousRank": number,
    "trophies": number
}
export type ClashRoyalLocationInfoResponse =   {
    "localizedName": string,
    "id": number,
    "name": string,
    "isCountry": boolean,
    "countryCode": string
}
export type ClashRoyalGlobalTournamentInfoResponse =  {
    "gameMode": {
      "id": number,
      "name": string
    },
    "maxLosses": number,
    "minExpLevel": number,
    "tournamentLevel": number,
    "milestoneRewards": [
      {
        "chest": string,
        "rarity": string,
        "resource": string,
        "type": string,
        "amount": number,
        "card": {
          "iconUrls": {},
          "name": {},
          "id": number,
          "maxLevel": number
        },
        "wins": number
      }
    ],
    "freeTierRewards": [
      {
        "chest": string,
        "rarity": string,
        "resource": string,
        "type": string,
        "amount": number,
        "card": {
          "iconUrls": {},
          "name": {},
          "id": number,
          "maxLevel": number
        },
        "wins": number
      }
    ],
    "tag": string,
    "title": string,
    "startTime": string,
    "endTime": string,
    "topRankReward": [
      {
        "chest": string,
        "rarity": string,
        "resource": string,
        "type": string,
        "amount": number,
        "card": {
          "iconUrls": {},
          "name": {},
          "id": number,
          "maxLevel": number
        },
        "wins": number
      }
    ],
    "maxTopRewardRank": number
}
export class ClashRoyalAPI {
    constructor(authKey: string);
    GetClanWarLogs(clanTag: string, limit: number): Promise<ClashRoyalClanWarLogResponse[]>;
    GetClans(name: string, locationId: number, minMembers: number, maxMembers: number, minScore: number, limit: number): Promise<ClashRoyalClanInfoResponse[]>;
    GetClanRiverRaceLog(clanTag: string, limit: number): Promise<ClashRoyalClanRiverRaceLogInfoResponse[]>;
    GetClanCurrentWar(clanTag: string): Promise<ClashRoyalClanWarInfoResponse[]>;
    GetClanInfo(clanTag: string): Promise<ClashRoyalClanInfoResponse>;
    GetClanMembers(clanTag: string, limit: number): Promise<ClashRoyalClanMemberInfoResponse[]>;
    GetCurrentRiverRace(clanTag: string): Promise<ClashRoyalClanRiverRaceLogInfoResponse>;
    GetPlayerByTag(playerTag: string): Promise<ClashRoyalPlayerInfoResponse>;
    GetPlayerUpcomingChests(playerTag: string): Promise<ClashRoyalChestInfoResponse>;
    GetPlayerBottleLog(playerTag: string): Promise<ClashRoyalPlayerBattleLogInfoResponse[]>;
    GetCards(limit: number): Promise<ClashRoyalCardInfoResponse[]>;
    GetTournaments(clanName: string, limit: number): Promise<ClashRoyalTournamentInfoResponse[]>;
    GetTournamentByTag(tournamentTag: string): Promise<ClashRoyalTournamentResponse>;
    GetClanRankingsForLocation(locationId: string, limit: number): Promise<ClashRoyalClanRankingForLocationInfoResponse[]>;
    GetPlayerRankingsForLocation(locationId: string, limit: number): Promise<ClashRoyalPlayerRankingForLocationInfoResponse[]>;
    GetClanWarRankingsForLocation(locationId: string, limit: number): Promise<ClashRoyalClanWarRankingForLocationInfoResponse[]>;
    GetTopPlayerBySeasonID(seasonId: string): Promise<ClashRoyalTopPlayerBySeasonResponse>;
    GetTopPlayerRankingsBySeasonID(seasonId: string): Promise<ClashRoyalTopPlayerRankingsBySeasonResponse[]>;
    GetTopPlayerSeasons(): Promise<[{id: string}]>;
    GetLocations(limit: number): Promise<ClashRoyalLocationInfoResponse[]>;
    GetLocationInfoByID(locationId: string): Promise<ClashRoyalLocationInfoResponse>;
    GetGlobalTournament(): Promise<ClashRoyalGlobalTournamentInfoResponse[]>;
}