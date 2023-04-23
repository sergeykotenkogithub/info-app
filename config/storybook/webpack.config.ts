import path from 'path'
import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { BuildPath } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    // buildLocales: path.resolve(__dirname, 'locales'),
    buildLocales: '',
    // locales: path.resolve(__dirname, '..', '..', 'public', 'locales'),
    locales: '',
  }
  config.resolve!.modules = [paths.src, 'node_modules']
  config.resolve!.extensions!.push('.ts', '.tsx')
  //  config!.resolve!.alias = { '@': path.resolve(__dirname, '..', '..', 'src') }
  config!.resolve!.alias = {
    ...config!.resolve!.alias,
    '@': paths.src,
  }
  // @ts-ignore
  config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config!.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })
  config!.module!.rules.push(buildCssLoader(true))
  config!.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify('https://testapi.ru'),
      // __API__: JSON.stringify('http://localhost:8000'),
      __PROJECT__: JSON.stringify('storybook'),
    })
  )

  return config
}
