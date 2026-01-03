import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', style = {}, ...props }) => {
    const baseStyle = {
        padding: '16px 32px',
        borderRadius: 'var(--radius-full)',
        fontSize: '1.2rem',
        fontWeight: '700',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s',
        letterSpacing: '0.02em',
        ...style,
    };

    const variants = {
        primary: {
            background: 'var(--primary-gradient)',
            color: '#fff',
            boxShadow: 'var(--shadow-glow)',
        },
        secondary: {
            background: 'rgba(255, 255, 255, 0.1)',
            color: 'var(--text-primary)',
            border: '1px solid rgba(255,255,255,0.1)',
        },
        ghost: {
            background: 'transparent',
            color: 'var(--text-secondary)',
            fontSize: '1rem',
        },
        danger: {
            background: 'rgba(239, 68, 68, 0.2)',
            color: '#fca5a5',
            border: '1px solid rgba(239, 68, 68, 0.4)',
        }
    };

    return (
        <button
            onClick={onClick}
            style={{ ...baseStyle, ...variants[variant] }}
            className={className}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.96)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
