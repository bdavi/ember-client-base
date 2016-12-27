import DS from 'ember-data';
import Ember from 'ember';

const { isPresent, computed } = Ember;
const { belongsTo } = DS;

export default DS.Model.extend({

  user: belongsTo('user'),

  isUserValid: computed('user', function() {
    return isPresent(this.get('user'));
  }),

  organization: belongsTo('organization'),

  isOrganizationValid: computed('organization', function() {
    return isPresent(this.get('organization'));
  }),

  isValid: computed.and('isUserValid', 'isOrganizationValid'),

});
