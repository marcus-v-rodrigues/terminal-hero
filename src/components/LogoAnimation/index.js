import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

import * as S from './styled'

const LogoAnimation = () => {

    const animation = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
        container: animation.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./animation.json')
        })
    }, [])

    return(
        <S.Background>
            <S.Animation ref={animation}></S.Animation>
        </S.Background>
    )
}

export default LogoAnimation