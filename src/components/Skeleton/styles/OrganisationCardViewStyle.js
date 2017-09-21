import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
    height: 380px;
    width: 894px;
`

export const TopContainer = styled.div`
    background: #2C3E50;
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 4px;
    display: inline-block;
    width: 100%;
    height: 28px;
    margin-bottom: 14px;
`

export const IconContainer = styled.div`
    background: #2C3E50;
    border-radius: 4px;
    display: inline-block;
    padding-top: 1px;
    width: 24px;
    height: 10%;
    float: right;
`

export const CardContainer = styled.div`
    background: #fff;
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 4px;
    display: inline-block;
    width: 141px;
    height: 107px;
    margin-right: 8px;
    margin-bottom: 8px;
`

const progress = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: 300px 0;
    }
`

export const AnimatedTop = styled.div`
    animation-name: ${progress};
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: normal;

    -webkit-animation-name: ${progress};
    -webkit-animation-duration: 1.2s;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: normal;

    background-color: #B5B5B5;
    background-image: linear-gradient(90deg, #B5B5B5, #DBDBDB, #B5B5B5);
    background-size: 200px 100%;
    background-repeat: no-repeat;
    display: block;
    width: 100%;
    height: 70px;
`

export const AnimatedBottom = styled.div`
    display: block;
    width: 100%;
    height: 37px;
`

export const SingleLineLoader = styled.div`
    animation-name: ${progress};
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: normal;

    -webkit-animation-name: ${progress};
    -webkit-animation-duration: 1.2s;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: normal;

    background-color: #B5B5B5;
    background-image: linear-gradient(90deg, #B5B5B5, #DBDBDB, #B5B5B5);
    background-size: 200px 100%;
    background-repeat: no-repeat;
    border-radius: ${(props ) => props.borderRadius || '4px'};
    margin-left: ${(props ) => props.marginLeft || '0px'};
    margin-bottom: ${(props ) => props.marginBottom || '0px'};
    margin-right: ${(props ) => props.marginRight || '0px'};
    margin-top: ${(props ) => props.marginTop || '0px'};
    display: inline-block;
    line-height: 1;
    width: ${(props ) => props.width || '45%'};
    height: ${(props ) => props.height || '15px'};
`