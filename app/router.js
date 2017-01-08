import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('authenticated', { path: '/'}, function() {
    this.route('user-profile', { resetNamespace: true }, function() {
      this.route('edit');
      this.route('reset-password');
    });
    this.route('organizations', function() {
      this.route('new');
    });
    this.route('organization', { path: 'organizations/:organizationId' }, function() {
      this.route('edit');
    });
  });
  this.route('login');
  this.route('register');
  this.route('forgot-password');
});

export default Router;
