$(function() {

  (function projectCreator() {

    //variables for each project
    var taskProject = new Project('taskOrganizerScreenshot.jpg', 'Task Organizer','2016-01-08', 'https://taskorganizer.herokuapp.com/');
    var aimProject = new Project('aimBlasterScreenshot.jpg', 'Aim Blaster','2016-01-08', 'https://aimblaster.herokuapp.com/');

    //project Constructor function
    function Project (projectPicture, projectDescription, projectDate, projectLink) {
      this.projectPicture = projectPicture;
      this.projectDescription = projectDescription;
      this.projectDate = projectDate;
      this.projectLink = projectLink;
    }

    //function to create a new project using an existing template and filling in spots with the newly constructed project above
    Project.prototype.toHtml = function(thisFunction) {
      var newProject = $('.template').clone();
      newProject.removeClass('template');
      newProject.find('a').attr('href', this.projectLink);
      newProject.find('img').attr('src', this.projectPicture);
      newProject.find('p.projectPar').text(this.projectDescription);
      newProject.find('time.projectDate').text(this.projectDate);
      $('#projectsDiv').prepend(newProject);
    };

    //calling the method on each newly constructed Project in order to add it to the dom
    taskProject.toHtml();
    aimProject.toHtml();

  })();

});
