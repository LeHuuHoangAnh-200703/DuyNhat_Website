import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header11'
import Footer from '../components/footer4'
import ReactPlayer from "react-player/lazy";
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image";
import { VText } from '../components/VNText';


class About2 extends Component {
    render() {
        return (
            <>
                <Header />
                <StaticQuery
                    query={graphql`
                    query {
                        desktop: file(relativePath: { eq: "duynhat/company/ANT MEDIA-3.jpg" }) {
                            childImageSharp {
                                fluid(
                                    quality: 90, 
                                    maxWidth: 2400,
                                    srcSetBreakpoints: [750, 1080, 1366, 1920, 2400]
                                ) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        truck: file(relativePath: { eq: "duynhat/factory/DSC_7915.jpg" }) {
                            childImageSharp {
                                fluid(
                                    quality: 90,
                                    maxWidth: 1920,
                                    srcSetBreakpoints: [600, 960, 1366, 1920]
                                ) {
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
                                                    <h2 class="title">Hành Trình của<br /><span> Bao Bì Duy Nhật. </span> </h2>
                                                    <VText style={{ marginBottom: 0, textAlign: 'center' }}>Công ty TNHH SX & TM Duy Nhật được thành lập năm 2004 (<a href="https://www.dnpack.com.vn" style={{ color: "white", textDecorationLine: "underline" }}>Bao Bì Duy Nhật - Duy Nhat Pack - DN Pack</a>), chuyên sản xuất và cung cấp bao bì giấy, bao bì màng ghép phức hợp cao cấp cho các ngành nông – lâm nghiệp, thủy – hải sản cùng nhiều lĩnh vực sản xuất kinh doanh khác.
                                                        Năm 2020 đánh dấu bước phát triển quan trọng khi Bao Bì Duy Nhật chuyển nhà máy về Khu Công Nghiệp An Nghiệp nhằm mở rộng quy mô và nâng cao chất lượng sản phẩm. Với đội ngũ quản lý giàu kinh nghiệm, công nghệ hiện đại và đội ngũ nhân viên chuyên nghiệp, chúng tôi không ngừng hoàn thiện sản phẩm, mang đến sự an tâm và hài lòng tối đa cho khách hàng.</VText>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center" style={{ background: "linear-gradient(360deg, #FFFFFF 70%,#880006 70%, #880006 30%)" }}>
                                        <ReactPlayer url="https://www.youtube.com/watch?v=eclyagw9Ui0"
                                            volume={0.4}
                                            controls={true}
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
                                            <VText style={{ textAlign: 'center' }}> Từ khi thành lập năm 2004, Bao Bì Duy Nhật chuyên sản xuất và in ấn bao bì giấy, bao bì nhựa phục vụ các ngành thủy - hải sản, nông - lâm nghiệp và hàng tiêu dùng. Sản phẩm bao bì giấy của chúng tôi bao gồm: hộp giấy, thùng carton và tem nhãn đa dạng kiểu dáng, đáp ứng mọi nhu cầu đóng gói. Bên cạnh đó, Bao Bì Duy Nhật còn chuyên sản xuất túi nhựa và bao bì màng ghép phức hợp cao cấp trên các chất liệu: BOPP, PET, MCPP, MPET, PA, PE, AL, M-OPP, LLDPE.</VText>
                                            <VText style={{ textAlign: 'center' }}> Đến nay, Bao Bì Duy Nhật tự hào là đối tác tin cậy của nhiều doanh nghiệp hàng đầu trong và ngoài nước, với sản phẩm có mặt tại các chuỗi bán lẻ lớn như: Walmart, Costco, Safeway, Woolworths.</VText>
                                            <VText style={{ textAlign: 'center' }}>Cam kết mang đến sản phẩm chất lượng cao, Bao Bì Duy Nhật không ngừng đầu tư nâng cấp công nghệ, đáp ứng các tiêu chuẩn quốc tế với hệ thống quản lý chất lượng ISO 9001:2015 và chứng nhận BRC dành cho bao bì thực phẩm.
                                                Song song với chất lượng, chúng tôi đặt bảo vệ môi trường lên hàng đầu thông qua việc hợp tác với các nhà cung cấp nguyên liệu uy tín, ứng dụng công nghệ xanh để tạo ra sản phẩm thân thiện môi trường, dễ dàng tái chế và giảm thiểu tác động đến thiên nhiên.</VText>
                                            <VText style={{ textAlign: 'center' }}>Với phương châm "Nhanh chóng – Chính xác – Chuyên nghiệp", Bao Bì Duy Nhật không ngừng hoàn thiện chất lượng sản phẩm và dịch vụ, mang đến sự an tâm và hài lòng trọn vẹn cho mỗi khách hàng.</VText>
                                            <h4 class="m-b0" align="right">Bùi Đức Xứng</h4>
                                            <span class="font-14" style={{ float: 'right', marginBottom: 15 }}>Giám Đốc</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="section-full box-about-list">
                                    <div class="row spno">
                                        <div class="col-lg-6 col-md-12">
                                            {/* // <img src={require("../images/duynhat/factory/DSC_7915.jpg")} alt="" class="img-cover"/>  */}
                                            <Img fluid={data.truck.childImageSharp.fluid} alt="" className="img-cover" />
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
                                                                    Mỗi công đoạn sản xuất được triển khai nhanh chóng, chính xác, giúp sản phẩm đến tay khách hàng trong thời gian ngắn nhất mà không ảnh hưởng đến chất lượng.
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
                                                                <li style={{ fontFamily: 'Merriweather' }}>Với hệ thống kiểm tra chất lượng in tự động bằng camera, mỗi sản phẩm đều được giám sát chặt chẽ, đảm bảo màu sắc và độ nét hoàn hảo.</li>
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
                                                                <li style={{ fontFamily: 'Merriweather' }}>
                                                                    Đội ngũ nhân viên chuyên nghiệp, tay nghề cao cùng quy trình sản xuất hiện đại, khép kín từ thiết kế khuôn mẫu, xuất phim, in ấn đến gia công thành phẩm.
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
                <Footer />
            </>
        )
    }
}
export default About2;