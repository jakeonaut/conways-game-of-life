//THEME CONTROL/////////////////////////////////////////////////////////////////////////////////////
var blackOutLifeBorders = function(){
	document.getElementById("whiteLife").style.borderColor = "#000000";
	document.getElementById("purpleLife").style.borderColor = "#000000";
	document.getElementById("orangeLife").style.borderColor = "#000000";
	document.getElementById("blueLife").style.borderColor = "#000000";
	document.getElementById("redLife").style.borderColor = "#000000";
	document.getElementById("greenLife").style.borderColor = "#000000";
	document.getElementById("blackLife").style.borderColor = "#000000";
};
var blackOutDeathBorders = function(){
	document.getElementById("whiteDeath").style.borderColor = "#000000";
	document.getElementById("purpleDeath").style.borderColor = "#000000";
	document.getElementById("orangeDeath").style.borderColor = "#000000";
	document.getElementById("blueDeath").style.borderColor = "#000000";
	document.getElementById("redDeath").style.borderColor = "#000000";
	document.getElementById("greenDeath").style.borderColor = "#000000";
	document.getElementById("blackDeath").style.borderColor = "#000000";
};

var white = "#ffffff";
var whiteLife = function(){
	lifeColor = white;
	blackOutLifeBorders();
	document.getElementById("whiteLife").style.borderColor = "#ffff00";
};
var whiteDeath = function(){
	deathColor = white;
	blackOutDeathBorders();
	document.getElementById("whiteDeath").style.borderColor = "#ffff00";
};

var purple = "#ff6699";
var purpleLife = function(){
	lifeColor = purple;
	blackOutLifeBorders();
	document.getElementById("purpleLife").style.borderColor = "#ffff00";
};
var purpleDeath = function(){
	deathColor = purple;
	blackOutDeathBorders();
	document.getElementById("purpleDeath").style.borderColor = "#ffff00";
};

var orange = "#fae161";
var orangeLife = function(){
	lifeColor = orange;
	blackOutLifeBorders();
	document.getElementById("orangeLife").style.borderColor = "#ffff00";
};
var orangeDeath = function(){
	deathColor = orange;
	blackOutDeathBorders();
	document.getElementById("orangeDeath").style.borderColor = "#ffff00";
};

var blue = "#92b6db";
var blueLife = function(){
	lifeColor = blue;
	blackOutLifeBorders();
	document.getElementById("blueLife").style.borderColor = "#ffff00";
};
var blueDeath = function(){
	deathColor = blue;
	blackOutDeathBorders();
	document.getElementById("blueDeath").style.borderColor = "#ffff00";
};

var red = "#ff0000";
var redLife = function(){
	lifeColor = red;
	blackOutLifeBorders();
	document.getElementById("redLife").style.borderColor = "#ffff00";
};
var redDeath = function(){
	deathColor = red;
	blackOutDeathBorders();
	document.getElementById("redDeath").style.borderColor = "#ffff00";
};

var green = "#a4e676";
var greenLife = function(){
	lifeColor = green;
	blackOutLifeBorders();
	document.getElementById("greenLife").style.borderColor = "#ffff00";
};
var greenDeath = function(){
	deathColor = green;
	blackOutDeathBorders();
	document.getElementById("greenDeath").style.borderColor = "#ffff00";
};

var black = "#000000";
var blackLife = function(){
	lifeColor = black;
	blackOutLifeBorders();
	document.getElementById("blackLife").style.borderColor = "#ffff00";
};
var blackDeath = function(){
	deathColor = black;
	blackOutDeathBorders();
	document.getElementById("blackDeath").style.borderColor = "#ffff00";
};