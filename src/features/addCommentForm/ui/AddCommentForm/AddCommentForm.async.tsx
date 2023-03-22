import { FC, lazy } from 'react'
import { AddCommentFormProps } from './AddCommentForm'

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () =>
    // eslint-disable-next-line
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import('./AddCommentForm')), 1500)
    })
)
