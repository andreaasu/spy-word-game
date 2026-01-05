import React, { useState } from 'react';

const PlayerRevealCard = ({ isImposter, word, isHolding, onStartHold, onEndHold }) => {

    // Prevent default context menu on long press
    const handleContextMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };

    return (
        <div
            className="card"
            style={{
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                position: 'relative', // For overlay
                overflow: 'hidden',    // contain overlay
                userSelect: 'none',    // prevent text selection
                WebkitUserSelect: 'none'
            }}
            onMouseDown={onStartHold}
            onMouseUp={onEndHold}
            onMouseLeave={onEndHold}
            onTouchStart={onStartHold}
            onTouchEnd={onEndHold}
            onContextMenu={handleContextMenu}
        >
            <div style={{ textAlign: 'center', opacity: isHolding ? 0 : 1, transition: 'opacity 0.2s' }}>
                <h2>Hold to Reveal</h2>
                <p style={{ color: 'var(--text-secondary)' }}>(Keep holding to see role)</p>
                <div style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    margin: '40px auto',
                    padding: '20px',
                    border: '3px dashed var(--text-secondary)',
                    borderRadius: '16px',
                    width: '80%',
                    maxWidth: '300px'
                }}>
                    HOLD DOWN HERE
                </div>
            </div>

            {isHolding && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'var(--surface-color)', // Match card bg or slightly different
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    animation: 'fadeIn 0.1s ease-out'
                }}>
                    {isImposter ? (
                        <div style={{ textAlign: 'center' }}>
                            <span style={{ color: 'var(--error-color)', fontSize: '2.5rem', fontWeight: 'bold', display: 'block' }}>THE IMPOSTER</span>
                            <div style={{ fontSize: '4rem', margin: '20px 0' }}>🤫</div>
                            <p>Blend in.</p>
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center' }}>
                            <span style={{ color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>YOU ARE A SPY</span>
                            <p style={{ marginBottom: '5px' }}>Secret Word:</p>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>
                                {word || 'ERROR'}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PlayerRevealCard;
