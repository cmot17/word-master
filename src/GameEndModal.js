import { useEffect, useState } from 'react'
import Modal from 'react-modal'

import { state, customStyles } from './constants'

import Success from './data/Success.png'
import Fail from './data/Cross.png'

export function GameEndModal(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.close}
      style={customStyles}
      contentLabel="Game End Modal"
    >
      <div className="h-full flex flex-col items-center justify-center max-w-[300px] mx-auto">
        {props.gameState === state.won && (
          <>
            <img src={Success} alt="success" height="auto" width="auto" />
            <h1 className="text-primary text-3xl">Congrats!</h1>
            <p className="mt-6">
              Current streak: <strong>{props.currentStreak}</strong>{' '}
              {props.currentStreak > 4 && '🔥'}
            </p>
            <p>
              Longest streak: <strong>{props.longestStreak}</strong>
            </p>
          </>
        )}
        {props.gameState === state.lost && (
          <>
            <img src={Fail} alt="success" height="auto" width="80%" />
            <div className="text-primary text-4xl text-center">
              <p>Oops!</p>
              <p className="mt-3 text-2xl">
                The word was <strong>{props.answer}</strong>
              </p>
              <p className="mt-6 text-base">
                Current streak: <strong>{props.currentStreak}</strong>{' '}
                {props.currentStreak > 4 && '🔥'}
              </p>
              <p className="text-base">
                Longest streak: <strong>{props.longestStreak}</strong>
              </p>
            </div>
          </>
        )}
        <PlayAgainButton newPuzzle={props.newPuzzle} />
        <ShareButton copyShareText={props.copyShareText} />
      </div>
    </Modal>
  )
}

function PlayAgainButton(props) {
  return (
    <button
      type="button"
      className="rounded-lg w-36 px-6 py-2 mt-8 text-lg nm-flat-background hover:nm-inset-background"
      onClick={props.newPuzzle}
    >
      Play Again
    </button>
  )
}

function ShareButton(props) {
  const [buttonPressed, setButtonPressed] = useState(false)
  useEffect(() => {
    if (buttonPressed !== false) {
      setTimeout(() => setButtonPressed(false), [3000])
    }
  }, [buttonPressed])
  return (
    <button
      type="button"
      className="rounded-lg w-36 px-6 py-2 mt-8 text-lg nm-flat-background hover:nm-inset-background"
      onClick={() => {
        setButtonPressed(true)
        props.copyShareText()
      }}
    >
      {buttonPressed ? 'Copied!' : 'Share'}
    </button>
  )
}
