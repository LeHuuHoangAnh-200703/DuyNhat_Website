import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../../components/header11'
import Footer from '../../components/footer4'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image";
import { VText } from '../../components/VNText'
import SEO from '../../components/SEO';

class PortfolioDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: 0
        };
    }

    render() {
        const { selectedImage } = this.state;

        return (
            <>
                <SEO 
                    title="Nhãn quấn - Chi tiết sản phẩm"
                    description="Nhãn quấn chai lọ chất lượng cao, in ấn sắc nét, co giãn tốt. Phù hợp cho nước giải khát, mỹ phẩm, thực phẩm từ Duy Nhật."
                    keywords="nhãn quấn, nhãn quấn chai, shrink sleeve, nhãn co nhiệt, in nhãn quấn, nhãn chai nước"
                />
                
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
                        product: file(relativePath: { eq: "duynhat/products/nhan_quan_21.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        product1: file(relativePath: { eq: "duynhat/products/nhan_quan_21.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        product2: file(relativePath: { eq: "duynhat/products/nhan_quan_11.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        product3: file(relativePath: { eq: "duynhat/products/nhan_quan_31.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    `}
                    render={data => {
                        const productImages = [
                            data.product.childImageSharp.fluid,
                            data.product1.childImageSharp.fluid,
                            data.product2.childImageSharp.fluid,
                            data.product3.childImageSharp.fluid
                        ];

                        const relatedProducts = [
                            {
                                name: "Nhãn quấn",
                                category: "Sản phẩm khác",
                                link: "/details_Products/sp-khac-2",
                                imageFluid: data.product1.childImageSharp.fluid
                            },
                            {
                                name: "Nhãn quấn",
                                category: "Sản phẩm khác",
                                link: "/details_Products/sp-khac-1",
                                imageFluid: data.product2.childImageSharp.fluid
                            },
                            {
                                name: "Nhãn quấn",
                                category: "Sản phẩm khác",
                                link: "/details_Products/sp-khac-3",
                                imageFluid: data.product3.childImageSharp.fluid
                            }
                        ];

                        return (
                            <div className="page-content bg-white">
                                <BackgroundImage
                                    fluid={data.desktop.childImageSharp.fluid}
                                    backgroundColor={`#d2151e`}
                                >
                                    <div className="dlab-bnr-inr overlay-black-middle">
                                        <div className="container">
                                            <div className="dlab-bnr-inr-entry">
                                                <h1 className="text-white">Thông tin sản phẩm</h1>
                                                <div className="breadcrumb-row">
                                                    <ul className="list-inline">
                                                        <li><Link to="/" style={{ fontFamily: 'Merriweather' }}>Trang Chủ</Link></li>
                                                        <li><Link to="/san-pham" style={{ fontFamily: 'Merriweather' }}>Tất cả sản phẩm</Link></li>
                                                        <li><Link to="#" style={{ fontFamily: 'Merriweather' }}>Nhãn quấn</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </BackgroundImage>

                                <div className="content-block">
                                    <div className="section-full content-inner bg-white py-5">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-6 m-b30">
                                                    <div className="rounded overflow-hidden shadow mb-3" style={{ backgroundColor: '#e8e8e8' }}>
                                                        <Img
                                                            fluid={productImages[selectedImage]}
                                                            alt="Nhãn quấn chai lọ chất lượng cao - Duy Nhật"
                                                            className="img-cover"
                                                            style={{ minHeight: '500px' }}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="mb-4">
                                                        <p className="text-uppercase mb-3" style={{
                                                            color: '#666',
                                                            fontSize: '0.875rem',
                                                            letterSpacing: '1px',
                                                            borderLeft: '3px solid #dc3545',
                                                            paddingLeft: '12px'
                                                        }}>
                                                            THÔNG TIN CHI TIẾT
                                                        </p>
                                                        <h2 className="font-weight-bold mb-3" style={{
                                                            color: '#F22D4E',
                                                            fontSize: '2rem'
                                                        }}>
                                                            Nhãn quấn
                                                        </h2>
                                                        <p className="mb-3" style={{ color: '#666' }}>
                                                            Chưa có nội dung
                                                        </p>
                                                    </div>

                                                    <hr className="mb-4" />

                                                    <ul className="mb-4" style={{
                                                        listStyle: 'none',
                                                        padding: 0
                                                    }}>
                                                        <li className="mb-3 d-flex align-items-start">
                                                            <span className="mr-2" style={{ color: '#F22D4E' }}>•</span>
                                                            <span>Chưa có nội dung.</span>
                                                        </li>
                                                        <li className="mb-3 d-flex align-items-start">
                                                            <span className="mr-2" style={{ color: '#F22D4E' }}>•</span>
                                                            <span>Chưa có nội dung.</span>
                                                        </li>
                                                        <li className="mb-3 d-flex align-items-start">
                                                            <span className="mr-2" style={{ color: '#F22D4E' }}>•</span>
                                                            <span>Chưa có nội dung.</span>
                                                        </li>
                                                        <li className="mb-3 d-flex align-items-start">
                                                            <span className="mr-2" style={{ color: '#F22D4E' }}>•</span>
                                                            <span>Chưa có nội dung.</span>
                                                        </li>
                                                        <li className="mb-3 d-flex align-items-start">
                                                            <span className="mr-2" style={{ color: '#F22D4E' }}>•</span>
                                                            <span>Chưa có nội dung.</span>
                                                        </li>
                                                    </ul>
                                                    <div className="mt-5">
                                                        <Link
                                                            to="/lien-he"
                                                            className="btn btn-lg text-white d-flex align-items-center justify-content-center"
                                                            style={{
                                                                backgroundColor: '#F22D4E',
                                                                borderRadius: '10px',
                                                                padding: '15px 40px',
                                                                fontSize: '1rem',
                                                                fontWeight: '600',
                                                                textDecoration: 'none',
                                                                transition: 'all 0.3s ease'
                                                            }}
                                                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ca1332ff'}
                                                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F22D4E'}
                                                        >
                                                            Liên hệ với chúng tôi
                                                            <span className="ml-2">→</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="section-full content-inner bg-gray py-5">
                                    <div className="container">
                                        <div className="text-center mb-5">
                                            <h3 className="font-weight-bold" style={{ color: '#F22D4E' }}>
                                                Sản phẩm liên quan
                                            </h3>
                                            <div style={{
                                                width: '60px',
                                                height: '3px',
                                                backgroundColor: '#000',
                                                margin: '15px auto'
                                            }}></div>
                                        </div>
                                        <div className="row">
                                            {relatedProducts.map((product, index) => (
                                                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                                    <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                                        <Link to={product.link} style={{ textDecoration: 'none' }}>
                                                            <div style={{ backgroundColor: '#e8e8e8', height: '250px' }}>
                                                                <Img
                                                                    fluid={product.imageFluid}
                                                                    alt={`${product.name} - ${product.category} - Duy Nhật`}
                                                                    className="img-cover"
                                                                    style={{ height: '100%' }}
                                                                />
                                                            </div>
                                                            <div className="card-body">
                                                                <p className="text-uppercase mb-2" style={{
                                                                    fontSize: '0.75rem',
                                                                    color: '#999',
                                                                    letterSpacing: '1px'
                                                                }}>
                                                                    {product.category}
                                                                </p>
                                                                <h6 className="font-weight-bold mb-0" style={{ color: '#333' }}>
                                                                    {product.name}
                                                                </h6>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-center mt-4">
                                            <Link
                                                to="/san-pham"
                                                className="btn btn-outline-primary btn-lg"
                                                style={{
                                                    borderRadius: '10px',
                                                    padding: '12px 40px',
                                                    borderColor: '#F22D4E',
                                                    color: '#F22D4E',
                                                    fontWeight: '600',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseOver={(e) => {
                                                    e.currentTarget.style.backgroundColor = '#F22D4E';
                                                    e.currentTarget.style.color = 'white';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.currentTarget.style.backgroundColor = 'transparent';
                                                    e.currentTarget.style.color = '#F22D4E';
                                                }}
                                            >
                                                Xem tất cả sản phẩm
                                            </Link>
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

export default PortfolioDetails;