import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailPageProps {
  className?: string
}

const ArticleDetailsPage = (props: ArticleDetailPageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.articleDetailPage, {}, [className])}>
      ArticleDetailPage
    </div>
  )
}

export default memo(ArticleDetailsPage)
