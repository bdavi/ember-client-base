import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-left-item-sub-item', 'Integration | Component | nav left item sub item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nav-left-item-sub-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nav-left-item-sub-item}}
      template block text
    {{/nav-left-item-sub-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
