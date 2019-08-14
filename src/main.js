requirejs.config({
  baseUrl: '.',
  paths:  {
    'knockout': '../node_modules/knockout/build/output/knockout-latest',
    'jquery': '../node_modules/jquery/dist/jquery.min',
    'promise': '../node_modules/es6-promise/dist/es6-promise',
    'hammerjs': '../node_modules/hammerjs/hammer',
    'ojdnd': '../node_modules/@oracle/oraclejet/dist/js/libs/dnd-polyfill/dnd-polyfill-1.0.0',
    'ojs': '../node_modules/@oracle/oraclejet/dist/js/libs/oj/debug',
    'ojL10n': '../node_modules/@oracle/oraclejet/dist/js/libs/oj/ojL10n',
    'ojtranslations': '../node_modules/@oracle/oraclejet/dist/js/libs/oj/resources',
    'text': '../node_modules/requirejs-text/text',
    'signals': '../node_modules/signals/dist/signals',
    'proj4': '../node_modules/proj4js/dist/proj4-src',
    'css': '../node_modules/require-css/css',
    'customElements': '../node_modules/@webcomponents/custom-elements/custom-elements.min',
    'jqueryui-amd': '../node_modules/jquery-ui/ui',
    'touchr': '../node_modules/touchr/js/touchr'
  },
  shim: {
    'jquery': {
      exports: ['jQuery', '$']
    }
  }
});