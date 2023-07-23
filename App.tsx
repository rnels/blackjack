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
  const handlePlayerStart = () => setGameState(1)
  // const handleDealerStart = () => setGameState(2)
  // const handlePlayerTurn = () => setGameState(3)
  // const handleDealerTurn = () => setGameState(4)
  // const handlePlayerWin = () => setGameState(5)
  // const handleDealerWin = () => setGameState(6)
  // const handleNobodyWin = () => setGameState(7)

  return (
    <View style={styles.container}>
      <GameContext.Provider value={gameState}>
        <DealerView setGameState={setGameState}/>
        <PlayerView setGameState={setGameState}/>
        <GameView
          onStart={handlePlayerStart}
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
