import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHero = ({ image, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={image} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(63, 208, 212, 0.4), rgba(0, 0, 0, 0.4))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
