import Ember from 'ember';

const { computed } = Ember;

export default Ember.Mixin.create({
  paginationQueryParams: ['offset', 'limit'],

  offset: 0,

  limit: 5,

  startRecordNumber: computed('offset', 'model.[]', function() {
    return this.get('offset') + 1;
  }),

  endRecordNumber: computed('offset', 'model.length', function() {
    return this.get('model.length') + this.get('offset');
  }),

  recordCount: computed('model.meta', function(){
    const raw = this.get('model.meta')['record-count'];
    if (isNaN(raw)) {
      return 0;
    } else {
      return parseInt(raw);
    }
  }),

  hasNextPage: computed('recordCount', 'endRecord', function(){
    return this.get('recordCount') > this.get('endRecordNumber');
  }),

  hasPreviousPage: computed('offset', function() {
    return this.get('offset') > 0;
  }),

  totalPageCount: computed('limit', 'recordCount', function() {
    return Math.ceil(this.get('recordCount') / this.get('limit'));
  }),

  currentPageNumber: computed('limit', 'offset', function() {
    return (this.get('offset') / this.get('limit')) + 1;
  }),

  actions: {
    goToNextPage() {
      if (!this.get('hasNextPage')) { return; }
      this.set('offset', this.get('offset') + this.get('limit'));
    },

    goToPreviousPage() {
      if (!this.get('hasPreviousPage')) { return; }
      this.set('offset', this.get('offset') - this.get('limit'));
    },

    goToPage(pageNumber) {
      this.set('offset', (pageNumber - 1) * this.get('limit'));
    },
  },
});
