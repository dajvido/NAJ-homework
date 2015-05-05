UAM.InputView = function(data) {
  UAM.EventEmitter.call(this);
  
  this.input = data;
  
  var ths = this,
      button = document.querySelector('#buttontodo');

  button.addEventListener('click', function() {
    console.log("Input View emit add");
    ths.emit("todo_add", ths.input.value);
    ths.input.value = '';
  });
}

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);