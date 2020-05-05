/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
        <main>{children}</main>
        <footer className={'footer'}>
          {new Date().getFullYear()} © Copyright - by Fabio Ferreira <a href="https://twitter.com/fabioferreira_h" target="_blank">@fabioferreira_h</a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
