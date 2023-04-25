import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage'
import { FC, ReactNode, useMemo, useState } from 'react'
import { Theme } from '../../../../shared/const/theme'
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext'

// eslint-disable-next-line operator-linebreak
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProp = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  )

  document.body.className = theme

  return (
    <ThemeContext.Provider value={defaultProp}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
