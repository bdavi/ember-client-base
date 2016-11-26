import Ember from 'ember';

const {
  inject: { service },
} = Ember;

export default Ember.Controller.extend({
  session: service(),

  email: null,

  password: null,

  showErrors: false,

  actions: {
    login() {
      const email = this.get('email');
      const password = this.get('password');

      this.get('session').authenticate('authenticator:oauth2', email, password).then(
        () => { this.transitionToRoute('authenticated'); },
        () => { this.toggleProperty('showErrors'); }
      );
    },
  },
});
