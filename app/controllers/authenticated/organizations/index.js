import Ember from 'ember';
import PaginatedController from '../../../mixins/paginated-controller';

export default Ember.Controller.extend(PaginatedController, {

  queryParams: this.paginationQueryParams,

});
