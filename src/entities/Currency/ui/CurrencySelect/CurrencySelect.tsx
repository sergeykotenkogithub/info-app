import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
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

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation('profile')

    const onChangeHandler = useCallback(
      // eslint-disable-next-line @typescript-eslint/no-shadow
      (value: string) => {
        onChange?.(value as Currency)
      },
      [onChange]
    )

    const props = {
      className,
      value,
      defaultValue: t('indicate-the-currency'),
      label: t('indicate-the-currency'),
      items: options,
      onChange: onChangeHandler,
      readonly,
      direction: 'top right' as const,
    }

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ListBox {...props} />}
        off={<ListBoxDeprecated {...props} />}
      />
    )
  }
)
