/* eslint-disable react/jsx-one-expression-per-line */
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { Card } from '@/shared/ui/deprecated/Card'
import { Input } from '@/shared/ui/deprecated/Input'
import { StarRating } from '@/shared/ui/deprecated/StarRating'
import { Text } from '@/shared/ui/deprecated/Text'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
  rate?: number
}

export const RatingCard = (props: RatingCardProps) => {
  const {
    className,
    feedbackTitle,
    hasFeedback,
    onAccept,
    onCancel,
    title,
    rate = 0,
  } = props
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(rate)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount)
      if (hasFeedback) {
        setIsModalOpen(true)
      } else {
        onAccept?.(selectedStarsCount)
      }
    },
    [hasFeedback, onAccept]
  )

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false)
    onAccept?.(starsCount, feedback)
  }, [feedback, onAccept, starsCount])

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false)
    onCancel?.(starsCount)
  }, [onCancel, starsCount])

  const isMobile = useDevice()

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        data-testid="RatingCard.Input"
        value={feedback}
        onChange={setFeedback}
        placeholder={t('your-feedback')}
      />
    </>
  )

  return (
    <Card className={className} max data-testid="RatingCard">
      <VStack align="center" gap="8" max>
        <Text title={starsCount ? t('thank-you-for-the-assessment') : title} />
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>

      {isMobile ? (
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
          <VStack gap="32">
            {modalContent}

            <Button onClick={cancelHandler} size={ButtonSize.L} fullWidth>
              {t('send')}
            </Button>
          </VStack>
        </Drawer>
      ) : (
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button
                onClick={cancelHandler}
                theme={ButtonTheme.OUTLINE_RED}
                data-testid="RatingCard.Close"
              >
                {t('close')}
              </Button>
              <Button data-testid="RatingCard.Send" onClick={acceptHandler}>
                {t('send')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      )}
    </Card>
  )
}
