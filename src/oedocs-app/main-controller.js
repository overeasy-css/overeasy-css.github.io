app.controller('MainController', function ($scope, $location, $rootScope) {

    $scope.isCurrentLocation = function (loc) {
        return loc === $location.path();
    }

    $scope.isActive = function (loc) {
        if ($scope.isCurrentLocation(loc)) {
            return 'bg-yellow-lighter';
        } else {
            return '';
        }
    }

    $scope.toggleNav = function () {
        if ($scope.navOpen) {
            $scope.navOpen = false;
        } else {
            $scope.navOpen = true;
        }
        return $scope.navOpen;
    }

    $scope.init = function () {
        $scope.navOpen = false;
    }

    $scope.init();

    $scope.$on('$routeChangeSuccess', function () {
        $scope.init();
    });

});
