import logo from "../images/logo.png";
import searchIcon from "../images/search.png";
const Navbar = () => {
  return (
    <nav>
      <section className="nav-section">
        <img src={logo} alt="Logo" className="logo" />
        <div className="searchBox">
          <label htmlFor="searchInput">Search</label>
          {/*Search functionality does not work yet.*/}
          <input type="text" className="searchInput" id="searchInput" />
          <img src={searchIcon} alt="Search Icon" />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
