import { ArticleList, ArticleView } from 'entities/Article'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.articlesPage, {}, [className])}>
      <ArticleList
        // isLoading
        view={ArticleView.BIG}
        articles={[]}
        // articles={new Array(16).fill(0).map((item, index) => ({
        //   ...article,
        //   id: String(index),
        // }))}
      />
    </div>
  )
}

export default memo(ArticlesPage)
