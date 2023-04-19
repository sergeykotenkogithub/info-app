import { NotificationList } from '@/entities/Notification'
import { useCallback, useState } from 'react'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Popover } from '@/shared/ui/Popups'
import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const { className } = props
  const [isOpen, setIsOpen] = useState(false)

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false)
  }, [])

  const isMobile = useDevice()

  const trigger = (
    <div onClick={onOpenDrawer}>
      <Icon Svg={NotificationIcon} inverted />
    </div>
  )

  return (
    <div>
      {isMobile ? (
        <>
          {trigger}
          <AnimationProvider>
            <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
              <NotificationList />
            </Drawer>
          </AnimationProvider>
        </>
      ) : (
        <Popover
          className={classNames(cls.notificationButton, {}, [className])}
          direction="bottom left"
          trigger={trigger}
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      )}
    </div>
  )
}
