import { AxiosPromise } from 'axios';
import Response from '../util/Response';
export type GameDesignGenre = 'action' | 'adventure' | 'rpg' | 'strategy' | 'simulation' | 'puzzle' | 'survival' | 'platformer' | 'racing' | 'sports' | 'cozy' | 'horror' | 'card' | 'sandbox';
export type GameDesignPlayMode = 'single-player' | 'cooperative' | 'competitive multiplayer' | 'asynchronous multiplayer';
export type GameDesignSessionLength = '5–10 minute' | '15–30 minute' | '30–60 minute' | 'open-ended';
export interface GameDesignBlueprintInput {
    gameName?: string;
    /** Primary deterministic fallback profile retained for older clients. */
    genre?: GameDesignGenre;
    /** Exact genre names selected from Utility.listGenres(). */
    genres?: string[];
    playMode: GameDesignPlayMode;
    sessionLength: GameDesignSessionLength;
    playerFantasy: string;
    setting: string;
    primaryGoal: string;
    mainPressure: string;
    signatureTwist: string;
    progression?: string;
    preferredActivities?: string;
}
export interface GameDesignBlueprintItem {
    title: string;
    description: string;
}
export interface GameDesignBlueprint {
    gameName: string;
    descriptor: string;
    shortPitch: string;
    coreFantasy: string;
    coreVerbs: string[];
    pillars: GameDesignBlueprintItem[];
    mechanics: GameDesignBlueprintItem[];
    coreLoop: GameDesignBlueprintItem[];
    sessionLoop: string[];
    coreTest: string;
    scopeRules: string[];
    documentationInstruction: string;
    ai_used: boolean;
}
/** Public AI-assisted tools for turning an early game idea into testable design documentation. */
declare class GameDesign {
    /** Generate a mechanics and core-loop blueprint without requiring authentication. */
    static generateBlueprint<T = GameDesignBlueprint>(input: GameDesignBlueprintInput): AxiosPromise<Response<T>>;
}
export default GameDesign;
