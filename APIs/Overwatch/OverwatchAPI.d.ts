export type OverwatchPlatform = "pc" | "xbox" | "ps4" | "nintendo-switch";
export type OverwatchRegion = "us" | "eu" | "asia";
export type OverwatchHeros = ['ana' , 'ashe' , 'baptiste' , 'bastion' , 'brigitte' , 'doomfist' , 'dva' , 'echo' , 'genji' , 'hammond' , 'hanzo' , 'junkrat' , 'lucio' , 'mccree' , 'mei' , 'mercy' , 'moira' , 'orisa' , 'pharah' , 'reaper' , 'reinhardt' , 'roadhog' , 'sigma' , 'soldier' , 'sombra' , 'symmetra' , 'torbjorn' , 'tracer' , 'widowmaker' , 'winston' , 'zarya' , 'zenyatta'];
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
export class OverwatchAPI {
    constructor();
    GetProfile(platform: OverwatchPlatform, region: OverwatchRegion, battletag: string): Promise<OverwatchProfile>;
    GetCompleteStats(platform: OverwatchPlatform, region: OverwatchRegion, battletag: string): Promise<any>;
    GetHeroStats(platform: OverwatchPlatform, region: OverwatchRegion, battletag: string, heros: OverwatchHeros): Promise<any>;
}