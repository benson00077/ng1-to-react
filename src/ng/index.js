// eslint-disable-next-line no-unused-vars
import angular from 'angular';
// eslint-disable-next-line no-unused-vars
import appModule from './app';

const component = () => {
  // eslint-disable-next-line angular/document-service
  const element = document.createElement('div');

  element.setAttribute('ng-app', 'appModule');
  element.className = 'app';

  element.innerHTML = `
            <app></app>
      `;

  return element;
};

angular.element(() => {
  angular.bootstrap(document, ['appModule']);
});

// eslint-disable-next-line angular/document-service
const root = document.querySelector('#root').appendChild(component());