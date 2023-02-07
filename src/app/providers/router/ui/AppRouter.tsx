import { Suspense } from 'react'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }) => (
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
export default AppRouter
