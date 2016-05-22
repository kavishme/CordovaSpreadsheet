angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaInAppBrowser, $cordovaOauth) {

console.log('blabla');
   $scope.googleLogin = function() {
   // alert('asd');
    $scope.showSpreadSheet = true;
        $cordovaOauth.google("376934127732-2ta5nqqf1m3hge39v889q7dtiaagp9qe.apps.googleusercontent.com", ["email"]).then(function(result) {
            // results
            $scope.showSpreadSheet = true;

        }, function(error) {
            // error
        });
    };




  //window.open('http://google.com','_self','location=no'); 

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
