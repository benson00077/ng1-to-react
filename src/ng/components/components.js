import navbar from './header/ctrl'
import counter from './counter/ctrl'

const ComponentsModule = angular
  .module('components', [navbar, counter])
  .name

export default ComponentsModule