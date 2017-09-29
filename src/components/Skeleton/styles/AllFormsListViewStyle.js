import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
    width: 836px;
    height: 267px;
    display: flex;
    flex-direction: column;
`

export const SkeletonContainer = styled.div`
    background: ${(props) => props.backgroundColor || '#fff'};
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 4px;
    display: inline-flex;
    width: 100%;
    height: 26px;
    margin-bottom: 1.5px;
`

const progress = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: -350% 0;
    }
`

export const SingleLineLoader = styled.div`
    animation-name: ${progress};
    animation-duration: 0.9s;
    animation-timing-function: ease-in-out;
    animation-delay: ${(props) => props.animationDelay || '0s'};
    animation-iteration-count: infinite;
    animation-direction: normal;

    -webkit-animation-name: ${progress};
    -webkit-animation-duration: 0.9s;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-delay: ${(props) => props.WKanimationDelay || '0s'};
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: normal;

    background-color: #B5B5B5;
    background-image: linear-gradient(90deg, #B5B5B5, #DBDBDB, #B5B5B5);
    background-size: 200px 100%;
    background-repeat: no-repeat;
    border-radius: ${(props) => props.borderRadius || '4px'};
    margin-left: ${(props) => props.marginLeft || '0px'};
    margin-bottom: ${(props) => props.marginBottom || '0px'};
    margin-right: ${(props) => props.marginRight || '0px'};
    margin-top: ${(props) => props.marginTop || '0px'};
    display: inline-block;
    line-height: 1;
    width: ${(props) => props.width || '45%'};
    height: ${(props) => props.height || '15px'};
`