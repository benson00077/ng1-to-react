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
    $stateProvider.state(helloState)
    $stateProvider.state(aboutState)
  }])
  .component('app', AppComponent);

export default appModule;