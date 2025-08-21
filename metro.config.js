const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);


config.resolver.extraNodeModules = new Proxy({}, {
  get: (_, name) => path.join(projectRoot, 'node_modules', name),
});

module.exports = config;
