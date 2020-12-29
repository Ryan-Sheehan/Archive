
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')


const withReactSvg = require('next-react-svg')
const path = require('path')



module.exports = withPlugins([
  [withFonts()],
  [withReactSvg({
  include: path.resolve(__dirname, 'pages/svg'),
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    
     config.plugins.push(
       new BundleAnalyzerPlugin({
         analyzerMode: 'server',
         analyzerPort: isServer ? 8888 : 8889,
         openAnalyzer: true,
       })
     )
 	
    return config
  }
})]
]);