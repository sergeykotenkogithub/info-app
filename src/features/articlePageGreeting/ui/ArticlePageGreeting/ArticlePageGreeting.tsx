import { saveJsonSettings, useJsonSettings } from '@/entities/User'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Text } from '@/shared/ui/deprecated/Text'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const { isArticlePageWasOpened } = useJsonSettings()
  const dispatch = useAppDispatch()
  const isMobile = useDevice()

  useEffect(() => {
    if (!isArticlePageWasOpened) {
      setIsOpen(true)
      dispatch(saveJsonSettings({ isArticlePageWasOpened: true }))
    }
  }, [dispatch, isArticlePageWasOpened])

  const onClose = () => setIsOpen(false)

  const text = (
    <Text
      title={t('welcome-to-the-page-of-articles')}
      text={t('here-you-can-search-and-view-articles-on-various-topics')}
    />
  )

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    )
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  )
})
