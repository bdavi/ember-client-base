import Ember from 'ember';

const {
  inject,
  RSVP: { Promise },
} = Ember;

export default Ember.Component.extend({
  store: inject.service(),

  init() {
    this._super(...arguments);
    this.setUpReset();
  },

  setUpReset() {
    const reset = this.get('store').createRecord('password-reset', {
      userId: this.get('currentUser.id'),
    });

    this.set('reset', reset);
  },

  reset: null,

  currentUser: null,

  showErrors: false,

  actions: {
    save() {
      if (!this.get('reset.isValid')) {
        this.set('showErrors', true);
        return;
      }

      return new Promise((resolve, reject) => {
        this.get('reset').save().then(() => {
          this.get('router').transitionTo('user-profile').promise.then(() => {
            resolve();
          });
        }, (error) => {
          this.set('showErrors', true);
          reject(error);
        });
      });
    },

    cancel() {
      return new Promise(() => {
        this.get('reset').rollbackAttributes();
        this.get('router').transitionTo('user-profile');
      });
    },
  },

});
