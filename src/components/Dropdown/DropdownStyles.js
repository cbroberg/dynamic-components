import styled from 'styled-components'
import * as colors from 'theme/colors'

export const DropdownContianer = styled.div`
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: fit-content;
`
export const DropdownMenuBtn = styled.button`
    background-color:${colors.BUTTON_DEFAULT};
    padding: 5px 0px 6px 0px; 
    width: 0%;
    border-radius: 4px;
    font-size: 16px;
    border: none;
    position: inherit;
`
export const DropdownContentContainer = styled.div`
    border: solid 1px ${colors.GAUGE_BACKGROUND};
    position: relative;
    display: flex;
    flex-direction: column;
    width:${(props) => props.width || '350px'};
    border-style:soild;
    border-color:${colors.CLOUDY_DARK};
    border-width:1px;
    border-radius: 5px;
    overflow: hidden;
    margin: 0;
    &:hover {
        display: block;
}`

export const SingleLinkContainer = styled.a`
    background-color: white; 
    border-color: ${colors.GAUGE_BACKGROUND};
    padding: 10px 0px 10px 5px;
    display:flex;
    float:left;
    text-decoration: none;
    width: 100%;
    height: 80px;
    border-top-style: solid;
    border-width: 1px;
    overflow:hidden;
    text-overflow: ellipsis;
    &:hover {
    background:${colors.GAUGE_BACKGROUND} 
}`

export const LinkChildrenContainer = styled.div`
    color: black    ;
    padding: 0px 5px 0px 10px;
    font-family:'Source Sans Pro';
    font-size: 16px;
    width: 85%;
    word-wrap: break-word;
`
export const SlIconContainer = styled.div`
    padding:;
    align-content: center;
    display: inline-grid;
    width: 50px;
    height: 50px;
    margin-top:1%;
`
export const Photo = styled.img`
    width: inherit;
    height: inherit;
    border-radius: 50%;
`
export const TimeInfo = styled.label`
    font-family:'Source Sans Pro';
    font-size: 12px;
    display: -webkit-box;
`
export const NotificationTopContanoiner = styled.div`
    background-color: white;
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
    padding:11px;
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
    overflow-y: scroll;
    height: inherit;
    display: block;
    height:${(props) => props.height || '100%'};
    width: 100%;
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