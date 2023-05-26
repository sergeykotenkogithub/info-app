import { useJsonSettings } from '@/entities/User'
import { FC, ReactNode, useEffect, useMemo, useState } from 'react'
import { Theme } from '../../../../shared/const/theme'
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext'

interface ThemeProviderProps {
  initialTheme?: Theme
  children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props
  const { theme: defaultTheme } = useJsonSettings()
  const [isThemeInited, setThemeInited] = useState(false)
  const [theme, setTheme] = useState<Theme>(
    initialTheme || defaultTheme || Theme.LIGHT
  )

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme)
      setThemeInited(true)
    }
  }, [defaultTheme, isThemeInited])

  useEffect(() => {
    document.body.className = theme
  }, [theme])

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
