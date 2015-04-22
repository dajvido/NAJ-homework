UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (data) {
  console.log("Store add " + data);
  this.data.push({
    task: data,
    done: false
  });
  console.log("Store emit show");
  this.emit("todos_show");
};

UAM.Store.prototype.update = function (id, data) {
  console.log("Store update task with id " + id);
  this.data[id].done = !this.data[id].done;
  this.emit("todos_show");
};
