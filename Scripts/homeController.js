(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('.swapped-body-content').hide();
    $('.home').show();
  };

  module.homeController = homeController;
})(window);
