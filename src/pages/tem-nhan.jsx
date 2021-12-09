import React, { Component } from 'react';
import Header from '../components/header11'
import Footer from '../components/footer4'
import ClientSlider1 from '../components/clientSlider1';
import PortfolioLabel from '../components/portfolio_label';
// const bg = require('../images/duynhat/factory/DSC_3851_2.jpg')
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import {VNText} from '../components/VNText'
class Label extends Component {


    render() {
        return (
            <>
                <Header/>
                <StaticQuery
                    query={graphql`
                    query {
                        desktop: file(relativePath: { eq: "duynhat/factory/DSC_3851_2.jpg" }) {
                        childImageSharp {
                            fluid(quality: 100, maxWidth: 1920) {
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
                                    <h1 class="text-white">Nhãn &amp; Tem </h1>
                                    <div class="breadcrumb-row">
                                        <ul class="list-inline">
                                        <li><VNText to="/">Trang Chủ</VNText></li>
                                        <li><VNText to="/san-pham">Sản Phẩm</VNText></li>
                                        <li><VNText to="#">Nhãn &amp; Tem</VNText></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BackgroundImage>
                    <PortfolioLabel col="col-md-3"/>
                    <div class="section-full content-inner bg-white" style={{paddingTop:60}}>
                            <div class="container">
                            <div class="section-head text-black text-center">
                            <h2 class="title text-capitalize">Khách Hàng của Bao Bì Duy Nhật</h2>
                                <ClientSlider1
                                hideBorder
                                allowPadding
                                />
                            </div>
                            </div>
                        </div>
                </div>          
                 )
                }}
                />      
                <Footer/>                
            </>
        )
    }
}
export default Label;