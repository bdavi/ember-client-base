import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('button-cancel', 'Integration | Component | button cancel', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{button-cancel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#button-cancel}}
      template block text
    {{/button-cancel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
