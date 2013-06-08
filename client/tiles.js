// Initialize variables.
Meteor.startup(function() {
  current_user = Users.insert({name: "Test", x:0, y:0});
  Session.set("current_user", current_user);
});

// Main run loop.
var mousePos;
window.onmousemove = handleMouseMove;
Meteor.setInterval(run, framerate);

function handleMouseMove(event) {
  event = event || window.event;
  mousePos = {
    x: event.clientX,
    y: event.clientY
  };
};

function run() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}