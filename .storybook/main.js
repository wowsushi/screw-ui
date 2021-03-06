const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/theme": path.resolve(__dirname, "../src/theme"),
      "@/hooks": path.resolve(__dirname, "../src/hooks"),
    };
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
}