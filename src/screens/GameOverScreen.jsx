import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import Button from '../components/Button';
import { ACTIONS } from '../state/gameReducer';

const GameOverScreen = ({ dispatch }) => {
    return (
        <ScreenWrapper>
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>
                    Game Over
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.6',
                    marginTop: '20px',
                    maxWidth: '300px',
                    color: 'var(--text-secondary)'
                }}>
                    The game has ended.<br />
                    The Imposter's identity remains a mystery...
                </p>

                <div style={{ fontSize: '4rem', margin: '40px 0', opacity: 0.8 }}>
                    🤫
                </div>

                <Button onClick={() => dispatch({ type: ACTIONS.RESET_GAME })}>
                    Play Again
                </Button>
            </div>
        </ScreenWrapper>
    );
};

export default GameOverScreen;
