export type Stat = {
    rank: string,
    percentile: number,
    displayName: string,
    displayCategory: string,
    category: string,
    metadata: [],
    value: number,
    displayValue: string,
    displayType: string,
}
export type Profile = {
    data: {
        platformInfo: {
            platformSlug: string,
            platformUserId: string,
            platformUserHandle: string,
            platformUserIdentifier: string,
            avatarUrl: string,
            additionalParameters: string[],
        },
        userInfo: {
            userId: number,
            isPremium: boolean,
            isVerified: boolean,
            isInfluencer: boolean,
            isPartner: boolean,
            countryCode: string,
            customAvatarUrl: string,
            customHeroUrl: string,
            socialAccounts: string[],
            pageviews: number,
            isSuspicious: boolean,
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
export type SegmentResponse = {
    type: string,
    attributes: {
        key: string,
    },
    metadata: {
        name: string,
        imageUrl: string;
        category: {value: string, displayValue: string},
    },
    expiryDate: string,
    stats: {
        kills: Stat,
        shotsFired: Stat,
        shotsHit: Stat,
        shotsAccuracy: Stat,
    },
}
export type SearchResult = {
    platformId: number,
    platformSlug: string,
    platformUserIdentifier: string,
    platformUserId: string,
    platformUserHandle: string,
    avatarUrl: string,
    status: string,
    additionalParameters: string[],
}
export class CSGOAPI {
    constructor(authKey: string);
    GetPlayerStats(playerIdentifier: string): Promise<Profile>;
    GetStatSegment(playerIdentifier: string, segmentType: string): Promise<SegmentResponse[]>;
    SearchForPlayer(query: string): Promise<SearchResult[]>;
}