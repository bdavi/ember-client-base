import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'li',

  classNames: ['list-group-item'],

  invitation: null,

  actions: {
    delete() {
      return this.get('invitation').destroyRecord();
    },
  },

});
