// import { FC, ReactNode } from 'react'
// import { Provider } from 'react-redux'
// import { createReduxStore } from '../config/store'

// interface StoreProviderProps {
//   children?: ReactNode
// }

// export const StoreProvider: FC<StoreProviderProps> = (props: StoreProviderProps) => (
// eslint-disable-next-line no-tabs
// 	const { children } = props

// eslint-disable-next-line no-tabs
// 	const store = createReduxStore()

//   <Provider store={store}>{children}</Provider>
// )

import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './StoreProvider.module.scss'

interface StoreProviderProps {
  className?: string
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { className } = props

  return <div className={classNames(cls.storeProvider, {}, [className])} />
}
