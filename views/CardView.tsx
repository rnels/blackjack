import { StyleSheet, Text, View } from 'react-native';

type Props = {
  cards: string[]
}
export default function CardView({cards}: Props) {
  return (
    <View style={styles.container}>
      {cards.map((card) =>
      <Text
        style={styles.cardText}
      >{card}</Text>
      )}
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
