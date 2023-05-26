import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { HTMLAttributes, memo, ReactNode } from 'react'
import cls from './Card.module.scss'

export type CardVariant = 'normal' | 'outlined' | 'light'
export type CardPadding = '0' | '8' | '16' | '24'
export type CardBorder = 'round' | 'normal'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  variant?: CardVariant
  max?: boolean
  padding?: CardPadding
  border?: CardBorder
  fullHeight?: boolean
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    max,
    padding = '8',
    border = 'normal',
    fullHeight,
    ...otherProps
  } = props

  const paddingClass = mapPaddingToClass[padding]

  const mods: Mods = {
    [cls.max]: max,
    [cls.fullHeight]: fullHeight,
  }

  return (
    <div
      className={classNames(cls.Card, mods, [
        className,
        cls[variant],
        cls[paddingClass],
        cls[border],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  )
})
