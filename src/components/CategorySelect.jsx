import React from 'react';
import { DEFAULT_WORD_CATEGORIES } from '../data/defaultWords';
import { ACTIONS } from '../state/gameReducer';

const CategorySelect = ({ state, dispatch }) => {
    const { selectedCategory, usingCustomWords } = state;

    const handleChange = (e) => {
        dispatch({ type: ACTIONS.SET_CATEGORY, payload: e.target.value });
    };

    return (
        <div className="glass-panel" style={{
            padding: '20px',
            marginBottom: '16px',
            opacity: usingCustomWords ? 0.5 : 1,
            pointerEvents: usingCustomWords ? 'none' : 'auto',
            transition: 'opacity 0.3s ease'
        }}>
            <div style={{ marginBottom: '12px', fontWeight: '600' }}>Word Category</div>

            <div style={{ position: 'relative' }}>
                <select
                    value={selectedCategory}
                    onChange={handleChange}
                    style={{
                        width: '100%',
                        padding: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 'var(--radius-lg)',
                        fontSize: '1rem',
                        fontFamily: 'inherit',
                        appearance: 'none',
                        cursor: 'pointer',
                        outline: 'none'
                    }}
                >
                    <option value="random" style={{ background: '#1e1b4b' }}>🎲 Random Mix</option>
                    {DEFAULT_WORD_CATEGORIES.map(cat => (
                        <option key={cat.id} value={cat.id} style={{ background: '#1e1b4b' }}>
                            {cat.name}
                        </option>
                    ))}
                </select>

                <div style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    color: 'var(--text-secondary)'
                }}>
                    ▼
                </div>
            </div>

            {usingCustomWords && (
                <div style={{
                    marginTop: '8px',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    fontStyle: 'italic'
                }}>
                    Disabled because Custom Words are enabled.
                </div>
            )}
        </div>
    );
};

export default CategorySelect;
