import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header11'
import Footer from '../components/footer4'
import ClientSlider1 from '../components/clientSlider1';
import PortfolioPaper from '../components/portfolio_paper';
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
                        desktop: file(relativePath: { eq: "duynhat/factory/ANT MEDIA-102.jpg" }) {
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
                                                <h1 class="text-white">Bao Bì Giấy</h1>
                                                <div class="breadcrumb-row">
                                                    <ul class="list-inline">
                                                        <li><Link to="/" style={{ fontFamily: 'Merriweather' }}>Trang Chủ</Link></li>
                                                        <li><Link to="/san-pham" style={{ fontFamily: 'Merriweather' }}>Sản Phẩm</Link></li>
                                                        <li ><Link to="#" style={{ fontFamily: 'Merriweather' }}>Bao Bì Giấy</Link></li>
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
                                                <h2 class="text-black font-weight-600 m-b15" style={{ fontFamily: 'Merriweather' }}>Bao Bì Giấy</h2>
                                                <p style={{ marginBottom: 12, fontFamily: 'Merriweather' }}>Ngày nay con người rất chú trọng vào việc bảo vệ môi trường, chính vì thế các nguyên liệu dễ tái chế, phân hủy trong thời gian ngắn sẽ được ưa chuộng. Đây chính là ưu điểm nổi bật của bao bì giấy mà ít có nguyên liệu khác có thể có được.</p>
                                                <p style={{ marginBottom: 12, fontFamily: 'Merriweather' }}>Với cấu trúc vững chắc chịu được tải trọng tốt, không bị bung trong quá trình vận chuyển và đóng gói, có rất nhiều loại và nhiều kiểu dáng khác nhau. Ngoài ra bao bì giấy cải tiến có thể chống nước trong những trường hợp nhất định.</p>
                                                <p style={{ marginBottom: 12, fontFamily: 'Merriweather' }}>Tùy thuộc vào công nghệ in ấn mà hình ảnh mẫu mã sẽ khác nhau. Nhưng vẫn đảm bảo cung cấp đầy đủ thông tin hình ảnh cần thiết đến người tiêu dùng.</p>
                                                <p style={{ marginBottom: 12, fontFamily: 'Merriweather' }}>Đối với bao bì giấy, phương pháp in ấn được sử dụng chính tại công ty bao bì Duy Nhật là in flexo và in offset.</p>
                                                <p style={{ marginBottom: 12, fontFamily: 'Merriweather' }}>Phương pháp in flexo được sử dụng in ấn các sản phẩm bao bì tầm trung. Hình ảnh in ấn không được bắt mắt như các công nghệ khác nhưng chi phí thấp, vẫn cung cấp đầy đủ thông tin đến người tiêu dùng, đảm bảo sản xuất với số lượng lớn trong công nghiệp.</p>
                                                <p style={{ marginBottom: 40, fontFamily: 'Merriweather' }}>Phương pháp in offset là một trong những công nghệ in hiện đại thường được sử sụng cho các sản phẩm cao cấp có giá trị cao. Phương pháp này tạo tính cạnh tranh với các sản phẩm cùng loại trên thị trường. Thường thấy ở bao bì thực phẩm, nông sản, thủy hải sản.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <PortfolioPaper col="col-md-3" />
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