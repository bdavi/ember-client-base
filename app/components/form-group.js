import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({

  classNames: ['form-group'],

  classNameBindings: ['includeHasErrorClass:has-error'],

  showErrors: null,

  isValid: null,

  includeHasErrorClass: computed('isValid', 'showErrors', function() {
    return !this.get('isValid') && this.get('showErrors');
  }),

});
