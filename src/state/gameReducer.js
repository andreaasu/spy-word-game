import { getRandomDefaultWord } from '../data/defaultWords';

export const GAME_STEPS = {
    SETUP: 'SETUP',
    ROLE_REVEAL: 'ROLE_REVEAL',
    DISCUSSION: 'DISCUSSION',
    GAME_OVER: 'GAME_OVER',
};

export const INITIAL_STATE = {
    step: GAME_STEPS.SETUP,
    players: [],
    playerCount: 4,
    imposterCount: 1,
    currentPlayerIndex: 0,
    secretWord: '',
    imposterIndices: [],
    timerDuration: 300, // 5 minutes default
    customWords: [], // Array of strings
    usingCustomWords: false,
    selectedCategory: 'random',
};

export const ACTIONS = {
    SET_PLAYER_COUNT: 'SET_PLAYER_COUNT',
    SET_IMPOSTER_COUNT: 'SET_IMPOSTER_COUNT',
    TOGGLE_CUSTOM_WORDS: 'TOGGLE_CUSTOM_WORDS',
    ADD_CUSTOM_WORD: 'ADD_CUSTOM_WORD',
    REMOVE_CUSTOM_WORD: 'REMOVE_CUSTOM_WORD',
    SET_CATEGORY: 'SET_CATEGORY',
    START_GAME: 'START_GAME',
    NEXT_PLAYER_REVEAL: 'NEXT_PLAYER_REVEAL',
    START_DISCUSSION: 'START_DISCUSSION',
    END_GAME: 'END_GAME',
    RESET_GAME: 'RESET_GAME',
};

export const gameReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_PLAYER_COUNT:
            return { ...state, playerCount: action.payload };

        case ACTIONS.SET_IMPOSTER_COUNT:
            return { ...state, imposterCount: action.payload };

        case ACTIONS.TOGGLE_CUSTOM_WORDS:
            return { ...state, usingCustomWords: !state.usingCustomWords };

        case ACTIONS.ADD_CUSTOM_WORD:
            // Prevent duplicates and empty strings
            if (!action.payload || state.customWords.includes(action.payload)) return state;
            return { ...state, customWords: [...state.customWords, action.payload] };

        case ACTIONS.REMOVE_CUSTOM_WORD:
            return {
                ...state,
                customWords: state.customWords.filter(word => word !== action.payload)
            };

        case ACTIONS.SET_CATEGORY:
            return { ...state, selectedCategory: action.payload };

        case ACTIONS.START_GAME: {
            const { playerCount, imposterCount, usingCustomWords, customWords, selectedCategory } = state;

            let secretWord;
            if (usingCustomWords && customWords.length > 0) {
                secretWord = customWords[Math.floor(Math.random() * customWords.length)];
            } else {
                secretWord = getRandomDefaultWord(selectedCategory);
            }

            // Generate player roles
            const indices = Array.from({ length: playerCount }, (_, i) => i);
            const shuffled = [...indices].sort(() => 0.5 - Math.random());
            const selectedImposters = shuffled.slice(0, imposterCount);

            const players = indices.map((id) => ({
                id,
                isImposter: selectedImposters.includes(id),
            })).sort((a, b) => a.id - b.id);

            return {
                ...state,
                step: GAME_STEPS.ROLE_REVEAL,
                players,
                imposterIndices: selectedImposters,
                secretWord,
                currentPlayerIndex: 0,
            };
        }

        case ACTIONS.NEXT_PLAYER_REVEAL: {
            return {
                ...state,
                currentPlayerIndex: state.currentPlayerIndex + 1,
            };
        }

        case ACTIONS.START_DISCUSSION: {
            return {
                ...state,
                step: GAME_STEPS.DISCUSSION,
            };
        }

        case ACTIONS.END_GAME: {
            return {
                ...state,
                step: GAME_STEPS.GAME_OVER,
                // CRITICAL: We DO NOT reveal players or secret word here in state.
                // We might want to keep secretWord in state for "Play Again" logic if we changed it,
                // but for now we essentially freeze the state.
                // The UI simply won't show it.
            };
        }

        case ACTIONS.RESET_GAME: {
            return {
                ...state,
                step: GAME_STEPS.SETUP,
                players: [],
                currentPlayerIndex: 0,
                secretWord: '',
                imposterIndices: [],
            };
        }

        default:
            return state;
    }
};
