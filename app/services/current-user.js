import Ember from 'ember';

const {
  inject,
  computed,
} = Ember;

export default Ember.Service.extend({

  session: inject.service('session'),

  store: inject.service(),

  user: computed('session.isAuthenticated', function() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').findRecord('user', 'me').then((user) => {
        return user;
      });
    } else {
      return null;
    }
  }),

});
