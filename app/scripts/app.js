(function() {  

	$(".button-collapse").sideNav();

	var app = angular.module('app',['ngRoute','ngAnimate','ngMessages']);

	app.config(function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'views/home.html'
		});
		$routeProvider
		.when('/repetir', {
			templateUrl: 'views/repetir.html'
		});
		$routeProvider
		.when('/if', {
			templateUrl: 'views/if.html'
		});
		$routeProvider
		.when('/form', {
			templateUrl: 'views/form.html'
		});
		$routeProvider
		.otherwise('/');
		// configure html5 to get links working on jsfiddle
		$locationProvider.html5Mode(false);
	});

	app.run(function ($location,$rootScope){

		var sitios = ['/if','/form'];
		var i = 0;

		$rootScope.$on('$routeChangeSuccess', function(){
			
			if ($location.path() != '/' ) {
				$rootScope.siguiente = true;
			}else{
				$rootScope.siguiente = false;
				i = 0;
			}
	    });

		$rootScope.next = function(){
			$location.path(sitios[i++]);
		}


	});

	
})();