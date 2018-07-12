var Tasks = require("../controllers/tasks.js");

module.exports = function(app) {
  app.get("/api/tasks", function(request, response) {
    Tasks.get_tasks(request, response);
  });

  app.post("/api/tasks", function(request, response) {
    Tasks.post_tasks(request, response);
  });

  app.get("/api/showTask/:id", function(request, response) {
    Tasks.showTask(request, response);
  });

  app.put("/api/updateTask/:id", function(request, response) {
    Tasks.updateTask(request, response);
  });

  app.delete("/api/deleteTask/:id", function(request, response) {
    Tasks.deleteTask(request, response);
  });
};
