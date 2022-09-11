import React from 'react'
import {Story, Meta} from '@storybook/react'

import {GameNameProps, GameName} from './GameName'

export default {
  title: 'Top/GameName',
  component: GameName,
} as Meta

const Template: Story<GameNameProps> = (args) => <GameName {...args} />

export const MinesweeperGameName = Template.bind({})
MinesweeperGameName.args = {
  children: 'Minesweeper',
}
