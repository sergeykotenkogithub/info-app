import { Page } from '@/widgets/Page'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = memo(() => {
  const { t } = useTranslation()

  return <Page>{t('the-main-page')}</Page>
})

export default MainPage
