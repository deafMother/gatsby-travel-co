import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import TourList from "./TourList"

const getAllTours = graphql`
  query {
    allTours: allContentfulTours {
      totalCount
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Tours = () => {
  const { allTours } = useStaticQuery(getAllTours)
  return <TourList tours={allTours} />
}

export default Tours
