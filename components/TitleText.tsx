import { StyleSheet, Text } from 'react-native';

type Props = {
  text: string
  color: string
}

export default function TitleText({ text, color }: Props) {
  return (
    <Text
      style={{
        color,
        ...styles.container,
      }}
    >{text}</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    fontSize: 32,
    paddingVertical: 16,
  },
})
