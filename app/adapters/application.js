import ENV from '../config/environment';
import Ember from 'ember';
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default JSONAPIAdapter.extend(DataAdapterMixin, {

  namespace: 'v1',

  host: ENV.host,

  authorizer: 'authorizer:application',

  urlForFindRecord(id, modelName, snapshot) {
    let url = this._super(...arguments);
    const query = Ember.get(snapshot, 'adapterOptions.query');
    if (query) {
      url += '?' + Ember.$.param(query);
    }
    return url;
  },

});
