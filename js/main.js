var signOut = angular.module('signOut', []);

signOut.factory('Roster', function($http){
	var Roster = {};
	$http.get('json/roster.json').success(function(data){
		Roster.members = data;
	});
	return Roster;
});

signOut.factory('Devices', function($http){
	var Devices = {};
	$http.get('json/devices.json').success(function(data){
		Devices.list = data;
	});
	return Devices;
});


signOut.controller('RosterCtrl', function($scope, $http, Roster, Devices) {
	var storedItem = JSON.parse(localStorage.getItem('deviceStorage'));
	if(!storedItem) {
	 	storedItem = Roster;
	 }
		$scope.roster = storedItem;
		$scope.devices = Devices;

	$scope.save = function() {
    $http.post('json/roster.json', $scope.roster).then(function(data) {
     localStorage.setItem('deviceStorage', JSON.stringify($scope.roster));
     for (var i in $scope.roster) {
		   for (var j in $scope.roster[i]) {
		   	localStorage.setItem('deviceStorage' + i, JSON.stringify($scope.roster[i][j]));
		   }
		}
		storedItem = JSON.parse(localStorage.getItem('deviceStorage'));
		$scope.msg = storedItem;
    });
  };

});

signOut.directive("activate", function() {
  return function(scope, element) {
    element.bind("click", function() {
        document.getElementById('table').setAttribute('class','active');
    });
  }
});


