import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import SEO from "../components/SEO"

export default function errorPage() {
  return (
    <>
      {" "}
      <Layout>
        <SEO title="ERROR" />
        <header className={styles.error}>
          <Banner title="oops looks like you are lost!">
            <AniLink
              to="/"
              className="btn-white"
              paintDrip
              color="rgba(0,0,0,0.4)"
            >
              Get Back To Exploring
            </AniLink>
          </Banner>
        </header>
      </Layout>
    </>
  )
}
