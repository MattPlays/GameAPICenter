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
export class BloonsTD6API {
    constructor();
    GetAllTowers(): Promise<Tower[]>;
    GetTowerByID(towerID: string): Promise<Tower>;
    GetAllHeros(): Promise<Hero[]>;
    GetHeroByID(heroID: string): Promise<Hero>;
    GetAllBloons(): Promise<Bloon[]>;
    GetBloonByID(bloonID: string): Promise<Bloon>;
}