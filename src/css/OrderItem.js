import transition from 'styled-transition-group'

export default transition.li.attrs({
  unmountOnExit: true,
  timeout: { enter: 500, exit: 500 },
})`
  border-bottom: 1px solid #000;
  padding: 2rem 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 1.4rem;
  -webkit-box-pack: justify;
     -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
     -ms-flex-align: center;
  align-items: center;

  #item-span {
    position: relative;
    overflow: hidden;
  }

  :hover button {
    display: inline;
  }
  button {
    border: 0;
    display: none;
    line-height: 1;
    padding: 0;
  }
  // .total {
  //   font-weight: 600;
  //   border-bottom: 3px solid #000;
  //   border-top: 3px double #000;
  // }
  // .unavailable {
  //   text-decoration: line-through;
  //   background: #f8d0d2;
  // }
  // .price {
  //   font-size: 1.2rem;
  // }

  // order item animations
  &:enter {
    transform: translateX(-120%);
    transition: 0.5s;
    max-height: 0px;
    padding: 0 !important;
    &:enter-active {
      max-height: 60px;
      transform: translateX(0);
      padding: 2rem 0 !important;
    }
  }

  &:exit {
    transition: 0.5s;
    transform: translateX(0);
    &:exit-active {
      transform: translateX(120%);
      padding: 0; !important
    }
  }
`
