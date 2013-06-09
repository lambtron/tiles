// Initialize variables.
// var framerate = 60;
var current_user;

Meteor.startup(function() {
  current_user = Players.insert({name: "Test", x:0, y:0});
  Session.set("current_user", current_user);
});

// var current_x = 0;
// var current_y = 0;

// // Main run loop.
// var mousePos;
// window.onmousemove = handleMouseMove;
// Meteor.setInterval(run, framerate);

// function handleMouseMove(event) {
//   // console.log("event: " + event + ", window event: " + window.event);
//   event = event || window.event;
//   mousePos = {
//     x: event.clientX,
//     y: event.clientY
//   };
// };

// function run() {
//   // console.log(window.mousePos);
//   if (mousePos) {
//     // Get width and height of the window in the run loop
//     // in case people scale the window size during the game.
//     // var windowWidth = window.innerWidth;
//     // var windowHeight = window.innerHeight;

//     // Convert x and y coordinates to percentages to scale for all screens.
//     var current_x = mousePos.x;
//     var current_y = mousePos.y;

//     // Update current user's coordinates to the mouse.
//     Players.update(Session.get("current_user"), {$set: {x: current_x, y: current_y}});

//     // Testing.
//     console.log(current_x + ", " + current_y);
//   } else {
//     return [0,0]
//   }
// };

Template.players.player = function() {
  return Players.find({});
};

Template.tiles.tile = function() {
  return Tiles.find({});
}

Template.tiles.events({
  'mouseenter .tile': function(event) {
    // If mouseenter, then change the color of the tile.
    // This returns _id and name of the tile in the Collection.
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    Tiles.update(this._id, {$set: {color: color}});
  },
  'mousemove': function(event) {
    // console.log(event.clientX + ", " + event.clientY);
    Players.update(Session.get("current_user"), {$set: {x: event.clientX, y: event.clientY}});
  }
});