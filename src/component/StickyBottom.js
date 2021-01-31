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
								<img src="https://assets.adira.one/mobil/images/icon/new_icon/home_2.png" alt=""/>
							</div>
						</NavLink>
					</div>
					<div className="navbar-container">
						<NavLink className="nav-link" exact activeClassName="nav-link-active" to='/my-pokemon'>
							<div className="img-logo">
								<img src="https://assets.adira.one/mobil/images/icon/new_icon/login_2.png" alt=""/>
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