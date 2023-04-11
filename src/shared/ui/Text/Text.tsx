import { FC, memo } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'p'

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
  titleTag?: HeaderTagType

  'data-testid'?: string
}

const mapSizeToHeaderTag: Record<HeaderTagType, HeaderTagType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  p: 'p',
}

export const Text: FC<TextProps> = memo((props) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    titleTag = 'p',
    'data-testid': dataTestId = 'Text',
  } = props

  const HeaderTag = mapSizeToHeaderTag[titleTag]

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
  }

  return (
    <div className={classNames(cls.text, mods, [className])}>
      {title && (
        <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
          {text}
        </p>
      )}
    </div>
  )
})
