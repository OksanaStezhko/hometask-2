import { ComponentStory, ComponentMeta } from '@storybook/react'

import ButtonAction from '../components/Table/ButtonAction'

export default {
  title: 'Table/ButtonAction',
  component: ButtonAction,
} as ComponentMeta<typeof ButtonAction>

const Template: ComponentStory<typeof ButtonAction> = (args) => (
  <ButtonAction {...args} />
)

export const Edit = Template.bind({})
Edit.args = { name: 'edit' }
