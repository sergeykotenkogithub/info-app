import { FC, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextAlign } from '@/shared/ui/Text'
import { ArticleImageBlock } from '../../model/types/article'
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

// eslint-disable-next-line operator-linebreak
export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> =
  memo((props) => {
    const { className, block } = props

    return (
      <div
        className={classNames(cls.articleImageBlockComponent, {}, [className])}
      >
        <img src={block.src} alt={block.title} className={cls.img} />
        {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
      </div>
    )
  })
