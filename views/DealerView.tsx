import { StyleSheet, View } from 'react-native';
import { Card, getCard } from '../libs/cards';
import CardView from './CardView';
import TitleText from '../components/TitleText';
import { GameContext } from '../gameContext';
import React from 'react';

type Props = {
  onComplete: VoidFunction
}

export default function DealerView({ onComplete }: Props) {
  const gameState = React.useContext(GameContext)
  const [cards, setCards] = React.useState<Card[]>()
  React.useEffect(() => {
    if (gameState === 1) { // Game is started
      const newCards = []
      newCards.push(getCard())
      newCards.push(getCard())
      newCards[1].visible = false
      setCards(newCards)
    } else {
      setCards(undefined)
    }
  }, [gameState])
  return (
    <View style={styles.container}>
      <TitleText
        text="Dealer"
        color="#ececec"
      />
      {cards && <CardView cards={cards} onGoOver={onComplete} key="dealer"/>}
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
