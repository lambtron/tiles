Meteor.startup(function() {
	Players.remove({});

	Tiles.remove({});

	if (Tiles.find().count() === 0) {
		for (var i = 0; i < 100; i++) {
			// Random color.
			var color = '#'+Math.floor(Math.random()*16777215).toString(16);
			Tiles.insert({name: i, color: color});
		};
	};
});