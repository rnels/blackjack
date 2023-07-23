import { StyleSheet, Text, View } from 'react-native';
import { Card } from '../libs/cards';
import React from 'react';

type Props = {
  cards: Card[]
  onGoOver: VoidFunction
}

export default function CardView({ cards, onGoOver }: Props) {

  let count = 0
  const cardMap = cards.map((card, i) => {
    count += card.value
    return (
      <Text
        style={styles.cardText}
        key={i}
      >
        {card.name} {card.visible.toString()}
      </Text>
    )
  })

  if (count > 21) {
    onGoOver()
  }

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      {cardMap}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '75%',
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 18,
    paddingVertical: 4,
  },
})
