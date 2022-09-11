import React, {FC} from 'react'
import './app.css'

import {Top} from './components/Top'

export const App: FC = () => {
  return (
    <Top feature='Flag' firstAction='ctrl' secondAction='click'>
      Minesweeper
    </Top>
  )
}
