import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';

const StickyTop = () => {
    const history = useHistory()
    const acceptedRoutes = ["/pokemon-detail"];
    const isVisible = acceptedRoutes.includes(window.location.pathname);
    if(isVisible){
        return (
            <div id="header">
              <div onClick={() => history.goBack()}>
                <img className="back-btn" 
                alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAATUlEQVRIie3MOxEAIBAD0RSU+KNEAlIQggyEwTF8DOQaZrLbP0Cdiu3CDJumNrNOPkxHFCNGDM0A9UENgYFEiRJFUpmDLlVZZlMuzFdNO/WPEVqT7vQAAAAASUVORK5CYII="
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAATUlEQVRIie3MOxEAIBAD0RSU+KNEAlIQggyEwTF8DOQaZrLbP0Cdiu3CDJumNrNOPkxHFCNGDM0A9UENgYFEiRJFUpmDLlVZZlMuzFdNO/WPEVqT7vQAAAAASUVORK5CYII="
                />
              </div>
            <div>
              <p>Pokémon Detail</p>
            </div>
          </div>
        )
    } else {
        return <div id="header" style={{display: "none"}}></div>
    }
	
}

StickyTop.propTypes = {};

StickyTop.defaultProps = {};

export default StickyTop;