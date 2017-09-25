import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
    height: 449px;
    width: 693px;
    display: flex;
    flex-direction: column;
`

export const TopContainer = styled.div`
    height: 120px;
    width: 450px;
    display: flex;
    margin-bottom: 20px;
`

export const TopImgContainer = styled.div`
    height: 120px;
    width: 120px;
    display: flex;
    justify-content: flex-start;
    margin-right: 26px;
`

export const TopTextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const TabsContainer = styled.div`
    height: 30px;
    width: 501px;
    display: inline-flex;
    margin-bottom: 13px;
`

export const Tabs = styled.div`
    width: ${(props ) => props.width || '0px'};
    height: ${(props ) => props.height || '0px'};
    background-color: ${(props ) => props.backgroundColor || '#BDC2C6'};
    margin-right: ${(props ) => props.marginRight || '0px'};
    display: inline-flex;
    border-radius: 4px 4px 0 0;
`

export const TabIconContainer = styled.div`
    padding-top: 4px;
    padding-left: 13px;
`

export const TabLabelContainer = styled.div`
    padding-top: 8px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-size: 12px;
    color: ${(props ) => props.textColor || '#5E5E5E'};
`

export const ItemListContainer = styled.div`
    height: 269px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const SingleItemContainer = styled.div`
    background: ${(props) => props.backgroundColor || '#fff'};
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 4px;
    display: inline-flex;
    width: 100%;
    height: 27px;
    margin-bottom: 3px;
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
    animation-duration: ${(props) => props.duration || '1.2s'};
    animation-timing-function: ease-in-out;
    animation-delay: ${(props) => props.animationDelay || '0s'};
    animation-iteration-count: infinite;
    animation-direction: normal;

    -webkit-animation-name: ${progress};
    -webkit-animation-duration: ${(props) => props.WKduration || '1.2s'};
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-delay: ${(props) => props.WKanimationDelay || '0s'};
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

export const CheckboxContainer = styled.div`
    padding-top: 4px;
    padding-left: 17px;
    padding-right: 19px;
`