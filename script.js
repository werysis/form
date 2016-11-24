function validationCtrl($scope) {
   var validUsername = "Гаррик Поттер";
   var validEmail = "hogwards@mail.com";
   
   $scope.reset = function(){
		$scope.username = validUsername;
		$scope.email = validEmail;
   }   
   
   $scope.checkData = function() {
		if ($scope.username != validUsername || $scope.email != validEmail) {
			alert("Увы вы нам не подходите:(");
		} else {
			alert("Нормасик!");
		}
	}
}