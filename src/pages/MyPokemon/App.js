import React from 'react'
import { useMediaQuery } from 'react-responsive'
import MyPokemonMobile from './Mobile'
// import MyPokemonDesktop from './Desktop'

const MyPokemon = (props) => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' })

    return (
        <div>
            {/* {isDesktopOrLaptop && <PokemonListDesktop {...props} />} */}
            {isTabletOrMobileDevice && <MyPokemonMobile {...props} />}
        </div>
    )
}

export default MyPokemon