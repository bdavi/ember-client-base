import DS from 'ember-data';
import Ember from 'ember';

const { isPresent, computed } = Ember;
const { attr } = DS;

export default DS.Model.extend({

  newPassword: attr('string'),

  newPasswordConfirmation: '',

  oldPassword: attr('string'),

  userId: attr('number'),

  isNewPasswordValid: computed('newPassword', function() {
    return isPresent(this.get('newPassword'));
  }),

  isNewPasswordConfirmationValid: computed('newPasswordConfirmation', function() {
    return isPresent(this.get('newPasswordConfirmation'));
  }),

  newPasswordMatchesConfirmation: computed('newPassword', 'newPasswordConfirmation', function() {
    return this.get('newPassword') === this.get('newPasswordConfirmation');
  }),

  isOldPasswordValid: computed('oldPassword', function() {
    return isPresent(this.get('oldPassword'));
  }),

  isUserIdValid: computed('userId', function() {
    return isPresent(this.get('userId'));
  }),

  isValid: computed.and('isNewPasswordValid', 'isNewPasswordConfirmationValid',
    'isOldPasswordValid', 'isUserIdValid'),

});
