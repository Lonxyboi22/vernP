import "bulma/css/bulma.min.css";

const Navigation = (props) => {
    return (
      <nav
      className="navbar is-light is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Home
        </a>
      </div>

      <div className="navbar-menu has-dropdown is-active">
        <a className="navbar-item" href="/works">
          Works
        </a>
        <a className="navbar-item" href="/bio">
          Bio
        </a>
        <a className="navbar-item" href="/contact">
          Contact
        </a>
      </div>
    </nav>
    )
  }
  
  export default Navigation