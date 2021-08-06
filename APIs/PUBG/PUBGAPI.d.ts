export type PUBGProfile = {
    "data": [
      {
        "type": string,
        "id": string,
        "attributes": {
          "name": string,
          "shardId": string,
          "stats": {},
          "createdAt": string,
          "updatedAt": string,
          "patchVersion": string,
          "titleId": string
        },
        "relationships": {
          "assets": {
            "data": {}
          },
          "matches": {
            "data": [
              {
                "id": string,
                "type": string
              }
            ]
          }
        },
        "links": {
          "schema": string,
          "self": string
        }
      }
    ],
    "links": {
      "self": string
    },
    "meta": {}
}
export type PUBGSeasonsResponse = {
    "data": [
      {
        "type": string,
        "id": string,
        "attributes": {
          "isCurrentSeason": boolean,
          "isOffseason": boolean
        }
      }
    ],
    "links": {
      "self": string
    },
    "meta": {}
}
export type PUBGRankedProfile = {
    "data": {
      "type": string,
      "attributes": {
        "rankedGameModeStats": {
          "squad": {
            "currentRankPoint": number,
            "bestRankPoint": number,
            "currentTier": {
              "tier": string,
              "subTier": string
            },
            "bestTier": {
              "tier": string,
              "subTier": string
            },
            "roundsPlayed": number,
            "avgRank": number,
            "avgSurvivalTime": number,
            "top10Ratio": number,
            "winRatio": number,
            "assists": number,
            "wins": number,
            "kda": number,
            "kdr": number,
            "kills": number,
            "deaths": number,
            "roundMostKills": number,
            "longestKill": number,
            "headshotKills": number,
            "headshotKillRatio": number,
            "damageDealt": number,
            "dBNOs": number,
            "reviveRatio": number,
            "revives": number,
            "heals": number,
            "boosts": number,
            "weaponsAcquired": number,
            "teamKills": number,
            "playTime": number,
            "killStreak": number
          },
          "squad-fpp": {
            "currentRankPoint": number,
            "bestRankPoint": number,
            "currentTier": {
              "tier": string,
              "subTier": string
            },
            "bestTier": {
              "tier": string,
              "subTier": string
            },
            "roundsPlayed": number,
            "avgRank": number,
            "avgSurvivalTime": number,
            "top10Ratio": number,
            "winRatio": number,
            "assists": number,
            "wins": number,
            "kda": number,
            "kdr": number,
            "kills": number,
            "deaths": number,
            "roundMostKills": number,
            "longestKill": number,
            "headshotKills": number,
            "headshotKillRatio": number,
            "damageDealt": number,
            "dBNOs": number,
            "reviveRatio": number,
            "revives": number,
            "heals": number,
            "boosts": number,
            "weaponsAcquired": number,
            "teamKills": number,
            "playTime": number,
            "killStreak": number
          }
        }
      },
      "relationships": {
        "player": {
          "data": {
            "type": string,
            "id": string
          }
        },
        "season": {
          "data": {
            "type": string,
            "id": string
          }
        }
      }
    },
    "links": {
      "self": string
    },
    "meta": {}
}
export type PUBGStats = {
    "data": {
      "type": string,
      "attributes": {
        "gameModeStats": {
          "duo": {
            "assists": number,
            "boosts": number,
            "dBNOs": number,
            "dailyKills": number,
            "damageDealt": number,
            "days": number,
            "dailyWins": number,
            "headshotKills": number,
            "heals": number,
            "killPoints": number,
            "kills": number,
            "longestKill": number,
            "longestTimeSurvived": number,
            "losses": number,
            "maxKillStreaks": number,
            "mostSurvivalTime": number,
            "rankPoints": number,
            "rankPointsTitle": string,
            "revives": number,
            "rideDistance": number,
            "roadKills": number,
            "roundMostKills": number,
            "roundsPlayed": number,
            "suicides": number,
            "swimDistance": number,
            "teamKills": number,
            "timeSurvived": number,
            "top10s": number,
            "vehicleDestroys": number,
            "walkDistance": number,
            "weaponsAcquired": number,
            "weeklyKills": number,
            "weeklyWins": number,
            "winPoints": number,
            "wins": number
          },
          "duo-fpp": {
            "assists": number,
            "boosts": number,
            "dBNOs": number,
            "dailyKills": number,
            "damageDealt": number,
            "days": number,
            "dailyWins": number,
            "headshotKills": number,
            "heals": number,
            "killPoints": number,
            "kills": number,
            "longestKill": number,
            "longestTimeSurvived": number,
            "losses": number,
            "maxKillStreaks": number,
            "mostSurvivalTime": number,
            "rankPoints": number,
            "rankPointsTitle": string,
            "revives": number,
            "rideDistance": number,
            "roadKills": number,
            "roundMostKills": number,
            "roundsPlayed": number,
            "suicides": number,
            "swimDistance": number,
            "teamKills": number,
            "timeSurvived": number,
            "top10s": number,
            "vehicleDestroys": number,
            "walkDistance": number,
            "weaponsAcquired": number,
            "weeklyKills": number,
            "weeklyWins": number,
            "winPoints": number,
            "wins": number
          },
          "solo": {
            "assists": number,
            "boosts": number,
            "dBNOs": number,
            "dailyKills": number,
            "damageDealt": number,
            "days": number,
            "dailyWins": number,
            "headshotKills": number,
            "heals": number,
            "killPoints": number,
            "kills": number,
            "longestKill": number,
            "longestTimeSurvived": number,
            "losses": number,
            "maxKillStreaks": number,
            "mostSurvivalTime": number,
            "rankPoints": number,
            "rankPointsTitle": string,
            "revives": number,
            "rideDistance": number,
            "roadKills": number,
            "roundMostKills": number,
            "roundsPlayed": number,
            "suicides": number,
            "swimDistance": number,
            "teamKills": number,
            "timeSurvived": number,
            "top10s": number,
            "vehicleDestroys": number,
            "walkDistance": number,
            "weaponsAcquired": number,
            "weeklyKills": number,
            "weeklyWins": number,
            "winPoints": number,
            "wins": number
          },
          "solo-fpp": {
            "assists": number,
            "boosts": number,
            "dBNOs": number,
            "dailyKills": number,
            "damageDealt": number,
            "days": number,
            "dailyWins": number,
            "headshotKills": number,
            "heals": number,
            "killPoints": number,
            "kills": number,
            "longestKill": number,
            "longestTimeSurvived": number,
            "losses": number,
            "maxKillStreaks": number,
            "mostSurvivalTime": number,
            "rankPoints": number,
            "rankPointsTitle": string,
            "revives": number,
            "rideDistance": number,
            "roadKills": number,
            "roundMostKills": number,
            "roundsPlayed": number,
            "suicides": number,
            "swimDistance": number,
            "teamKills": number,
            "timeSurvived": number,
            "top10s": number,
            "vehicleDestroys": number,
            "walkDistance": number,
            "weaponsAcquired": number,
            "weeklyKills": number,
            "weeklyWins": number,
            "winPoints": number,
            "wins": number
          },
          "squad": {
            "assists": number,
            "boosts": number,
            "dBNOs": number,
            "dailyKills": number,
            "damageDealt": number,
            "days": number,
            "dailyWins": number,
            "headshotKills": number,
            "heals": number,
            "killPoints": number,
            "kills": number,
            "longestKill": number,
            "longestTimeSurvived": number,
            "losses": number,
            "maxKillStreaks": number,
            "mostSurvivalTime": number,
            "rankPoints": number,
            "rankPointsTitle": string,
            "revives": number,
            "rideDistance": number,
            "roadKills": number,
            "roundMostKills": number,
            "roundsPlayed": number,
            "suicides": number,
            "swimDistance": number,
            "teamKills": number,
            "timeSurvived": number,
            "top10s": number,
            "vehicleDestroys": number,
            "walkDistance": number,
            "weaponsAcquired": number,
            "weeklyKills": number,
            "weeklyWins": number,
            "winPoints": number,
            "wins": number
          },
          "squad-fpp": {
            "assists": number,
            "boosts": number,
            "dBNOs": number,
            "dailyKills": number,
            "damageDealt": number,
            "days": number,
            "dailyWins": number,
            "headshotKills": number,
            "heals": number,
            "killPoints": number,
            "kills": number,
            "longestKill": number,
            "longestTimeSurvived": number,
            "losses": number,
            "maxKillStreaks": number,
            "mostSurvivalTime": number,
            "rankPoints": number,
            "rankPointsTitle": string,
            "revives": number,
            "rideDistance": number,
            "roadKills": number,
            "roundMostKills": number,
            "roundsPlayed": number,
            "suicides": number,
            "swimDistance": number,
            "teamKills": number,
            "timeSurvived": number,
            "top10s": number,
            "vehicleDestroys": number,
            "walkDistance": number,
            "weaponsAcquired": number,
            "weeklyKills": number,
            "weeklyWins": number,
            "winPoints": number,
            "wins": number
          }
        },
        "bestRankPoint": number
      },
      "relationships": {
        "player": {
          "data": {
            "type": string,
            "id": string
          }
        },
        "matchesSolo": {
          "data": [
            {
              "type": string,
              "id": string
            }
          ]
        },
        "matchesSoloFPP": {
          "data": [
            {
              "type": string,
              "id": string
            }
          ]
        },
        "matchesDuo": {
          "data": [
            {
              "type": string,
              "id": string
            }
          ]
        },
        "matchesDuoFPP": {
          "data": [
            {
              "type": string,
              "id": string
            }
          ]
        },
        "matchesSquad": {
          "data": [
            {
              "type": string,
              "id": string
            }
          ]
        },
        "matchesSquadFPP": {
          "data": [
            {
              "type": string,
              "id": string
            }
          ]
        },
        "season": {
          "data": {
            "type": string,
            "id": string
          }
        }
      }
    },
    "links": {
      "self": string
    },
    "meta": {}
}
export type PUBGWeaponMasteryStats = {
    "accountId": string,
    "attributes": {
      "platform": string,
      "weaponSummaries": {
        "$Item_Weapon": {
          "XPTotal": number,
          "LevelCurrent": number,
          "TierCurrent": number,
          "StatsTotal": {
            "MostDefeatsInAGame": number,
            "Defeats": number,
            "MostDamagePlayerInAGame": number,
            "DamagePlayer": number,
            "MostHeadShotsInAGame": number,
            "HeadShots": number,
            "LongestDefeat": number,
            "LongRangeDefeats": number,
            "Kills": number,
            "MostKillsInAGame": number,
            "Groggies": number,
            "MostGroggiesInAGame": number
          },
          "Medals": [
            {
              "MedalId": string,
              "Count": number
            }
          ]
        }
      },
      "latestMatchId": string
    },
    "links": {
      "self": string
    },
    "meta": {}
}
export type PUBGSurvivalMasteryStats = {
    "type": string,
    "id": string,
    "attributes": {
      "xp": number,
      "level": number,
      "totalMatchesPlayed": number,
      "latestMatchId": string,
      "stats": [
        {
          "statid": string,
          "total": number,
          "average": number,
          "careerBest": number,
          "lastMatchValue": number
        }
      ]
    },
    "links": {
      "self": string
    },
    "meta": {}
}
export type PUBGMatchStats = {
    "data": {
      "type": string,
      "id": string,
      "attributes": {
        "createdAt": string,
        "duration": number,
        "matchType": string,
        "gameMode": string,
        "mapName": string,
        "isCustomMatch": boolean,
        "patchVersion": string,
        "seasonState": string,
        "shardId": string,
        "stats": {},
        "tags": {},
        "titleId": string
      },
      "relationships": {
        "assets": {
          "data": [
            {
              "type": string,
              "id": string
            }
          ]
        },
        "rosters": {
          "data": [
            {
              "type": string,
              "id": string
            }
          ]
        },
        "rounds": {},
        "spectators": {}
      },
      "links": {
        "schema": string,
        "self": string
      }
    },
    "included": [
      null
    ],
    "links": {
      "self": string
    },
    "meta": {}
}
export type PUBGGameModeLeaderboard = {
    "data": {
      "type": string,
      "id": string,
      "attributes": {
        "shardId": string,
        "gameMode": string,
        "seasonId": string
      },
      "relationships": {
        "players": {
          "data": [
            {
              "type": string,
              "id": string
            }
          ]
        }
      },
      "included": [
        {
          "type": string,
          "id": string,
          "attributes": {
            "name": string,
            "rank": number,
            "stats": {
              "rankPoints": number,
              "wins": number,
              "games": number,
              "winRatio": number,
              "averageDamage": number,
              "kills": number,
              "killDeathRatio": number,
              "kda": number,
              "averageRank": number,
              "tier": string,
              "subTier": string
            }
          }
        }
      ],
      "links": {
        "self": string
      },
      "meta": {}
    }
}
export type PUBGTournamentsResponse = {
    "data": [
      {
        "type": string,
        "id": string,
        "attributes": {
          "createdAt": string
        }
      }
    ],
    "links": {
      "self": string
    },
    "meta": {}
}
export type PUBGTournamentStats = {
    "data": {
      "type": string,
      "id": string,
      "relationships": {
        "matches": {
          "data": [
            {
              "type": string,
              "id": string
            }
          ]
        }
      }
    },
    "included": [
      {
        "type": string,
        "id": string,
        "attributes": {
          "createdAt": string
        }
      }
    ],
    "links": {
      "self": string
    },
    "meta": {}
}
export type PUBGSampleMatchesResponse = {
    "data": {
      "type": string,
      "id": string,
      "attributes": {
        "createdAt": string,
        "shardId": string,
        "titleId": string
      }
    },
    "relationships": {
      "matches": {
        "data": [
          {
            "type": string,
            "id": string
          }
        ]
      }
    }
}
export type PUBGAPIStatusResponse = {
    "data": {
      "type": string,
      "id": string
    }
}
export class PUBGAPI {
    constructor(authKey: string);
    GetPlayersByName(players: string[], platform: string): Promise<PUBGProfile[]>;
    GetPlayersByAccountIDs(ids: string[], platform: string): Promise<PUBGProfile[]>;
    GetPlayerByAccountID(id: string, platform: string): Promise<PUBGProfile>;
    GetSeasons(platform: string): Promise<PUBGSeasonsResponse>;
    GetPlayerRankedStats(platform: string, accountId: string, seasonId: string): Promise<PUBGRankedProfile>;
    GetPlayerSeasonStats(platform: string, accountId: string, seasonId: string): Promise<PUBGStats>;
    GetPlayersSeasonStats(platform: string, seasonId: string, gameMode: string, player_ids: string[], gamepad: boolean): Promise<PUBGStats[]>;
    GetPlayerLifetimeStats(platform: string, accountId: string): Promise<PUBGStats>;
    GetPlayersLifetimeStats(platform: string, player_ids: string[], gameMode: string, gamepad: boolean): Promise<PUBGStats[]>;
    GetWeaponMastery(platform: string, accountId: string): Promise<PUBGWeaponMasteryStats>;
    GetSurvivalMastery(platform: string, accountId: string): Promise<PUBGSurvivalMasteryStats>;
    GetMatchStats(platform: string, matchId: string): Promise<PUBGMatchStats>;
    GetGameModeLeaderboard(platform: string, region: string, seasonId: string, gameMode: string): Promise<PUBGGameModeLeaderboard>;
    GetTournaments(): Promise<PUBGTournamentsResponse>;
    GetTournamentById(tournamentId: string): Promise<PUBGTournamentStats>;
    GetSampleMatches(platform: string): Promsie<PUBGSampleMatchesResponse>;
    GetAPIStatus(): Promise<PUBGAPIStatusResponse>;
}