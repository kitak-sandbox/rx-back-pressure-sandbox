var Rx = require('rx-lite');

var source = Rx.Observable.timer(200, 100).controlled();

source.subscribe(function(x) {
  setTimeout(function() {
    console.log(x);
    source.request(1);
  }, 1200);
});

source.request(1);
