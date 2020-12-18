
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');


const withReactSvg = require('next-react-svg')
const path = require('path')



module.exports = withPlugins([
  [withFonts()],
  [withReactSvg({
  include: path.resolve(__dirname, 'pages/svg'),
  webpack(config, options) {
    return config
  }
})]
]);