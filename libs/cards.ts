export type Card = {
  name: string,
  value: number,
  // true - fronts/name.svg
  // false - backs/name.svg
  visible: boolean,
}

const suits = [
  'spades',
  'hearts',
  'clubs',
  'diamonds',
]

const faces = [
  {
    name: '2',
    value: 2,
  },
  {
    name: '3',
    value: 3,
  },
  {
    name: '4',
    value: 4,
  },
  {
    name: '5',
    value: 5,
  },
  {
    name: '6',
    value: 6,
  },
  {
    name: '7',
    value: 7,
  },
  {
    name: '8',
    value: 8,
  },
  {
    name: '9',
    value: 9,
  },
  {
    name: '10',
    value: 10,
  },
  {
    name: 'jack',
    value: 10,
  },
  {
    name: 'queen',
    value: 10,
  },
  {
    name: 'king',
    value: 10,
  },
  {
    name: 'ace',
    value: 1, // TODO: Make it 1 or 11
  },
]

export function getCard(): Card {
  const suit = suits[Math.floor((Math.random() * suits.length))]
  const face = faces[Math.floor((Math.random() * faces.length))]
  return {
    name: `${suit}_${face.name}`,
    value: face.value,
    visible: true,
  }
}
