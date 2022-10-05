import Title from '../components/Title'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Title',
  component: Title,
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />

export const Default = Template.bind({})
export const Error = Template.bind({})

Default.args = {
  text: 'Node',
  type: 'normal',
}
Error.args = {
  text: 'Error!!!',
  type: 'error',
}
