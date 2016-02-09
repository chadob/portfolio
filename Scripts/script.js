$(function() {

  (function projectCreator() {

    //project Constructor function
    function Project (project) {
      this.projectPicture = project.projectPicture;
      this.projectTitle = project.projectTitle;
      this.projectDate = project.projectDate;
      this.projectLink = project.projectLink;
    }
    Project.projectList = [];
    //code to create a method to check localStorage for json object and prepend it to the dom
    Project.fetchAll = function() {
      var dataList;
      if (localStorage.storageProjects) {
        dataList = JSON.parse(localStorage.storageProjects);
        dataList.forEach(function(project) {
          Project.projectList.push(new Project(project));
        });
        console.log(Project.projectList);
        Project.projectList.forEach(function(project) {
          $('#projects').prepend(project.toHtml());
        });
      } else {
        $.getJSON('Data/projectData.json', function(data) {
          localStorage.setItem('storageProjects', JSON.stringify(data));
          dataList = JSON.parse(localStorage.storageProjects);
          dataList.forEach(function(project) {
            Project.projectList.push(new Project(project));
          });
          Project.projectList.forEach(function(project) {
            $('#projects').prepend(project.toHtml());
          });
        });
      }
    };

    //function to create a new project using an existing template and filling in spots with the newly constructed project above
    Project.prototype.toHtml = function(thisFunction) {
      var template = Handlebars.compile($('#project-template').text());
      console.log('yes');
      return template(this);
    };
    Project.fetchAll();
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
