import styled from 'styled-components'

const CatchOfTheDay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 90vh;
  max-width: 1500px;
  margin: 0 auto;
  margin-top: 5vh;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  > * {
    -webkit-box-flex: 1;
    -ms-flex: 1 4 auto;
    flex: 1 4 auto;
    padding: 2rem;
    border: 1rem double #1a1a1a;
    position: relative;
    background: #fff;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    overflow: scroll;
  }
  > *:first-child {
    -ms-flex-negative: 1;
    flex-shrink: 1;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    -webkit-transform: ${props => props.theme.firstChildTransform};
    transform: ${props => props.theme.firstChildTransform};
  }
  > *:nth-child(2) {
    -webkit-transform: ${props => props.theme.middleChildTransform};
    transform: ${props => props.theme.middleChildTransform};
    border-left: 0;
    border-right: 0;
    min-width: 300px;
  }
  > *:last-child {
    -ms-flex-negative: 1;
    flex-shrink: 1;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    -webkit-transform: ${props => props.theme.lastChildTransform};
    transform: ${props => props.theme.lastChildTransform};
  }
`

export default CatchOfTheDay
