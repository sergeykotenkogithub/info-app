import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox } from '@/shared/ui/Popups'
import { Currency } from '../../model/types/currency'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props
  const { t } = useTranslation('profile')

  const onChangeHandler = useCallback(
    (val: string) => {
      onChange?.(val as Currency)
    },
    [onChange]
  )

  return (
    <ListBox
      className={className}
      onChange={onChangeHandler}
      value={value}
      items={options}
      defaultValue={t('indicate-the-currency')}
      label={t('indicate-the-currency')}
      readonly={readonly}
      direction="top right"
    />
  )
})
