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

        this.get('organization').save().then((organization) => {
          this.get('router').transitionTo('authenticated.organization', organization.get('id')).promise.then(() => {
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
        if (this.get('organization.isNew')) {
          this.get('organization').rollbackAttributes();
          this.get('router').transitionTo('authenticated.organizations');
        } else {
          this.get('organization').rollbackAttributes();
          this.get('router').transitionTo('authenticated.organization');
        }
      });
    },
  },

});
