import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Images = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "image1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      image2: file(relativePath: { eq: "image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      image3: file(relativePath: { eq: "image3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      image4: file(relativePath: { eq: "image4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      image5: file(relativePath: { eq: "image5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <>
    <div className="item">
      <Img fluid={data.image1.childImageSharp.fluid} style={{height: '100%'}} />
    </div>
    <div className="item">
      <Img fluid={data.image2.childImageSharp.fluid} style={{height: '100%'}} />
    </div>
    <div className="item">
      <Img fluid={data.image3.childImageSharp.fluid} style={{height: '100%'}} />
    </div>
    <div className="item">
      <Img fluid={data.image4.childImageSharp.fluid} style={{height: '100%'}} />
    </div>
    <div className="item">
      <Img fluid={data.image5.childImageSharp.fluid} style={{height: '100%'}} />
    </div>
  </>
}

export default Images;

