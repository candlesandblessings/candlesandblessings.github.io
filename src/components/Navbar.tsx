import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', display: 'flex', gap: '1rem' }}>
      <Link to="/">Home</Link>
      <Link to="/collection">Collection</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
