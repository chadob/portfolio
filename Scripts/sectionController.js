(function(module) {
  var sectionController = {};

  // Done: Define a function that hides all main section elements, and then reveals just the #about section:
  sectionController.index = function(ctx) {
    $('.swapped-body-content').hide();
    var clickedSection = ctx.params.section;
    $('.' + clickedSection).show();
  };
  module.sectionController = sectiontController;
})(window);
