import Ember from 'ember';

const { inject } = Ember;

export default Ember.Component.extend({

  session: inject.service('session'),

  tagName: 'li',

  classNames: ['dropdown'],

  user: null,

  actions: {
   logout() {
      this.get('session').invalidate();
    }
  }

});
