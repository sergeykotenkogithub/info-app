import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation()

  return (
    <Page data-testid="AboutPage">
      {t('about-the-site')}
      <div />
    </Page>
  )
}

export default AboutPage
