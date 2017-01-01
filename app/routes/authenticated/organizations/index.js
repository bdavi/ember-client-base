import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    offset: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    }
  },

  model(params) {
    const { offset, limit } = params;

    return this.store.query('organization', {
      sort: 'name',
      page: {
        offset: offset,
        limit: limit,
      },
    });
  },

});
