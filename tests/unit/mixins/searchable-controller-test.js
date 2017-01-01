import Ember from 'ember';
import SearchableControllerMixin from 'ember-client-base/mixins/searchable-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | searchable controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let SearchableControllerObject = Ember.Object.extend(SearchableControllerMixin);
  let subject = SearchableControllerObject.create();
  assert.ok(subject);
});
