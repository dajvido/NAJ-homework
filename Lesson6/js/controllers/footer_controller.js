function FooterCtrl(footerView, store) {
  UAM.EventEmitter.call(this);
  
  store.on("todos_show", function () {
    console.log("Footer Controller update");
    var data = store.data,
        all = data.length;
    var active = 0;
    for (var i=0; i<all; i++) {
      if (!data[i].done) {
        active += 1;
      }
    }
    footerView.update(all, active);
  });

}
UAM.utils.inherits(UAM.EventEmitter, FooterCtrl);
