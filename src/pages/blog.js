import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"

export default function blog({ data }) {
  return (
    <>
      <Layout>
        <StyledHero image={data.defaultBcg.childImageSharp.fluid}></StyledHero>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
