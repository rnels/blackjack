import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DealerView from './views/DealerView';
import PlayerView from './views/PlayerView';
import GameView from './views/GameView';
import React from 'react';
import { GameContext } from './gameContext';

export default function App() {
  const [gameState, setGameState] = React.useState(0)

  const handleRestart = () => setGameState(0)
  const handleStart = () => setGameState(1)
  const handleComplete = () => setGameState(2)

  return (
    <View style={styles.container}>
      <GameContext.Provider value={gameState}>
        <DealerView onComplete={handleComplete}/>
        <PlayerView onComplete={handleComplete}/>
        <GameView
          onStart={handleStart}
          onRestart={handleRestart}
        />
      </GameContext.Provider>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
