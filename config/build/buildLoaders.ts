import webpack from 'webpack'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCssLoader } from './loaders/buildCssLoader'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options
  const svgLoader = {
    test: /\.svg$/
    use: ['@svgr/webpack'],
  }

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true })

  const cssLoader = buildCssLoader(isDev)

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoader]
}
