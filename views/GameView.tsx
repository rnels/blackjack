import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { GameContext } from '../gameContext';

type Props = {
  onStart: VoidFunction,
  onRestart: VoidFunction
}

const gameStateMap = {
  0: 'Not started',
  1: 'Player start',
  2: 'Dealer start',
  3: 'Player turn',
  4: 'Dealer turn',
  5: 'Player WIN',
  6: 'Player LOSE',
  7: 'Nobody wins...',
  10: 'Checking hand',
}

export default function GameView({ onStart, onRestart }: Props) {

  const gameState = React.useContext(GameContext)

  return (
    <View style={styles.container}>
      <Button
        title={gameState !== 0 ? 'Restart' : 'Start'}
        onPress={
          (e) => {
            e.preventDefault()
            gameState !== 0 ?
            onRestart() :
            onStart()
          }
        }
      />
      <Text>{gameStateMap[gameState]}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 32,
    backgroundColor: 'tan',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
