/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const path = require('path');

const basePath = path.join(__dirname, '/src/css');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-font-magician')({
      variants: {
        Inter: {
          300: [],
          400: [],
          700: [],
        },
        foundries: ['google'],
      },
    }),
    require('postcss-mixins')({
      mixinsDir: path.join(basePath, '/mixins'),
    }),
    require('postcss-simple-vars')({
      variables: () => require('./src/css/config/variables'),
    }),
    require('postcss-normalize'),
    require('postcss-import'),
    // TODO: add postcss-modules
    // require('postcss-modules')({
    //   generateScopedName: function (name, filename, css) {
    //     var path = require("path");
    //     var i = css.indexOf("." + name);
    //     var line = css.substr(0, i).split(/[\r\n]/).length;
    //     var file = path.basename(filename, ".css");

    //     return "_" + file + "_" + line + "_" + name;
    //   },
    //   root: '.'
    // }),
    require('postcss-nested'),
    require('cssnano'),
  ],
  file: {
    dirname: basePath,
    basename: 'index.css',
    extname: '.css',
  },
};
