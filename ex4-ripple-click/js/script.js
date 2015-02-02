function MakeCircle(e) {
	e = (e || event); // for older browsers
	console.log(e);
	// make an html element, not on the page yer
	var c = document.createElement('div');
	c.style.width = '20px';
	c.style.height= '20px';
	c.style.border = "2px solid #66c";
	c.style.borderRadius="100px";
	c.style.opacity="1";
	c.style.transition = 'height .2s ease-out, width .2s east-out, opacity .5s ease-out';
	// x and y coordinates on the page are its
	// css left and top properties
	c.style.position = 'absolute';
	c.style.left = e.clientX + 'px';
	c.style.top = e.clientY + 'px';
	// add the element to the page
	document.body.appendChild(c);
	// now that the circle has been created, a split second later
	// change some CSSS, and the transition will cause an animation
	setTimeout(function() {
		c.style.width='150px';
		c.style.height='150px';
		c.style.opacity=".2";
	}, 100);

}
document.onmousemove = function(e) {
			MakeCircle(e);
}