import { Button } from '@/shared/ui/deprecated/Button'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Компонент для тестирования

export const BugButton = () => {
  const [error, setError] = useState(false)
  const { t } = useTranslation()

  const handleThrow = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return <Button onClick={handleThrow}>{t('throw-error')}</Button>
}
