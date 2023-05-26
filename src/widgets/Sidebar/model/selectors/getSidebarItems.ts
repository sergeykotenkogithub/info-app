import { getUserAuthData } from '@/entities/User'
import AboutIconDeprecated from '@/shared/assets/icons/about-20-20.svg'
import ArticleIconDeprecated from '@/shared/assets/icons/article-20-20.svg'
import MainIconDeprecated from '@/shared/assets/icons/main-20-20.svg'
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20-20.svg'
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router'
import { toggleFeatures } from '@/shared/lib/features'
import { SidebarItemType } from '../types/sidebar'

import AboutIcon from '@/shared/assets/icons/Info.svg'
import ArticleIcon from '@/shared/assets/icons/article.svg'
import ProfileIcon from '@/shared/assets/icons/avatar.svg'
import MainIcon from '@/shared/assets/icons/home.svg'
import { useSelector } from 'react-redux'

export const useSidebarItems = () => {
  const userData = useSelector(getUserAuthData)
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => MainIconDeprecated,
        on: () => MainIcon,
      }),
      text: 'the-main-page',
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => AboutIconDeprecated,
        on: () => AboutIcon,
      }),
      text: 'about-the-site',
    },
  ]

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ProfileIconDeprecated,
          on: () => ProfileIcon,
        }),
        text: 'profile',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ArticleIconDeprecated,
          on: () => ArticleIcon,
        }),
        text: 'article',
        authOnly: true,
      }
    )
  }

  return sidebarItemsList
}
