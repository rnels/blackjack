import { StyleSheet, View } from 'react-native';
import { Card, getCard } from '../libs/cards';
import CardView from './CardView';
import TitleText from '../components/TitleText';
import { GameContext } from '../gameContext';
import React from 'react';

type Props = {
  setGameState: (state: number) => void
}

export default function DealerView({ setGameState }: Props) {
  const gameState = React.useContext(GameContext)
  const [cards, setCards] = React.useState<Card[]>()
  const drawCard = () => {
      // TODO: Draw cards until card value >= 17
      const newCards = cards!.slice()
      if (!newCards[1].visible) {
        newCards[1].visible = true
      }
      newCards.push(getCard())
      setCards(newCards)
  }
  React.useEffect(() => {
    if (gameState === 0) {
      setCards(undefined)
    } else if (gameState === 2) { // Game is started for dealer
      const newCards = []
      newCards.push(getCard())
      newCards.push(getCard())
      newCards[1].visible = false
      setCards(newCards)
      setGameState(3) // Set player's turn
    } else if (gameState === 4) { // Dealer's turn
      drawCard()
    }
  }, [gameState])
  return (
    <View style={styles.container}>
      <TitleText
        text="Dealer"
        color="#ececec"
      />
      {cards &&
      <CardView
        cards={cards}
        onBust={() => setGameState(5)}  // Set to player's win
        drawStop={17}
        key="dealer"
      />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#232323',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
