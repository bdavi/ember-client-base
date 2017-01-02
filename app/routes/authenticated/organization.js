import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    const { organizationId } = params;

    return this.store.findRecord('organization', organizationId);
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('currentUser', this.modelFor('authenticated'));
  },

});
