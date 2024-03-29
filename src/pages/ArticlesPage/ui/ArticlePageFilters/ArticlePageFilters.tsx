import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/deprecated/Card'
import { Input } from '@/shared/ui/deprecated/Input'
import { useTranslation } from 'react-i18next'

import { useArticleFilters } from '../../lib/hooks/useArticleFilters'
import cls from './ArticlePageFilters.module.scss'

interface ArticlePageFiltersProps {
  className?: string
}

export const ArticlePageFilters = (props: ArticlePageFiltersProps) => {
  const { className } = props
  const { t } = useTranslation()
  const {
    onChangeSort,
    onChangeType,
    sort,
    type,
    onChangeSearch,
    search,
    onChangeView,
    view,
    onChangeOrder,
    order,
  } = useArticleFilters()

  return (
    <div className={classNames(cls.articlePageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input
          onChange={onChangeSearch}
          value={search}
          placeholder={t('search')}
        />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeType}
        className={cls.tabs}
      />
    </div>
  )
}
