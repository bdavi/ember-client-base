import Ember from 'ember';

const {
  RSVP: { Promise, },
  isPresent,
} = Ember;

export default Ember.Component.extend({
  tagName: 'li',

  classNames: ['list-group-item'],

  invitation: null,

  afterDeleteAction: null,

  actions: {
    delete() {
      return new Promise((resolve) => {
        this.get('invitation').destroyRecord().then(() => {
          const afterDeleteAction = this.get('afterDeleteAction');
          if (isPresent(afterDeleteAction)) {
            afterDeleteAction();
          }
        });
      });
    },
  },

});
