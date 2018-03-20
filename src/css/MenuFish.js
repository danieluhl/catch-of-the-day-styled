import styled from 'styled-components'

export const MenuFish = styled.li`
  border-bottom: 2px solid #000;
  border-top: 1px solid #000;
  padding-bottom: 2rem;
  padding-top: 2rem;
  margin-bottom: 5px;
  clear: both;
  overflow: hidden;

  p {
    margin: 0;
    font-size: 1.8rem;
  }

  .fish-name {
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .price {
    font-size: 1.4rem;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }

  img {
    float: left;
    width: 150px;
    margin-right: 1rem;
  }
`
