import { Country, CountrySelect } from '@/entities/Country'
import { Currency, CurrencySelect } from '@/entities/Currency'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Input } from '@/shared/ui/deprecated/Input'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Profile } from '../../model/types/profile'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readonly?: boolean
  onChangeLastname?: (value?: string) => void
  onChangeFirstname?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeLastname,
    onChangeFirstname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.profileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </HStack>
    )
  }

  if (error) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.profileCard, {}, [className, cls.error])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('there-was-an-error')}
          text={t('try-to-update-the-page')}
          align={TextAlign.CENTER}
        />
      </HStack>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  }

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.profileCard, mods, [className])}
    >
      <HStack justify="center" max className={cls.avatarWrapper}>
        {data?.avatar && <Avatar src={data?.avatar} alt="" />}
      </HStack>

      <Input
        value={data?.first}
        placeholder={t('your-name')}
        className={cls.input}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid="ProfileCard.firstname"
      />
      <Input
        value={data?.lastname}
        placeholder={t('your-surname')}
        className={cls.input}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid="ProfileCard.lastname"
      />
      <Input
        value={data?.age}
        placeholder={t('your-age')}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
        onKeyPress={(e) => {
          if (!/[0-9]/.test(e.key)) {
            e.preventDefault()
          }
        }}
      />
      <Input
        value={data?.city}
        placeholder={t('city')}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t('enter-name-user')}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t('enter-link-on-avatar')}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  )
}
