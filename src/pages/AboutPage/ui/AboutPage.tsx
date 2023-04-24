import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation()

  return <Page>{t('about-the-site')}</Page>
}

export default AboutPage
