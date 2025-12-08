import React, { Component } from 'react';
import { Link } from 'gatsby';
import Slider from "react-slick";

import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby"

class ClientSlider1 extends Component {

  render() {

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    };

    const Border = this.props.hideBorder ? "" : "border"
    const padding = this.props.allowPadding ? "p-a25" : ""

    return (
      <StaticQuery
        query={graphql`
                query {
                    allFile(
                      filter: {
                        extension: {regex: "/(jpg)|(jpeg)|(png)/"}, 
                        dir: {regex:"duynhat/customers/"}
                      }
                    ) {
                      edges {
                        node {
                          id
                          childImageSharp {
                            fluid(
                              quality: 95,
                              maxWidth: 800,
                              maxHeight: 400,
                              fit: CONTAIN,
                              background: "transparent",
                              srcSetBreakpoints: [300, 600, 800]
                            ) {
                              originalName
                              ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                          }
                        }
                      }
                    }
                }`
        }

        render={data => (

          <Slider {...settings} className="client-logo-carousel btn-style-1 icon-2">
            {data.allFile.edges.map(edge => (
              <div className="item" key={edge.node.id}>
                <div className={`ow-client-logo ${padding}`}>
                  <div className={`client-logo ${Border}`} style={{ height: "280px", padding: "20px" }}>
                    <Img 
                      fluid={edge.node.childImageSharp.fluid}
                      imgStyle={{ 
                        objectFit: 'contain',
                        imageRendering: '-webkit-optimize-contrast'
                      }}
                      style={{
                        height: '100%',
                        width: '100%',
                        maxWidth: '100%'
                      }}
                      alt={edge.node.childImageSharp.fluid.originalName}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      />
    )
  }
}
export default ClientSlider1;