import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        autofocus
        placeholder={t('enter-username')}
        type="text"
        className={cls.input}
      />
      <Input
        placeholder={t('enter-password')}
        type="text"
        className={cls.input}
      />
      <Button className={cls.loginBtn}>{t('to-come-in')}</Button>
    </div>
  )
}
