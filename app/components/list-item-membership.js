import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  classNames: ['list-group-item'],

  membership: null,

  currentUser: null,

  actions: {
    delete() {
      return this.get('membership').destroyRecord();
    },
  },

});
