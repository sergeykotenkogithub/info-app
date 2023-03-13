import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import { RouterPath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemList: SidebarItemType[] = [
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
  {
    path: RouterPath.profile,
    Icon: ProfileIcon,
    text: 'profile',
    authOnly: true,
  },
  {
    path: RouterPath.articles,
    Icon: ArticleIcon,
    text: 'article',
    authOnly: true,
  },
]
