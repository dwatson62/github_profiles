describe('GitUserSearchController', function () {
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    // scope = $rootScope.$new();
    ctrl = $controller('GitUserSearchController', {
      // $scope: scope
    });
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

describe('when searching for a user', function () {

  var items = [
  {
    'login': 'tansaku',
    'avatar_url': 'https://avatars.githubusercontent.com/u/30216?v=3',
    'html_url': 'https://githb.com/tansaku'
  },
  {
    'login': 'stephenlloyd',
    'avatar_url': 'https://avatars.githubusercontent.com/u/196474?v=3',
    'html_url': 'https://github.com/stephenlloyd'
  }
];

  it('displays search results', function () {
    expect(ctrl.searchResult.items).toEqual(items);
  });

});

});