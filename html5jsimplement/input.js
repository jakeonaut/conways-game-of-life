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
	
    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
}
HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;
//From http://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element

var previewLife = function(event){
	var coords = canvas.relMouseCoords(event);
	if (coords.x >= 0 && coords.x < canvas_width && coords.y >= 0 && coords.y < canvas_height){
		var y = parseInt(coords.y/res);
		var x = parseInt(coords.x/res);
		
		clearPreview();
		//Create Life
		previewSmallCross(x, y, true);
	}
};

var clearPreview = function(event){
	previewGrid = initializeNewGrid(false);
};

var clickToAddLife = function(event){
	var coords = canvas.relMouseCoords(event);
	if (coords.x >= 0 && coords.x < canvas_width && coords.y >= 0 && coords.y < canvas_height){
		var y = parseInt(coords.y/res);
		var x = parseInt(coords.x/res);
		
		//Create Life
		setSmallCross(x, y, true);
	}
};


//////OTHER INPUT EVENTS/////////////////////////////////////
var randomize = function(){
	grid = initializeNewGrid(true);
};
var clearGrid = function(){
	grid = initializeNewGrid(false);
};

var pauseLife = function(){
	if (!paused){
		document.getElementById("pauseButton").innerHTML="Play Game";
	}else{
		document.getElementById("pauseButton").innerHTML="Pause Game";
	}
	paused = !paused;
};