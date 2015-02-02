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
	setInterval(function() {
		Move();
		}
		, (1000/30));

}
function Move() {
	c = document.getElementsByTagName('div')[0];
	var pos = (parseInt(c.style.left) + 10);
	c.style.left = pos + 'px';
	c.style.transition = 'left 0.2s ease-out';
}
onload = init;
function init() {MakeCircle();}