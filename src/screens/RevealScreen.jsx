import React, { useState, useEffect } from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import PlayerRevealCard from '../components/PlayerRevealCard';
import Button from '../components/Button';
import { ACTIONS } from '../state/gameReducer';

const RevealScreen = ({ state, dispatch }) => {
    const { players, currentPlayerIndex, secretWord } = state;
    const currentPlayer = players[currentPlayerIndex]; // { id, isImposter }
    const isLastPlayer = currentPlayerIndex === players.length - 1;

    const [step, setStep] = useState('INTERSTITIAL'); // 'INTERSTITIAL' | 'REVEAL'

    useEffect(() => {
        setStep('INTERSTITIAL');
    }, [currentPlayerIndex]);

    const handleNext = () => {
        if (isLastPlayer) {
            dispatch({ type: ACTIONS.START_DISCUSSION });
        } else {
            dispatch({ type: ACTIONS.NEXT_PLAYER_REVEAL });
        }
    };

    if (step === 'INTERSTITIAL') {
        return (
            <ScreenWrapper>
                <div style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    marginTop: '60px'
                }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Pass the device to</p>
                    <h1 style={{ fontSize: '4rem', margin: '20px 0', textShadow: '0 0 30px rgba(129, 140, 248, 0.5)' }}>
                        Player {currentPlayerIndex + 1}
                    </h1>
                    <div style={{ fontSize: '6rem', marginBottom: '40px', animation: 'pulse-soft 2s infinite' }}>📱</div>

                    <Button onClick={() => setStep('REVEAL')}>
                        I am Player {currentPlayerIndex + 1}
                    </Button>
                </div>
            </ScreenWrapper>
        );
    }

    return (
        <ScreenWrapper>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <h2>Player {currentPlayerIndex + 1}</h2>
            </div>

            <PlayerRevealCard
                isImposter={currentPlayer.isImposter}
                {...(!currentPlayer.isImposter ? { word: secretWord } : {})}
                onConfirm={handleNext}
            />

            <p style={{
                color: 'var(--text-secondary)',
                marginTop: '24px',
                textAlign: 'center',
                opacity: 0.7
            }}>
                {isLastPlayer ? 'Tap card to Start Discussion' : 'Tap card to confirm & pass'}
            </p>
        </ScreenWrapper>
    );
};

export default RevealScreen;
