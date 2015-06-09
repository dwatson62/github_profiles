githubUserSearch.factory('Search', ['$http', function($http) {

  var queryUrl = 'https://api.github.com/search/users';
  var my_token = '926d44ffa8436d7b7fe2da50dd9aedac879900f5';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'access_token': my_token
        }
      });
    }
  }

}]);