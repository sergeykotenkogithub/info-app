import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage: FC = memo(() => {
  const { t } = useTranslation()
  return <div>{t('about-the-site')}</div>
})

export default AboutPage
