import DS from 'ember-data';
import Ember from 'ember';
import validator from 'npm:validator';

const { attr, hasMany } = DS;
const { computed, isPresent } = Ember;
const { isEmail } = validator;

export default DS.Model.extend({

  name: attr('string'),

  isNameValid: computed('name', function() {
    return isPresent(this.get('name'));
  }),

  password: attr('string'),

  email: attr('string'),

  isEmailValid: computed('email', function() {
    return isEmail(this.get('email') || '');
  }),

  createdAt: attr('date'),

  isValid: computed.and('isNameValid', 'isEmailValid'),

  memberships: hasMany('membership'),

  organizations: hasMany('organization'),

});
