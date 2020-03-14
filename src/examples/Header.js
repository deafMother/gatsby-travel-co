// example of useStattic query
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  // we are destructuring the data which is returned
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          data
        }
      }
    }
  `)

  return (
    <div>
      <h1>title: {siteMetadata.title}</h1>
      <h1>author: {siteMetadata.author} </h1>
    </div>
  )
}

export default Header
