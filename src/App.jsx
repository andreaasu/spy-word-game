import React, { useReducer } from 'react';
import { gameReducer, INITIAL_STATE, GAME_STEPS } from './state/gameReducer';

// Screens
import SetupScreen from './screens/SetupScreen';
import RevealScreen from './screens/RevealScreen';
import DiscussionScreen from './screens/DiscussionScreen';
import GameOverScreen from './screens/GameOverScreen';

const App = () => {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  const renderScreen = () => {
    switch (state.step) {
      case GAME_STEPS.SETUP:
        return <SetupScreen state={state} dispatch={dispatch} />;

      case GAME_STEPS.ROLE_REVEAL:
        return <RevealScreen state={state} dispatch={dispatch} />;

      case GAME_STEPS.DISCUSSION:
        return <DiscussionScreen state={state} dispatch={dispatch} />;

      case GAME_STEPS.GAME_OVER:
        return <GameOverScreen dispatch={dispatch} />;

      default:
        return <div className="flex-center" style={{ minHeight: '100vh', color: 'white' }}>Error: Unknown State</div>;
    }
  };

  return (
    <>
      <div className="background-glow" /> {/* Optional ambient glow could go here */}
      {renderScreen()}
    </>
  );
};

export default App;
