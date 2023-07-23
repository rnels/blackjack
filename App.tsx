import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DealerView from './views/DealerView';
import PlayerView from './views/PlayerView';

export default function App() {
  return (
    <View style={styles.container}>
      <DealerView/>
      <PlayerView/>
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
