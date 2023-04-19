import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextSize, TextTheme } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title lorem ipsun',
  text: 'Text lorem ipsun',
}

export const Error = Template.bind({})
Error.args = {
  title: 'Title lorem ipsun',
  text: 'Text lorem ipsun',
  theme: TextTheme.ERROR,
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Title lorem ipsun',
}

export const OnlyText = Template.bind({})
OnlyText.args = {
  title: 'Title lorem ipsun',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Title lorem ipsun',
  text: 'Text lorem ipsun',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: 'Title lorem ipsun',
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  text: 'Title lorem ipsun',
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeS = Template.bind({})
SizeS.args = {
  title: 'Title lorem ipsun',
  text: 'Text lorem ipsun',
  size: TextSize.S,
}
export const SizeL = Template.bind({})
SizeL.args = {
  title: 'Title lorem ipsun',
  text: 'Text lorem ipsun',
  size: TextSize.L,
}
export const SizeM = Template.bind({})
SizeM.args = {
  title: 'Title lorem ipsun',
  text: 'Text lorem ipsun',
  size: TextSize.M,
}
