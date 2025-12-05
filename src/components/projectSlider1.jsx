import React, { Component } from 'react';
import { Link } from 'gatsby';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { graphql, StaticQuery } from "gatsby"
// import Img from "gatsby-image";

import { GatsbyImage as Img } from '@wardpeet/gatsby-image-nextgen/compat';
class ProjectSlider1 extends Component {
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
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        };
        return (
            <StaticQuery
                query={graphql`
                query {
                    flexRice:file(relativePath: { eq: "duynhat/products/flexible/TG.JPG.jpg" }){
                        childImageSharp {
                          fluid(quality:100,fit:INSIDE){
                            originalName
                              ...GatsbyImageSharpFluid_withWebp_tracedSVG
                          }
                        }
                        id
                      }
                    flexFlat:file(relativePath: { eq: "duynhat/products/flexible/TC1.JPG.jpg" }){
                        childImageSharp {
                            fluid(quality:100,fit:INSIDE){
                                originalName
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                        }
                        id
                    }
                    flexRound:file(relativePath: { eq: "duynhat/products/flexible/DT.JPG.jpg" }){
                        childImageSharp {
                            fluid(quality:100,fit:INSIDE){
                                originalName
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                        }
                        id
                    }
                    paperBox:file(relativePath: { eq: "duynhat/products/Paper/HG4.jpg" }){
                        childImageSharp {
                            fluid(quality:100,fit:INSIDE){
                                originalName
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                        }
                    }
                    sticker:file(relativePath: { eq: "duynhat/products/IMG_0085.jpg" }){
                        childImageSharp {
                            fluid(quality:100,fit:INSIDE){
                                originalName
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                        }
                        id
                    }
                    roll:file(relativePath: { eq: "duynhat/products/nhan_quan_31.jpg" }){
                        childImageSharp {
                            fluid(quality:100,fit:INSIDE){
                                originalName
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                        }
                        id
                    }
                }`
                }
                render={data => (
                    <Slider {...settings} className="img-carousel-dots-nav btn-style-1 icon-2">
                        {/* {this.props.data.map((item, id) => ( */}
                        <div class="item" key="flexRice">
                            <div class="dlab-box project-bx">
                                <Link to="/details_Products/tui-nhua-tg" tabindex="-1">
                                    <div class="dlab-media radius-sm dlab-img-overlay1" style={{ height: "350px" }}>
                                        {/* <Link to="/products"> */}
                                        {/* {console.log(data.flexRice)} */}
                                        <Img fluid={data.flexRice.childImageSharp.fluid} alt="Flexible Rice Packaging" />
                                        {/* </Link> */}
                                    </div>
                                    <div class="dlab-info">
                                        <h3 class="dlab-title"><Link to="/details_Products/tui-nhua-tg" tabindex="-1">Túi Nhựa Đựng Gạo</Link></h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* ))} */}
                        <div class="item" key="flexFlat">
                            <div class="dlab-box project-bx">
                                <Link to="/details_Products/tui-nhua-tc" tabindex="-1">
                                    <div class="dlab-media radius-sm dlab-img-overlay1" style={{ height: "350px" }}>
                                        {/* <Link to="/products"> */}
                                        <Img fluid={data.flexFlat.childImageSharp.fluid} alt="Flexible Flat Bottom Seafood Bag" />
                                        {/* </Link> */}
                                    </div>
                                    <div class="dlab-info">
                                        <h3 class="dlab-title"><Link to="/details_Products/tui-nhua-tc" tabindex="-1">Túi có khả năng tái chế</Link></h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="item" key="flexRound">
                            <div class="dlab-box project-bx">
                                <Link to="/details_Products/tui-nhua-dt" tabindex="-1">
                                    <div class="dlab-media radius-sm dlab-img-overlay1" style={{ height: "350px" }}>
                                        {/* <Link to="/products"> */}
                                        <Img fluid={data.flexRound.childImageSharp.fluid} alt="Flexible Seafood Standing Pouch " />
                                        {/* </Link> */}
                                    </div>
                                    <div class="dlab-info">
                                        <h3 class="dlab-title"><Link to="/details_Products/tui-nhua-dt" tabindex="-1">Túi đứng Đáy Tròn</Link></h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="item" key="paperBox">
                            <div class="dlab-box project-bx">
                                <Link to="/details_Products/hop-giay-4" tabindex="-1">
                                    <div class="dlab-media radius-sm dlab-img-overlay1" style={{ height: "350px" }}>
                                        {/* <Link to="/products"> */}
                                        <Img fluid={data.paperBox.childImageSharp.fluid} alt="Seafood Paper Box Packaging" />
                                        {/* </Link> */}
                                    </div>
                                    <div class="dlab-info">
                                        <h3 class="dlab-title"><Link to="/details_Products/hop-giay-4" tabindex="-1">Hộp Giấy</Link></h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="item" key="sticker">
                            <div class="dlab-box project-bx">
                                <Link to="/details_Products/tem-nhan-6" tabindex="-1">
                                    <div class="dlab-media radius-sm dlab-img-overlay1" style={{ height: "350px" }}>
                                        {/* <Link to="/products"> */}
                                        <Img fluid={data.sticker.childImageSharp.fluid} alt="" />
                                        {/* </Link> */}
                                    </div>
                                    <div class="dlab-info">
                                        <h3 class="dlab-title"><Link to="/details_Products/tem-nhan-6" tabindex="-1">Cuộn nhãn</Link></h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="item" key="roll">
                            <div class="dlab-box project-bx">
                                <Link to="/details_Products/sp-khac-3" tabindex="-1">
                                    <div class="dlab-media radius-sm dlab-img-overlay1" style={{ height: "350px" }}>
                                        {/* <Link to="/products"> */}
                                        <Img fluid={data.roll.childImageSharp.fluid} alt="" />
                                        {/* </Link> */}
                                    </div>
                                    <div class="dlab-info">
                                        <h3 class="dlab-title"><Link to="/details_Products/sp-khac-3" tabindex="-1">Nhãn quấn</Link></h3>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Slider>
                )}
            />
        )
    }
}
export default ProjectSlider1;