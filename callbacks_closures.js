/*\
|*|  ===================
|*|  DOM EVENT LISTENERS
|*|  ===================
\*/

document.addEventListener("click", function(event) {
  console.log(event.keyCode);
});

// Breakdown:
var doc = {
  listenFor: function(string, callback) {
    var event = { keyCode: 12 };

    if (string === "click") {
      console.log("Triggered A Click Event");
    }

    callback(event);
  }
};

// Usage:
doc.listenFor("click", function(event) {
  console.log(event.keyCode);
});

// Result:
// > Triggered A Click Event
// > 12

/*\
|*|  =================
|*|  NODES HTTP MODULE
|*|  =================
\*/

http.get("/url", function(req, res) {
  req.send();
  res.write();
});

// Breakdown:
var http = {
  get: function(url, callback) {
    var req = {
      send: function() {
        console.log("sent");
      }
    }

    var res = {
      write: function() {
        console.log("wrote");
      }
    }

    console.log(url);
    callback(req, res);
  }
};

// Usage:
http.get("/url", function(req, res) {
  req.send();
  res.write();
});

// Result:
// > sent
// > wrote

/*\
|*|  ===================================
|*|  JAVASCRIPTS BUILT IN FOREACH METHOD
|*|  ===================================
\*/

array.forEach(function(item) {
  console.log(item);
});

// Breakdown:
var array = [1,2,3];

Array.prototype.each = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// Usage:
array.each(function(item) {
  console.log(item);
});

// Result:
// > 1
// > 2
// > 3

/*\
|*|  =============
|*|  BASIC VERSION
|*|  =============
\*/

// Breakdown:
var mod = {
  met: function(callback) {
    callback(null);
  }
};

// Usage:
mod.met(function(x) {
  console.log(x);
});

// Result:
// > null
