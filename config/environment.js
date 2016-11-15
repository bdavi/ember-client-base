module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-client-base',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
      },
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },

    APP: {
    }
  };

  ENV['ember-simple-auth'] = {
    routeAfterAuthentication: 'authenticated',
    authenticationRoute: 'login'
  };

  if (environment === 'development') {
    ENV.host = 'http://localhost:5000';
  }

  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.host = 'https://base-api.herokuapp.com'
  }

  return ENV;
};
