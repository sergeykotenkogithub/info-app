import { saveJsonSettings } from '@/entities/User'
import ThemeIcon from '@/shared/assets/icons/theme-light.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { memo, useCallback } from 'react'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  const dispatch = useAppDispatch()

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }))
    })
  }, [dispatch, toggleTheme])

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={onToggleHandler}
      theme={ButtonTheme.CLEAR}
    >
      <Icon Svg={ThemeIcon} width={40} height={40} inverted />
    </Button>
  )
})
