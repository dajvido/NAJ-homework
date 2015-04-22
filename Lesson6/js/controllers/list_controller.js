function ListCtrl(listView, store) {
  UAM.EventEmitter.call(this);
  
  store.on("todos_show", function () {
    console.log("List Controller update listview");
    listView.update(store.data);
  });
  
  listView.on("todo_update", function (task_id) {
    store.update(task_id, listView);
  });
}
UAM.utils.inherits(UAM.EventEmitter, ListCtrl);
