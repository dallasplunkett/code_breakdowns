var obj = {
  arr: [],
  put: function(data) {
    this.arr.push(data);
    return this; /* [[ allows chaining ]] */
  },
  log: function() {
    console.log(this.arr);
    return this; /* [[ allows chaining ]] */
  },
  end: function() {
    console.log("end");
  }
};
