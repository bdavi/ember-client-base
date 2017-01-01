import Ember from 'ember';
import PaginatedController from '../../../mixins/paginated-controller';
import SearchableController from '../../../mixins/searchable-controller';

export default Ember.Controller.extend(PaginatedController, SearchableController, {

  queryParams: ['offset', 'limit', 'searchQuery'],

});
