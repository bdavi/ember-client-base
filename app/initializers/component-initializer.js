export function initialize(applicationInstance) {
  // Injects the router into all components
  // This allows us to do the following from a component: `this.get('router').transitionTo('route');`
  applicationInstance.inject('component', 'router', 'router:main');
}

export default {
  name: 'component-initializer',
  initialize: initialize
};
