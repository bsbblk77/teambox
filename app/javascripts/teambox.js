Teambox = {
  Models: {},
  Collections: {},
  Controllers: {},
  Views: {},
  init: function() {
    Loader.init();

    // Set the new root url
    if (window.location.hash === '') {
      window.location.hash = '#!/';
    }

    // Fetch current user
    Teambox.my_user = new Teambox.Models.User();
    Teambox.my_user.fetch({ success: Loader.loaded('user') });

    // Fetch my tasks
    Teambox.my_tasks = new Teambox.Collections.Tasks();
    Teambox.my_tasks.fetch({ success: Loader.loaded('tasks') });

    // Fetch my threads
    Teambox.my_threads = new Teambox.Collections.Threads();
    Teambox.my_threads.fetch({ success: Loader.loaded('activities') });

    // Print my tasks
    Teambox.my_tasks_counter_view = new Teambox.Views.MyTasksCounter({
      collection: Teambox.my_tasks
    });

    Teambox.my_tasks_view = new Teambox.Views.MyTasks({
      collection: Teambox.my_tasks
    });

    Teambox.all_tasks_view = new Teambox.Views.AllTasks({
      collection: Teambox.my_tasks
    });

    Teambox.activities_view = new Teambox.Views.Activities({
      collection: Teambox.my_threads
    });

    app = new Teambox.Controllers.AppController();
    Backbone.history.start();

  }
};
