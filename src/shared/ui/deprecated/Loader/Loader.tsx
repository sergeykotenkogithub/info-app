import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import cls from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Loader: React.FC<LoaderProps> = memo((props) => {
  const { className } = props

  return (
    <div className={classNames(cls['lds-ellipsis'], {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
})
