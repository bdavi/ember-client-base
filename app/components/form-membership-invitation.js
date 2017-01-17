import Ember from 'ember';

const {
  RSVP: { Promise },
} = Ember;

export default Ember.Component.extend({

  membershipInvitation: null,

  showErrors: false,

  actions: {
    save() {
      return new Promise((resolve, reject) => {
        if (!this.get('membershipInvitation.isValid')) {
          this.set('showErrors', true);
          resolve();
          return;
        }

        this.get('membershipInvitation').save().then(() => {
          this.get('router').transitionTo('authenticated.organization.membership-invitations').promise.then(() => {
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
        this.get('membershipInvitation').rollbackAttributes();
        this.get('router').transitionTo('authenticated.organization.membership-invitations');
      });
    },
  },

});
