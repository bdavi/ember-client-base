import Ember from 'ember';

export default Ember.Mixin.create({

  resetSearchQueryParams() {
    this.set('controller.searchQuery', '');
    this.set('controller.displaySearchQuery', '');
  },

});
