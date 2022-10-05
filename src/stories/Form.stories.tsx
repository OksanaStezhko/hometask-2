import Form from '../components/Form'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import moment from 'moment'

export default {
  title: 'Form',
  component: Form,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Provider store={store}>
          <Story />
        </Provider>
      </BrowserRouter>
    ),
  ],
} as ComponentMeta<typeof Form>

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />

export const NewNote = Template.bind({})
export const EditNote = Template.bind({})

NewNote.args = {
  note: {
    id: '',
    name: '',
    category: 'Task',
    content: '',
    created: moment().format('YYYY-MM-DD'),
  },
}

EditNote.args = {
  note: store.getState().notes.notes[0],
}
