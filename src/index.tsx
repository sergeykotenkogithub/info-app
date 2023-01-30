import { render } from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './theme/ThemeProvider'

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
