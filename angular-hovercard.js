
var app = angular.module('hover', ['hovercard.tmpls']);

app.directive('hovercard', function () {
  return {
    restrict: 'EA',
    
    data : '=',
    controller:'myContrl',
    templateUrl: 'template/angular-hovercard.tmpl',
    scope:{ data : '=' },

    link: function ($scope, $element, $attrs) {

      $scope.show = {};
      $scope.show.card = false;

      $scope.hoverTmplUrl = "templates/hoverCardDetail.html";
      var placement = $attrs.placement || 'bottomRight';
      $scope.hoverLabelStyle = {};
      $scope.hoverCardStyle = {};
      
      if (placement) {
        var positionStrings = placement.replace(/([A-Z])/g, ' $1').toLowerCase().split(' ');
        var positionObj = {};
        positionObj[positionStrings[0]] = true;
        positionObj[positionStrings[1]] = true;


        if (positionObj.left) {
           $scope.hoverCardStyle.left = '';
          $scope.hoverCardStyle.right = '10em ';
        }

        if (positionObj.right) {
         $scope.hoverCardStyle.left = '10em ';
          $scope.hoverCardStyle.right = ' ';
        }
        
        if (positionObj.bottom) {
          $scope.hoverCardStyle.bottom = '';
          $scope.hoverCardStyle.top = '16em';
          $scope.hoverCardStyle['margin-top'] = '-2em';
        }
        
        if (positionObj.top) {
          $scope.hoverCardStyle.bottom = '7em';
          $scope.hoverCardStyle.top = '';
          $scope.hoverCardStyle['margin-bottom'] = '7em';
        }
        
      }
    }
  };
});


angular.module('hovercard.tmpls', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/angular-hovercard.tmpl', '<a href = ""><img src = "{{data. thumbnailSource}}" width = "{{width}}" height = "{{height}}" class=angular-hovercard ng-mouseenter="showCard = true;" ng-mouseleave="showCard = false;"><label class=angular-hovercard-label ng-class="{ \'angular-hovercard-active\': showCard }" ng-style=hoverLabelStyle></a></label><embed ng-src = "{{data.zoomImageSource}}" height = "300" width = "300" class=angular-hovercard-detail ng-class="{ \'angular-hovercard-active\': showCard }" ng-style=hoverCardStyle>');
  }
]);

app.controller('myContrl', function($scope) {


    $scope.copysheet1 = {
       
        thumbnailSource : "Images/copysheet1-min.jpg",
        zoomImageSource : "Images/CopySheet_1.jpg" ,
    };

     $scope.copysheet2 = 
    {
        thumbnailSource : "Images/copysheet1-min.jpg",
        zoomImageSource : "Images/CopySheet_1.jpg" ,
    };

    $scope.width = 160;
    $scope.height = 180;

});