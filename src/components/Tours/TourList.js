import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Tour from "../Tours/Tour"
import Titile from "../Title"

export default class TourList extends Component {
  state = {
    tours: [],
    sortedTours: [],
  }

  componentDidMount() {
    this.setState({
      tours: this.props.tours.edges,
      sortedTours: this.props.tours.edges,
    })
  }
  render() {
    // console.log(this.state)
    return (
      <section className={styles.tours}>
        <Titile title="our" subtitle="tours"></Titile>
        <div className={styles.center}>
          {this.state.tours.map(({ node }) => {
            return <Tour key={node.contentful_id} tour={node} />
          })}
        </div>
      </section>
    )
  }
}
