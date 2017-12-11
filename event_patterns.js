/*\
|*|
|*| Minimal Implementation: Pub/Sub Pattern
|*|
\*/

// Breakdown
// Creates an eventObject to keep track of the desired emitters
// Should look like so: { emitterName: [callback, callback] };
var eventObject = {};

function on(emitterName, callback) {
  // If emitterName exists
  if (eventObject.hasOwnProperty(emitterName)) {
    // Then push it into the emitterNames array
    eventObject[emitterName].push(callback);
    // Otherwise
  } else {
    // Create an emitterName and add the callback into its array
    eventObject[emitterName] = [callback];
  }
}

function emit(emitterName) {
  // If emitterName exists
  if (eventObject.hasOwnProperty(emitterName)) {
    // Then cycle through each callback in the emitterNames array
    eventObject[emitterName].forEach(function(callback) {
      // And execute them while filling in the optional eventObject
      callback(eventObject);
    });
  // Otherwise
  } else {
    // Return undefined
    return undefined;
  }
}

function off(emitterName) {
  // If emitterName exists
  if (eventObject.hasOwnProperty(emitterName)) {
    // Then delete it
    delete eventObject[emitterName];
  // Otherwise
  } else {
    // Return undefined
    return undefined;
  }
}

// Usage:
// Creates an event with a callback that will log "Events!"
on("event", function() {
  console.log("Event!");
});
// Emits the event emitter
emit("event");
// Deletes the event Emitter
off("event");


/*\
|*|
|*| Alternative Implementation: Pub/Sub Pattern
|*|
\*/

// Breakdown
function EventHolder() {
  this.eventObject = {};
}

// Subscribe
EventHolder.prototype.on = function (emitterName, callback) {
  if (this.eventObject.hasOwnProperty(emitterName)) {
    this.eventObject[emitterName].push(callback);
  } else {
    this.eventObject[emitterName] = [callback];
  }
};

// Unsubscribe
EventHolder.prototype.off = function (emitterName) {
  if (this.eventObject.hasOwnProperty(emitterName)) {
    delete this.eventObject[emitterName];
} else {
    return undefined;
  }
};

// Publish
EventHolder.prototype.emit = function (emitterName) {
  if (this.eventObject.hasOwnProperty(emitterName)) {
    this.eventObject[emitterName].forEach(function(callback) {
      callback(this.eventObject);
    });
  } else {
    return undefined;
  }
};

// Usage
var div = new EventHolder();

div.on("click", function() {
  console.log("Clicked!");
});

div.emit("click");

div.off("click");
