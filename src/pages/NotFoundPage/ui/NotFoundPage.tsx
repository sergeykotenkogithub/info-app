import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: React.FC<NotFoundPageProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.notFoundPage, {}, [className])}>
      {t('page-not-found')}
    </div>
  )
})
