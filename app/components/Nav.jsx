var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="nav">
      <IndexLink to="/" className="link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" className="link" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/examples" className="link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
    </div>
  );
};

module.exports = Nav;
