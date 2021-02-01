import React from 'react'
import { useMediaQuery } from 'react-responsive'
import MyPokemonDesktop from './Desktop'
import MyPokemonMobile from './Mobile'

const MyPokemon = (props) => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' })

    return (
        <div>
            {isDesktopOrLaptop && <MyPokemonDesktop {...props} />}
            {isTabletOrMobileDevice && <MyPokemonMobile {...props} />}
        </div>
    )
}

export default MyPokemon