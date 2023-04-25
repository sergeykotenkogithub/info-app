import { Story } from '@storybook/react'
// eslint-disable-next-line sergey-kotenko-plugin/layer-imports
import '@/app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (StoryComponent: Story) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
)
