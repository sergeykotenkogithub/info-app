/* eslint-disable import/order */
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextSize } from '@/shared/ui/Text'
import { HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleView } from '../../model/consts/articleConsts'
import { Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
    ))

export const ArticleList = (props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
  } = props
  const { t } = useTranslation()

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('articles-are-not-found')} />
      </div>
    )
  }

  return (
    <div
      className={classNames(cls.articleList, {}, [className, cls[view]])}
      data-testid={'ArticleList'}
    >
      {articles.map((item) => (
        <ArticleListItem
          article={item}
          view={view}
          target={target}
          key={item.id}
          className={cls.card}
        />
      ))}

      {isLoading && getSkeletons(view)}
    </div>
  )
}
