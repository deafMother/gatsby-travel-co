import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import img from "../images/connectBcg.jpeg"
import Img from "gatsby-image"

const getImages = graphql`
  query Images {
    fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fixed(height: 200, width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    fluid: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const ImagesExample = () => {
  const data = useStaticQuery(getImages)

  return (
    <Wrapper>
      <article>
        <h3>Basic image</h3>
        <img src={img} alt="basic-image" className="basic"></img>
      </article>
      <article>
        <h3>Fixed image/blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>Fluid image/svg</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;

  article {
    border: 2px tomato solid;
    padding: 1rem 0;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px;
  }
`

export default ImagesExample
