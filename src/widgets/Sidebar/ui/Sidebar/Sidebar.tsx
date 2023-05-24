import { LangSwitcher } from '@/features/LangSwitcher'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { FC, memo, useMemo, useState } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppLogo } from '@/shared/ui/deprecated/AppLogo'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = memo((props) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemsList = useSelector(getSidebarItems)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  const itemsList = useMemo(
    () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      sidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed, sidebarItemsList]
  )

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <article
          data-testid="sidebar"
          className={classNames(
            cls.sidebarRedesigned,
            { [cls.collapsed]: collapsed },
            [className]
          )}
        >
          <AppLogo className={cls.appLogo} />
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
        </article>
      }
      off={
        <article
          data-testid="sidebar"
          className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
            className,
          ])}
        >
          <Button
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={cls.collapseBtn}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            square
            size={ButtonSize.L}
          >
            {collapsed ? '>' : '<'}
          </Button>
          <VStack role="navigation" gap="8" className={cls.items}>
            {itemsList}
          </VStack>

          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed} className={cls.lang} />
          </div>
        </article>
      }
    />
  )
})
