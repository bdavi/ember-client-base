import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const {
  isPresent,
  inject: {
    service,
  },
} = Ember;

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: service(),

  beforeModel(transition) {
    const { authToken } = transition.queryParams;

    if (isPresent(authToken)) {
      this.set('session.attemptedTransition', transition);
      return this.get('session').authenticate(
        'authenticator:token', authToken
      );
    }
    this._super(...arguments);
  },

  setupController(controller) {
    Ember.run.later(this, () => {
      controller.set('authToken', null);
    });
  },
});
