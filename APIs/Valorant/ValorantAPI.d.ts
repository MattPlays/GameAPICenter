export type ValorantRegions = "AP" | "BR" | "ESPORTS" | "EU" | "KR" | "LATAM" | "NA"
export type ValorantQueues = "unrated" | "competitive" | "spikerush" | "tournamentmode"
export type LocalizedNamesDto = {
    "ar-AE": string,
    "de-DE": string,
    "en-DB": string,
    "en-US": string,
    "es-ES": string,
    "es-MX": string,
    "fr-FR": string,
    "id-ID": string,
    "it-IT": string,
    "ja-JP": string,
    "ko-KR": string,
    "pl-PL": string,
    "pt-BR": string,
    "ru-RU": string,
    "th-TH": string,
    "tr-TR": string,
    "vi-VN": string,
    "zh-CN": string,
    "zh-TW": string; 
}
export type ContentItemDto = {
    name: string,
    localizedNames: LocalizedNamesDto,
    id: string,
    assetName: string,
    assetPath: string;
}
export type ActDto = {
    name: string,
    localizedNames: LocalizedNamesDto,
    id: string,
    isActive: boolean
}
export type ContentDto = {
    version: string,
    characters: ContentItemDto[],
    maps: ContentItemDto[],
    chromas: ContentItemDto[],
    skins: ContentItemDto[],
    skinLevels: ContentItemDto[],
    equips: ContentItemDto[],
    gameModes: ContentItemDto[],
    sprays: ContentItemDto[],
    sprayLevels: ContentItemDto[],
    charms: ContentItemDto[],
    charmLevels: ContentItemDto[],
    playerCards: ContentItemDto[],
    playerTitles: ContentItemDto[],
    acts: ActDto[];
}
export type MatchInfoDto = {
    matchId: string,
    mapId: string,
    gameLengthMillis: number,
    gameStartMillis: number,
    provisioningFlowId: string,
    isCompleted: boolean,
    customGameName: string,
    queueId: string,
    gameMode: string,
    isRanked: boolean,
    seasonId: string;
}
export type AbilityCastDto = {
    grenadeCasts: number,
    ability1Casts: number,
    ability2Casts: number,
    ultimateCasts: number;
}
export type PlayerStatsDto = {
    score: number,
    roundsPlayed: number,
    kills: number,
    deaths: number,
    assists: number,
    playtimeMillis: number,
    abilityCasts: AbilityCastDto;
}
export type PlayerDto = {
    puuid: string,
    gameName: string,
    tagLine: string,
    teamId: string,
    partyId: string,
    characterId: string,
    stats: PlayerStatsDto,
    competetiveTier: number,
    playerCard: string,
    playerTitle: string
}
export type CoachDto = {
    puuid: string,
    teamId: string;
}
export type TeamDto = {
    teamId: string,
    won: boolean,
    roundsPlayed: number,
    roundsWon: number,
    numPoints: number
}
export type LocationDto = {
    x: number,
    y: number;
}
export type PlayerLocationsDto = {
    puuid: string,
    viewRadians: number,
    location: LocationDto;
}
export type finishingDamageDto = {
    damageType: string,
    damageItem: string,
    isSecondaryFireMode: boolean
}
export type KillDto = {
    timeSinceGameStartMillis: number,
    timeSinceRoundStartMillis: number,
    killer: string,
    victim: string,
    victimLocation: LocationDto,
    assistants: string[],
    playerLocations: PlayerLocationsDto[],
    finishingDamage: finishingDamageDto;
}
export type DamageDto = {
    receiver: string,
    damage: number,
    legshots: number,
    bodyshots: number,
    headshots: number;
}
export type EconomyDto = {
    loadoutValue: number,
    weapon: string,
    armor: string,
    remaining: number,
    spent: number;
}
export type abilityDto = {
    grenadeEffects: string,
    ability1Effects: string,
    ability2Effects: string,
    ultimateEffects: string;
}
export type PlayerRoundStatsDto = {
    puuid: string,
    kills: KillDto[],
    damage: DamageDto[]
    score: number,
    economy: EconomyDto,
    ability: abilityDto,
}
export type RoundResultDto = {
    roundNum: number,
    roundResult: string,
    roundCeremony: string,
    winningTeam: string,
    bombPlanter: string,
    bombDefuser: string,
    plantRoundTime: number,
    plantPlayerLocations: PlayerLocationsDto[],
    plantLocation: LocationDto,
    plantSite: string,
    defuseRoundTime: number,
    defusePlayerLocations: PlayerLocationsDto[],
    defuseLocation: LocationDto,
    playerStats: PlayerRoundStatsDto[],
    roundResultCode: string;
}
export type MatchDto = {
    matchInfo: MatchInfoDto,
    players: PlayerDto[],
    coaches: CoachDto[],
    teams: TeamDto[],
    roundResults: RoundResultDto[];
}
export type MatchListEntryDto = {
    matchId: string,
    gameStartTimeMillis: number,
    teamId: string
}
export type MatchListDto = {
    puuid: string,
    history: MatchListEntryDto[];
}
export type RecentMatchesDto = {
    currentTime: number,
    matchIds: string[];
}
export type LeaderboardPlayerDto = {
    puuid: string,
    gameName: string,
    tagLine: string,
    leaderboardRank: number,
    rankedRating: number,
    numberOfWins: number
}
export type LeaderboardDto = {
    shard: string,
    actId: string,
    totalPlayers: number,
    players: LeaderboardPlayerDto[]
}
export type TitleContentDto = {
    locale: string,
    content: string
}
export type UpdateDto = {
    id: string,
    author: string,
    publish: boolean,
    publish_locations: string[],
    translations: TitleContentDto[],
    created_at: string,
    updated_at: string
}
export type StatusDto = {
    id: number,
    maintenance_status: "scheduled" | "in_progress" | "complete",
    incident_severity: "info" | "warning" | "critical",
    titles: TitleContentDto[],
    updates: UpdateDto[],
    created_at: string,
    archive_at: string,
    updated_at: string,
    platforms: string[]
}
export type PlatformDataDto = {
    id: string,
    name: string,
    locales: string[],
    maintenances: StatusDto[],
    incidents: StatusDto[];
}
export class ValorantAPI {
    constructor(authKey: string);
    GetContent(region: ValorantRegions): Promise<ContentDto>;
    GetMatchByID(region: ValorantRegions, matchId: string): Promise<MatchDto>
    GetMatchListByPUUID(region: ValorantRegions, puuid: string): Promise<MatchListDto>;
    GetRecentMatchesByQueue(region: ValorantRegions, queue: ValorantQueues): Promise<RecentMatchesDto>
    GetRankedLeaderboard(region: ValorantRegions, actId: string, size: number, startIndex: number): Promise<LeaderboardDto>
    GetValorantStatus(region: ValorantRegions): Promise<PlatformDataDto>;
}