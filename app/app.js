angular.module('app', [])
.controller('gitHubDataController', ['$scope','$http', function($scope,$http) {
	
$scope.getGitInfo = function () {
$http.get("https://api.github.com/users/" + $scope.username)
        	.success(function(data) {
           	 $scope.userData = data;
           	 
            	reposData();
        	});
        	var reposData =function() {
        		$http.get($scope.userData.repos_url)
				.success(function(data) {
					
           		 $scope.repositaryData = data;

        	 });
	};
}
	

}]);