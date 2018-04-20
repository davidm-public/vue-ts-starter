// TODO: see here for info:
// https://alligator.io/vuejs/customize-poi/
//const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
//const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const DEVELOPMENT_PORT = 4000;

const poi_preset_ts_forked = ({ loaderOptions } = {}) => {
  return poi => {
    poi.extendWebpack(config => {
      config.resolve.extensions.add(".ts").add(".tsx");
      config.module
        .rule("typescript")
        .test(/\.tsx?$/)
        .use("ts-loader")
        .loader("ts-loader")
        .options(
          Object.assign(
            {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true // used with ForkTsCheckerWebpackPlugin
            },
            loaderOptions
          )
        );
      config.module
        .rule("vue")
        .use("vue-loader")
        .tap(vueOptions => {
          //vueOptions.esModule = true
          vueOptions.loaders.ts = [
            {
              loader: "ts-loader",
              options: loaderOptions
            }
          ];
          return vueOptions;
        });
    });
  };
};

module.exports = options => {
  console.log({ options });

  const config = {
    restartOnFileChanges: false,
    templateCompiler: true,
    port: DEVELOPMENT_PORT,
    presets: [
      poi_preset_ts_forked(),
      //require('poi-preset-typescript')(/* options */),
      require("poi-preset-bundle-report")(),
      require("poi-preset-webpackmonitor")()
    ]
  }

  return config;
};
