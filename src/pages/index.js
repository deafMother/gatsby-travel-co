import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import FeaturedTours from "../components/Home/FeaturedTours"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO title="home" description="onward and explore" />
    <StyledHero home="true" image={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="start exploring"
        info="start a journey and dive into a new adventure and leave the rest to us "
      >
        <AniLink fade to="/tours" className="btn-white">
          explore tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
)

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
