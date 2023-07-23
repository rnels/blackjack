import { Button, StyleSheet, View } from 'react-native';
import { Card, getCard } from '../libs/cards';
import CardView from './CardView';
import TitleText from '../components/TitleText';
import React from 'react';
import { GameContext } from '../gameContext';

type Props = {
  setGameState: (state: number) => void
}

export default function PlayerView({ setGameState }: Props) {
  const gameState = React.useContext(GameContext)
  const [cards, setCards] = React.useState<Card[]>()
  React.useEffect(() => {
    if (gameState === 0) {
      setCards(undefined)
    } else if (gameState === 1) { // Game is started for player
      const newCards = []
      newCards.push(getCard())
      newCards.push(getCard())
      setCards(newCards)
      setGameState(2) // Set dealer's start
    }
  }, [gameState])

  return (
    <View style={styles.container}>
      <TitleText
        text="Player"
        color="#232323"
      />
      {cards &&
      <>
        <CardView
          cards={cards}
          onBust={() => setGameState(6)}  // Set to dealer's win
          key="player"
        />
        <View style={styles.actions}>
          <Button
            title="Stay"
            color="#53a5cb"
            onPress={
              (e) => {
                e.preventDefault()
                setGameState(4) // Set dealer's turn
              }
            }
          />
          <Button
            title="Hit"
            color="#cb5353"
            onPress={
              (e) => {
                e.preventDefault()
                const tempCards = cards.slice()
                tempCards.push(getCard())
                setCards(tempCards)
              }
            }
          />
        </View>
      </>
    }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#ececec',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    flexDirection: 'row',
  }
})
