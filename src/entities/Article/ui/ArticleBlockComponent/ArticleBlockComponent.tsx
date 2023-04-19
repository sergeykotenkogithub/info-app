import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text/Text'
import { ArticleTextBlock } from '../../model/types/article'
import cls from './ArticleBlockComponent.module.scss'

interface ArticleBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleBlockComponent: FC<ArticleBlockComponentProps> = memo(
  (props) => {
    const { className, block } = props
    const { t } = useTranslation()

    return (
      <div className={classNames(cls.articleBlockComponent, {}, [className])}>
        {block.title && <Text title={block.title} className={cls.title} />}
      </div>
    )
  }
)
