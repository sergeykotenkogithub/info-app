import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Portal } from '@headlessui/react'
import { FC, ReactNode } from 'react'
import { Overlay } from '../../redesigned/Overlay'
import cls from './Modal.module.scss'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose, lazy } = props
  const { close, isClosing, isMounted, isRenderModal } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  })

  const { theme } = useTheme()

  const mods: Mods = {
    [cls.opened]: isRenderModal,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div
        className={classNames(cls.modal, mods, [className, theme, 'app_modal'])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  )
}