import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ProfileCard } from './ProfileCard'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Belarus,
    lastname: 'test lastname',
    first: 'asd',
    city: 'asw',
    currency: Currency.EUR,
    avatar:
      'https://corporateofficeheadquarters.org/wp-content/uploads/2021/05/Sam-Richman.jpg',
  },
}

export const WithError = Template.bind({})
WithError.args = {
  error: 'true',
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}
