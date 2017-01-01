import Ember from 'ember';

const { isPresent } = Ember;

export default Ember.Route.extend({

  queryParams: {
    offset: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    },
    searchQuery: {
      refreshModel: true
    },
  },

  model(params) {
    const { offset, limit, searchQuery } = params;

    const filter = {};
    if (isPresent(searchQuery)) {
      filter.searchBy = searchQuery;
    }

    return this.store.query('organization', {
      sort: 'name',
      filter: filter,
      page: {
        offset: offset,
        limit: limit,
      },
    });
  },

});
