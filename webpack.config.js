const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'components/'),
      '@libs': path.resolve(__dirname, 'libs/'),
    },
  },
};
