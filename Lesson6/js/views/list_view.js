UAM.ListView = function(data) {
  UAM.EventEmitter.call(this);
  
  this.elem = data;
}

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.update = function(data) {
  console.log("List View update");
  this.elem.innerHTML = "";
  for (var i=0; i<data.length; i++) {
    var checked = "",
        todo = "todo";
    if (data[i].done) {
      checked = " checked ";
      todo = "";
    }
    
    this.elem.innerHTML += '<label class="list-group-item ' + todo + '" data-task-id="' + i + '"><input type="checkbox"' + checked + '> ' + data[i].task + '</label>';
    
  }
  var ths = this;
  var todos = document.querySelectorAll('.list-group-item');
  for (var i=0; i<todos.length; i++) {
    todos[i].addEventListener('click', function() {
      ths.emit("todo_update", this.dataset.taskId);
    });
  }
}