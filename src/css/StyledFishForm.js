import styled from 'styled-components'

export const StyledFishForm = styled.form`
  margin-bottom: 20px;
  border: 2px solid #000;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  input,
  textarea,
  select {
    width: 33.33%;
    padding: 10px;
    line-height: 1;
    font-size: 1.2rem;
    border: 0;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    background: #fff;
  }
  input:focus,
  textarea:focus,
  select:focus {
    outline: 0;
    background: #fef2de;
  }
  textarea {
    width: 100%;
  }
  input:last-of-type {
    width: 100%;
  }
  button {
    width: 100%;
    border: 0;
  }
`
