import { lazy } from 'react'

export const ArticleDetailsPageAsync = lazy(
  () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500)
    })
)
