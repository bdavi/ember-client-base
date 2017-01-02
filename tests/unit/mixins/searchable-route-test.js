import Ember from 'ember';
import SearchableRouteMixin from 'ember-client-base/mixins/searchable-route';
import { module, test } from 'qunit';

module('Unit | Mixin | searchable route');

// Replace this with your real tests.
test('it works', function(assert) {
  let SearchableRouteObject = Ember.Object.extend(SearchableRouteMixin);
  let subject = SearchableRouteObject.create();
  assert.ok(subject);
});
