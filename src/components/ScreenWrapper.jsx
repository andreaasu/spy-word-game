import React from 'react';

const ScreenWrapper = ({ children, title }) => {
    return (
        <div className="full-screen animate-enter" style={{ maxWidth: '600px', margin: '0 auto' }}>
            {title && (
                <h2 style={{
                    textAlign: 'center',
                    marginBottom: '24px',
                    opacity: 0.8
                }}>
                    {title}
                </h2>
            )}
            {children}
        </div>
    );
};

export default ScreenWrapper;
