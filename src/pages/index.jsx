import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header11'
import Footer from '../components/footer4'
import {homeSliderContent4} from '../components/SliderContent'
import ClientSlider1 from '../components/clientSlider1';
import ProjectSlider1 from '../components/projectSlider1';
import HomeSlider from '../components/homeslider1'
import Img from "gatsby-image";
import { graphql } from "gatsby"
import {VNText,VText} from '../components/VNText';

import tawkTo from "tawkto-react";

const tawkToPropertyId = '602f41189c4f165d47c4d4fa'
const tawkToKey = '1f32hoa00'

// import { GatsbyImage as Img } from '@wardpeet/gatsby-image-nextgen/compat';

const bg = require('../images/background/map-bg.png')

class Index4 extends Component {

    componentDidMount(){
        tawkTo(tawkToPropertyId, tawkToKey)
    }

    render() {
        return (
            <>  
                <Header/>
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
                                            <Img fluid={this.props.data.truck.childImageSharp.fluid} alt="Khuôn Viên Bao Bì Duy Nhật" className="img-cover"/>
                                    </div>
                                </div>

                                <div class="col-lg-5 bg-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black"><span>Nhanh chóng</span> <br/>Chính xác<br/><span> Chuyên nghiệp</span>  </h2>
                                            <VText>Được thành lập vào năm  2004, Bao Bì Duy Nhật luôn phấn đấu hoàn thiện hơn nữa các sản phẩm của mình để mang tới cho quý khách hàng sự an tâm và hài lòng khi hợp tác slogan: “Nhanh chóng – Chính xác – Chuyên nghiệp”</VText>
                                            <Link to="/gioi-thieu" class="site-button outline outline-2 btnhover11" style={{fontFamily:'Merriweather'}}>Thông Tin Công Ty</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 wow fadeIn">
                                    <div class="dlab-post-media"> 
                                         <Img fluid={this.props.data.paper.childImageSharp.fluid} alt="" className="img-cover"/>
                                        {/* <img src={require("../images/duynhat/factory/DSC_3879.jpg")} alt="" class="img-cover"/> */}
                                    </div>
                                </div>
                                <div class="col-lg-4 bg-primary text-white" >
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black">Bao Bì<br/><span> Giấy</span> </h2>
                                            <VText>Tùy vào nhu cầu sử dụng, Duy Nhật có thể cung cấp nhiều mẫu bao bì giấy từ các cộng nghệ khác nhau như in flexo, in offset, và in ống đồng.</VText>
                                            <Link to="/bao-bi-giay" class="site-button outline white outline-2 btnhover11">Tìm Hiểu Thêm</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4" >
                                    <div class="dlab-post-media"> 
                                        <Img fluid={this.props.data.flexible.childImageSharp.fluid} alt="" className="img-cover"/>
                                    </div>
                                </div>
                                <div class="col-lg-4 bg-primary text-white" >
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black">Bao Bì<br/><span> Nhựa </span> </h2>
                                            <VText>Với nhiều năm kinh nghiệm trong lĩnh vực, sản phẩm bao bì nhựa của Duy Nhật sẽ luôn đảm bảo độ bền cao,  chịu nhiệt tốt, đảm bảo độ bảo quản cao và an toàn cho thực phẩm.</VText>
                                            <Link to="/bao-bi-nhua" class="site-button outline white outline-2 btnhover11">Tìm Hiểu Thêm</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 wow fadeIn">
                                    <div class="dlab-post-media">
                                        <Img fluid={this.props.data.label.childImageSharp.fluid} alt="" className="img-cover"/>
 
                                        {/* <img src={require("../images/duynhat/factory/DSC_9222.jpg")} alt="" class="img-cover"/> */}
                                    </div>
                                </div>
                                <div class="col-lg-4 bg-primary text-white" data-wow-duration="2s" data-wow-delay="0.8s">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title text-black"><span>Tem</span> &amp; Nhãn Dán<br/> </h2>
                                            <VText>Duy Nhật chuyên cung cấp những mẫu tem và nhãn dán được thiết kế và sản xuất theo thiết kế và nhu cầu cụ thể của khách hàng.</VText>
                                            <Link to="/tem-nhan" class="site-button outline white outline-2 btnhover11">Tìm Hiểu Thêm</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 wow fadeIn">
                                    <div class="dlab-post-media"> 
                                         <Img fluid={this.props.data.carton1.childImageSharp.fluid} alt="" className="img-cover"/>
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
                                        <Img fluid={this.props.data.carton2.childImageSharp.fluid} alt="" className="img-cover"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="section-full content-inner-2 bg-img-fix overlay-black-dark wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s" style={{ backgroundImage: "url(" + bg + ")" }}>
                            <div class="container">
                                <div class="section-head text-white text-center">
                                    <h2 class="title text-white"><VNText to="/san-pham" style={{color:"white"}}>Sản Phẩm</VNText> </h2>
                                    <VText>Với đội ngũ nhân viên năng động và chuyên nghiệp, trang thiết bị hiện đại, và trên 15 năm kinh nghiệm, Bao Bì Duy Nhật chuyên cung cấp nhiều loại
                                        bao bì từ nhiều loại mẫu mã phu hợp với các nhu cầu khác nhau của khách hàng như hộp giấy có cán màng bóng, dập nổi, ép kim, túi nhựa PE,
                                        PP, PA, cũng như nhiều mẫu tem, nhãn dán decal, rider.
                                    </VText>
                                    <Link to="/san-pham" class="site-button outline white outline-2 btnhover11">Tìm Hiểu Thêm Về Sản Phẩm</Link>
                                </div>
                                <div class="row icon-white">
                                    <div class="col-lg-12 col-md-12">
                                        <ProjectSlider1/>
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                                <div class="section-full content-inner-2 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s" style={{paddingBottom:0}}>
                                    <div class="container">		
                                        <div class="section-head text-black text-center">
                                            <h2 class="title text-capitalize">Khách Hàng của Bao Bì Duy Nhật</h2>
                                            <VText>Đến nay, Bao Bì Duy Nhật đã và đang cung cấp sản phẩm bao bì cho rất nhiều công ty xuất khẩu hải sản và hàng tiêu dùng trong
                                                và ngoài nước. Nhiều sản phẩm bao bì của Bao Bì Duy Nhật có thể được tìm thấy ở các địa lý bán lẻ và siêu thị lớn như:
                                                Walmart, Costco, Safeway, Woolworths, Coles.
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
                                            <h2 class="title text-black"><span>Our  </span> <br/>Facility</h2>
                                            <p>Vào đầu năm 2020, Bao Bì Duy Nhật đã khai trương nhà máy mới với khuôn viên 80,000m<sup>2</sup> tại Khu Công Nghiệp An Nghiệp, Sóc
                                            Trăng. Hiện tại, nhà máy đã chính thức được đưa vào hoạt động với toàn bộ năng suất.</p>
                                            <Link to="/nha-may" class="site-button outline outline-2 btnhover11" style={{fontFamily:'Merriweather'}}>Tìm Hiểu Về Nhà Máy của Bao Bì Duy Nhật</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                    <div class="dlab-post-media"> 
                                        <Img fluid={this.props.data.factory.childImageSharp.fluid} alt="" className="img-cover"/>
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
                                    {this.props.data.page.edges.map((page,idx) =>{
                                        if(idx >=0 && idx <=2){
                                            return(
                                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                                                    <div class="blog-post blog-grid blog-rounded blog-effect1 fly-box">
                                                        <div class="dlab-post-media dlab-img-effect"> 
                                                            <a  href={page.node.frontmatter.slug} aria-label="blog">
                                                            <Img fluid={page.node.frontmatter.featuredImage.childImageSharp.fluid} alt="DN Pack Employee" className="img-cover"/>

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
                                                            <p style={{color:"#343a40"}}>{page.node.frontmatter.summary}</p>
                                                            </div>
                                                            <div class="dlab-post-readmore"> 
                                                            <a href={page.node.frontmatter.slug} title="READ MORE" rel="bookmark" class="site-button">Read The Article
                                                                    <i class="ti-arrow-right"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}})}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                <Footer/>       
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
					  fluid(quality: 100) {
						...GatsbyImageSharpFluid
					  }
					}
				  }
				}
				
		  }
	  }
      
    }
    truck:file(relativePath: { eq: "duynhat/factory/DSC_7915.jpg" }){
      childImageSharp {
        fluid(jpegQuality: 95){
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    factory:file(relativePath: { eq: "duynhat/company/DJI_0150-copy.jpg" }){
        childImageSharp {
          fluid(jpegQuality: 100){
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
    }
    flexible:file(relativePath: { eq: "duynhat/factory/DSC_36020.jpg" }){
        childImageSharp {
          fluid(quality: 100,maxWidth:550){
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
    }
    paper:file(relativePath: { eq: "duynhat/factory/DSC_3879.jpg" }){
        childImageSharp {
          fluid(quality: 100,maxWidth:550){
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
    }
    label:file(relativePath: { eq: "duynhat/factory/DSC_9222.jpg" }){
        childImageSharp {
          fluid(quality: 100,maxWidth:550){
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
    }
    carton1:file(relativePath: { eq: "duynhat/DSC_7898.jpg" }){
        childImageSharp {
          fluid(quality: 100, maxWidth:550){
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
    }
    carton2:file(relativePath: { eq: "duynhat/factory/DSC_9237.jpg" }){
        childImageSharp {
          fluid(quality: 100, maxWidth:550){
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
    }
  }
`
