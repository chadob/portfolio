(function(module) {

    //project Constructor function
  function Project (project) {
    Object.keys(project).forEach(function(property, index, keys) {
      this[property] = project[property];
    },this);
  }
  Project.projectList = [];
  //code to create a method to check localStorage for json object and prepend it to the dom
  Project.fetchAll = function() {
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

  //useless code to include reduce because I can't think of any reason why I would use it in this site
  var arr = ['Hi, ', 'my ', 'name ', 'is ', 'Chad.'];
  var str = '';
  str = arr.reduce(function(a, b) {
    return str + a + b;
  });
  console.log(str);

  module.Project = Project;
})(window);
