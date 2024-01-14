
const headerModule = angular
  .module('navbar', [])
  .controller('headerCtrl', function($rootScope, $scope, LocationService) {
    $scope.var = {
      isshow: true,
    }
    $scope.getHref = LocationService.getHref
  })
  .directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: 'src/ng/components/header/index.html'
    }
  })
  .name

export default headerModule