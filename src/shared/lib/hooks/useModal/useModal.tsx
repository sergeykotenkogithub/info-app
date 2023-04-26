import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

interface useModalProps {
  onClose?: () => void
  isOpen?: boolean
  animationDelay: number
}
/**
 * Переиспользуемый хук для модальных компонентов (drawer/modal)
 * @param animationDelay
 * @param isOpen
 * @param onClose
 */
export const useModal = ({
  animationDelay,
  isOpen,
  onClose,
}: useModalProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>
  const [isRenderModal, setIsRenderModal] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
      timerRef.current = setTimeout(() => {
        setIsRenderModal(true)
      }, 0)
    }
    return () => {
      clearInterval(timerRef.current)
      setIsRenderModal(false)
    }
  }, [isOpen])

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timeRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
    }
  }, [animationDelay, onClose])

  const onKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      }
    },
    [close]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeydown)
    }

    return () => {
      clearTimeout(timeRef.current)
      window.removeEventListener('keydown', onKeydown)
    }
  }, [isOpen, onKeydown])

  return {
    isClosing,
    isMounted,
    close,
    isRenderModal,
  }
}
