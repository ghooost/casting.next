const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'components/'),
      '@libs': path.resolve(__dirname, 'libs/'),
      '@store': path.resolve(__dirname, 'store/'),
      '@shared': path.resolve(__dirname, 'shared/'),
      '@clientapi': path.resolve(__dirname, 'clientapi/'),
    },
  },
};
