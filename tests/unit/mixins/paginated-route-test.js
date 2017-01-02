import Ember from 'ember';
import PaginatedRouteMixin from 'ember-client-base/mixins/paginated-route';
import { module, test } from 'qunit';

module('Unit | Mixin | paginated route');

// Replace this with your real tests.
test('it works', function(assert) {
  let PaginatedRouteObject = Ember.Object.extend(PaginatedRouteMixin);
  let subject = PaginatedRouteObject.create();
  assert.ok(subject);
});
