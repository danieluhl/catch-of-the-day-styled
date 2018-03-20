import styled from 'styled-components'

const LoginButton = styled.button`
  border: 0;
  display: block;
  margin-bottom: 2rem;
  width: 100%;
  color: #fff;
  padding: 2rem;
`

export const GithubButton = LoginButton.extend`
  background: #82d465;

  :after {
    background: #5cc437;
  }
}
`

export const FacebookButton = LoginButton.extend`
  background: #3864a3;

  :after {
    background: #2d5082;
  }
}
`

export const TwitterButton = LoginButton.extend`
  background: #5ea9dd;

  :after {
    background: #2c8dd0;
  }
}
`
