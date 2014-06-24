angular.module('netanimations.controllers', [])

    .controller('AppCtrl', function($scope) {
    })

    .controller('PlaylistsCtrl', function($scope) {
        $scope.playlists = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 }
        ];
    })

    .controller('AnimationsCtrl', function($scope, $stateParams) {

    })

    .controller('ConfigCtrl', function($scope, $stateParams, $translate) {

        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };

    })

    .controller('PlaylistCtrl', function($scope, $stateParams) {

    })

    .controller('ContactCtrl', function($scope) {

    })

    .controller('ThreeWayHandshakeCtrl', function($scope) {

        $scope.teste = function() {
            $("#box").animate({left:'250px', width: '500px'});
            //$scope.$apply();
        };
    })

    .controller('AboutCtrl', function($scope, $stateParams) {

    });