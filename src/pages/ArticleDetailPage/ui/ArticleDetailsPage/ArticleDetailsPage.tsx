import { ArticleDetails } from 'entities/Article'
// eslint-disable-next-line max-len
// eslint-disable-next-line max-len
import { ArticleRecommendationsList } from 'features/articleRecommendationsList'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { VStack } from 'shared/ui/Stack'
import { Page } from 'widgets/Page/Page'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage = (props: ArticleDetailPageProps) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articleDetailPage, {}, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
