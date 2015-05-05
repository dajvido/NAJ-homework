function InputCtrl(inputView, store) {
  UAM.EventEmitter.call(this);
  
  inputView.on("todo_add", function (inputValue) {

    if (inputValue) {
      console.log("Input Controller add " + inputValue);
      store.add(inputValue);
    }
  });
}
UAM.utils.inherits(UAM.EventEmitter, InputCtrl);
