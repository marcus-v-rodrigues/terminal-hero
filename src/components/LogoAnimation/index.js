import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

import * as S from './styled'

const LogoAnimation = () => {

    const animation = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
        container: animation.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: require('./animation.json')
        })
    }, [])

    return(
        <S.Background>
            <S.Terminal>
                <S.Toolbar></S.Toolbar>
                <S.Animation ref={animation}></S.Animation>
            </S.Terminal>
        </S.Background>
    )
}

export default LogoAnimation