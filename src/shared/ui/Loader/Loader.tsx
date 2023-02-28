import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

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
