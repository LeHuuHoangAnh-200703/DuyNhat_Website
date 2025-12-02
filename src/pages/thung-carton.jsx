import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header11'
import Footer from '../components/footer4'
import ClientSlider1 from '../components/clientSlider1';
import PortfolioCarton from '../components/portfolio_carton';
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
                        desktop: file(relativePath: { eq: "duynhat/DSC_7898.jpg" }) {
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
                                                <h1 class="text-white">Thùng Carton</h1>
                                                <div class="breadcrumb-row">
                                                    <ul class="list-inline">
                                                        <li><Link to="/" style={{ fontFamily: 'Merriweather' }}>Trang Chủ</Link></li>
                                                        <li><Link to="/san-pham" style={{ fontFamily: 'Merriweather' }}>Sản Phẩm</Link></li>
                                                        <li ><Link to="#" style={{ fontFamily: 'Merriweather' }}>Thùng Carton</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </BackgroundImage>
                                <div class="content-block">
                                    <div class="section-full content-inner bg-white">
                                        <div class="container">
                                            <div>
                                                <h2 class="text-black font-weight-600 m-b15" style={{ fontFamily: 'Merriweather' }}>Thùng Carton</h2>
                                                <p style={{ marginBottom: 12, fontFamily: 'Merriweather' }}>Công ty Duy Nhật tự hào là một trong những đơn vị hàng đầu trong lĩnh vực sản xuất và cung cấp thùng carton chất lượng cao tại Việt Nam. Với nhiều năm kinh nghiệm trong ngành bao bì, chúng tôi cam kết mang đến cho khách hàng những sản phẩm thùng carton đáp ứng mọi nhu cầu đóng gói, vận chuyển và bảo quản hàng hóa.</p>
                                                <p style={{ marginBottom: 12, fontFamily: 'Merriweather' }}>Thùng carton của Duy Nhật được sản xuất từ nguyên liệu giấy kraft cao cấp, đảm bảo độ bền chắc, khả năng chịu lực tốt và thân thiện với môi trường. Sản phẩm có đa dạng kích thước và kiểu dáng, từ thùng carton 3 lớp, 5 lớp đến 7 lớp, phù hợp với nhiều loại hàng hóa khác nhau như thực phẩm, điện tử, hóa mỹ phẩm, nông sản và các sản phẩm công nghiệp.</p>
                                                <p style={{ marginBottom: 12, fontFamily: 'Merriweather' }}>Tùy thuộc vào công nghệ in ấn mà hình ảnh mẫu mã sẽ khác nhau. Nhưng vẫn đảm bảo cung cấp đầy đủ thông tin hình ảnh cần thiết đến người tiêu dùng.</p>
                                                <p style={{ marginBottom: 12, fontFamily: 'Merriweather' }}>Với hệ thống máy móc hiện đại và đội ngũ nhân viên lành nghề, Duy Nhật không chỉ cung cấp sản phẩm chất lượng mà còn hỗ trợ khách hàng thiết kế, in ấn logo và thông tin thương hiệu trực tiếp lên thùng carton, giúp tăng tính nhận diện và chuyên nghiệp cho doanh nghiệp. Chúng tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu với dịch vụ tư vấn tận tâm, giao hàng nhanh chóng và giá cả cạnh tranh.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <PortfolioCarton col="col-md-3" />
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