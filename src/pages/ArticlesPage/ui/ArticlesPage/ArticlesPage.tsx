import { ArticlePageGreeting } from '@/features/articlePageGreeting'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Page } from '@/widgets/Page'
import { memo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchNextArticlesPage } from '../../model/services/fetcNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlesPageReducer } from '../../model/slices/articlePageSlice'
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList'
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
        data-testid="ArticlesPage"
      >
        <ArticlePageFilters />
        <ArticleInfiniteList className={cls.list} />
        <ArticlePageGreeting />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
