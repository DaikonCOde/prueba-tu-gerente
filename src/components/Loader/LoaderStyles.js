import styled, {keyframes} from "styled-components";

const spin = keyframes`
  to { -webkit-transform: rotate(360deg); }
`

export const ContentLoader = styled.div`

  display: block;
  width: 40px;
  height: 40px;
  border: 3px solid rgb(28, 56, 121, .3);
  border-radius: 50%;
  border-top-color: rgb(28, 56, 121);
  animation: ${spin} 1s ease-in-out infinite;
  margin: 0 auto;
`