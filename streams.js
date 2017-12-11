Array.prototype.pipe = function (writeable) {
  for (var i = 0; i < this.length; i++) {
    writeable.push(this[i]);
  }
};

var readMe = ["buffer 1", "buffer 2", "buffer 3", "buffer 4", "buffer 5", "buffer 6", "buffer 7", "buffer 8", "buffer 9", "buffer 10", "buffer 11", "buffer 12", "buffer 13", "buffer 14", "buffer 15"];

var writeMe = [];

readMe.pipe(writeMe);
