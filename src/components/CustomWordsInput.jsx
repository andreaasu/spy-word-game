import React, { useState } from 'react';
import Button from './Button';
import { ACTIONS } from '../state/gameReducer';

const CustomWordsInput = ({ state, dispatch }) => {
    const { usingCustomWords, customWords } = state;
    const [inputValue, setInputValue] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleUseCustom = () => dispatch({ type: ACTIONS.TOGGLE_CUSTOM_WORDS });

    const handleAddWord = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            dispatch({ type: ACTIONS.ADD_CUSTOM_WORD, payload: inputValue.trim() });
            setInputValue('');
        }
    };

    const handleRemoveWord = (word) => {
        dispatch({ type: ACTIONS.REMOVE_CUSTOM_WORD, payload: word });
    };

    return (
        <div className="glass-panel" style={{ padding: '20px', marginBottom: '24px' }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: '40px',
                        height: '24px',
                        background: usingCustomWords ? 'var(--primary-gradient)' : 'rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        position: 'relative',
                        transition: 'background 0.3s ease'
                    }} onClick={(e) => { e.stopPropagation(); toggleUseCustom(); }}>
                        <div style={{
                            width: '20px',
                            height: '20px',
                            background: '#fff',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: '2px',
                            left: usingCustomWords ? '18px' : '2px', // 40-20-2 = 18
                            transition: 'left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }} />
                    </div>
                    <span style={{ fontWeight: 600 }}>Use Custom Words</span>
                </div>
                <span style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                    ▼
                </span>
            </div>

            {isExpanded && (
                <div style={{ marginTop: '20px', animation: 'fadeInUp 0.3s ease' }}>
                    <form onSubmit={handleAddWord} style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Enter a secret word..."
                            style={{
                                flex: 1,
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '12px 16px',
                                borderRadius: 'var(--radius-lg)',
                                color: 'white',
                                outline: 'none',
                                fontFamily: 'inherit'
                            }}
                        />
                        <Button
                            type="submit"
                            variant="secondary"
                            style={{ width: 'auto', borderRadius: 'var(--radius-lg)' }}
                            disabled={!inputValue.trim()}
                        >
                            Add
                        </Button>
                    </form>

                    {customWords.length === 0 ? (
                        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', fontSize: '0.9rem' }}>
                            No custom words added yet.
                        </p>
                    ) : (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {customWords.map((word, idx) => (
                                <div key={idx} style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '6px 12px',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    {word}
                                    <span
                                        onClick={() => handleRemoveWord(word)}
                                        style={{ cursor: 'pointer', color: 'var(--text-secondary)', fontWeight: 'bold' }}
                                    >
                                        ×
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CustomWordsInput;
