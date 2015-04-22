UAM.FooterView = function(data) {
  UAM.EventEmitter.call(this);
  this.elem = data;
}

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

UAM.FooterView.prototype.update = function(all, active) {
  this.elem.querySelector('#list-all').innerHTML = all
  this.elem.querySelector('#list-active').innerHTML = active
}
