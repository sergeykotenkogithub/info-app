import { useTranslation } from 'react-i18next'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ToggleFeatures } from '@/shared/lib/features'
import { Profile } from '../../model/types/profile'
// eslint-disable-next-line import/no-cycle
import {
  ProfileCardDeprecated,
  ProfileCardDeprecatedError,
  ProfileCardDeprecatedLoader,
} from '../ProfileCardDeprecated/ProfileCardDeprecated'
// eslint-disable-next-line import/no-cycle
import {
  ProfileCardRedesigned,
  ProfileCardRedesignedError,
  ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ProfileCardRedesigned'

export interface ProfileCardProps {
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

export const ProfileCard = (props: ProfileCardProps) => {
  const { isLoading, error } = props
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedLoader />}
      />
    )
  }

  if (error) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ProfileCardRedesignedError />}
        off={<ProfileCardDeprecatedError />}
      />
    )
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ProfileCardRedesigned {...props} />}
      off={<ProfileCardDeprecated {...props} />}
    />
  )
}
