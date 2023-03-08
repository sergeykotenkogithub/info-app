import { getUserAuthData } from 'entities/User'
import { Suspense, memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

export const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(
    () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
          return false
        }

        return true
      }),
    [isAuth]
  )

  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  )
}
export default memo(AppRouter)
