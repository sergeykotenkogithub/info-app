import { CommentList } from '@/entities/Comment'
import { AddCommentForm } from '@/features/addCommentForm'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { Text, TextSize } from '@/shared/ui/deprecated/Text'
import { Suspense, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentByArticleId } from '../../model/services/fetchCommentByArticleId/fetchCommentByArticleId'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'

interface ArticleDetailsCommentsProps {
  className?: string
  id?: string
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className, id } = props
    const { t } = useTranslation()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
    const dispatch = useAppDispatch()

    const onSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle(text))
      },
      [dispatch]
    )

    useInitialEffect(() => {
      dispatch(fetchCommentByArticleId(id))
    })

    return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <Text size={TextSize.L} title={t('comments')} />
        <Suspense fallback={<Loader />}>
          <AddCommentForm onSendComment={onSendComment} />
        </Suspense>
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </VStack>
    )
  }
)
