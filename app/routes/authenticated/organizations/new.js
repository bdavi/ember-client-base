import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    const currentUser = this.modelFor('authenticated');

    return this.store.createRecord('organization', {
      users: [currentUser],
    });
  },

});
