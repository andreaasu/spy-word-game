import React from 'react';

const HeroHeader = () => {
    return (
        <div style={{ textAlign: 'center', marginBottom: '40px' }} className="animate-enter">
            <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '8px' }}>
                Spy<br />Game
            </h1>
            <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.1rem',
                maxWidth: '280px',
                margin: '0 auto'
            }}>
                One of you is lying.<br />Can you find them?
            </p>
        </div>
    );
};

export default HeroHeader;
