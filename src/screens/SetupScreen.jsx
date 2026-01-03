import React from 'react';
import HeroHeader from '../components/HeroHeader';
import CounterInput from '../components/CounterInput';
import CustomWordsInput from '../components/CustomWordsInput';
import CategorySelect from '../components/CategorySelect';
import Button from '../components/Button';
import ScreenWrapper from '../components/ScreenWrapper';
import { ACTIONS } from '../state/gameReducer';

const SetupScreen = ({ state, dispatch }) => {
    const { playerCount, imposterCount } = state;

    const incrementPlayers = () => dispatch({ type: ACTIONS.SET_PLAYER_COUNT, payload: playerCount + 1 });
    const decrementPlayers = () => {
        if (playerCount > 3) {
            dispatch({ type: ACTIONS.SET_PLAYER_COUNT, payload: playerCount - 1 });
            if (imposterCount >= playerCount - 1) {
                dispatch({ type: ACTIONS.SET_IMPOSTER_COUNT, payload: imposterCount - 1 });
            }
        }
    };

    const incrementImposters = () => {
        if (imposterCount < playerCount - 1) {
            dispatch({ type: ACTIONS.SET_IMPOSTER_COUNT, payload: imposterCount + 1 });
        }
    };
    const decrementImposters = () => {
        if (imposterCount > 1) {
            dispatch({ type: ACTIONS.SET_IMPOSTER_COUNT, payload: imposterCount - 1 });
        }
    };

    return (
        <ScreenWrapper>
            <HeroHeader />

            <div style={{ marginBottom: '24px' }}>
                <CounterInput
                    label="Players"
                    value={playerCount}
                    onIncrement={incrementPlayers}
                    onDecrement={decrementPlayers}
                    min={3}
                />

                <CounterInput
                    label="Imposters"
                    value={imposterCount}
                    onIncrement={incrementImposters}
                    onDecrement={decrementImposters}
                    min={1}
                    max={playerCount - 1}
                />
            </div>

            <CategorySelect state={state} dispatch={dispatch} />
            <CustomWordsInput state={state} dispatch={dispatch} />

            <Button onClick={() => dispatch({ type: ACTIONS.START_GAME })}>
                Start Game
            </Button>

            <div style={{ textAlign: 'center', marginTop: '20px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                v2.1 Professional Edition
            </div>
        </ScreenWrapper>
    );
};

export default SetupScreen;
