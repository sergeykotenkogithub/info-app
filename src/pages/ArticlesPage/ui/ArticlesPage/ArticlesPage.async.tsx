import { lazy } from 'react'

export const ArticlesPageAsync = lazy(
  () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./ArticlesPage')), 1500)
    })
)
