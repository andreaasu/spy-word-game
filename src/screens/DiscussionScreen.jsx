import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import Timer from '../components/Timer';
import Button from '../components/Button';
import { ACTIONS } from '../state/gameReducer';

const DiscussionScreen = ({ state, dispatch }) => {
    const { timerDuration } = state;

    const handleEnd = () => {
        dispatch({ type: ACTIONS.END_GAME });
    };

    return (
        <ScreenWrapper title="Discussion">
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                marginTop: '40px'
            }}>
                <div className="glass-panel" style={{
                    padding: '40px',
                    textAlign: 'center',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🕵️‍♀️</div>
                    <p style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Who is the Imposter?</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        Ask questions. Watch for nervousness.
                    </p>

                    <div style={{ margin: '30px 0' }}>
                        <Timer duration={timerDuration} onComplete={() => {
                            if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
                        }} />
                    </div>
                </div>

                <div style={{ width: '100%', marginTop: 'auto', paddingTop: '40px' }}>
                    <Button variant="primary" onClick={handleEnd} style={{ background: 'var(--danger-color)', color: 'white' }}>
                        End Game
                    </Button>
                </div>
            </div>
        </ScreenWrapper>
    );
};

export default DiscussionScreen;
