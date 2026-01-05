import React, { useState } from 'react';

const PlayerRevealCard = ({ isImposter, word, onConfirm }) => {
    const [revealed, setRevealed] = useState(false);

    const handleReveal = () => {
        if (!revealed) {
            setRevealed(true);
        } else {
            onConfirm();
        }
    };

    return (
        <div className="card" style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={handleReveal}>
            {!revealed ? (
                <div style={{ textAlign: 'center' }}>
                    <h2>Tap to Reveal Role</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>(Ensure no one else is looking!)</p>
                    <div style={{ fontSize: '4rem', marginTop: '20px' }}>🕵️</div>
                </div>
            ) : (
                <div style={{ textAlign: 'center', animation: 'fadeIn 0.5s' }}>
                    <h2>You are...</h2>

                    {isImposter ? (
                        <div style={{ margin: '30px 0' }}>
                            <span style={{ color: 'var(--error-color)', fontSize: '2.5rem', fontWeight: 'bold', display: 'block' }}>THE IMPOSTER</span>
                            <p style={{ marginTop: '10px' }}>Blend in. Don't let them know you don't know the word.</p>
                        </div>
                    ) : (
                        <div style={{ margin: '30px 0' }}>
                            <span style={{ color: 'var(--primary-color)', fontSize: '2.5rem', fontWeight: 'bold', display: 'block' }}>A SPY</span>
                            <p style={{ marginTop: '10px' }}>The secret word is:</p>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', border: '2px dashed var(--text-secondary)', padding: '10px', marginTop: '10px', borderRadius: '8px' }}>
                                {word || 'ERROR: NO WORD'}
                            </div>
                        </div>
                    )}

                    <p style={{ marginTop: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Tap again to hide</p>
                </div>
            )}
        </div>
    );
};

export default PlayerRevealCard;
