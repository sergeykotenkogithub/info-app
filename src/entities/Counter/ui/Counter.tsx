import { Button } from '@/shared/ui/Button'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useCounterActions } from '../model/slice/counterSlice'

export const Counter: FC = () => {
  const counterValue = useCounterValue()
  const { decrement, add, increment } = useCounterActions()

  const handleIncrement = () => {
    increment()
  }

  const handleDecrement = () => {
    decrement()
  }

  const handleAddFive = () => {
    add(5)
  }

  const { t } = useTranslation()

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={handleAddFive}>+5</Button>
      <Button data-testid="increment-btn" onClick={handleIncrement}>
        {t('increment')}
      </Button>
      <Button data-testid="decrement-btn" onClick={handleDecrement}>
        {t('decrement')}
      </Button>
    </div>
  )
}
