import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Tours from "../components/Tours/Tours"

export default class tours extends Component {
  render() {
    return (
      <>
        <Layout>
          <StyledHero
            image={this.props.data.defaultBcg.childImageSharp.fluid}
          ></StyledHero>
          <Tours />
        </Layout>
      </>
    )
  }
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
