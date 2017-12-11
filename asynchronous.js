/////// Non Blocking Code ///////

var sys = require("sys");

setTimeout(callback, 2000);

function callback() {
  sys.puts("world");
}

sys.puts("hello");

/////// OR ///////

var sys = require("sys");

setTimeout(function () {
  sys.puts("world");
}, 2000);

sys.puts("hello");
