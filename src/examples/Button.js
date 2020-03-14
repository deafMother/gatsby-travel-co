// example of styled component
import styled from "styled-components"

const color = `blue`

const Button = styled.button`
  color: ${props => props.color};
  background: ${color};
  font-size: ${props => (props.big ? "2rem" : "1rem")};
  padding: 1rem;
`

export default Button
