import { RouterPath } from '@/shared/const/route'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink } from '@/shared/ui/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Skeleton } from '@/shared/ui/Skeleton'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { Comment } from '../../model/types/comment'
import cls from './CommentCard.module.scss'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
      <VStack
        gap="8"
        max
        className={classNames(cls.commentCard, {}, [className, cls.loading])}
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton className={cls.text} width="100%" height={50} />
      </VStack>
    )
  }

  if (!comment) return null

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.commentCard, {}, [className])}
    >
      <AppLink
        to={`${RouterPath.profile}${comment.user.id}`}
        className={cls.header}
      >
        {comment.user.avatar ? (
          <Avatar size={30} src={comment.user.avatar} />
        ) : null}
        <Text text={comment.user.username} className={cls.username} />
      </AppLink>
      <Text className={cls.text} text={comment.text} />
    </VStack>
  )
}
