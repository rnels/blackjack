import { StyleSheet, View } from 'react-native';
import { getCard } from '../libs/cards';
import CardView from './CardView';
import TitleText from '../components/TitleText';

export default function DealerView() {
  const cardOne = getCard()
  const cardTwo = getCard()
  return (
    <View style={styles.container}>
      <TitleText
        text="Dealer"
        color="#ececec"
      />
      <CardView cards={[cardOne, cardTwo]}/>
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
