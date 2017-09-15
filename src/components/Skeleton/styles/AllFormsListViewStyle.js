import styled from 'styled-components'

export const SkeletonContainer = styled.div`
    background: ${(props) => props.backgroundColor || '#fff'};
    border: 1px solid;
    border-color: #e5e6e9 #dfe0e4 #d0d1d5;
    border-radius: 4px;
    display: inline-flex;
    width: 836px;
    height: 26px;
    margin-bottom: 1.5px;
`

export const SingleLineLoader = styled.div`
    @keyframes progress {
        0% {
            background-position: -200px 0;
        }
        100% {
            background-position: calc(200px + 100%) 0;
        }
    }

    animation: ${(props) => props.animation || 'progress 0.9s ease-in-out infinite'};
    animation-delay: ${(props) => props.animationDelay || ''};
    background-color: #B5B5B5;
    background-image: linear-gradient(90deg, #B5B5B5, #DBDBDB, #B5B5B5);
    background-size: 200px 100%;
    background-repeat: no-repeat;
    border-radius: ${(props) => props.borderRadius || '4px'};
    margin-left: ${(props) => props.marginLeft || ''};
    margin-bottom: ${(props) => props.marginBottom || ''};
    margin-right: ${(props) => props.marginRight || ''};
    margin-top: ${(props) => props.marginTop || ''};
    display: inline-block;
    line-height: 1;
    width: ${(props) => props.width || '45%'};
    height: ${(props) => props.height || '15px'};
`