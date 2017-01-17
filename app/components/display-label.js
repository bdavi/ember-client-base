import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'span',

  value: null,

  classNames: ['label'],

  classNameBindings: ['labelClass'],

  labelClass: computed('value', function() {
    const value = this.get('value');
    const mappings = this.get('valueLabelClassMapping');

    for (var labelClass in mappings) {
      if (mappings[labelClass].includes(value)) {
        return labelClass;
      }
    }

    return 'label-default';
  }),

  valueLabelClassMapping: {
    'label-default': [],
    'label-primary': [],
    'label-success': ['accepted'],
    'label-info'   : ['pending'],
    'label-warning': ['expired'],
    'label-danger' : [],
  },

});
