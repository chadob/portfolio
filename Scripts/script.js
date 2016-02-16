(function(module) {

    //project Constructor function
  function Project (project) {
    Object.keys(project).forEach(function(property, index, keys) {
      this[property] = project[property];
    },this);
  }
  //code to create a method to check localStorage for json object and prepend it to the dom
  Project.fetchAll = function() {
    Project.projectList = [];
    var dataList;
    if (localStorage.storageProjects) {
      dataList = JSON.parse(localStorage.storageProjects);
      Project.projectList = dataList.map(function(project) {
        $('.projects').prepend(new Project(project).toHtml());
      });
      console.log(Project.projectList);
    } else {
      $.getJSON('Data/projectData.json', function(data) {
        localStorage.setItem('storageProjects', JSON.stringify(data));
        dataList = JSON.parse(localStorage.storageProjects);
        Project.projectList = dataList.map(function(project) {
          $('.projects').prepend(new Project(project).toHtml());
        });
      });
    }
  };

  //function to create a new project using an existing template and filling in spots with the newly constructed project above
  Project.prototype.toHtml = function(thisFunction) {
    var template = Handlebars.compile($('#project-template').text());
    return template(this);
  };

  //run fetchAll()
  Project.fetchAll();
  module.Project = Project;
})(window);
