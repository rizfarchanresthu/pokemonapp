import React from 'react'
import { useMediaQuery } from 'react-responsive'
import MyPokemonDetailMobile from './Mobile'
// import PokemonDetailDesktop from './Desktop'

const MyPokemonDetail = (props) => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' })

    return (
        <div>
             {/* {isDesktopOrLaptop && <PokemonDetailDesktop />} */}
            {isTabletOrMobileDevice && <MyPokemonDetailMobile {...props} />}
        </div>
    )
}

export default PokemonDetail