import React, { useMemo } from "react"
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

const Images = (props) => {
  const { qtyImages } = props;

  const data = useStaticQuery(graphql`
    query {
      image1m: file(relativePath: { eq: "image1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          },
        }
      },
      image1d: file(relativePath: { eq: "image1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          },
        }
      },
      image2m: file(relativePath: { eq: "image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image2d: file(relativePath: { eq: "image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image3m: file(relativePath: { eq: "image3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image3d: file(relativePath: { eq: "image3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image4m: file(relativePath: { eq: "image4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image4d: file(relativePath: { eq: "image4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image5m: file(relativePath: { eq: "image5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image5d: file(relativePath: { eq: "image5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image6m: file(relativePath: { eq: "image6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image6d: file(relativePath: { eq: "image6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image7m: file(relativePath: { eq: "image7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image7d: file(relativePath: { eq: "image7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image8m: file(relativePath: { eq: "image8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image8d: file(relativePath: { eq: "image8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image9m: file(relativePath: { eq: "image9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image9d: file(relativePath: { eq: "image9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image10m: file(relativePath: { eq: "image10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
      image10d: file(relativePath: { eq: "image10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid,
            presentationWidth
          }
        }
      },
    }
  `)

  const renderImages = () => {
    const images = [];
    for (const x of Array(qtyImages).keys()) {
      const imageName = `image${x+1}`;
      const sources = [
        data[`${imageName}m`].childImageSharp.fluid,
        {
          ...data[`${imageName}d`].childImageSharp.fluid,
          media: `(min-width: 768px)`,
        },
      ]
      images.push(
        <div className="item" key={x}>
          <Img fluid={sources} style={{height: '100%'}} />
        </div>
      )
    }
    return images;
  }

  return useMemo(() => (
    <>
      {renderImages()}
    </>
  ), [qtyImages])
}

export default Images;

