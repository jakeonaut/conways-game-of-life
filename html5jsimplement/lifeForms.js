//INDIVIDUAL FUNCTIONS FOR INDIVIDUAL LIFEFORMS//////////////////////////////
var modx = function(x, inc){
	x += inc;
	if (x >= width) x = x - width;
	if (x < 0) x = x + width;
	return x;
};
var mody = function(y, inc){
	y += inc;
	if (y >= height) y = y - height;
	if (y < 0) y = y + height;
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

var setShipR = function(x, y, fillAs, grid){
	var table = grid.slice(0);
	//Ship going horizontally right
	table[y][x] = fillAs;
	y = mody(y, 2);
	table[y][x] = fillAs;
	y = mody(y, 1);
	x = modx(x, 1);
	table[y][x] = fillAs;
	x = modx(x, 1);
	table[y][x] = fillAs;
	x = modx(x, 1);
	table[y][x] = fillAs;
	x = modx(x, 1);
	table[y][x] = fillAs;
	y = mody(y, -1);
	table[y][x] = fillAs;
	y = mody(y, -1);
	table[y][x] = fillAs;
	y = mody(y, -1);
	x = modx(x, -1);
	table[y][x] = fillAs;
	return table;
};

var setShipD = function(x, y, fillAs, grid){
	var table = grid.slice(0);
	//Ship going vertically down
	table[y][x] = fillAs;
	x = modx(x, -2);
	table[y][x] = fillAs;
	x = modx(x, -1);
	y = mody(y, 1);
	table[y][x] = fillAs;
	y = mody(y, 1);
	table[y][x] = fillAs;
	y = mody(y, 1);
	table[y][x] = fillAs;
	y = mody(y, 1);
	table[y][x] = fillAs;
	x = modx(x, 1);
	table[y][x] = fillAs;
	x = modx(x, 1);
	table[y][x] = fillAs;
	y = mody(y, -1);
	x = modx(x, 1);
	table[y][x] = fillAs;
	return table;
};

var setShipL = function(x, y, fillAs, grid){
	var table = grid.slice(0);
	//Ship going horizontally left
	table[y][x] = fillAs;
	y = mody(y, -2);
	table[y][x] = fillAs;
	y = mody(y, -1);
	x = modx(x, -1);
	table[y][x] = fillAs;
	x = modx(x, -1);
	table[y][x] = fillAs;
	x = modx(x, -1);
	table[y][x] = fillAs;
	x = modx(x, -1);
	table[y][x] = fillAs;
	y = mody(y, 1);
	table[y][x] = fillAs;
	y = mody(y, 1);
	table[y][x] = fillAs;
	y = mody(y, 1);
	x = modx(x, 1);
	table[y][x] = fillAs;
	return table;
};

var setShipU = function(x, y, fillAs, grid){
	var table = grid.slice(0);
	//Ship going vertically up
	table[y][x] = fillAs;
	x = modx(x, 2);
	table[y][x] = fillAs;
	x = modx(x, 1);
	y = mody(y, -1);
	table[y][x] = fillAs;
	y = mody(y, -1);
	table[y][x] = fillAs;
	y = mody(y, -1);
	table[y][x] = fillAs;
	y = mody(y, -1);
	table[y][x] = fillAs;
	x = modx(x, -1);
	table[y][x] = fillAs;
	x = modx(x, -1);
	table[y][x] = fillAs;
	x = modx(x, -1);
	y = mody(y, 1);
	table[y][x] = fillAs;
	return table;
};