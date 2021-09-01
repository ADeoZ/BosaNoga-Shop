import CartControl from "./CartControl";
import Logo from "./Logo";
import NavBar from "./Menu";
import SearchControl from "./Search/SearchControl";
import SearchForm from "./Search/SearchForm";

export default function Header() {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Logo />
            <div className="collapase navbar-collapse" id="navbarMain">
              <NavBar />
              <div>
                <div className="header-controls-pics">
                  <SearchControl />
                  <CartControl />
                </div>
                <SearchForm />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
