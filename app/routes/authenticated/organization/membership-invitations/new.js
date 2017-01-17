import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('membershipInvitation', {
      organization: this.modelFor('authenticated.organization'),
      user: this.modelFor('authenticated'),
    });
  },

});
