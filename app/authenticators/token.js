import BaseAuthenticator from 'ember-simple-auth/authenticators/base';
import Ember from 'ember';
import ENV from '../config/environment';

const {
  isPresent,
  inject: {
    service,
  },
} = Ember;

export default BaseAuthenticator.extend({
  store: service(),

  authenticate(token) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (isPresent(token)) {
        Ember.$.ajax({
          url: `${ENV.host}/v1/users/me`,
          headers: { "Authorization": `Bearer ${token}` }
        }).done(() => {
          resolve({
            access_token: token,
            token_type: 'bearer'
          });
        }).fail(() => {
          reject();
        });
      } else {
        reject();
      }
    });
  },

  restore(data) {
    return this.authenticate(data['access_token']);
  }
});
