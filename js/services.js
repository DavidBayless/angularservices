app.service('person', function() {

  var _favoriteTree = 'oak';

  this.name='Elle';
  this.favoriteColor = 'Seafoam Green';
  this.getTree = function() {
    return _favoriteTree;
  };
});
