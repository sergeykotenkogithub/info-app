import { lazy } from 'react'

export const ProfilePageAsync = lazy(
  () =>
    // eslint-disable-next-line
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./ProfilePage')), 1500)
    })
)
