import Ember from 'ember';

const {
  RSVP: { Promise },
} = Ember;

export default Ember.Component.extend({

  user: null,

  showErrors: false,

  actions: {
    save() {
      if (!this.get('user.isValid')) {
        this.set('showErrors', true);
        return;
      }

      return new Promise((resolve, reject) => {
        this.get('user').save().then(() => {
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
      this.get('user').rollbackAttributes();
      this.get('router').transitionTo('user-profile');
    },
  },

});
