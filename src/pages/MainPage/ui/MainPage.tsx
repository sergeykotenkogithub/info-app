import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

const MainPage: FC = memo(() => {
  const { t } = useTranslation()

  return <Page>{t('the-main-page')}</Page>
})

export default MainPage
