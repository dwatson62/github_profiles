githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
  var self = this;
  var my_token = '926d44ffa8436d7b7fe2da50dd9aedac879900f5';
  var searchResource = $resource('https://api.github.com/search/users');


  self.doSearch = function () {

    self.searchResult = searchResource.get(
      { q: self.searchTerm },
      { access_token: my_token }
    );



  }
}]);