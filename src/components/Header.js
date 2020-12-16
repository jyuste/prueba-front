import React from 'react';

import SearchBox from './SearchBox';

const Header = () => {

    return(
        <nav className="navbar is-info mb-5" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo" />
            </a>

          </div>

          <div id="navbarBasicExample" className="navbar-menu">

            <div className="navbar-end">
              <div className="navbar-item">
                <SearchBox />
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Header