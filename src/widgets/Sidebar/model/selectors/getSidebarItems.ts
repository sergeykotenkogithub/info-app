import { getUserAuthData } from '@/entities/User'
import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import { RouterPath } from '@/shared/const/route'
import { createSelector } from 'reselect'
import { SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemList: SidebarItemType[] = [
    {
      path: RouterPath.main,
      Icon: MainIcon,
      text: 'home',
    },
    {
      path: RouterPath.about,
      Icon: AboutIcon,
      text: 'about-the-site',
    },
  ]

  if (userData) {
    sidebarItemList.push(
      {
        path: RouterPath.profile + userData.id,
        Icon: ProfileIcon,
        text: 'profile',
        authOnly: true,
      },
      {
        path: RouterPath.articles,
        Icon: ArticleIcon,
        text: 'article',
        authOnly: true,
      }
    )
  }

  return sidebarItemList
})
