var canvas_width = 640;
var canvas_height = 480;
var canvas;
var ctx;

var lifeColor = "#ffffff";
var deathColor = "#000000";
var speed = 10;

var res = 4;
var width = canvas_width / res;
var height = canvas_height / res;

//Initialize the grid with a random seed
var grid;
var initializeNewGrid = function(randomize){
	var returnGrid = new Array();
	for (var i = 0; i < height; i++){
		var row = new Array();
		for (var j = 0; j < width; j++){
			if (randomize)
				row[j] = Boolean(Math.floor(Math.random()*2));
			else row[j] = false;
		}
		returnGrid[i] = row;
	}
	return returnGrid;
};
var randomize = function(){
	grid = initializeNewGrid(true);
};
randomize();
 
//WINDOW ONLOAD
window.onload = function(){
	canvas = document.getElementById("lifeCanvas");
	ctx = canvas.getContext("2d");

	updateGrid();
	drawGrid();
	setInterval(update, speed);
};

var update = function(){
	updateGrid();
	drawGrid();
};

var updateGrid = function(){
	var nextGen = initializeNewGrid(false);
	for (var i = 0; i < height; i++){
		for (var j = 0; j < width; j++){
			var numLiveNeighbors = 0;
			var x;
			var y;
			//check for left neighbor/////////////////////////////////////
			x = j-1; y = i;
			if (x < 0) x = width-1; 
			if (grid[y][x])
				numLiveNeighbors++;
			//check for LEFT + TOP neighbor//////////////////////////////
			x = j-1; y = i-1;
			if (x < 0) x = width-1;
			if (y < 0) y = height-1;
			if (grid[y][x])
				numLiveNeighbors++;
			//check for top neighbor/////////////////////////////////////
			x = j; y = i-1;
			if (y < 0) y = height-1;
			if (grid[y][x])
				numLiveNeighbors++;
			//check for RIGHT + TOP neighbor////////////////////////////////
			x = j+1; y = i-1;
			if (x >= width) x = 0;
			if (y < 0) y = height-1;
			if (grid[y][x])
				numLiveNeighbors++;
			//check for right neighbor/////////////////////////////////////
			x = j+1; y = i;
			if (x >= width) x = 0;
			if (grid[y][x])
				numLiveNeighbors++;
			//check for RIGHT + BOTTOM neighbor///////////////////////////
			x = j+1; y = i+1;
			if (x >= width) x = 0;
			if (y >= height) y = 0;
			if (grid[y][x])
				numLiveNeighbors++;
			//check for BOTTOM neighbor///////////////////////////////////
			x = j; y = i+1;
			if (y >= height) y = 0;
			if (grid[y][x])
				numLiveNeighbors++;
			//check for LEFT + BOTTOM neighbor////////////////////////////
			x = j-1; y = i+1;
			if (x < 0) x = width-1;
			if (y >= height) y = 0;
			if (grid[y][x])
				numLiveNeighbors++;
			
			nextGen[i][j] = grid[i][j];
			if (grid[i][j]){
				if (numLiveNeighbors < 2)
					nextGen[i][j] = false;
				else if (numLiveNeighbors > 3)
					nextGen[i][j] = false;
			}else if (numLiveNeighbors == 3)
				nextGen[i][j] = true;
		}
	}
		
	//ASSIGN NEXT GEN
	grid = nextGen.slice(0);
	nextGen = null;
};

var drawGrid = function(){
	//Clear the grid
	ctx.fillStyle=deathColor;
	ctx.fillRect(0, 0, canvas_width, canvas_height);
	
	ctx.fillStyle=lifeColor;
	for (var i = 0; i < height; i++){
		for (var j = 0; j < width; j++){
			if (grid[i][j]){
				ctx.fillRect(j*res, i*res, res, res);
			};
		}
	}
};