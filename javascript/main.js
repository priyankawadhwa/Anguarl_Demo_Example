var app = angular.module('demo', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'main.html'
    }).
    when('/signUp', {
      templateUrl: 'signUp.html'
    }).
    when('/signIn', {
        templateUrl: 'signIn.html'
      }).
      when('/login', {
          template: '<div class="alert alert-success fade in"  style="margin: 86px 281px 7px; width: 50%"><strong>Congrats!</strong> You successfully logged In</div>'        
        }).
    otherwise({
      redirectTo: '/'
    });
});

app.controller('FormController' , function($scope){
	
	$scope.submitForm = function(isValid) {
		if(isValid) {
			alert('Congratulations! you registeration has been successful')
		}
		
		$scope.name="";
		$scope.username="";
		$scope.email="";
		$scope.pwd="";
		$scope.password="";
	}
})
