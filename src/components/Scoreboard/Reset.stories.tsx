import React from 'react'
import {Meta, Story} from '@storybook/react'

import {Reset, ResetProps} from './Reset'

export default {
  title: 'Scoreboard/Reset',
  component: Reset,
} as Meta

const Template: Story<ResetProps> = (arg) => <Reset {...arg} />

export const ResetExample = Template.bind({})
