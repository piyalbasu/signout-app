var signOut = angular.module('signOut', []);

// signOut.factory('Roster', function($http){
// 	var Roster = {};
// 	$http.get('json/roster.json').success(function(data){
// 		Roster.members = data;
// 	});
// 	return Roster;
// });

signOut.factory('Devices', function($http){
	var Devices = {};
	$http.get('json/devices.json').success(function(data){
		Devices.list = data;
	});
	return Devices;
});


signOut.controller('RosterCtrl', function($scope, $http) {
	$http.get('json/roster.json').success(function(data){
		$scope.roster = data;
	});
	

	$scope.save = function() {
    $http.post('json/roster.json', $scope.roster).then(function(data) {
     $scope.msg = 'Data sent: '+ JSON.stringify($scope.roster[0].email);
    });
    //$scope.msg = 'Data sent: '+ JSON.stringify($scope.languages);
  };
});

function DeviceCtrl($scope, Devices) {
	$scope.devices = Devices;
}

signOut.directive("enter", function() {
    return function(scope, element) {
        element.bind("click", function() {
            document.getElementById('devices').style.display = 'block';
        })
    }
});


