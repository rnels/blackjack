const suits = [
  'spades',
  'hearts',
  'clubs',
  'diamonds',
]

const values = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'jack',
  'queen',
  'king',
  'ace',
]

export function getCard() {
  const suit = suits[Math.floor((Math.random() * suits.length))]
  const value = values[Math.floor((Math.random() * values.length))]
  return `${suit}_${value}`
}