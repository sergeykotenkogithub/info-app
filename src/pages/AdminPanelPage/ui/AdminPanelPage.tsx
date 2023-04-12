import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

const AdminPanelPage: FC = memo(() => {
  const { t } = useTranslation()
  return <Page>{t('admin-panel')}</Page>
})

export default AdminPanelPage
