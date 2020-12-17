import React from 'react';

import SearchBox from './SearchBox';
import logo from '../assets/img/github-512.png';

const Header = (props) => {

    return(
        <nav className="navbar is-black mb-5" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-item logo-container">
              <img src={logo} alt="logo" />
            
            </div>
          </div>
              <div className="navbar-item">
                <form onSubmit={props.handler}>
                  <SearchBox />
                </form>
              </div>
        </nav>
    )
}

export default Header