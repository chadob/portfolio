(function(module) {
  var projectController = {};

  // Done: Define a function that hides all main section elements, and then reveals just the #about section:
  projectController.index = function() {
    $('.swapped-body-content').hide();
    $('.projects').show();
  };
  module.projectController = projectController;
})(window);
