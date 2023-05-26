/* eslint-disable import/no-cycle */
import { ToggleFeatures } from '@/shared/lib/features'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { ArticleView } from '../../model/consts/articleConsts'
import { Article } from '../../model/types/article'
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated'
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned'

export interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => (
  <ToggleFeatures
    feature="isAppRedesigned"
    on={<ArticleListItemRedesigned {...props} />}
    off={<ArticleListItemDeprecated {...props} />}
  />
))
