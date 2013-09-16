//INDIVIDUAL FUNCTIONS FOR INDIVIDUAL LIFEFORMS//////////////////////////////
var setSmallCross = function(x, y, fillAs){
	grid[y][x] = fillAs;
	y -= 1; if (y < 0) y = height-1;
	grid[y][x] = fillAs;
	y += 1; if (y >= height) y = 0;
	x -= 1; if (x < 0) x = width-1;
	grid[y][x] = fillAs;
	y += 1; if (y >= height) y = 0;
	x += 1; if (x >= width) x = 0;
	grid[y][x] = fillAs;
	y -= 1; if (y < 0) y = height-1;
	x += 1; if (x >= width) x= 0;
	grid[y][x] = fillAs;
};

//INDIVIDUAL FUNCTIONS FOR INDIVIDUAL LIFEFORMS//////////////////////////////
var previewSmallCross = function(x, y, fillAs){
	ctx.fillStyle=gridColor;
	if (!fillAs) ctx.fillStyle=deathColor;
	
	previewGrid[y][x] = fillAs;
	y -= 1; if (y < 0) y = height-1;
	previewGrid[y][x] = fillAs;
	y += 1; if (y >= height) y = 0;
	x -= 1; if (x < 0) x = width-1;
	previewGrid[y][x] = fillAs;
	y += 1; if (y >= height) y = 0;
	x += 1; if (x >= width) x = 0;
	previewGrid[y][x] = fillAs;
	y -= 1; if (y < 0) y = height-1;
	x += 1; if (x >= width) x= 0;
	previewGrid[y][x] = fillAs;
};