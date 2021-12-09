import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header11'
import Footer from '../components/footer4'
import HomeSlider from '../components/factoryGallerySlider'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image";
import {VText} from '../components/VNText'

class PortfolioDetails extends Component {


    render() {
        return (
            <>
                <Header/>
                <StaticQuery
                    query={graphql`
                    query {
                        desktop: file(relativePath: { eq: "duynhat/factory/DSC_3762.jpg" }) {
                        childImageSharp {
                            fluid(quality: 100, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                        }
                        top: file(relativePath: { eq: "duynhat/company/DJI_0163-copy.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        boxes: file(relativePath: { eq: "duynhat/DSC_7898.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        emp: file(relativePath: { eq: "duynhat/factory/DSC_3553.jpg" }) {
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
                        // className="dlab-bnr-inr overlay-black-middle"
                        fluid={data.desktop.childImageSharp.fluid}
                        backgroundColor={`#d2151e`}
                        >
                        <div class="dlab-bnr-inr overlay-black-middle ">
                            <div class="container">
                                <div class="dlab-bnr-inr-entry">
                                    <h1 class="text-white">Thông Tin Nhà Máy</h1>
                                    <div class="breadcrumb-row">
                                        <ul class="list-inline">
                                            <li><Link to="/vn" style={{fontFamily:'Merriweather'}}>Trang Chủ</Link></li>
                                            <li><Link to="#" style={{fontFamily:'Merriweather'}}>Nhà Máy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BackgroundImage>
                    
                    <div class="content-block">
                        <div class="section-full content-inner bg-white">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 m-b30">
                                        <h2 class="text-black font-weight-600 m-b15">Thông Tin Nhà Máy</h2>
                                        <VText>Bao Bì Duy Nhật hoạt động tại khuôn viên nhà máy sản xuất mới với diện tích 80,000m<sup>2</sup> tại
                                        Khu Công Nghiệp An Nghiệp, Tỉnh Sóc Trăng.</VText>
                                        <VText>
                                        Nhà máy của chúng tôi được trang bị với những trang thiết bị tối tân và hiện đại nhất như:
                                        máy in ống đồng với 11 trạm in màu, máy in flexo, offset, và dây chuyền sản xuất hoàn thiện sản phẩm
                                        từ cắt theo khuôn, đánh bóng, dập, ghép, và dán túi. Trước khi sản phẩm bước qua những công đoạn nêu trên
                                        , đội ngũ thiết kế chuyên nghiệp của Bao Bì Duy Nhật sẽ làm việc với khách hàng để hoàn thiện những chi 
                                        tiết, đáp ứng mọi yêu cầu của khách hàng.
                                        </VText>   
                                        <VText>
                                        Hiện tại, Bao Bì Duy Nhật đang áp dụng và thực hiện chương trình quản lý và đảm bảo chất lượng
                                        ISO 9001:2005 &amp; BRC cho bao bì thực phẩm để giảm thiểu lỗi sản xuất và những rủi ro khi
                                        sản phẩm đến tay khách hàng. Bên cạnh đó, chúng tôi cũng không ngừng làm việc với những nhà cung cấp 
                                        nhựa hàng đầu và cải tiến để những sản phẩm thân thiện với môi trường, dễ dàng tái chế, giảm thiệu lượng rác thải
                                        ra môi trường.
                                        </VText>

                                    
                                        <div class="row widget widget_getintuch widget_getintuch-pro-details m-lr0">
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                                                <div class="pro-details">
                                                    <i class="ti ti-user"></i>
                                                    <strong>Nhân Viên</strong> 500+
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                                                <div class="pro-details">
                                                    <i class="ti ti-location-pin"></i>
                                                    <strong>Vị Trí</strong>Huyện Châu Thành, Tỉnh Sóc Trăng
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                                                <div class="pro-details">
                                                    <i class="ti ti-ruler-alt-2"></i>
                                                    <strong>Diện Tích</strong>80,000m<sup>2</sup>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                                                <div class="pro-details">
                                                    <i class="ti ti-medall "></i>
                                                    <strong>Tiêu Chuẩn</strong>ISO 9001:2005 &amp; BRC
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                                                <div class="pro-details">
                                                    <i class="ti ti-stats-up "></i>
                                                    <strong>Kinh Nghiệm</strong>16+ năm
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 p-lr0">
                                                <div class="pro-details">
                                                    <i class="ti ti-settings "></i>
                                                    Trang Thiết Bị Tối Tân và Hiện Đại
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-lg-6">
                                        <div class="row">
                                            <div class="col-lg-12 m-b30">
                                                <Img fluid={data.top.childImageSharp.fluid} alt="" className="img-cover"/>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                                                <Img fluid={data.boxes.childImageSharp.fluid} alt="" className="img-cover"/>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                                                <Img fluid={data.emp.childImageSharp.fluid} alt="" className="img-cover"/>
                                            </div>
                                            <div class="col-lg-12 m-b30">
                                                <Img fluid={data.poly.childImageSharp.fluid} alt="" className="img-cover"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="container">
                           
    
                           <HomeSlider 
                            //    data={homeSliderContentFactory}
                               contentWrapperCls="sliderStyle4"
                                />

                        </div>
                                </div>
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
export default PortfolioDetails;