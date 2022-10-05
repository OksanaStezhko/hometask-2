import { ComponentStory, ComponentMeta } from '@storybook/react'

import ImageButton from '../components/Table/ImageButton'

export default {
  title: 'Table/ImageButton',
  component: ImageButton,
} as ComponentMeta<typeof ImageButton>

const Template: ComponentStory<typeof ImageButton> = (args) => (
  <ImageButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  name: 'Task',
}
