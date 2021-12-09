import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header11'
import Footer from '../components/footer4'
import ReactPlayer from "react-player/lazy";
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image";
import {VText} from '../components/VNText';


class About2 extends Component {


    render() {
        return (
            <>
                <Header/>
                <StaticQuery
                    query={graphql`
                    query {
                        desktop: file(relativePath: { eq: "duynhat/company/DJI_0150-copy.jpg" }) {
                        childImageSharp {
                            fluid(quality: 100, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                        }
                        truck: file(relativePath: { eq: "duynhat/factory/DSC_7915.jpg" }) {
                            childImageSharp {
                                fluid(jpegQuality: 100,maxWidth:1024) {
                                ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                            }
                    }
                    `}
                    render={data => {
                    const imageData = data.desktop.childImageSharp.fluid
                        return (
                <div class="page-content bg-white">
                    {/* <div class="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bnr3 + ")" }}> */}
                    
                    <BackgroundImage
                        fluid={imageData}
                        >
                    <div class="dlab-bnr-inr overlay-black-middle">

                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">About</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link to={"/"}>Trang Chủ</Link></li>
                                        <li>Giới Thiệu</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    </BackgroundImage>
                      
                 
                    
                    <div class="section-full">
                            <div class="row spno about-industry">
                             
                    
                                <div class="col-lg-12 bg-secondry text-white wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                                    <div class="service-box style2">
                                        <div>
                                            <h2 class="title">Hành Trình của<br/><span> Bao Bì Duy Nhật. </span> </h2>
                                            <VText style={{marginBottom:0,textAlign:'center'}}>Công ty TNHH SX &amp; TM Duy Nhật được thành lập vào năm 2004 (<a href="https://www.dnpack.com.vn" style={{color:"white",textDecorationLine:"underline"}}>Bao Bì Duy Nhật - Duy Nhat Pack - DN Pack</a>). 
                                            Bao Bì Duy Nhật chuyên sản xuất in ấn và cung cấp các loại bao bì giấy, bao bì màng ghép phức hợp cao cấp cho nông – lâm nghiệp, thủy – hải sản, phục vụ sản xuất kinh doanh hàng hóa ở nhiều ngành, 
                                            nhiều lĩnh vực. Từ đầu năm 2020, Bao Bì Duy Nhật đã dời khuôn viên sản xuất về Khu Công Nghiệp An Nghiệp, nhầm mở rộng quy mô sản xuất và
                                            nâng cao chất lượng sản phẩm. Với đội ngũ quản lý nhiều năm kinh nghiệm, công nghệ tân tiến, hiện đại và đội ngũ nhân viên chuyên nghiệp với tay 
                                            nghề cao, chúng tôi luôn phấn đấu hoàn thiện hơn nữa các sản phẩm của mình để mang tới cho quý khách hàng sự an tâm và hài lòng khi hợp tác. </VText>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="row justify-content-center" style={{ background:  "linear-gradient(360deg, #FFFFFF 70%,#880006 70%, #880006 30%)"}}>
                                
                                    <ReactPlayer url="https://www.youtube.com/watch?v=eclyagw9Ui0"
                                                                    volume = {0.4}
                                                                    controls = {true}
                                                            />
                                
                            </div>
                        </div>

                                <div class="container">
                           
                                    <div class="row justify-items-center">
                                        {/* <div class="col-lg-6 col-md-12 m-b30">
                                                <div class="video-bx">
                                            
                                                </div>
                                            </div> */}
                                            <p></p>
                                            {/* <div class="col-lg-6 col-md-12 m-b30 align-self-center video-infobx"> */}
                                                <div class="content-bx1">
                                                {/* <h2 class="title">Thriving to <br/> deliver<br/><span class="text-primary">since 2004</span></h2> */}
                                                <VText style={{textAlign:'center'}}> Từ khi được thành lập vào năm 2004, Bao Bì Duy Nhật chuyên sản xuất và in ấn bao bì từ giấy và
                                                nhựa cho ngành thủy - hải sản, và nông - lâm nghiệp cũng như các mặt hàng hóa tiêu dùng. Đối với mặt hàng bao bì giấy,
                                                Bao Bì Duy Nhật chuyên sản xuất nhiều loại hộp giấy, thùng giấy, và các tem nhãn nhiều kiểu dáng phục vụ nhiều nhu cầu khác nhau.
                                                Ngoài ra, chúng tôi còn chuyên sản xuất nhiều loại túi nhựa, bào bì màng ghép phức hợp cao cấp trên các chất liệu: BOPP, 
                                                PET, MCPP, MPET, PA, PE, AL, M-OPP, LLDPE…</VText>
                                                <VText style={{textAlign:'center'}}> Đến nay, Bao Bì Duy Nhật rất tự hào vì đã và đang cung cấp sản phẩm bao bì cho rất nhiều công ty có tên tuổi trên
                                                thị trường trong và ngoài nước như: Walmart, Costco, Safeway, Woolworths…</VText>
                                                <VText style={{textAlign:'center'}}>Để đảm bảo chất lượng sản phẩm đến với khách hàng, chúng tôi không ngừng nâng cao trình độ công nghệ để đáp ứng 
                                                các chuẩn mực chất lượng quốc tế. Công ty đang áp dụng hệ thống quản lý chất lượng:  ISO 9001:2005 và BRC cho bao bì thực phẩm.
                                                Bên cạnh đó, chúng tôi luôn không ngừng cải tiến công nghệ sản xuất và làm việc với những nhà cung cấp nhựa hàng đầu nhằm hướng tới bảo vệ môi trường, làm 
                                                cho sản phẩm của Bao Bì Duy Nhật luôn thân thiện với môi trường, dễ dàng tái chế, giảm thiểu lượng rác thải cho môi trường.</VText>
                                                <VText style={{textAlign:'center'}}>Với slogan “Nhanh chóng – Chính xác – Chuyên nghiệp”,  chúng tôi luôn phấn đấu hoàn thiện hơn nữa các
                                                 sản phẩm của mình để mang tới cho quý khách hàng sự an tâm và hài lòng khi hợp tác.</VText>
                                                    <h4 class="m-b0" align="right">Bùi Đức Xứng</h4>
                                                    <span class="font-14" style={{float:'right',marginBottom:15}}>Giám Đốc</span>
                                                </div>
                                    </div>


                                </div>
    
                        <div class="section-full box-about-list">
                            <div class="row spno">
                                <div class="col-lg-6 col-md-12"> 
                                
                                            {/* // <img src={require("../images/duynhat/factory/DSC_7915.jpg")} alt="" class="img-cover"/>  */}
                                            <Img fluid={data.truck.childImageSharp.fluid} alt="" className="img-cover"/>
                                     

                                </div>
                                <div class="col-lg-6 col-md-12 bg-primary">
                                    <div class="max-w700 m-auto p-tb50 p-lr20">
                                        <div class="text-white">
                                            {/* <h2>We're comitted to our slogan, <br/>providing better products</h2> */}
                                        </div>
                                        <div class="icon-bx-wraper m-b30 left">
                                            <div class="icon-md"> 
                                                <Link to={"/#"} class="icon-cell text-white" aria-label="time">
                                                    <i class="fa fa-calendar"></i>
                                                </Link> 
                                            </div>
                                            <div class="icon-content">
                                                <h4 class="dlab-tilte">Nhanh Chóng</h4>
                                                <p>
                                                    <ul class="list-check secondry">
                                                    <li>
                                                    Các công đoạn sản xuất sẽ được triển khai hiệu quả, nhanh chóng theo tiến độ, và sản phẩm giao đến khách hàng trong thời gian ngắn nhất.
                                                    </li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="icon-bx-wraper m-b30 left">
                                            <div class="icon-md"> 
                                                <Link to={"/#"} class="icon-cell text-white " aria-label="check">
                                                    <i class="fa fa-check"></i>
                                                </Link> 
                                            </div>
                                            <div class="icon-content">
                                                <h4 class="dlab-tilte">Chính Xác</h4>
                                                <p>
                                                <ul class="list-check secondry">
                                                <li style={{fontFamily:'Merriweather'}}>Công ty đã trang bị hệ thống kiểm soát chất lượng in bằng hệ thống camera tự động đảm bảo chất lượng in chính xác.</li>
                                                </ul>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="icon-bx-wraper left">
                                            <div class="icon-md"> 
                                                <Link to={"/#"} class="icon-cell text-white" aria-label="briefcase">
                                                    <i class="fa fa-briefcase"></i>
                                                </Link> 
                                            </div>
                                            <div class="icon-content">
                                                <h4 class="dlab-tilte">Chuyên Nghiệp</h4>
                                                <p>
                                                <ul class="list-check secondry">
                                                    <li style={{fontFamily:'Merriweather'}}>
                                                    Đội ngũ cán bộ công nhân viên chuyên nghiệp, lành nghề với quy trình sản xuất hiện đại, khép kín từ thiết kế tạo khuôn mẫu, xuất phim, in ấn, gia công thành phẩm.
                                                    </li>

                                                </ul>
                                                </p>
                                            </div>
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
export default About2;