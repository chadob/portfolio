(function(module) {
  var names = {};
  names.all = [];
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
      dataList[0].projectTitle = names.all[0];
      dataList[1].projectTitle = names.all[1];
      Project.prependProjects(dataList);
    } else {
      $.getJSON('Data/projectData.json', function(data) {
        localStorage.setItem('storageProjects', JSON.stringify(data));
        dataList = JSON.parse(localStorage.storageProjects);
        dataList[0].projectTitle = names.all[0];
        dataList[1].projectTitle = names.all[1];
        Project.prependProjects(dataList);
      });
    }
  };
  Project.prependProjects = function(dataList) {
    dataList.map(function(project) {
      $('.projects').prepend(new Project(project).toHtml());
    });
  };
  //get titles from github for projects, probably not going to include in final website build
  Project.getGithubInfoAndRunFetchAll = function() {
    $.ajax({
       url: '/github/users/chadob/repos' +
       '?er_page=4&sort=updated',
       type: 'GET',
       success: function(data, message, xhr) {
         names.all.push(data[4].name);
         names.all.push(data[5].name);
       }
    }).done(Project.fetchAll);
  }

  //function to create a new project using an existing template and filling in spots with the newly constructed project above
  Project.prototype.toHtml = function(thisFunction) {
    var template = Handlebars.compile($('#project-template').text());
    return template(this);
  };

  //run getGithubInfo which recursively runs fetchAll
  Project.getGithubInfoAndRunFetchAll();
  module.Project = Project;
})(window);
