import { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import { customStyles } from './constants'

import Modal from 'react-modal'

import { Puzzle, IndexGetPuzzle } from './Puzzle'

import { useLocalStorage } from './hooks/useLocalStorage'
import { ReactComponent as Github } from './data/Github.svg'
import { ReactComponent as Close } from './data/Close.svg'
import { ReactComponent as Info } from './data/Info.svg'

Modal.setAppElement('#root')

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexGetPuzzle />} />
        <Route path=":answerXor" element={<Puzzle />} />
        <Route
          path="404"
          element={
            <h1 className="flex-1 text-center text-xl xxs:text-2xl -mr-6 sm:text-4xl tracking-wide font-bold">
              Invalid URL!
            </h1>
          }
        />
      </Route>
    </Routes>
  )
}

function Header(props) {
  return (
    <header className="flex items-center py-2 px-3 text-primary">
      <h1 className="flex-1 text-center text-xl xxs:text-2xl -mr-6 sm:text-4xl tracking-wide font-bold font-righteous">
        WORD MASTER
      </h1>
      <button type="button" onClick={() => props.setInfoModalIsOpen(true)}>
        <Info />
      </button>
    </header>
  )
}

function InfoModal(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.handleClose}
      style={customStyles}
      contentLabel="Game Info Modal"
    >
      <button
        className="absolute top-4 right-4 rounded-full nm-flat-background text-primary p-1 w-6 h-6 sm:p-2 sm:h-8 sm:w-8"
        onClick={props.handleClose}
      >
        <Close />
      </button>
      <div className="h-full flex flex-col items-center justify-center max-w-[390px] mx-auto pt-9 text-primary">
        <div className="flex-1 w-full border sm:text-base text-sm">
          <h1 className="text-center sm:text-3xl text-2xl">How to play</h1>
          <ul className="list-disc pl-5 block sm:text-base text-sm">
            <li className="mt-6 mb-2">You have 6 guesses to guess the correct word.</li>
            <li className="mb-2">You can guess any valid word.</li>
            <li className="mb-2">
              After each guess, each letter will turn green, yellow, or gray.
            </li>
          </ul>
          <div className="mb-3 mt-8 flex items-center">
            <span className="nm-inset-n-green text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10 rounded-full">
              W
            </span>
            <span className="mx-2">=</span>
            <span>Correct letter, correct spot</span>
          </div>
          <div className="mb-3">
            <span className="nm-inset-yellow-500 text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10 rounded-full">
              W
            </span>
            <span className="mx-2">=</span>
            <span>Correct letter, wrong spot</span>
          </div>
          <span className="nm-inset-n-gray text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10 rounded-full">
            W
          </span>
          <span className="mx-2">=</span>
          <span>Wrong letter</span>
        </div>
        <div className="flex justify-center sm:text-base text-sm">
          <span>This project is open source on</span>
          <a
            className="ml-[6px] rounded-full h-5 w-5 sm:h-6 sm:w-6"
            href="https://github.com/octokatherine/word-master"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </div>
      </div>
    </Modal>
  )
}

function Layout() {
  const [firstTime, setFirstTime] = useLocalStorage('first-time', true)
  const [infoModalIsOpen, setInfoModalIsOpen] = useState(firstTime)

  const handleInfoClose = () => {
    setFirstTime(false)
    setInfoModalIsOpen(false)
  }

  return (
    <div className="flex flex-col justify-between h-fill bg-background">
      <Header setInfoModalIsOpen={setInfoModalIsOpen} />
      <InfoModal isOpen={infoModalIsOpen} handleClose={handleInfoClose} />
      <Outlet />
    </div>
  )
}

export default App
