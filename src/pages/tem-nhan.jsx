import React, { Component } from 'react';
import Header from '../components/header11'
import Footer from '../components/footer4'
import ClientSlider1 from '../components/clientSlider1';
import PortfolioLabel from '../components/portfolio_label';
// const bg = require('../images/duynhat/factory/DSC_3851_2.jpg')
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { VNText } from '../components/VNText'
class Label extends Component {
    render() {
        return (
            <>
                <Header />
                <StaticQuery
                    query={graphql`
                    query {
                        desktop: file(relativePath: { eq: "duynhat/factory/ANT MEDIA-81.jpg" }) {
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
                                                <h1 class="text-white">Tem Và Nhãn</h1>
                                                <div class="breadcrumb-row">
                                                    <ul class="list-inline">
                                                        <li><VNText to="/">Trang Chủ</VNText></li>
                                                        <li><VNText to="/san-pham">Sản Phẩm</VNText></li>
                                                        <li><VNText to="#">Tem Và Nhãn</VNText></li>
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
                                                <h2 class="text-black font-weight-600 m-b15" style={{ fontFamily: 'Merriweather' }}>Tem Và Nhãn</h2>
                                                <p style={{ marginBottom: 12, fontFamily: 'Merriweather' }}>Công ty Duy Nhật chuyên sản xuất Tem và Nhãn dán tùy chỉnh, thiết yếu cho việc nhận diện thương hiệu và cung cấp thông tin sản phẩm. Các sản phẩm này phục vụ đa dạng các ngành hàng, đặc biệt là hàng tiêu dùng và xuất khẩu (thủy hải sản). Nhãn của Duy Nhật được thiết kế để đảm bảo tính thẩm mỹ, đồng thời đáp ứng các yêu cầu về độ bền trong quá trình bảo quản và vận chuyển.</p>
                                                <p style={{ marginBottom: 12, fontFamily: 'Merriweather' }}>Duy Nhật cung cấp các lựa chọn đa dạng về chất liệu, bao gồm Decal Giấy, Decal Nhựa, và Decal Kim loại. Công ty áp dụng công nghệ in ấn hiện đại để đảm bảo độ sắc nét cao của hình ảnh và độ chính xác của các thông tin chi tiết. Ngoài nhãn dán thông thường, công ty còn sản xuất các loại nhãn phức tạp khác như nhãn quấn (sleeve) theo nhu cầu riêng biệt của từng khách hàng.</p>
                                                <p style={{ marginBottom: 12, fontFamily: 'Merriweather' }}>Dịch vụ Nhãn & Tem của Duy Nhật có tính tùy biến cao về kích thước, hình dạng, và thông tin in ấn. Sản phẩm được ứng dụng rộng rãi từ bao bì thực phẩm, mỹ phẩm cho đến tem niêm phong hoặc tem bảo hành. Việc này giúp sản phẩm của khách hàng đạt được các tiêu chuẩn thị trường và nâng cao khả năng cạnh tranh trong nước và quốc tế.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <PortfolioLabel col="col-md-3" />
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
export default Label;