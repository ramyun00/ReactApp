var React = require('react');
var {link} = require('react-router');

var Examples = (props) => {
  return (
  	<div>
	    <h1 className="text-center">Examples Component</h1>
	    <p>Here are a few example locations to try out:</p>
	    <ol>
	    	<li>
	    		<link to="/?location=New%20York">New York, NY</link>
	    	</li>
	    	<li>
	    		<link to="/?location=Rio">Rio, Brazil</link>
	    	</li>
	    </ol>
	</div>
  )
};

module.exports = Examples;
