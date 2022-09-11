import React from 'react'
import {Meta, Story} from '@storybook/react'

import {Scoreboard, ScoreBoardProps} from './Scoreboard'

export default {
  title: 'Scoreboard/Scoreboard',
  component: Scoreboard,
}

const Template: Story<ScoreBoardProps> = (args) => <Scoreboard {...args} />

export const ScoreboardExample = Template.bind({})
ScoreboardExample.args = {
  time: '000',
  levels: ['beginner', 'intermediate', 'expert'],
  mines: '010',
  onReset: () => null,
}
