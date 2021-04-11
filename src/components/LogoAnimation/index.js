import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

import * as S from './styled'

const LogoAnimation = () => {

    gsap.registerPlugin(TextPlugin)

    let terminal = useRef(null)
    let toolbar = useRef(null)
    let terminalPrompt = useRef(null)
    let descriptionRef = useRef(null)
    let description = [
                        'a Computer Scientist + Designer', 
                        'I like building nice things for the web'
                    ]

    let timeline = useRef()

    useEffect(()=>{
        timeline.current = gsap.timeline()
        .from(terminal.current, {
            y: "120%",
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
        }, "<")
    },[])

    let textTimeline = useRef()

    useEffect(()=>{
        textTimeline.current = gsap.timeline({repeat:-1})
        .to(descriptionRef.current, {
            duration: 1,
            text: description[0],
            ease: "power1.out",
        },)
        .to(descriptionRef.current, {
            duration: 0.5,
            text: "",
            ease: "power1.out",
        }, ">3")
        .to(descriptionRef.current, {
            duration: 1,
            text: description[1],
            ease: "power1.out",
        },)
        .to(descriptionRef.current, {
            duration: 0.5,
            text: "",
            ease: "power1.out",
        }, ">3")

        textTimeline.current.delay(6); 
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
        }, 2000)
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
                        <S.Description ref={descriptionRef}/>
                    </S.ContentContainer>
                </S.Terminal>
            </S.Mask>
        </S.Background>
    )
}

export default LogoAnimation