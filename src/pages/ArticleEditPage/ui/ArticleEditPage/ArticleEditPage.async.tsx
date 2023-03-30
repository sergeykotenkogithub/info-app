import { lazy } from 'react'

export const ArticleEditPageAsync = lazy(
  () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./ArticleEditPage')), 400)
    })
)
