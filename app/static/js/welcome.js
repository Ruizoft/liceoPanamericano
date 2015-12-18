(function(){
	angular.module('liceo', [])
		.directive('slider',function(){
			return {
				restrict: 'E',
				templateUrl : '/static/directives/slider.html'
			}
		})
		.directive('colegio',function(){
			return {
				restrict: 'E',
				templateUrl : '/static/directives/colegio.html'
			}
		})
		.directive('estudiantes',function(){
			return {
				restrict: 'E',
				templateUrl : '/static/directives/estudiantes.html'
			}
		})
		.directive('contacto',function(){
			return {
				restrict: 'E',
				templateUrl : '/static/directives/contacto.html'
			}
		})
		.controller('FlowController', function($scope){
			$scope.flow = 0;
			$scope.mapSet = 0;
			$scope.changeView = function(value){
				$(".mainLoadContainer").scrollTop(0);
				$scope.flow = value;
				if(value == 3 && $scope.mapSet == 0){
					initMap();
					$scope.mapSet = 1;
				}
			}
		})
})()

$(".mainLoadContainer").scroll(function() {
        $('.imgSpecialOne, .imgSpecialTwo').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(".mainLoadContainer").scrollTop();
        console.log("image "+imagePos);
        console.log("window "+topOfWindow);
            if (imagePos > 0 && imagePos < topOfWindow+30) {
            	console.log("done");
                $(this).addClass("fadeIn");
            }
     
        });
    });


var map;
var locat = {lat: 4.823444, lng: -75.7271644};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: locat,
    zoom: 16
  });

  var marker = new google.maps.Marker({
    position: locat,
    animation: google.maps.Animation.DROP,
    map: map,
    title: 'Liceo',
    label: 'Liceo'
  });
}

window.onload = function(){ 
  $('[data-toggle="popover"]').popover({trigger: 'hover'});
}