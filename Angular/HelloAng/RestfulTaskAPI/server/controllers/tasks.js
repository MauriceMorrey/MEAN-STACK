var mongoose = require("mongoose");
var Task = mongoose.model("Task");

module.exports = {
  get_tasks: function(request, response) {
    Task.find({}, function(err, tasks) {
      if (err) {
        console.log("Oops! Something went wrong!");
        response.json({message:"something went wrong"});
      } else {
        console.log("Here are all the tasks and tasks found.");
        response.json({ tasks: tasks });
      }
    }).sort({ createdAt: -1 });
  },
  post_tasks: function(request, response) {
    console.log("POST DATA", request.body);
    var task = new Task({
      title: request.body.title,
      description: request.body.description,
      completed: request.body.completed
    });
    console.log("this is your info", task);
    task.save(function(err) {
      if (err) {
        console.log("something went wrong", err);

        for (var key in err.errors) {
          request.flash("registration", err.errors[key].message);
        }
        response.json(err);
      } else {
        console.log("successfully added a user and their task!");
        response.json(task);
      }
    });
  },
  showTask: function(request, response) {
    var id = request.params.id; //or request.params['id'];
    console.log("The task id requested is:", id);
    Task.findOne({ _id: id }, function(err, task) {
      if (err) {
        console.log("something went wrong", err);
        response.json(err);
      } else {
        console.log(task);
        response.json({ task: task });
      }
    });
},
updateTask: function(request, response) {
    var id = request.params.id; //or request.params['id'];
    console.log("The task id requested is:", id);
    Task.update(
      { _id: id },
      {
        title: request.body.title,
        description: request.body.description,
        completed: request.body.completed,
      },
      function(err, task) {
        if (err) {
          console.log("something went wrong", err);
          return response.json(err);
        } else {
          console.log("Successfully edited a task!");
          response.json(task);
        }
      }
    );
  },
  deleteTask: function(request, response) {
    var id = request.params.id; //or request.params['id'];
    console.log("The task id requested is:", id);
    Task.remove({ _id: id }, function(err) {
      if (err) {
        console.log("something went wrong", err);
        response.json(err);
      } else {
        console.log("Task has successfully been deleted!");
        response.json("Task Deleted");
      }
    });
  }
};
