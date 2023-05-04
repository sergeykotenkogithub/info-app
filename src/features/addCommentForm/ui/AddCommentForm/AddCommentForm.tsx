import { classNames } from '@/shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { HStack } from '@/shared/ui/Stack'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors'
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice'

import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
}

const AddCommentForm = (props: AddCommentFormProps) => {
  const { className, onSendComment } = props
  const { t } = useTranslation()
  const text = useSelector(getAddCommentFormText)
  const error = useSelector(getAddCommentFormError)
  const dispatch = useDispatch()

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value))
    },
    [dispatch]
  )

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onCommentTextChange('')
  }, [onCommentTextChange, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        data-testid="AddCommentForm"
        justify="between"
        max
        className={classNames(cls.addCommentForm, {}, [className])}
      >
        <Input
          className={cls.input}
          placeholder={t('enter-the-text-of-the-comment')}
          value={text || ''}
          onChange={onCommentTextChange}
          data-testid="AddCommentForm.Input"
        />
        <Button onClick={onSendHandler} data-testid="AddCommentForm.Button">
          {t('send')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  )
}

export default AddCommentForm
