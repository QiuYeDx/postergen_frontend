import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  padding-top: 150px;
  box-sizing: border-box;
  left: 0;
  top: 0;
  height: 100%;
  width: 480px;
  background-color: #fff;
  z-index: 100;
`

export const H2 = styled.div`
    line-height: 28px;
    font-size: 20px;
    font-weight: 400;
    font-family: "Lao MN",serif;
    white-space: nowrap;
    position: absolute;
    width: 360px;
    top: ${props => props.inputTop || "150px"};
    left: 48px;
`

export const H3 = styled.div`
    line-height: 14px;
    color: #6C6C6C;
    font-size: 12px;
    font-weight: 300;
    font-family: "Lao MN",serif;
    white-space: nowrap;
    position: absolute;
    width: 360px;
    top: ${props => props.inputTop || "150px"};
    left: 48px;
`

export const UpLoad = styled.div`
  position: absolute;
  top: 220px;
  left: 56px;
  background-color: #f6f6f6;
  width: 100px;
  height: 100px;
  border: 1px solid #1F1A14;
  border-radius: 14px;
  cursor: pointer;
`

export const PlusWrap = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`

export const Plus = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(./plus.svg);    
`