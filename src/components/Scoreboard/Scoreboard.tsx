import React from 'react'
import styled from '@emotion/styled'

import {Reset} from './Reset'
import {Counter} from './Counter'
import {Level} from './Level'

export interface ScoreBoardProps {
  /**
   * Timer
   */
  time: string
  /**
   * Possible game scenario
   */
  levels: string[]
  /**
   * Action handler when the GameReset button is clicked
   */
  onReset: () => void
  /**
   * Bombs in the field
   */
  mines: string
}

export const Scoreboard: React.FC<ScoreBoardProps> = ({onReset, mines, time, levels}) => (
  <Wrapper>
    <Counter>{time}</Counter>
    <Level>{levels}</Level>
    <Reset onReset={onReset} />
    <Counter>{mines}</Counter>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  width: max-content;
  padding-bottom: 2vw;
  justify-content: space-between;
`
