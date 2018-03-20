import transition from 'styled-transition-group'

export default transition.span.attrs({
  mountOnEnter: true,
  unmountOnExit: true,
  timeout: { enter: 500, exit: 500 },
})`
  display: inline-block;
  position: relative;

  // animations
  &:enter {
    transform: translateY(-100%);
    transition: 0.5s;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &:enter-active {
    transform: translateY(0);
  }

  &:exit {
    transform: translateY(0);
    transition: 0.5s;
  }
  &:exit-active {
    transform: translateY(100%);
  }
`
