const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'components/'),
      '@store': path.resolve(__dirname, 'store/'),
      '@shared': path.resolve(__dirname, 'shared/'),
      '@client': path.resolve(__dirname, 'client/'),
      '@server': path.resolve(__dirname, 'server/'),
      '@clientapi': path.resolve(__dirname, 'clientapi/'),
    },
  },
};

