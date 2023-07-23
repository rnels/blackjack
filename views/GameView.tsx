import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { GameContext } from '../gameContext';

type Props = {
  onStart: VoidFunction,
  onRestart: VoidFunction
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
