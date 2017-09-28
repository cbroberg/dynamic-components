import styled, { keyframes } from 'styled-components'

export const SkeletonDiv = styled.div`
`

const progress = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: -100% 0;
    }
`


export const SkeletonLoader = styled.div`
    animation-name: ${progress};
    animation-duration: 0.9s;
    animation-timing-function: ease-in-out;
    animation-delay:v0s;
    animation-iteration-count: infinite;
    animation-direction: normal;

    -webkit-animation-name: ${progress};
    -webkit-animation-duration: 0.9s;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-delay: 0s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: normal;
    
    background-color: #dbdbdb;
    background-image: linear-gradient(90deg, #dbdbdb, #e9e9e9, #dbdbdb);
    background-repeat: no-repeat;
    border-radius: 4px;
    line-height: 1;
    `

