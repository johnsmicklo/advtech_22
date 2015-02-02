// variables
var dpf, movetimer, destx, timercounter = 0;

function MakeCircle() {
	// make an html element, not on the page yet
	var c = document.createElement('div');
	c.style.width = '200px';
	c.style.height= '200px';
	c.style.border = "2px solid #66c";
	c.style.borderRadius="100px";
	c.style.opacity="1";
	// x and y coordinates on the page are its
	// css left and top properties
	c.style.position = 'absolute';
	c.style.left = '50px';
	c.style.top = '50px';
	// add the element to the page
	document.body.appendChild(c);
}
function Move() {
	c = document.getElementsByTagName('div')[0];
	timercounter++;
		// calculate the distance the X has to travel
	//take the mouse X and substract the div's x
	var xdistance = destx - parseInt(c.style.left);
	//c.style.left = destx + 'px';
	// divide that to get the little amount it should move each frame
	dpf = xdistance / 30;
	
	var pos = (parseInt(c.style.left) + dpf);
	c.style.left = pos + 'px';
	//c.style.transition = 'left 0.2s ease-out';
	// stop the trip
	if(timercounter >= 30) {
		clearInterval(movetimer);
		timercounter = 0;
	}
	
}
function causeTrip(e) {
	e = (e || event);
	//console.log(e);
	var c = document.getElementsByTagName('div')[0];
	destx = e.clientX;
		// once this function has occurred thirty times
	// in case the move timer is already running, stop it
			clearInterval(movetimer);
		timercounter = 0;
	// start a timer so the DIV moves that amount 30 times per second
	movetimer = setInterval(Move,(1000/30));
	
}
onload = init;
function init() {
	MakeCircle();
	// event handler
	document.onclick = function() {
		causeTrip();
	};
}