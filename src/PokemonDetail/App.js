import React from 'react'
import { useMediaQuery } from 'react-responsive'
import PokemonDetailMobile from './Mobile'
// import PokemonDetailDesktop from './Desktop'

const PokemonDetail = (props) => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' })

    return (
        <div>
             {/* {isDesktopOrLaptop && <PokemonDetailDesktop />} */}
            {isTabletOrMobileDevice && <PokemonDetailMobile {...props} />}
        </div>
    )
}

export default PokemonDetail