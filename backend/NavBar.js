import '../components/CustomNav.css';
import PropTypes from 'prop-types';

function NavBar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light customNav" id='navEdit'>
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div  id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                New 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Notification
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                SignIn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                About({props.aboutUs})
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;

NavBar.propTypes={
  title:PropTypes.string,
  aboutUs:PropTypes.string
}

NavBar.defaultProps={
  title:'Enter title',
  aboutUs:'adarsh is developers'
}

