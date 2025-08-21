// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo"
    ],
    plugins: [
      // put other plugins here (keep this empty of expo-router/babel)
    ],
  };
};
