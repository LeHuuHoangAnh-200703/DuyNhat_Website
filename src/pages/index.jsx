import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header11'
import Footer from '../components/footer4'
import { homeSliderContent4 } from '../components/SliderContent'
import ClientSlider1 from '../components/clientSlider1';
import ProjectSlider1 from '../components/projectSlider1';
import HomeSlider from '../components/homeslider1'
import Img from "gatsby-image";
import { graphql } from "gatsby"
import { VNText, VText } from '../components/VNText';

import tawkTo from "tawkto-react";

const tawkToPropertyId = '602f41189c4f165d47c4d4fa'
const tawkToKey = '1f32hoa00'

// import { GatsbyImage as Img } from '@wardpeet/gatsby-image-nextgen/compat';

const bg = require('../images/background/map-bg.png')

class Index4 extends Component {
    componentDidMount() {
        tawkTo(tawkToPropertyId, tawkToKey)
    }
    render() {
        return (
            <>
                <Header />
                <HomeSlider
                    data={homeSliderContent4}
                    contentWrapperCls="sliderStyle4"
                    btnCls="site-button"
                    btnText="Liên Hệ"
                    btn2Text="Sản Phẩm"
                    show2Btn
                />
                <div class="page-content bg-white">
                    <div class="content-block">
                        <div class="section-full">
                            <div class="row spno about-industry">
                                <div class="col-lg-7 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                    <div class="dlab-post-media">
                                        <Img fluid={this.props.data.truck.childImageSharp.fluid} alt="Khuôn Viên Bao Bì Duy Nhật" className="img-cover" />
                                    </div>
                                </div>

                                <div class="col-lg-5 bg-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black"><span>Nhanh chóng</span> <br />Chính xác<br /><span> Chuyên nghiệp</span>  </h2>
                                            <VText>Với hành trình hơn 20 năm phát triển từ năm 2004, Bao Bì Duy Nhật cam kết không ngừng hoàn thiện từng sản phẩm, đồng hành cùng khách hàng bằng tinh thần: "Nhanh chóng – Chính xác – Chuyên nghiệp".</VText>
                                            <Link to="/gioi-thieu" class="site-button outline outline-2 btnhover11" style={{ fontFamily: 'Merriweather' }}>Thông Tin Công Ty</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 wow fadeIn">
                                    <div class="dlab-post-media">
                                        <Img fluid={this.props.data.paper.childImageSharp.fluid} alt="" className="img-cover" />
                                        {/* <img src={require("../images/duynhat/factory/DSC_3879.jpg")} alt="" class="img-cover"/> */}
                                    </div>
                                </div>
                                <div class="col-lg-4 bg-primary text-white" >
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black">Bao Bì<span> Giấy</span> </h2>
                                            <VText>Đáp ứng đa dạng nhu cầu của khách hàng, Duy Nhật cung cấp đa dạng mẫu mã bao bì giấy với các công nghệ in tiên tiến: in flexo, in offset và in ống đồng.</VText>
                                            <Link to="/bao-bi-giay" class="site-button outline white outline-2 btnhover11">Tìm Hiểu Thêm</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4" >
                                    <div class="dlab-post-media">
                                        <Img fluid={this.props.data.flexible.childImageSharp.fluid} alt="" className="img-cover" />
                                    </div>
                                </div>
                                <div class="col-lg-4 bg-primary text-white" >
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black">Bao Bì<span> Nhựa </span> </h2>
                                            <VText>Được sản xuất từ quy trình chuyên nghiệp với nhiều năm kinh nghiệm, bao bì nhựa Duy Nhật sở hữu ưu điểm vượt trội: độ bền cao, chịu nhiệt tốt, bảo quản lâu dài và đạt chuẩn an toàn thực phẩm.</VText>
                                            <Link to="/bao-bi-nhua" class="site-button outline white outline-2 btnhover11">Tìm Hiểu Thêm</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 wow fadeIn">
                                    <div class="dlab-post-media">
                                        <Img fluid={this.props.data.label.childImageSharp.fluid} alt="" className="img-cover" />

                                        {/* <img src={require("../images/duynhat/factory/DSC_9222.jpg")} alt="" class="img-cover"/> */}
                                    </div>
                                </div>
                                <div class="col-lg-4 bg-primary text-white" data-wow-duration="2s" data-wow-delay="0.8s">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black"><span>Tem</span> &amp; Nhãn Dán<br /> </h2>
                                            <VText>Chuyên cung cấp tem và nhãn dán với dịch vụ thiết kế và sản xuất tùy chỉnh, Duy Nhật đáp ứng mọi yêu cầu đặc thù của khách hàng.</VText>
                                            <Link to="/tem-nhan" class="site-button outline white outline-2 btnhover11">Tìm Hiểu Thêm</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 wow fadeIn">
                                    <div class="dlab-post-media">
                                        <Img fluid={this.props.data.carton1.childImageSharp.fluid} alt="" className="img-cover" />
                                        {/* <img src={require("../images/duynhat/factory/DSC_3879.jpg")} alt="" class="img-cover"/> */}
                                    </div>
                                </div>
                                <div class="col-lg-4 bg-primary text-white" >
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black">Thùng Carton</h2>
                                            <VText>Công ty Duy Nhật chuyên sản xuất thùng carton chất lượng cao với đa dạng kích thước từ 3 lớp đến 7 lớp, đáp ứng mọi nhu cầu đóng gói và vận chuyển hàng hóa an toàn, bền chắc với giá cả cạnh tranh.</VText>
                                            <Link to="/thung-carton" class="site-button outline white outline-2 btnhover11">Tìm Hiểu Thêm</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4" >
                                    <div class="dlab-post-media">
                                        <Img fluid={this.props.data.carton2.childImageSharp.fluid} alt="" className="img-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section-full content-inner-2 bg-img-fix overlay-black-dark wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s" style={{ backgroundImage: "url(" + bg + ")" }}>
                            <div class="container">
                                <div class="section-head text-white text-center">
                                    <h2 class="title text-white"><VNText to="/san-pham" style={{ color: "white" }}>Sản Phẩm</VNText> </h2>
                                    <VText>Với hơn 15 năm kinh nghiệm, đội ngũ nhân viên chuyên nghiệp và hệ thống thiết bị hiện đại, Bao Bì Duy Nhật cung cấp đa dạng giải pháp bao bì: hộp giấy cán màng, dập nổi, ép kim; túi nhựa PE, PP, PA; cùng các loại tem, nhãn decal và rider - đáp ứng mọi nhu cầu đặc thù của khách hàng.
                                    </VText>
                                    <Link to="/san-pham" class="site-button outline white outline-2 btnhover11">Tìm Hiểu Thêm Về Sản Phẩm</Link>
                                </div>
                                <div class="row icon-white">
                                    <div class="col-lg-12 col-md-12">
                                        <ProjectSlider1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section-full content-inner-2 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s" style={{ paddingBottom: 0 }}>
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title text-capitalize">Khách Hàng của Bao Bì Duy Nhật</h2>
                                    <VText>Đến nay, Bao Bì Duy Nhật đã trở thành đối tác tin cậy của nhiều doanh nghiệp xuất khẩu hải sản và hàng tiêu dùng trong và ngoài nước. Sản phẩm của chúng tôi có mặt tại các hệ thống bán lẻ và siêu thị lớn trên thế giới như: Walmart, Costco, Safeway, Woolworths, Coles.
                                    </VText>
                                    {/* <h2 class="title text-capitalize">We work with our customers to provide the highest quality products,<br/><span class="text-primary">Join with our satisfied customers.</span></h2> */}
                                </div>
                                <ClientSlider1 hideBorder="border" />
                            </div>
                        </div>
                        <div class="section-full bg-gray wow">
                            <div class="row spno about-industry">
                                <div class="col-lg-4 bg-gray " data-wow-duration="2s" data-wow-delay="0.2s">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black"><span>Về  </span> <br />Cơ sở vật chất</h2>
                                            <p>Đầu năm 2020, Bao Bì Duy Nhật chính thức khai trương nhà máy mới với quy mô 80.000m² tại Khu Công Nghiệp An Nghiệp, Sóc Trăng. Hiện nay, nhà máy đã đi vào hoạt động với công suất tối đa, sẵn sàng đáp ứng nhu cầu ngày càng tăng của khách hàng.</p>
                                            <Link to="/nha-may" class="site-button outline outline-2 btnhover11" style={{ fontFamily: 'Merriweather' }}>Tìm Hiểu Về Nhà Máy của Bao Bì Duy Nhật</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                    <div class="dlab-post-media">
                                        <Img fluid={this.props.data.factory.childImageSharp.fluid} alt="" className="img-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section-full content-inner bg-white">
                            <div class="container">
                                <div class="section-head text-black text-center">
                                    <h2 class="title text-capitalize">Tin Tức</h2>
                                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p> */}
                                </div>
                                <div class="row">
                                    {this.props.data.page.edges.map((page, idx) => {
                                        if (idx >= 0 && idx <= 2) {
                                            return (
                                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                                    <div class="blog-post blog-grid blog-rounded blog-effect1 fly-box">
                                                        <div class="dlab-post-media dlab-img-effect">
                                                            <a href={page.node.frontmatter.slug} aria-label="blog">
                                                                <Img fluid={page.node.frontmatter.featuredImage.childImageSharp.fluid} alt="DN Pack Employee" className="img-cover" />

                                                            </a>
                                                        </div>
                                                        <div class="dlab-info p-a20 border-1 bg-white">
                                                            <div class="dlab-post-meta">
                                                                <ul>
                                                                    <li class="post-date"> <span>{page.node.frontmatter.date}</span> </li>
                                                                    <li class="post-author"> By <a href={page.node.frontmatter.slug}>{page.node.frontmatter.author}</a> </li>
                                                                </ul>
                                                            </div>
                                                            <div class="dlab-post-title">
                                                                <h4 class="post-title"><a href={page.node.frontmatter.slug}>{page.node.frontmatter.title}</a></h4>
                                                            </div>
                                                            <div class="dlab-post-text">
                                                                <p style={{ color: "#343a40" }}>{page.node.frontmatter.summary}</p>
                                                            </div>
                                                            <div class="dlab-post-readmore">
                                                                <a href={page.node.frontmatter.slug} title="READ MORE" rel="bookmark" class="site-button">Read The Article
                                                                    <i class="ti-arrow-right"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
export default Index4;
export const query = graphql`
query MyQuery {
    page: allMarkdownRemark(
		sort: { order: DESC, fields: [frontmatter___date] }
	)  {
      edges{
		  node{
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
				author
				tags
				urls
				summary
				featuredImage {
					childImageSharp {
					  fluid(maxWidth: 800, quality: 90) {
						...GatsbyImageSharpFluid_withWebp
					  }
					}
				  }
				}
		  }
	  }
    }
    
    truck:file(relativePath: { eq: "duynhat/factory/ANT MEDIA-29.jpg" }){
      childImageSharp {
        fluid(maxWidth: 2400, quality: 90, srcSetBreakpoints: [750, 1080, 1366, 1920, 2400]){
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    
    factory:file(relativePath: { eq: "duynhat/company/ANT MEDIA-223.jpg" }){
        childImageSharp {
          fluid(maxWidth: 2400, quality: 90, srcSetBreakpoints: [750, 1080, 1366, 1920, 2400]){
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
    
    flexible:file(relativePath: { eq: "duynhat/factory/ANT MEDIA-12.jpg" }){
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90, srcSetBreakpoints: [400, 800, 1200]){
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }

    paper:file(relativePath: { eq: "duynhat/factory/ANT MEDIA-52.jpg" }){
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90, srcSetBreakpoints: [400, 800, 1200]){
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }

    label:file(relativePath: { eq: "duynhat/factory/ANT MEDIA-217.jpg" }){
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90, srcSetBreakpoints: [400, 800, 1200]){
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }

    carton1:file(relativePath: { eq: "duynhat/factory/ANT MEDIA-207.jpg" }){
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90, srcSetBreakpoints: [400, 800, 1200]){
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }

    carton2:file(relativePath: { eq: "duynhat/factory/ANT MEDIA-20.jpg" }){
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90, srcSetBreakpoints: [400, 800, 1200]){
              ...GatsbyImageSharpFluid_withWebp
          }
        }
    }
  }
`