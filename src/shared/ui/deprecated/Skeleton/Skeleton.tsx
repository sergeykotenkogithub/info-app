import { classNames } from '@/shared/lib/classNames/classNames'
import { CSSProperties } from 'react'
import cls from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string | number
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Skeleton = (props: SkeletonProps) => {
  const { className, border, height, width } = props

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  }

  return (
    <div className={classNames(cls.skeleton, {}, [className])} style={styles} />
  )
}
