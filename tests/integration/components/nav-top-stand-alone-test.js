import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nav-top-stand-alone', 'Integration | Component | nav top stand alone', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nav-top-stand-alone}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nav-top-stand-alone}}
      template block text
    {{/nav-top-stand-alone}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
