import CircleIcon from '@/shared/assets/icons/circle-up.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { memo } from 'react'

interface ScrollToTopButtonProps {
  className?: string
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props

  const onCLick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Icon
      Svg={CircleIcon}
      clickable
      onClick={onCLick}
      width={32}
      height={32}
      className={className}
    />
  )
})
