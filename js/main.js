var signOut = angular.module('signOut', []);

signOut.factory('Roster', function($http){
	var Roster = {};
	$http.get('json/roster.json').success(function(data){
		Roster.members = data;
	});
	return Roster;
});

function RosterCtrl($scope, Roster) {
	$scope.roster = Roster;
}
