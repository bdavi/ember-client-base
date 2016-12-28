import Ember from 'ember';

const {
  inject,
  computed,
  isPresent,
  RSVP: { Promise },
} = Ember;

export default Ember.Component.extend({
  store: inject.service(),

  session: inject.service(),

  classNames: ['login-box'],

  user: null,

  organization: null,

  init() {
    this._super(...arguments);

    const user = this.get('store').createRecord('user');
    this.set('user', user);

    const organization = this.get('store').createRecord('organization', {
      users: [user]
    });
    this.set('organization', organization);
  },

  passwordConfirmation: null,

  isPasswordValid: computed('user.password', function() {
    return isPresent(this.get('user.password'));
  }),

  isPasswordConfirmationValid: computed('passwordConfirmation', function() {
    return isPresent(this.get('passwordConfirmation'));
  }),

  showErrors: false,

  formIsValid: computed.and('user.isValid', 'isPasswordConfirmationValid',
    'isPasswordValid', 'passwordMatchesConfirmation', 'organization.isValid'),

  passwordMatchesConfirmation: computed('user.password', 'passwordConfirmation', function() {
    return this.get('user.password') === this.get('passwordConfirmation');
  }),

  actions: {
    register() {
      return new Promise((resolve, reject) => {
        if (!this.get('formIsValid')) {
          this.set('showErrors', true);
          reject();
          return;
        }

        this.get('user').save().then(() => {
          this.get('organization').save().then(() => {
            const email = this.get('user.email');
            const password = this.get('user.password');

            this.get('session').authenticate('authenticator:oauth2', email, password).then(
              () => { resolve(this.get('router').transitionTo('authenticated')); },
              () => { reject(this.set('showErrors', true)); }
            );
          });
        }, (error) => {
          this.set('showErrors', true);
          reject(error);
        });
      });
    },
  },

});
