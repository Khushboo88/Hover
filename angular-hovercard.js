var app = angular.module('hover', []);

app.directive('hovercard', function() {
    return {
        restrict: 'EA',
        transclude: true,
        controller: 'myContrl',
        templateUrl: 'angular-hovercard.html',
        scope: {
            data: '='
        },
        link: function($scope, $element, $attrs) {

            $scope.show = {};
            $scope.show.card = false;
            $scope.hoverTmplUrl = "hoverCardDetail.html";
            var placement = $attrs.placement ||'bottomRight';
            $scope.hoverLabelStyle = {};
            $scope.hoverCardStyle = {};

            if (placement) {
                var positionStrings = placement.replace(/([A-Z])/g, ' $1').toLowerCase().split(' ');
                var positionObj = {};
                positionObj[positionStrings[0]] = true;
                positionObj[positionStrings[1]] = true;
            }
        }
    };
});
app.controller('myContrl', function($scope) {
    $scope.copysheet1 = {
        zoomImageSource: "Images/CopySheet_1.jpg",
    };
    $scope.width = 160;
    $scope.height = 180;

});