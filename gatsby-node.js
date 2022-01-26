exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.md$/,
      use: 'raw-loader',
    },
  ];

  actions.replaceWebpackConfig(config);
};
