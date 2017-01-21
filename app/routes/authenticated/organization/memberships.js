import Ember from 'ember';
import SearchableRoute from '../../../mixins/searchable-route';
import PaginatedRoute from '../../../mixins/paginated-route';

const { isPresent } = Ember;

export default Ember.Route.extend(SearchableRoute, PaginatedRoute, {
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
    const organization = this.modelFor('authenticated.organization');
    const filter = {
      organization: organization.get('id'),
    };

    if (isPresent(searchQuery)) {
      filter.searchBy = searchQuery;
    }

    return this.store.query('membership', {
      filter: filter,
      include: 'user',
      page: {
        offset: offset,
        limit: limit,
      },
    });
  },

  resetQueryParams: function(){
    this.resetSearchQueryParams();
    this.resetPaginationQueryParams();
  }.on('deactivate'),

});
