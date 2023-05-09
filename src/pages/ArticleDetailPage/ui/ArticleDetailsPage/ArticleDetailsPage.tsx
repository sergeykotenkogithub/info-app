import { ArticleDetails } from '@/entities/Article'
// eslint-disable-next-line max-len
// eslint-disable-next-line max-len
import { ArticleRating } from '@/features/articleRating'
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { Card } from '@/shared/ui/Card'
import { VStack } from '@/shared/ui/Stack'
import { Page } from '@/widgets/Page'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
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
  const { t } = useTranslation()

  if (!id) {
    return null
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articleDetailPage, {}, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ToggleFeatures
            feature="isArticleRatingEnabled"
            on={<ArticleRating articleId={id} />}
            off={<Card>{t('evaluation-of-articles-will-appear-soon')}</Card>}
          />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
