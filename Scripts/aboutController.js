(function(module) {
  var homeController = {};

  // Done: Define a function that hides all main section elements, and then reveals just the #about section:
  homeController.index = function() {
    $('.swapped-body-content').hide();
    $('.home').show();
  };

  module.homeController = projectController;
})(window);
