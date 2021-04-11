import styled from 'styled-components'

export const Background = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, #57003f 0%,#f57453 100%);
`

export const Mask = styled.div`
    padding: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
`

export const Terminal = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    
    width: 80em;
    height: 40em;
    background: rgba(56, 4, 40, .9);
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
    border-radius: 1rem 1rem 0 0;
`

export const Toolbar = styled.div`
    background: linear-gradient(#504b45 0%,#3c3b37 100%);
    width: 100%;
    height: 2em;
    padding: 0 8px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
   
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Button = styled.button`
    width: 2em;
    height: 2em;
    
    box-sizing: border-box;
    border-radius: 100%;
    border: none;
    margin-right: 4px;
    padding: 0;
    font-size: 0.5em;

    background: linear-gradient(#7d7871 0%, #595953 100%);
    text-shadow: 0px 1px 0px rgba(255,255,255,0.2);
    box-shadow: 0px 0px 1px 0px #41403A,0px 1px 1px 0px #474642;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }

    &.exit {
        background: #f25d2b;
        background: linear-gradient(#f37458 0%, #de4c12 100%);
        background-clip: padding-box;
    }
`

export const UserText = styled.p`
    color: #d5d0ce;
    font-size: 1em;
    line-height: 1em;
    margin: 0 0 0.2em 0.2em;
`

export const TerminalPrompt = styled.div`
    position: absolute;
    top: 3rem;
    left: 1rem;
    display: flex;
    align-items: center;
    font-size: 1.2em;
`

export const PromptUser = styled.span`
    color: #87d441;
`

export const PromptLocation = styled.span`
    color: #6d85a9;
`

export const PromptDollar = styled.span`
    color: #ddd;
`

export const PromptCursor = styled.span`
    height: 1em;
    width: 0.5rem;
    background: white;
    display: block;
    margin-left: 0.5rem;
    animation: 400ms ease infinite alternate blink;
  
    @keyframes blink {
        0% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    }
`

export const ContentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Animation = styled.div`
    width: 45em;
`

export const Description = styled.p`
    display: inline-block;
    color: white;
    font-size: 2rem;
    height: 2rem;
`