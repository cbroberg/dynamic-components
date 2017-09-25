import styled, { keyframes } from 'styled-components'

export const MainWrapper = styled.div`
    width: 915px;
    height: 343px;
    display: flex;
`

export const Wrapper = styled.div`
    width: ${(props) => props.width || '325px'};
    height: 343px;
    margin-right: ${(props) => props.marginRight || '0px'};
    display: flex;
    flex-direction: column;
`

export const ContentContainer = styled.div`
    height: 270px;
    width: 100%;
    display: flex;
    flex-flow: column;

    // Scrollbar
    /*overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #fff;
    }
    
    ::-webkit-scrollbar {
        width: 10px;
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #B5B5B5;
    }*/
`

export const SkeletonContainer = styled.div`
    background: ${(props) => props.backgroundColor || '#fff'};
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 4px;
    display: inline-flex;
    width: 100%;
    height: 26px;
    margin-bottom: ${(props) => props.marginBottom || '1.5px'};
    float: ${(props) => props.float || 'initial'};
`

const progress = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: 300px 0;
    }
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

//Searchbar
export const SearchBarDiv = styled.div`
    float: left;
    width: 100%;
    height: 26px;
    margin-bottom: 15px;
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 4px;
    display: flex;
`

export const SearchBarInputWrapper = styled.div`
    float: left;
    width: ${(props) => props.width || '293px'};
    height: 100%;
`

export const SearchBarInput = styled.input`
    width: ${(props) => props.width || '285px'};
    height: 100%;
    border: 0;
    border-radius: 4px 0 0 4px;
    background-color: #fff;
    padding: 0;
    padding-left: 10px;
    font-family: 'Source Sans Pro';
    font-size: 16px;
    font-weight: 300;
    color: #111;
    outline: none;
    -webkit-appearance: none;
    box-sizing: content-box;

    &::placeholder {
        color: #fff;
    }
    &:-ms-input-placeholder {
        color: #fff;
    }
    &::-webkit-input-placeholder {
        color: #fff;
    }
    &::-moz-placeholder {
        color: #fff;
        opacity: 1;
    }
`

export const SearchBarButtonDiv = styled.div`
    float: left;
    width: 22px;
    height: 100%;
    border-radius: 0 4px 4px 0;
    background: #3b97d3;
    color: #fff;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    padding-top: 1px;
    padding-left: 8px;
    box-sizing: content-box;
`