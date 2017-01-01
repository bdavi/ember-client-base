import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  goToPageAction: null,

  goToNextPageAction: null,

  goToPreviousPageAction: null,

  currentPageNumber: null,

  totalPageCount: null,

  hasNextPage: null,

  hasPreviousPage: null,

  pageList: computed('totalPageCount', 'currentPageNumber', function() {
    let arr = [];

      for(var i = 1; i <= this.get('totalPageCount'); i++) {
        arr.push(i);
      }

    return arr;
  }),

  actions: {
    goToPage(page) {
      this.get('goToPageAction')(page);
    },

    goToNextPage() {
      this.get('goToNextPageAction')();
    },

    goToPreviousPage() {
      this.get('goToPreviousPageAction')();
    },
  },

});
