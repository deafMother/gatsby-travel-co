import React from "react"
import { Link } from "gatsby"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import { FaRProject } from "react-icons/fa"

export default () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {" "}
              {item.text}{" "}
            </Link>
          )
        })}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icons}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; gotravel company {new Date().getFullYear()}
      </div>
    </footer>
  )
}
