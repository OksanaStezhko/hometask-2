import Section from '../components/Section'
import EditNote from '../stories/Form.stories'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Section',
  component: Section,
} as ComponentMeta<typeof Section>

const Template: ComponentStory<typeof Section> = (args) => <Section {...args} />

export const Default = Template.bind({})
export const Full = Template.bind({})
export const Stretch = Template.bind({})
export const FullStretch = Template.bind({})

Default.args = {
  children: <div>Test</div>,
  width: 'normal',
  height: 'normal',
}
Full.args = {
  children: <div>Test</div>,
  width: 'full',
  height: 'normal',
}

Stretch.args = {
  children: <div>Test</div>,
  width: 'normal',
  height: 'stretch',
}

FullStretch.args = {
  children: <div>Test</div>,
  width: 'full',
  height: 'stretch',
}
