var app = angular.module('textAnimateApp', ['ngAnimate']);

var controller = app.controller('textAnimateCtrl', function($scope) {
  $scope.styles = [
    { style: 'default', name: 'Default'},
    { style: 'plain-text', name: 'Plain Text'},
    { style: 'metro-flat-red', name: 'Metro Flat Red'},
    { style: 'metro-flat-green', name: 'Metro Flat Green'},
    { style: 'metro-flat-blue', name: 'Metro Flat Blue'},
    { style: 'circles', name: 'Circles'}    
  ];
  
  $scope.animations = [
    { style: 'slideInUp', name: 'Slide' },
    { style: 'bounceInDown', name: 'Bounce'},
    { style: 'fadeIn', name: 'Fade', },
    { style: 'flipInY', name: 'Flip', },
    { style: 'rotateIn', name: 'Rotate', },
    { style: 'zoomIn', name: 'Zoom', },
    { style: 'lightSpeedIn', name: 'Light Speed', }
  ];
  
  $scope.textStyle = $scope.styles[0];
  $scope.textAnimation = $scope.animations[0];
  $scope.letters = [];
  

  $scope.checkSpace = function(letter) {
    return letter == " ";
  };
  
  $scope.updateText = function() {
    //update text based on action in text box
    $scope.letters = $scope.myText.split(''); 
  };
});