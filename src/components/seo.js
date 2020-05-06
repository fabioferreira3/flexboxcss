/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO() {
  const { site, image } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl,
            title
            description
            author
          }
        },
        image: file(relativePath: { eq: "favicon.png" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid,
            },
          }
        },
      }
    `
  )

  const { description: metaDescription, title, author, siteUrl } = site.siteMetadata;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `${siteUrl}${image.childImageSharp.fluid.src}`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: `${siteUrl}${image.childImageSharp.fluid.src}`,
        },
      ]}
    />
  )
}

export default SEO
