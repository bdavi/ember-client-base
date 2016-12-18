import Ember from 'ember';

const {
  inject: { service },
  RSVP: { Promise },
} = Ember;

export default Ember.Component.extend({

  classNames: ['login-box'],

  session: service(),

  email: null,

  password: null,

  showErrors: false,

  actions: {
    login() {
      return new Promise((resolve, reject) => {
        const email = this.get('email');
        const password = this.get('password');

        this.get('session').authenticate('authenticator:oauth2', email, password).then(
          () => { resolve(this.get('router').transitionTo('authenticated')); },
          () => { reject(this.set('showErrors', true)); }
        );
      });
    },
  },
});
