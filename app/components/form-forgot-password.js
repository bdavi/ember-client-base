import Ember from 'ember';

const {
  inject,
  RSVP: { Promise },
  computed,
} = Ember;

export default Ember.Component.extend( {
  store: inject.service(),

  classNames: ['login-box'],

  showErrors: false,

  resetRequest: null,

  init() {
    this._super(...arguments);
    this.initResetRequest();
  },

  initResetRequest() {
    const resetRequest = this.get('store').createRecord('user-password-reset-request');
    this.set('resetRequest', resetRequest);
  },

  emailHasBeenSent: false,

  errorsList: computed('resetRequest.errors.[]', function() {
    if (this.get('resetRequest.errors.length') > 0) {
      return [`Could not find an account matching: ${this.get('resetRequest.email')}`];
    } else {
      return [];
    }
  }),

  actions: {
    requestReset() {
      const resetRequest = this.get('resetRequest');

      if (!resetRequest.get('isValid')) {
        this.set('showErrors', true);
        return;
      }

      return new Promise((resolve, reject) => {
        this.get('resetRequest').save().then(() => {
          this.set('emailHasBeenSent', true);
          resolve();
        }, (error) => {
          this.set('showErrors', true);
          reject(error);
        });
      });
    },
  },

});
