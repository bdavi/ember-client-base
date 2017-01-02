import Ember from 'ember';

export default Ember.Mixin.create({

  resetPaginationQueryParams() {
    this.set('controller.offset', 0);
  },

});
