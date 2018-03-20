import styled from 'styled-components'
import anchor from '../css/images/anchor.svg'

export const StyledHeader = styled.header`
  text-align: center;
  h1 {
    font-size: 14.4rem;
    line-height: 0.7;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  h3 {
    margin: 0;
    font-size: 2rem;
    color: #f5a623;
    position: relative;
    display: inline-block;
  }

  h3 span {
    background: #fff;
    position: relative;
    z-index: 2;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h3:before,
  h3:after {
    display: block;
    z-index: 1;
    background: #000;
    position: absolute;
    width: 130%;
    height: 1px;
    content: '';
    top: 5px;
    margin-left: -15%;
  }
  h3:after {
    top: auto;
    bottom: 7px;
  }
`
export const OfThe = styled.span`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 3rem;
  color: #f5a623;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: url(${anchor}) center no-repeat;
  background-size: cover;
  padding: 0 1rem;
`
export const Of = styled.span`
  padding-right: 2rem;
  position: relative;
  right: -0.5rem;
`
