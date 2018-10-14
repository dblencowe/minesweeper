# Minesweeper

## Objective
To recreate the classic Windows game Minesweeper in JavaScript, HTML and CSS

## Approach
- Create a core game class. This will run the main game loop as well as instantiate and configure other game classes.

- Next create a Map class to generate your game map. Create methods for getting and setting the map size as well as setting the state for inidividual Tiles

- Create a Tile class. This will represent an individual time on the game map and should have properties to define if it is `hidden` or `shown` as well as whether it contains a bomb.

- Alter your game class to add a game over state. The Game Over state is triggered when the player reveals a Tile with a bomb in.

- Add an event that is fired whenever a tile is clicked. The event should flip the tile, check to see if it's a bomb and then trigger the game over state if needed. `At this point don't worry about how many bombs are in adjacent tiles`
