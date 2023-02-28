import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = memo(() => {
  const { t } = useTranslation()

  return <div>{t('the-main-page')}</div>
})

export default MainPage
