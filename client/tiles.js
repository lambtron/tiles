// Initialize variables.
// var framerate = 60;
var current_user;

Meteor.startup(function() {
  current_user = Players.insert({name: "Test", x:0, y:0});
  Session.set("current_user", current_user);
});

Template.players.player = function() {
  return Players.find({ _id: { $not: Session.get("current_user")}});
  // return Players.find({});
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
    console.log(event.clientX + ", " + event.clientY);
    Players.update(Session.get("current_user"), {$set: {x: event.clientX, y: event.clientY}});
  }
});