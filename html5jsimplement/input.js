///////CLICKING EVENTS//////////////////////////////////////
function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while(currentElement = currentElement.offsetParent)
	
    canvasX = event.pageX - totalOffsetX - document.body.scrollLeft;
    canvasY = event.pageY - totalOffsetY - document.body.scrollTop;

    return {x:canvasX, y:canvasY}
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;
//From http://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element

LifeFormEnum = {
	POINT: "point",
    CROSS : "cross",
	SQUARE: "square",
    GLIDER_DR : "glider down-right",
	GLIDER_UR : "glider up-right",
	GLIDER_UL : "glider up-left",
	GLIDER_DL : "glider down-left"
};
var currLifeForm = LifeFormEnum.CROSS;

var changeLifeForm = function(){
	var selector = document.getElementById("lifeFormSelect");
	currLifeForm = eval(selector.options[selector.selectedIndex].value);
};

var decideWhichLife = function(x, y, fillAs, table){
	switch (currLifeForm){
		case LifeFormEnum.POINT:
			return setPoint(x, y, fillAs, table);
		case LifeFormEnum.CROSS:
			return setSmallCross(x, y, fillAs, table);
		case LifeFormEnum.SQUARE:
			return setSquare(x, y, fillAs, table);
		case LifeFormEnum.GLIDER_DR:
			return setGliderDR(x, y, fillAs, table);
		case LifeFormEnum.GLIDER_UR:
			return setGliderUR(x, y, fillAs, table);
		case LifeFormEnum.GLIDER_UL:
			return setGliderUL(x, y, fillAs, table);
		case LifeFormEnum.GLIDER_DL:
			return setGliderDL(x, y, fillAs, table);
		default: return null;
	}
};

var previewLife = function(event){
	var coords = canvas.relMouseCoords(event);
	if (coords.x >= 0 && coords.x < canvas_width && coords.y >= 0 && coords.y < canvas_height){
		var y = parseInt(coords.y/res);
		var x = parseInt(coords.x/res);
		
		clearPreview();
		//Preview Life
		previewGrid = decideWhichLife(x, y, true, previewGrid);
		
		if (leftMouseDown){
			grid = decideWhichLife(x, y, true, grid);
		}else if (rightMouseDown){
			grid = decideWhichLife(x, y, false, grid);
		}
	}
};

var clearPreview = function(event){
	previewGrid = initializeNewGrid(false);
};

var clickMouseDown = function(event){
	if (event.which == 1){
		leftMouseDown = true;
		clickToAddLife(event, true);
	}else if (event.which == 3){
		rightMouseDown = true;
		clickToAddLife(event, false);
	}
};

var clickMouseUp = function(event){
	if (event.which == 1)
		leftMouseDown = false;
	else if (event.which == 3)
		rightMouseDown = false;
};

var clickToAddLife = function(event, fillAs){
	var coords = canvas.relMouseCoords(event);
	if (coords.x >= 0 && coords.x < canvas_width && coords.y >= 0 && coords.y < canvas_height){
		var y = parseInt(coords.y/res);
		var x = parseInt(coords.x/res);
		
		//Create Life
		grid = decideWhichLife(x, y, fillAs, grid);
	}
};


//////OTHER INPUT EVENTS/////////////////////////////////////
var randomize = function(){
	grid = initializeNewGrid(true);
};
var clearGrid = function(){
	grid = initializeNewGrid(false);
};

var saveGrid = function(){
	for (var i = 0; i < grid.length; i++){
		savedGrid[i] = grid[i].slice(0);
	}
};

var loadGrid = function(){
	for (var i = 0; i < grid.length; i++){
		grid[i] = savedGrid[i].slice(0);
	}
};

var pauseLife = function(){
	if (!paused){
		document.getElementById("pauseButton").innerHTML="Play Game";
	}else{
		document.getElementById("pauseButton").innerHTML="Pause Game";
	}
	paused = !paused;
};

//FROM http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript
Array.prototype.compare = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0; i < this.length; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].compare(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}