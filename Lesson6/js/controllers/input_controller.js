function InputCtrl(inputView, store) {
  UAM.EventEmitter.call(this);
  
  inputView.on("todo_add", function () {

    if (inputView.input.value) {
      console.log("Input Controller add " + inputView.input.value);
      store.add(inputView.input.value);
      inputView.input.value = '';
    }
  });
}
UAM.utils.inherits(UAM.EventEmitter, InputCtrl);
