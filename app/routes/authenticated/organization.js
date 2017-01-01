import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    const { organizationId } = params;

    return this.store.findRecord('organization', organizationId);
  }

});
