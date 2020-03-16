import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import SEO from "../components/SEO"

export default function blog({ data }) {
  return (
    <>
      <Layout>
        <SEO title="BLog" />
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
