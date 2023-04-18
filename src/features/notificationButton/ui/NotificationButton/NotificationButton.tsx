import { NotificationList } from 'entities/Notification'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Icon } from 'shared/ui/Icon/Icon'
import { Popover } from 'shared/ui/Popups'
import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = (props: NotificationButtonProps) => {
  const { className } = props

  return (
    <Popover
      className={classNames(cls.notificationButton, {}, [className])}
      direction="bottom left"
      trigger={
        // <Button theme={ButtonTheme.CLEAR}>
        <Icon Svg={NotificationIcon} inverted />
        // </Button>
      }
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  )
}
