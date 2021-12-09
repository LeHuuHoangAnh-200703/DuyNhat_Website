import React, { Component } from 'react';
import { Link } from 'gatsby';
import Slider from "react-slick";

import Img from "gatsby-image";
import { graphql, StaticQuery  } from "gatsby"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const content = [];
// function importAll(r) {
//     return r.keys().map(r);
//   }
  
// const images = importAll(require.context("../images/duynhat/customers", false, /\.(png|jpe?g|svg)$/));
// images.map(
//     (image, index) => {
//         content.push({
//           logo:image
//       })
  
//     }
// );
class ClientSlider1 extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            // speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: 5000,
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
        const padding = this.props.allowPadding ? "p-a25":""

        return (
               <StaticQuery
                query={graphql`
                query {
                    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex:"duynhat/customers/"}}) {
                    edges {
                      node {
                        id
                        childImageSharp {
                          fluid(quality:100,fit:INSIDE,maxHeight:150) {
                            originalName
                            ...GatsbyImageSharpFluid_tracedSVG
                          }
                        }
                      }
                    }
                  }
                }`
                }

                render = {data => (

                <Slider {...settings} className="client-logo-carousel btn-style-1 icon-2">
                    {/* {content.map((item, id) => ( */}
                    {data.allFile.edges.map(edge =>(
                        <div class="item" >
                            <div class={`ow-client-logo ${padding}`}>
                                <div class={`client-logo ${Border}`} style={{height:"208px"}}>
                                    {/* <Link to="#"><img src={item.logo} alt=""/></Link> */}
                                    {/* {console.log(data)} */}
                                    <Img fluid={edge.node.childImageSharp.fluid} />
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