app.controller('mainController', ['$scope', '$http', function($scope, $http){

$scope.view = {};
$scope.view.portfolio = false;
$scope.view.education = false;
$scope.view.languages = false;
$scope.view.aboutme = false;
$scope.view.portfoliofn = function(){
  if($scope.view.portfolio == true){
    $scope.view.portfolio = false;
  }
  else if($scope.view.portfolio == false){
    $scope.view.portfolio = true;
  }
  $scope.view.education = false;
  $scope.view.languages = false;
  $scope.view.aboutme = false;
};
$scope.view.educationfn = function(){
  if($scope.view.education == true){
    $scope.view.education = false;
  }
  else if($scope.view.education == false){
    $scope.view.education = true;
  }
  $scope.view.portfolio = false;
  $scope.view.languages = false;
  $scope.view.aboutme = false;
};
$scope.view.languagesfn = function(){
  if($scope.view.languages == true){
    $scope.view.languages = false;
  }
  else if($scope.view.languages == false){
    $scope.view.languages = true;
  }
  $scope.view.portfolio = false;
  $scope.view.education = false;
  $scope.view.aboutme = false;
};
$scope.view.aboutmefn = function(){
  if($scope.view.aboutme == true){
    $scope.view.aboutme = false;
  }
  else if($scope.view.aboutme == false){
    $scope.view.aboutme = true;
  }
  $scope.view.portfolio = false;
  $scope.view.education = false;
  $scope.view.languages = false;
};

}])
