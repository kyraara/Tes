import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => (
  <header className="sticky top-0 z-10 bg-white/80 backdrop-blur dark:bg-gray-900/80">
    <nav className="container flex items-center justify-between py-4">
      <NavLink to="/" className="text-xl font-bold">
        Kyra Aara
      </NavLink>
      <ul className="flex items-center space-x-4">
        <li>
          <NavLink to="/about" className="hover:text-indigo-600">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="hover:text-indigo-600">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className="hover:text-indigo-600">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:text-indigo-600">
            Contact
          </NavLink>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
