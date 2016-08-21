app.controller('mainController', ['$scope', '$http', function($scope, $http){

$scope.view = {};
$scope.view.portfolio = false;
$scope.view.education = false;
$scope.view.experience = false;
$scope.view.languages = false;
$scope.view.aboutme = false;
$scope.view.portfoliofn = function(){
  $scope.view.portfolio = true;
};
$scope.view.educationfn = function(){
  $scope.view.education = true;
};
$scope.view.experiencefn = function(){
  $scope.view.experience = true;
};
$scope.view.languagesfn = function(){
  $scope.view.languages = true;
};
$scope.view.aboutmefn = function(){
  $scope.view.aboutme = true;
};

}])
