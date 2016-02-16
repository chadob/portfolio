(function(module) {
  var aboutController = {};

  // Done: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = function() {
    $('.swapped-body-content').hide();
    $('.about').show();
  };
  console.log("hi");
  module.aboutController = aboutController;
})(window);
