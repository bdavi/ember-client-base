import DS from 'ember-data';
import Ember from 'ember';
import validator from 'npm:validator';

const { attr, hasMany } = DS;
const { isPresent, isBlank, computed } = Ember;
const { isEmail, isURL, isMobilePhone } = validator;

export default DS.Model.extend({

  name: attr('string'),

  isNameValid: computed('name', function() {
    return isPresent(this.get('name'));
  }),

  address: attr('string'),

  phone: attr('string'),

  isPhoneValid: computed('phone', function() {
    const phone = this.get('phone');
    return isBlank(phone) || isMobilePhone(phone, 'en-US');
  }),

  url: attr('string'),

  isUrlValid: computed('url', function() {
    const url = this.get('url');
    return isBlank(url) || isURL(url, { require_protocol: false });
  }),

  email: attr('string'),

  isEmailValid: computed('email', function() {
    const email = this.get('email');
    return isBlank(email) || isEmail(email);
  }),

  users: hasMany('user'),

  memberships: hasMany('membership'),

  isValid: computed.and('isNameValid', 'isPhoneValid', 'isUrlValid', 'isEmailValid'),

});
