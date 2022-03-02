module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: `@storybook/preset-scss`,
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: '[name]_[local]__[hash:base64:5]',
          },
        }
      },
    },
  ],
  "core": {
    "builder": "webpack5"
  },
  "typescript": {
    "reactDocgen": false
  },
}