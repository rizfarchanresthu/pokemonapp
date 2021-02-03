import React from 'react'
import { NavLink } from 'react-router-dom';

const StickyTop = () => {
    return (
      <div id="sticky-top">
        <nav>
          <div className="sticky-container">
            <div className="title-card" >
              <p  className="title" >Pokédex</p>
            </div>
            <div className="right-container">
              <div className="navbar-container">
                <NavLink className="nav-link" exact activeClassName="nav-link-active" to='/'>
                  <div className="img-logo">
                    <img src="https://visualpharm.com/assets/806/Pokedex-595b40b65ba036ed117d221c.svg" width="50" alt="https://imgur.com/nJrgSrv.png"/>
                    <p className="text-logo">Pokédex</p>
                  </div>
                </NavLink>
              </div>
              <div className="navbar-container">
                <NavLink className="nav-link" exact activeClassName="nav-link-active" to='/my-pokemon'>
                  <div className="img-logo">
                    <img src="https://imgur.com/nJrgSrv.png" width="50" alt="https://imgur.com/nJrgSrv.png"/>
                    <p className="text-logo">My Pokémon List</p>
                  </div>
                </NavLink>
              </div>
            </div>
            
          </div>
        </nav>
      </div>
    )	
}

StickyTop.propTypes = {};

StickyTop.defaultProps = {};

export default StickyTop;