import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"

export default function errorPage() {
  return (
    <>
      {" "}
      <Layout>
        <header className={styles.error}>
          <Banner title="oops looks like you are lost!">
            <Link to="/" className="btn-white">
              Get Back To Exploring
            </Link>
          </Banner>
        </header>
      </Layout>
    </>
  )
}
