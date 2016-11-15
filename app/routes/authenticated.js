import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const {
  isPresent,
  inject: { service, },
} = Ember;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: service(),

  beforeModel(transition) {
    const { auth_token: authToken } = transition.queryParams;
    const onSuccess = () => { this._super(...arguments); };
    const onFailure = () => { this.transitionTo('login'); };

    if (isPresent(authToken)) {
      return this.get('session').authenticate(
        'authenticator:token', authToken
      ).then(onSuccess, onFailure);
    } else {
      this._super(...arguments);
    }
  },
});
