module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            outputPath: 'static/images', // Change this output path as needed
          },
        },
      ],
    });

    return config;
  },
};

