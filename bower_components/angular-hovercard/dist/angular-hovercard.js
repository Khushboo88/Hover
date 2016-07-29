
angular.module('hover', ['hovercard.tmpls']).directive('hovercard', function () {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: 'template/angular-hovercard.tmpl',
    scope:{ data : '=' },
    controller : function($scope){

       $scope.copysheet1 = {
        zoomImageSource : "Images/CopySheet_1.jpg" ,
    };

     $scope.copysheet2 = 
    {
       
        zoomImageSource : "Images/CopySheet_1.jpg" ,
    };
    },
    link: function ($scope, $element, $attrs) {

      $scope.show = {};
      $scope.show.card = false;
      $scope.hoverTmplUrl = "hoverCardDetail.html";
      var placement = $attrs.placement || 'bottomRight';
      $scope.hoverLabelStyle = {};
      $scope.hoverCardStyle = {};
      
      if (placement) {
        var positionStrings = placement.replace(/([A-Z])/g, ' $1').toLowerCase().split(' ');
        var positionObj = {};
        positionObj[positionStrings[0]] = true;
        positionObj[positionStrings[1]] = true;


        if (positionObj.left) {

          if(positionObj)
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

    $templateCache.put('template/angular-hovercard.tmpl', '<div class=angular-hovercard ng-mouseenter="showCard = true;" ng-mouseleave="showCard = false;"><label class=angular-hovercard-label ng-class="{ \'angular-hovercard-active\': showCard }" ng-style=hoverLabelStyle ng-transclude=""></label><div class=angular-hovercard-detail ng-class="{ \'angular-hovercard-active\': showCard }" ng-include=hoverTmplUrl ng-style=hoverCardStyle></div></div>');
  }
]);