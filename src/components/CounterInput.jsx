import React from 'react';
import Button from './Button';

const CounterInput = ({ label, value, onIncrement, onDecrement, min = 0, max = 99 }) => {
    return (
        <div className="glass-panel" style={{
            padding: '20px',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <span style={{ fontWeight: '600', fontSize: '1.2rem' }}>{label}</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Button
                    variant="secondary"
                    onClick={onDecrement}
                    disabled={value <= min}
                    style={{ width: '44px', height: '44px', padding: 0, borderRadius: '12px' }}
                >
                    -
                </Button>

                <span style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    width: '32px',
                    textAlign: 'center',
                    fontVariantNumeric: 'tabular-nums'
                }}>
                    {value}
                </span>

                <Button
                    variant="secondary"
                    onClick={onIncrement}
                    disabled={value >= max}
                    style={{ width: '44px', height: '44px', padding: 0, borderRadius: '12px' }}
                >
                    +
                </Button>
            </div>
        </div>
    );
};

export default CounterInput;
