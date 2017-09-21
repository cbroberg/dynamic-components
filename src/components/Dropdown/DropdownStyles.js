import styled from 'styled-components'
import * as colors from 'theme/colors'

export const DropdownContianer = styled.div`
    border-radius: 5px;
    position: relative;
    display: list-item;
    width: 150px;
    height: 100%;
`
export const DropdownMenuBtn = styled.button`
    background-color:${(props) => props.bgColor || colors.BUTTON_DEFAULT};
    color:${(props) => props.txtColor || 'white'};
    padding:${(props) => props.theme.padding || '5px 0px 6px 0px'}; 
    width:${(props) => props.theme.width || '100%'};
    border-radius: 4px;
    font-size: 16px;
    border: none;
    position: inherit;
`
export const DropdownContentContainer = styled.div`
    width:${(props ) => props.width || '100%' };
    background-color: ${(props) => props.bgColor || colors.BUTTON_DEFAULT}; 
    border-style:${(props) => props.theme.borderStyle || 'none'};
    border-color:${(props) => props.theme.borderColor || ''};
    border-width:${(props) => props.theme.borderWidth || ''};
    border-radius: 5px;
    overflow: hidden;
    margin: 0;
    position: relative;
    &:hover {
        display: block;
}`

export const SingleLinkContainer = styled.a`
    background-color: ${(props) => props.bgColor || colors.BUTTON_DEFAULT}; 
    border-color: ${(props) => props.borderColor || colors.ACCENT_BLUE};
    padding: ${(props) => props.padding || '10px 0px 10px 5px'};
    display:flex;
    float:left;
    text-decoration: none;
    width: 100%;
    border-top-style: solid;
    border-width: 1px;
    overflow:hidden;
    text-overflow: ellipsis;
    &:hover {
    background:${(props) => props.hoverColor || colors.BUTTON_DEFAULT_HOVER } 
}`

export const LinkChildrenContainer = styled.div`
    color: ${(props) => props.txtColor || 'white'};
    padding: 0px 0px 0px 5px;
    font-family:'Source Sans Pro';
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const SlIconContainer = styled.div`
    padding: ${(props) => props.iconPadding || ''};
    align-content: center;
    display: inline-grid;
`
export const NotificationTopContanoiner = styled.div`
    border-bottom: solid 1px ${colors.GAUGE_BACKGROUND};    
    height: 45px;
`
export const NotificationsLbl = styled.label`
    float:left;
    padding:10px;
    font-family:'Source Sans Pro';
    font-size: 15px
`
export const MarkAsReadBtn = styled.button`
    border: none;
    background: none;
    padding:10px 10px 0px 0px;
    font-family:'Source Sans Pro';
    font-size: 15px;    
    float: right;
    cursor: pointer;
`
export const SettingsLink = styled.a`
    color: black;
    text-decoration: none;
    font-family:'Source Sans Pro';
    font-size: 15px;
    float: right;
    padding: 10px;
    cursor: pointer;
`
export const SeeAllNotificationsLink = styled.a`
    font-family:'Source Sans Pro';
    font-size: 15px;
    padding: 5px;
    text-align: center;
    display: flow-root;
    border-top: solid 1px ${colors.GAUGE_BACKGROUND};
    background-color: ${colors.GAUGE_BACKGROUND};
`
export const AllLinksContainer = styled.div`
    overflow-y: ${(props) => props.theme.overflow || ''};
    height: ${(props) => props.theme.height || ''};
    display: block;
    width: 100%;
    border-radius:5px;
    ::-webkit-scrollbar-track {
        background-color: ${colors.GAUGE_BACKGROUND};
    }
    
    ::-webkit-scrollbar {
        width: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: ${colors.TAB_COLOR_9};
    }
`   