import DS from 'ember-data';
import Ember from 'ember';
import validator from 'npm:validator';

const { attr, belongsTo } = DS;
const { isPresent, computed } = Ember;
const { isEmail } = validator;

export default DS.Model.extend({

  user: belongsTo('user'),

  isUserValid: computed('user', function() {
    return isPresent(this.get('user'));
  }),

  email: attr('string'),

  isEmailValid: computed('email', function() {
    return isEmail(this.get('email'));
  }),

  membership: belongsTo('membership'),

  organization: belongsTo('organization'),

  isOrganizationValid: computed('organization', function() {
    return isPresent(this.get('organization'));
  }),

  isValid: computed.and('isUserValid', 'isEmailValid', 'isOrganizationValid'),

});
