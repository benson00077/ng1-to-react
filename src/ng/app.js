import '@uirouter/angularjs'
import { AppComponent } from './app.component';
import ComponentsModule from './components/components';
import ServicesModule from './services/services';

const appModule = angular
  .module('appModule', [
    'ui.router',
    ComponentsModule,
    ServicesModule,
  ])
  .config(['$stateProvider', function($stateProvider) {
    /** UI-Router config */
    const helloState = {
      name: 'hello',
      url: '/hello',
      template: '<h3>hello world!</h3>'
    }
    const aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    }
    //TODO: state lost when switching route, workaround is to preserve state into service.
    // \_ ref: https://stackoverflow.com/questions/18023823/preserve-state-with-angular-ui-router
    const counterState = {
      name: 'counter',
      url: '/counter',
      component: 'counter'
    }
    const counterChildState = {
      name: 'counter.child',
      url: '/hello',
      component: 'counter',
    }
    $stateProvider.state(helloState)
    $stateProvider.state(aboutState)
    $stateProvider.state(counterState)
    $stateProvider.state(counterChildState)
  }])
  .component('app', AppComponent);

export default appModule;