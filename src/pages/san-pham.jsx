import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header11'
import Footer from '../components/footer4'
import Portfolio from '../components/portfolio'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image";

// const bg = require('../images/duynhat/factory/DSC_3583.jpg')

class Product extends Component {


    render() {
        return (
            <>
                <Header/>
                <StaticQuery
                    query={graphql`
                    query {
                        desktop: file(relativePath: { eq: "duynhat/factory/DSC_3583.jpg" }) {
                        childImageSharp {
                            fluid(quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                        }
                        flex: file(relativePath: { eq: "duynhat/factory/DSC_9237.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        paper: file(relativePath: { eq: "duynhat/factory/DSC_3879.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        label: file(relativePath: { eq: "duynhat/factory/DSC_9257.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        poly: file(relativePath: { eq: "duynhat/factory/DSC_7885.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    `}
                    render={data => {
                        return (

                <div class="page-content bg-white">
                    <BackgroundImage
                        className="dlab-bnr-inr overlay-black-middle"
                        fluid={data.desktop.childImageSharp.fluid}
                        >
                        <div class="dlab-bnr-inr overlay-black-middle ">
                            <div class="container">
                                <div class="dlab-bnr-inr-entry">
                                    <h1 class="text-white">Sản Phẩm</h1>
                                    <div class="breadcrumb-row">
                                        <ul class="list-inline">
                                            <li><Link to="/">Trang Chủ</Link></li>
                                            <li>Sản Phẩm</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BackgroundImage>
                    {/* </div> */}
                    <div class="container ">
                            <div class="section-head text-black text-center">
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="dlab-box service-box-3" style={{backgroundColor:"white"}}>
                                        <div class="dlab-media radius-sm dlab-img-effect fade-in"> 
                                            <Link to="/bao-bi-nhua">
                                                {/* <img src={require('../images/duynhat/factory/DSC_9237.jpg')} alt=""/> */}
                                                <Img fluid={data.flex.childImageSharp.fluid} alt="" className="dlab-media radius-sm dlab-img-overlay1"/>

                                            </Link> 
                                        </div>
                                        <div class="dlab-info" >
                                            <h4 class="title"><Link to="/bao-bi-nhua">Bao Bì Nhựa</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.6s">
                                    <div class="dlab-box service-box-3"> 
                                    <div class="dlab-media radius-sm  dlab-img-effect fade-in"> 
                                            <Link to="/bao-bi-giay">
                                            {/* <img src={require('../images/duynhat/factory/DSC_3879.jpg')} alt=""/> */}
                                                <Img fluid={data.paper.childImageSharp.fluid} alt="" className="dlab-media radius-sm dlab-img-overlay1"/>

                                            </Link> 
                                        </div>
                                        <div class="dlab-info">
                                            <h4 class="title"><Link to="/bao-bi-giay">Bao Bì Giấy</Link></h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-12 m-b50 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                                    <div class="dlab-box service-box-3">
                                        <div class="dlab-media radius-sm dlab-img-effect fade-in"> 
                                            <Link to="/tem-nhan">
                                            {/* <img src={require('../images/duynhat/factory/DSC_9257.jpg')} alt=""/> */}
                                                <Img fluid={data.label.childImageSharp.fluid} alt="" className="dlab-media radius-sm dlab-img-overlay1"/>

                                            </Link> 
                                        </div>
                                        <div class="dlab-info">
                                            <h4 class="title"><Link to="/tem-nhan">Tem &amp; Nhãn</Link></h4>
                                        </div>
                                    </div>
                                </div>
                          
                            </div>
                        </div>
                    <Portfolio col="col-md-3"/>
                </div>      
                 )
                }}
                />             
                <Footer/>                
            </>
        )
    }
}
export default Product;