import React, { Component } from 'react';
import { Link } from 'gatsby';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { graphql, StaticQuery  } from "gatsby"
import { GatsbyImage as Img } from '@wardpeet/gatsby-image-nextgen/compat';

// 
const content = [
    {
        image: require("../images/duynhat/factory/DSC_3325.jpg")
    },
    {
        image: require("../images/duynhat/factory/DSC_7874.jpg")
    },
    {
        image: require("../images/duynhat/factory/DSC_9249.jpg")
    },
    {
        image: require("../images/duynhat/factory/DSC_9222.jpg")
    },
    {
        image: require("../images/duynhat/factory/DSC_9234.jpg")
    },
    {
        image: require("../images/duynhat/factory/DSC_9237.jpg")
    }
]

class FactoryGallerySlider extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: 2000
        };
        return (
            <StaticQuery
            query={graphql`
            query {
                flexRice:file(relativePath: { eq: "duynhat/factory/ANT MEDIA-16.jpg" }){
                    childImageSharp {
                      fluid(quality:100,fit:INSIDE){
                        originalName
                          ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                    id
                  }
                flexFlat:file(relativePath: { eq: "duynhat/factory/ANT MEDIA-82.jpg" }){
                    childImageSharp {
                        fluid(quality:100,fit:INSIDE){
                            originalName
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                    id
                }
                flexRound:file(relativePath: { eq: "duynhat/factory/ANT MEDIA-151.jpg" }){
                    childImageSharp {
                        fluid(quality:100,fit:INSIDE){
                            originalName
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                    id
                }
                paperBox:file(relativePath: { eq: "duynhat/factory/ANT MEDIA-197.jpg" }){
                    childImageSharp {
                        fluid(quality:100,fit:INSIDE){
                            originalName
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                sticker:file(relativePath: { eq: "duynhat/factory/ANT MEDIA-52.jpg" }){
                    childImageSharp {
                        fluid(quality:100,fit:INSIDE){
                            originalName
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                    id
                }
                roll:file(relativePath: { eq: "duynhat/factory/ANT MEDIA-39.jpg" }){
                    childImageSharp {
                        fluid(quality:100,fit:INSIDE){
                            originalName
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                    id
                }
            }`
            }
            render = {data => (
                
                <Slider {...settings} className="m-b5 primary btn-style-2" id="sync1">
                     {console.log(data)}
                    {/* {data.map((item, id) => ( */}
                    {Object.keys(data).map((key,id)=>(
                        <div class="item">
                            <div class="mfp-gallery">
                                <div class="dlab-box">
                                    <div class="dlab-thum-bx dlab-img-overlay1 ">
                                        <Img  fluid={data[key].childImageSharp.fluid} alt="" />
                                        <div class="overlay-bx">
                                            <div class="overlay-icon">
                                                <span data-exthumbimage="images/product/item2/item1.jpg" data-src="images/product/item2/item1.jpg" class="check-km" title="Image 1 Title will come here">		
                                                    <i class="ti-fullscreen"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
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
export default FactoryGallerySlider;