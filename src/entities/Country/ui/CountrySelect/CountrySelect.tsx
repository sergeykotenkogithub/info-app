import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox } from '@/shared/ui/Popups'
import { Country } from '../../model/types/country'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
]

export const CountrySelect: FC<CountrySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props
  const { t } = useTranslation('profile')

  const onChangeHandler = useCallback(
    (val: string) => {
      onChange?.(val as Country)
    },
    [onChange]
  )

  return (
    <ListBox
      onChange={onChangeHandler}
      value={value}
      defaultValue={t('indicate-the-country')}
      label={t('indicate-the-country')}
      items={options}
      readonly={readonly}
      direction="top right"
    />
  )
})
