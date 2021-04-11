import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import gsap from 'gsap'

import * as S from './styled'

const LogoAnimation = () => {

    let terminal = useRef(null)
    let toolbar = useRef(null)
    let terminalPrompt = useRef(null)

    let timeline = useRef()

    useEffect(()=>{
        timeline.current = gsap.timeline()
        .from(terminal.current, {
            y: "100%",
            delay: 1,
            ease: "power2.out",
            duration: 1
        })
        .from(toolbar.current, {
            y: "-100%",
            duration: 0.5
        }, ">")
        .from(terminalPrompt.current, {
            x: "-150%",
            duration: 0.5
        }, ">")
        .from(animation.current, {
            y: "50%",
            autoAlpha: 0,
            duration: 0.5
        }, ">")
        
    },[])

    const animation = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            lottie.loadAnimation({
                container: animation.current,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                animationData: require('./animation.json')
            })
        }, 3000)
    }, [])

    return(
        <S.Background>
            <S.Mask>
                <S.Terminal ref={terminal}>
                    <S.Toolbar ref={toolbar}>
                        <S.ButtonContainer>
                            <S.Button className="exit">&#10005;</S.Button>
                            <S.Button>&#9472;</S.Button>
                            <S.Button>&#9723;</S.Button>
                        </S.ButtonContainer>
                        <S.UserText>marcus@ubuntu:~</S.UserText>
                    </S.Toolbar>
                    <S.ContentContainer>
                        <S.TerminalPrompt ref={terminalPrompt}>
                            <S.PromptUser>marcus@ubuntu:</S.PromptUser>
                            <S.PromptLocation>~</S.PromptLocation>
                            <S.PromptDollar>$</S.PromptDollar>
                            <S.PromptCursor/>
                        </S.TerminalPrompt>
                        <S.Animation ref={animation}></S.Animation>
                    </S.ContentContainer>
                </S.Terminal>
            </S.Mask>
        </S.Background>
    )
}

export default LogoAnimation