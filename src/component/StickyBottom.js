import React from 'react'
// import './style.less'
import { NavLink } from 'react-router-dom';

const StickyBottom = () => {
	return (
		<div id="sticky-bottom">
			<nav>
				<div className="sticky-container">
					<div className="navbar-container">
						<NavLink className="nav-link" exact activeClassName="nav-link-active" to='/'>
							<div className="img-logo">
								<img src="https://visualpharm.com/assets/806/Pokedex-595b40b65ba036ed117d221c.svg" width="25" alt="https://imgur.com/nJrgSrv.png"/>
								<p className="text-logo">Pokédex</p>
							</div>
						</NavLink>
					</div>
					<div className="navbar-container">
						<NavLink className="nav-link" exact activeClassName="nav-link-active" to='/my-pokemon'>
							<div className="img-logo">
								<img src="https://imgur.com/nJrgSrv.png" width="25" alt="https://imgur.com/nJrgSrv.png"/>
								<p className="text-logo">My Pokémon List</p>
							</div>
						</NavLink>
					</div>
				</div>
			</nav>
		</div>
	)
}

StickyBottom.propTypes = {};

StickyBottom.defaultProps = {};

export default StickyBottom;