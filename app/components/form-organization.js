import Ember from 'ember';

const {
  RSVP: { Promise },
} = Ember;

export default Ember.Component.extend({

  organization: null,

  showErrors: false,

  actions: {
    save() {
      return new Promise((resolve, reject) => {
        if (!this.get('organization.isValid')) {
          this.set('showErrors', true);
          resolve();
          return;
        }

        this.get('organization').save().then(() => {
          this.get('router').transitionTo('authenticated.organization').promise.then(() => {
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
        this.get('organization').rollbackAttributes();
        this.get('router').transitionTo('authenticated.organization');
      });
    },
  },

});
