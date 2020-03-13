import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="backdrop"></img>
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore new adventures</h4>
          <p>
            The best advice you can receive is not to take any advice and simply
            explore and learn from experience and never stop working on yourself
          </p>
          <p>
            The best advice you can receive is not to take any advice and simply
            explore and learn from experience and never stop working on yourself
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
