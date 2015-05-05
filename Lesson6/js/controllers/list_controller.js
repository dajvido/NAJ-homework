function ListCtrl(listView, store) {
  UAM.EventEmitter.call(this);
  
  store.on("todos_show", function (data) {
    console.log("List Controller update listview");
    listView.update(data);
  });
  
  listView.on("todo_update", function (task_id) {
    store.update(task_id, listView);
  });
}
UAM.utils.inherits(UAM.EventEmitter, ListCtrl);
