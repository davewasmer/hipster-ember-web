/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'hipsterember',
    podModulePrefix: 'hipsterember/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: { FEATURES: {} },
    APP: {},

    api: {
      host: process.env.API_HOST || 'http://localhost:3000'
    },

    torii: {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          clientId: 'fbd152c099123f86102e'
        }
      }
    }
  };

  if (environment === 'development') {
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.torii.providers['github-oauth2'].clientId = 'effb8282dcc82e0b6304';
  }

  return ENV;
};
