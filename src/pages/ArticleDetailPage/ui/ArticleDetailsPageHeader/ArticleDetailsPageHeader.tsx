import { getArticleDetailsData } from '@/entities/Article'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/deprecated/Button'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCanEditArticle } from '../../model/selectors/article'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = (
  props: ArticleDetailsPageHeaderProps
) => {
  const { className } = props
  const { t } = useTranslation()
  const navigate = useNavigate()
  const article = useSelector(getArticleDetailsData)
  const canEdit = useSelector(getCanEditArticle)

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles())
  }, [navigate])

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id))
    }
  }, [article, navigate])

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Button onClick={onBackToList}>{t('back-to-the-list')}</Button>
      {canEdit && <Button onClick={onEditArticle}>{t('edit-main')}</Button>}
    </HStack>
  )
}
