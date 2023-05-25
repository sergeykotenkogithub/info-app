import { classNames } from '@/shared/lib/classNames/classNames'
import { ReactNode, memo } from 'react'
import { LinkProps, NavLink } from 'react-router-dom'
import cls from './AppLink.module.scss'

export type AppLinkVariant = 'primary' | 'red'

interface AppLinkProps extends LinkProps {
  className?: string
  variant?: AppLinkVariant
  children?: ReactNode
  activeClassName?: string
}

// export const typedMemo: <T>(c: T) => T = memo
// export const typedForwardRef: <T, P = object>(
//   render: (props: P, ref: Ref<T>) => ReactElement | null
// ) => (props: PropsWithoutRef<P> & RefAttributes<T>) => ReactElement | null =
//   forwardRef

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    variant = 'primary',
    activeClassName = '',
    ...otherProps
  } = props

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(cls.AppLink, { [activeClassName]: isActive }, [
          className,
          cls[variant],
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  )
})
