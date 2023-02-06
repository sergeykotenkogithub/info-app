import { FC } from 'react'
import './styles/index.scss'

import { AppRouter } from './providers/router'

import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { Navbar } from 'widgets/Navbar'

const App: FC = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Change</button>
    </div>
  )
}

export default App
