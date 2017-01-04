import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    const { organizationId } = params;

    return this.store.findRecord('organization', organizationId);
  },

  afterModel() {
    return this.get('store').query('organization', {
      sort: 'name',
      page: {
        limit: 5,
      },
    }).then((topOrganizations) => {
      this.set('topOrganizations', topOrganizations);
    });
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('currentUser', this.modelFor('authenticated'));
    controller.set('topOrganizations', this.get('topOrganizations'));
  },

});
