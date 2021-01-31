import React from 'react'
import { useMediaQuery } from 'react-responsive'
import PokemonListMobile from './Mobile'
import PokemonListDesktop from './Desktop'

const PokemonList = (props) => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' })

    return (
        <div>
            {isDesktopOrLaptop && <PokemonListDesktop {...props} />}
            {isTabletOrMobileDevice && <PokemonListMobile {...props} />}
        </div>
    )
}

export default PokemonList