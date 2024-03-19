import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
  <nav className="navbar p-3 row bg-secondary-subtle border-bottom border-body " data-bs-theme="dark">
    <h1 className="text-primary-emphasis text-center">Nathan Dickinson</h1>
    <ul className="nav nav-underline fs-6 gap-4 justify-content-center">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me <i class="fa-solid fa-user"></i>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio <i class="fa-solid fa-folder-open"></i>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact <i class="fa-solid fa-address-book"></i>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          // This is a conditional (ternary) operator that checks to see if the current page is "Resume"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume <i class="fa-solid fa-file"></i>
        </Link>
      </li>
    </ul>
  </nav>
  );
}

export default NavTabs;
