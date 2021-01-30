import React from 'react'
import { useMediaQuery } from 'react-responsive'
import PokemonListMobile from './Mobile'

const PokemonList = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' })

    return (
        <div>
             {/* {isDesktopOrLaptop && <DesktopDetail {...props}/>} */}
            {isTabletOrMobileDevice && <PokemonListMobile />}
        </div>
    )
}

export default PokemonList