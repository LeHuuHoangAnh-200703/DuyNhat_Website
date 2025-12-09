import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header11'
import Footer from '../components/footer4'
import ClientSlider1 from '../components/clientSlider1';
import PortfolioFlexible from '../components/portfolio_flexible';
// const bg = require('../images/duynhat/factory/DSC_3851_2.jpg')
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

class Flexible extends Component {
    render() {
        return (
            <>
                <Header />
                <StaticQuery
                    query={graphql`
                    query {
                        desktop: file(relativePath: { eq: "duynhat/factory/ANT MEDIA-204.jpg" }) {
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
                                {/* <div class="dlab-bnr-inr overlay-black-middle"  style={{ backgroundImage: "url(" + bg + ")" }}> */}
                                <BackgroundImage
                                    className="dlab-bnr-inr overlay-black-middle"
                                    fluid={data.desktop.childImageSharp.fluid}
                                >
                                    <div class="dlab-bnr-inr overlay-black-middle ">
                                        <div class="container">
                                            <div class="dlab-bnr-inr-entry">
                                                <h1 class="text-white" style={{ fontFamily: 'Merriweather' }}> Bao Bì Nhựa</h1>
                                                <div class="breadcrumb-row">
                                                    <ul class="list-inline">
                                                        <li><Link to="/" style={{ fontFamily: 'Merriweather' }}>Trang Chủ</Link></li>
                                                        <li><Link to="/san-pham" style={{ fontFamily: 'Merriweather' }}>Sản Phẩm</Link></li>
                                                        <li><Link to="#" style={{ fontFamily: 'Merriweather' }}>Bao Bì Nhựa</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </BackgroundImage>
                                {/* </div> */}
                                <div class="content-block">
                                    <div class="section-full content-inner bg-white">
                                        <div class="container">
                                            <div>
                                                <h2 class="text-black font-weight-600 m-b15">Bao Bì Nhựa</h2>
                                                <p style={{ marginBottom: 12, fontFamily: 'Merriweather' }}>Bao bì nhựa hiện đang chiếm một vị trí rất quan trọng trong đời sống kinh tế xã hội.</p>
                                                <p style={{ marginBottom: 12, fontFamily: 'Merriweather' }} >Bao bì nhựa thường không mùi, không vị, có loại có thể đạt độ mềm
                                                    dẻo, áp sát bề mặt thực phẩm khi được tạo nên độ chân không cao trong trường hợp sản phẩm cần bảo quản chân không.
                                                    Có loại bao bì đạt độ cứng vững cao, chống va chạm cơ học hiệu quả, chống thấm khí hơi do đó đảm bảo được áp lực cao
                                                    bên trong môi trường chứa thực phẩm.</p>
                                                <p style={{ marginBottom: 12, fontFamily: 'Merriweather' }}>Bao bì trong suốt có thể thấy được thực phẩm bên trong,
                                                    hoặc có thể mờ đục, che khuất toàn ánh sáng để bảo vệ thực phẩm. Bao bì nhựa có loại có thể chịu được nhiệt độ thanh trùng hoặc nhiệt độ lạnh đông âm độ.
                                                    Bao bì nhựa không được tái sử dụng trong sản xuất thực phẩm, sau 1 lần chứa đựng có thể tái sinh tùy loại nhựa.
                                                    Tính chất nổi bật hơn cả của bao bì nhựa là nhẹ hơn tất cả các bao bì khác, rất thuận tiện trong phân phối chuyên chở, hình ảnh bao bì sắc nét, đạt được mức độ mỹ quan theo yêu cầu của khách hàng.</p>
                                                <p style={{ marginBottom: 40, fontFamily: 'Merriweather' }}>Thực phẩm là sản phẩm ảnh hưởng trực tiếp đến sức khỏe người sử dụng chính vì bao bì nhựa đáp ứng các yêu cầu quy định, đảm bảo an toàn không có chất độc hại hay làm thay đổi bản chất của thực phẩm chứa bên trong, giữ và bảo quản thực phẩm từ nhà sản xuất đến người tiêu dùng.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <PortfolioFlexible col="col-md-3" />
                                <div class="section-full content-inner bg-white" style={{ paddingTop: 60 }}>
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
                <Footer />
            </>
        )
    }
}
export default Flexible;