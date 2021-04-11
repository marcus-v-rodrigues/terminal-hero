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
                <S.Toolbar>
                    <S.ButtonContainer>
                        <S.Button className="exit">&#10005;</S.Button>
                        <S.Button>&#9472;</S.Button>
                        <S.Button>&#9723;</S.Button>
                    </S.ButtonContainer>
                    <S.UserText>marcus@ubuntu:~</S.UserText>
                </S.Toolbar>
                <S.ContentContainer>
                    <S.TerminalPrompt>
                        <S.PromptUser>marcus@ubuntu:</S.PromptUser><S.PromptLocation>~</S.PromptLocation><S.PromptDollar>$</S.PromptDollar>
                        <S.PromptCursor/>
                    </S.TerminalPrompt>
                    <S.Animation ref={animation}></S.Animation>
                </S.ContentContainer>
            </S.Terminal>
        </S.Background>
    )
}

export default LogoAnimation