import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  classNames: ['treeview'],

  icon: null,

  hasChild: false,
});
