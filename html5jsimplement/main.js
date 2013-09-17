var canvas_width = 640;
var canvas_height = 480;
var canvas;
var ctx;
var drawGridSeperator = false;

var lifeColor = "#ffffff";
var deathColor = "#000000";
var gridColor = "#808080";
var speed = 120;

var res = 8;
var width = canvas_width / res;
var height = canvas_height / res;
var paused = false;

//Initialize the grid with a random seed
var grid;
var previewGrid;
var savedGrid;
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
randomize();
savedGrid = grid.slice(0);
 
//WINDOW ONLOAD
window.onload = function(){
	canvas = document.getElementById("lifeCanvas");
	canvas.onselectstart = function () { return false; }
	ctx = canvas.getContext("2d");

	previewGrid = initializeNewGrid(false);
	updateGrid();
	drawGrid();
	document.getElementById("speedRange").value = 83;
	speed = (10000 / document.getElementById("speedRange").value);
	window.setTimeout(update,speed);
	setInterval(draw, 120);
	//document.getElementById("gridChecker").checked = true;
};

var update = function(){
	if (!paused)
		updateGrid();
	
	speed = (10000 / document.getElementById("speedRange").value);
	window.setTimeout(update,speed);
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

var draw = function(){
	drawGridSeperator = document.getElementById("gridChecker").checked;
	drawGrid();
	drawPreview();
};

var drawGrid = function(){
	//Clear the grid
	ctx.fillStyle=gridColor;
	ctx.fillRect(0, 0, canvas_width, canvas_height);
	
	for (var i = 0; i < height; i++){
		for (var j = 0; j < width; j++){
			if (grid[i][j]){
				ctx.fillStyle=lifeColor;
				if (drawGridSeperator)
					ctx.fillRect(j*res+1, i*res+1, res-1, res-1);
				else ctx.fillRect(j*res, i*res, res, res);
			}else if (!previewGrid[i][j]){
				ctx.fillStyle=deathColor;
				if (drawGridSeperator)
					ctx.fillRect(j*res+1, i*res+1, res-1, res-1);
				else ctx.fillRect(j*res, i*res, res, res);
			}
		}
	}
};

var drawPreview = function(){
	//Clear the grid
	ctx.fillStyle=gridColor;
	
	for (var i = 0; i < height; i++){
		for (var j = 0; j < width; j++){
			if (previewGrid[i][j]){
				if (!grid[i][j])
					ctx.fillRect(j*res, i*res, res, res);
			}
		}
	}
};