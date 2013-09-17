//INDIVIDUAL FUNCTIONS FOR INDIVIDUAL LIFEFORMS//////////////////////////////
var modx = function(x, inc){
	x += inc;
	if (x >= width) x = 0;
	if (x < 0) x = width-1;
	return x;
};
var mody = function(y, inc){
	y += inc;
	if (y >= height) y = 0;
	if (y < 0) y = height-1;
	return y;
};

var setPoint = function(x, y, fillAs, table){
	table[y][x] = fillAs;
};

var setSmallCross = function(x, y, fillAs, table){
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
};

var setSquare = function(x, y, fillAs, table){
	table[y][x] = fillAs;
	x = modx(x, 1);
	table[y][x] = fillAs;
	y = mody(y, 1);
	table[y][x] = fillAs;
	x = modx(x, -1);
	table[y][x] = fillAs;
};

var setGliderDR = function(x, y, fillAs, table){
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
};

var setGliderUR = function(x, y, fillAs, table){
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
};

var setGliderUL = function(x, y, fillAs, table){
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
};

var setGliderDL = function(x, y, fillAs, table){
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
};