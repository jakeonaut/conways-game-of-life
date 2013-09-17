//INDIVIDUAL FUNCTIONS FOR INDIVIDUAL LIFEFORMS//////////////////////////////
var modx = function(x, inc){
	x += inc;
	if (x >= width && wrapContent) x = 0;
	if (x < 0 && wrapContent) x = width-1;
	return x;
};
var mody = function(y, inc){
	y += inc;
	if (y >= height) y = 0;
	if (y < 0) y = height-1;
	return y;
};

var setPoint = function(x, y, fillAs, grid){
	var table = grid.slice(0);
	table[y][x] = fillAs;
	return table;
};

var setSmallCross = function(x, y, fillAs, grid){
	var table = grid.slice(0);
	table[y][x] = fillAs;
	y = mody(y, -1);
	table[y][x] = fillAs;
	y = mody(y, 1);
	x = modx(x, -1);
	table[y][x] = fillAs;
	y = mody(y, 1);
	x = modx(x, 1);
	table[y][x] = fillAs;
	y = mody(y, -1);
	x = modx(x, 1);
	table[y][x] = fillAs;
	return table;
};

var setSquare = function(x, y, fillAs, grid){
	var table = grid.slice(0);
	table[y][x] = fillAs;
	x = modx(x, 1);
	table[y][x] = fillAs;
	y = mody(y, 1);
	table[y][x] = fillAs;
	x = modx(x, -1);
	table[y][x] = fillAs;
	return table;
};

var setGliderDR = function(x, y, fillAs, grid){
	var table = grid.slice(0);
	//Glider going diagonally down-right
	table[y][x] = fillAs;
	x = modx(x, 1);
	y = mody(y, 1);
	table[y][x] = fillAs;
	y = mody(y, 1);
	table[y][x] = fillAs;
	x = modx(x, -1);
	table[y][x] = fillAs;
	x = modx(x, -1);
	table[y][x] = fillAs;
	return table;
};

var setGliderUR = function(x, y, fillAs, grid){
	var table = grid.slice(0);
	//Glider going diagonally up-right
	table[y][x] = fillAs;
	x = modx(x, 1);
	y = mody(y, -1);
	table[y][x] = fillAs;
	x = modx(x, 1);
	table[y][x] = fillAs;
	y = mody(y, 1);
	table[y][x] = fillAs;
	y = mody(y, 1);
	table[y][x] = fillAs;
	return table;
};

var setGliderUL = function(x, y, fillAs, grid){
	var table = grid.slice(0);
	//Glider going diagonally up-left
	table[y][x] = fillAs;
	x = modx(x, -1);
	y = mody(y, -1);
	table[y][x] = fillAs;
	y = mody(y, -1);
	table[y][x] = fillAs;
	x = modx(x, 1);
	table[y][x] = fillAs;
	x = modx(x, 1);
	table[y][x] = fillAs;
	return table;
};

var setGliderDL = function(x, y, fillAs, grid){
	var table = grid.slice(0);
	//Glider going diagonally down-left;
	table[y][x] = fillAs;
	x = modx(x, -1);
	y = mody(y, 1);
	table[y][x] = fillAs;
	x = modx(x, -1);
	table[y][x] = fillAs;
	y = mody(y, -1);
	table[y][x] = fillAs;
	y = mody(y, -1);
	table[y][x] = fillAs;
	return table;
};