import { Page } from '@/widgets/Page'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

const AdminPanelPage: FC = memo(() => {
  const { t } = useTranslation()
  return <Page data-testid="AdminPanelPage">{t('admin-panel')}</Page>
})

export default AdminPanelPage
