export const cipherKey = 'wordmaster'

export const state = {
  playing: 'playing',
  won: 'won',
  lost: 'lost',
}

export const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'hsl(231, 16%, 92%)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    height: 'calc(100% - 2rem)',
    width: 'calc(100% - 2rem)',
    backgroundColor: 'hsl(231, 16%, 92%)',
    boxShadow:
      '0.2em 0.2em calc(0.2em * 2) #A3A7BD, calc(0.2em * -1) calc(0.2em * -1) calc(0.2em * 2) #FFFFFF',
    border: 'none',
    borderRadius: '1rem',
    maxWidth: '475px',
    maxHeight: '650px',
    position: 'relative',
  },
}

export const keyboardLetters = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]

export const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

export const status = {
  green: 'green',
  yellow: 'yellow',
  gray: 'gray',
  unguessed: 'unguessed',
}
