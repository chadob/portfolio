(function(module) {
  var homeController = {};

  homeController.index = function() {
    Project.fetchAll();
    $('.swapped-body-content').hide();
    $('.home').show();
  };

  module.homeController = projectController;
})(window);
