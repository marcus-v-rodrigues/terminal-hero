import styled from 'styled-components'

export const Animation = styled.div`
    width: 40em;
`

export const Background = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, #57003f 0%,#f57453 100%);
`

export const Terminal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 80em;
    height: 40em;
    border-radius: 1rem 1rem 0 0;
    background: rgba(56, 4, 40, .9);
    box-shadow: 2px 4px 10px rgba(0,0,0,.5);
`

export const Toolbar = styled.div`
    background: linear-gradient(#504b45 0%,#3c3b37 100%);
    width: 100%;
    padding: 0 8px;
    box-sizing: border-box;
    height: 2em;
    display: flex;
    align-items: center;
    border-radius: 1rem 1rem 0 0;
`