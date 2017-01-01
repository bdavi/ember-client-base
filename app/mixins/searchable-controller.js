import Ember from 'ember';

export default Ember.Mixin.create({
  // Requires a searchQuery query parameter

  displaySearchQuery: '',

  setSearchQueryParam() {
    this.set('offset', 0);
    this.set('searchQuery', this.get('displaySearchQuery'));
  },

  actions: {
    search() {
      Ember.run.debounce(this, 'setSearchQueryParam', 500);
    },
  },

});
