import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About Me</Link>
    </nav>
  );
}

export default Navigation;