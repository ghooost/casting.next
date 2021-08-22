const path = require('path');

module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../pages/**/*.stories.mdx",
    "../pages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-css-modules-preset',
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@libs'] = path.resolve(__dirname, '../libs/');
    config.resolve.alias['@components'] = path.resolve(__dirname, '../components/');
    return config;
  },
}
