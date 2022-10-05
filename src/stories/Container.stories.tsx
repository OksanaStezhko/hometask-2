import Container from '../components/Container'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Container',
  component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
)

export const Default = Template.bind({})

Default.args = {
  children: <div></div>,
}
