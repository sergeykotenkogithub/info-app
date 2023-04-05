import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ListBox } from './ListBox'

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>

const options = [
  { value: 'test1', content: 'test1asdsadsadsa' },
  { value: 'test2', content: 'test2asdsadadsadsa' },
  { value: 'test3', content: 'test3asdsadasdsdssd' },
]

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Normal = Template.bind({})
Normal.args = {
  items: options,
  defaultValue: 'defaultValue',
  label: 'Label',
}

export const TopLeft = Template.bind({})
TopLeft.args = {
  direction: 'top left',
  items: options,
  defaultValue: 'defaultValue',
  label: 'Label',
}

export const TopRight = Template.bind({})
TopRight.args = {
  direction: 'top right',
  items: options,
  defaultValue: 'defaultValue',
  label: 'Label',
}

export const BottomLeft = Template.bind({})
BottomLeft.args = {
  direction: 'bottom left',
  items: options,
  defaultValue: 'defaultValue',
  label: 'Label',
}

export const BottomRight = Template.bind({})
BottomRight.args = {
  direction: 'bottom right',
  items: options,
  defaultValue: 'defaultValue',
  label: 'Label',
}
