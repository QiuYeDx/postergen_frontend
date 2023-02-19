import styled from 'styled-components';

export const Wrap = styled.div`
    width: 100%;
    height: 150px;
    position: absolute;
    z-index: 1000;
    top: 0;
    background-color: #fdf7f2;
    border-bottom: solid 0.5px #1F1A14;
`

export const Logo = styled.div`
    position: absolute;
    top: 50px;
    left: 50px;
    margin-right: 50px;
    width: 56px;
    height: 55px;
    background-size: cover;
    background-image: url(./logo.svg);
`

export const LogoText = styled.div`
    position: absolute;
    top: 60px;
    left: 126px;
    font-size: 28px;
    font-family: "Purple Purse",serif;
`

export const Avatar = styled.div`
    position: absolute;
    top: 50px;
    right: 50px;
    width: 56px;
    height: 56px;
    background-size: cover;
    background-image: url(./avatar.svg);
`

// export const Container = styled.div`
//     width: 100%;
//     height: 100%;
//     position: absolute;
// `

export const DemoButton = styled.div`
    padding: 4px 8px 4px 8px;
    position: relative;
    // width: 40px;
    // height: 24px;
    color: white;
    border-radius: 9px;
    background: #4E4597;
    user-select: none;
    cursor: pointer;
    transition: all 0.15s;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
    opacity: 1;
    :hover {
        transition: all 0.25s;
        opacity: 0.6;
        box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.3);
    }
    :active {
        transition: all 0.08s;
        opacity: 0.8;
        box-shadow: 0.5px 0.5px 4px 0.5px rgba(0, 0, 0, 0.2);
    }
`