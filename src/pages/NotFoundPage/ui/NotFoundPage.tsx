import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: React.FC<NotFoundPageProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div
      data-testid="NotFoundPage"
      className={classNames(cls.notFoundPage, {}, [className])}
    >
      {t('page-not-found')}
    </div>
  )
})
