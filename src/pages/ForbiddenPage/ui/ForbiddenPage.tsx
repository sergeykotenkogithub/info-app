import { Page } from '@/widgets/Page'
import { useTranslation } from 'react-i18next'

const ForbiddenPage = () => {
  const { t } = useTranslation()

  return <Page>{t('you-have-no-access-to-this-page')}</Page>
}

export default ForbiddenPage
