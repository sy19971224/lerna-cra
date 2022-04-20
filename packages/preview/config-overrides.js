/**
 * @description react-app-rewired 的配置文件 用于在不破坏脚手架的基础上 获得配置控制权
 * @description 任何config配置问题参考以下链接
 * https://github.com/facebook/create-react-app/blob/main/packages/react-scripts/config/webpack.config.js
 */
const path = require('path')
const { getThemeVariables } = require('antd/dist/theme')
const isDev = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()

const {
  addLessLoader,
  addWebpackAlias,
  override,
  addBundleVisualizer,
  fixBabelImports,
  overrideDevServer,
  useBabelRc,
  removeInternalBabelPlugin,
  adjustStyleLoaders,
} = require('customize-cra')

// eslint-disable-next-line prettier/prettier
const addProxy = config => {
  config.allowedHosts = [
    'localhost',
    'dev.crawler-admin.i.sv.test.shopee.co.id',
    'a.crawler-admin.i.sv.test.shopee.co.id',
  ]
  config.proxy = {
    '/yapi': {
      target:
        process.env.REACT_APP_MOCK_API_PREFIX ||
        'https://yapi.test.shopee.io/mock/6430/bff',
      changeOrigin: true,
      pathRewrite: { '^/yapi': '/' },
    },
    '/api': {
      target:
        process.env.REACT_APP_API_DOMAIN ||
        'http://crawler-admin.i.sv.test.shopee.co.id',
      changeOrigin: true,
    },
  }

  return config
}

module.exports = {
  webpack: override(
    removeInternalBabelPlugin('IgnorePlugin'),
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addWebpackAlias({
      '@': path.resolve(__dirname, './src')
    }),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        strictMath: false,
        math: 'always',
        noIeCompat: true,
        cssModules: {
          localIdentName: '[path][name]__[local]--[hash:base64:5]', // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
        },
        modifyVars: getThemeVariables({
          dark: true, // 开启暗黑模式
        }),
      },
    }),
    adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options
      postcss.options = { postcssOptions }
    }),
    addBundleVisualizer(
      {
        analyzerMode: 'static',
        reportFilename: 'report.html',
      },
      true
    ),
    // 可以在此处修改webpack配置
    // eslint-disable-next-line prettier/prettier
    config => {
      if (isProduction) {
        // 取消js、css的map文件
        config.devtool = false
        config.optimization.minimize = false
        // 分析打包时间
        return smp.wrap(config)
      }
      return smp.wrap(config)
    }
  ),
  devServer: overrideDevServer(addProxy),
}
