import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({

  classNames: ['margin-bottom'],

  title: null,

  value: null,

  preserveLineBreaks: false,

  trimmedValue: computed('value', function() {
    return this.get('value').trim();
  }),

  linkFormat: null,

  linkFormatProtocol: computed('linkFormat', function() {
    const format = this.get('linkFormat');

    if (format === 'email') { return 'mailto:' }
    if (format === 'phone') { return 'tel:' }
    return '';
  }),

});
