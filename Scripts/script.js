$(function() {

  (function projectCreator() {

    //variables for each project
    var taskProject = new Project('Assets/taskOrganizerScreenshot.jpg', 'Task Organizer','2016-01-08', 'https://taskorganizer.herokuapp.com/');
    var aimProject = new Project('Assets/aimBlasterScreenshot.jpg', 'Aim Blaster','2016-01-08', 'https://aimblaster.herokuapp.com/');

    //project Constructor function
    function Project (projectPicture, projectDescription, projectDate, projectLink) {
      this.projectPicture = projectPicture;
      this.projectDescription = projectDescription;
      this.projectDate = projectDate;
      this.projectLink = projectLink;
    }

    //function to create a new project using an existing template and filling in spots with the newly constructed project above
    Project.prototype.toHtml = function(thisFunction) {
      var template = Handlebars.compile($('#project-template').text());
      console.log('yes');
      return template(this);
    };

    //calling the method on each newly constructed Project in order to add it to the dom
    $('#projects').prepend(taskProject.toHtml());
    $('#projects').prepend(aimProject.toHtml());

  })();
  //code for using Nav bar
  $('#nav').on('click', '.nav-item', function(e) {
    e.preventDefault();
    $('.swapped-body-content').hide();
    var dataValue = $(this).attr('data-content');
    $('#' + dataValue).fadeIn();
  });
  //make home the default page
  $('#nav-list li:first-child').click();
});
