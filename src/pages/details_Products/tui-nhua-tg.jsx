import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../../components/header11'
import Footer from '../../components/footer4'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image";
import { VText } from '../../components/VNText'
import SEO from '../../components/SEO';
import { plasticBagData } from '../../data/plasticBagData';
import { Helmet } from 'react-helmet';

class PortfolioDetails extends Component {
    constructor(props) {
        super(props);

        const productSlug = 'tui-nhua-tg';
        const product = plasticBagData[productSlug];

        this.state = {
            selectedImage: 0,
            productSlug: productSlug,
            product: product
        };
    }

    shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    componentDidMount() {
        const pathSegments = window.location.pathname.split('/');
        const slug = pathSegments[pathSegments.length - 1] || 'tui-nhua-tc';

        if (slug !== this.state.productSlug) {
            this.setState({
                productSlug: slug,
                product: plasticBagData[slug] || plasticBagData['tui-nhua-tc'],
                selectedImage: 0
            });
        }
    }

    generateProductSchema = (product, imageUrls) => {
        return {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.name,
            "description": product.fullDescription,
            "image": imageUrls,
            "brand": {
                "@type": "Brand",
                "name": "Duy Nhật"
            },
            "manufacturer": {
                "@type": "Organization",
                "name": "Công ty Duy Nhật"
            },
            "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "VND",
                "url": typeof window !== 'undefined' ? window.location.href : ''
            }
        };
    };

    generateBreadcrumbSchema = (product) => {
        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Trang chủ",
                    "item": typeof window !== 'undefined' ? `${window.location.origin}/` : ''
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Sản phẩm",
                    "item": typeof window !== 'undefined' ? `${window.location.origin}/san-pham` : ''
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": product.name,
                    "item": typeof window !== 'undefined' ? window.location.href : ''
                }
            ]
        };
    };

    render() {
        const { selectedImage, product, productSlug } = this.state;

        return (
            <>
                <SEO
                    title={product.seo.title}
                    description={product.seo.description}
                    keywords={product.seo.keywords}
                />

                <Header />
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
                        product: file(relativePath: { eq: "duynhat/products/flexible/1_1.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        product1: file(relativePath: { eq: "duynhat/products/flexible/3B.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        product2: file(relativePath: { eq: "duynhat/products/flexible/8B.JPG.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        product3: file(relativePath: { eq: "duynhat/products/flexible/DT.JPG.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        product4: file(relativePath: { eq: "duynhat/products/flexible/GV.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        product5: file(relativePath: { eq: "duynhat/products/flexible/TC1.JPG.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        product6: file(relativePath: { eq: "duynhat/products/flexible/TG.JPG.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        product7: file(relativePath: { eq: "duynhat/products/flexible/2.jpg" }) {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    `}
                    render={data => {
                        const allImages = {
                            '1_1.jpg': data.product.childImageSharp.fluid,
                            '3B.jpg': data.product1.childImageSharp.fluid,
                            '8B.JPG.jpg': data.product2.childImageSharp.fluid,
                            'DT.JPG.jpg': data.product3.childImageSharp.fluid,
                            'GV.jpg': data.product4.childImageSharp.fluid,
                            'TC1.JPG.jpg': data.product5.childImageSharp.fluid,
                            'TG.JPG.jpg': data.product6.childImageSharp.fluid,
                            '2.jpg': data.product7.childImageSharp.fluid
                        };

                        const productImages = product.images.map(imgName => allImages[imgName]);
                        const imageUrls = productImages.map(img => img.src);

                        const allProductSlugs = Object.keys(plasticBagData)
                            .filter(slug => slug !== productSlug);

                        const shuffledSlugs = this.shuffleArray(allProductSlugs);

                        const relatedProducts = shuffledSlugs
                            .slice(0, 4)
                            .map(slug => ({
                                name: plasticBagData[slug].name,
                                category: "Bao Bì Nhựa",
                                link: `/details_Products/${slug}`,
                                imageFluid: allImages[plasticBagData[slug].images[0]]
                            }));

                        return (
                            <div className="page-content bg-white">
                                <Helmet>
                                    <script type="application/ld+json">
                                        {JSON.stringify(this.generateProductSchema(product, imageUrls))}
                                    </script>
                                    <script type="application/ld+json">
                                        {JSON.stringify(this.generateBreadcrumbSchema(product))}
                                    </script>

                                    <meta property="og:type" content="product" />
                                    <meta property="og:title" content={product.seo.title} />
                                    <meta property="og:description" content={product.seo.description} />
                                    <meta property="og:image" content={imageUrls[0]} />
                                    <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />

                                    <meta name="twitter:card" content="summary_large_image" />
                                    <meta name="twitter:title" content={product.seo.title} />
                                    <meta name="twitter:description" content={product.seo.description} />
                                    <meta name="twitter:image" content={imageUrls[0]} />

                                    <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
                                </Helmet>

                                <BackgroundImage
                                    fluid={data.desktop.childImageSharp.fluid}
                                    backgroundColor={`#d2151e`}
                                >
                                    <div className="dlab-bnr-inr overlay-black-middle">
                                        <div className="container">
                                            <div className="dlab-bnr-inr-entry">
                                                <h1 className="text-white">{product.name}</h1>
                                                <div className="breadcrumb-row">
                                                    <ul className="list-inline">
                                                        <li><Link to="/" style={{ fontFamily: 'Merriweather' }}>Trang Chủ</Link></li>
                                                        <li><Link to="/san-pham" style={{ fontFamily: 'Merriweather' }}>Tất cả sản phẩm</Link></li>
                                                        <li><Link to="#" style={{ fontFamily: 'Merriweather' }}>{product.name}</Link></li>
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
                                                            alt={`${product.name} - ${product.seo.keywords.split(',')[0]} - Duy Nhật`}
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
                                                            borderLeft: '3px solid #E31E24',
                                                            paddingLeft: '12px'
                                                        }}>
                                                            Thông tin chung
                                                        </p>
                                                        <h2 className="font-weight-bold mb-3" style={{
                                                            color: '#E31E24',
                                                            fontSize: '2rem'
                                                        }}>
                                                            {product.name}
                                                        </h2>
                                                        <p className="mb-4" style={{
                                                            color: '#444',
                                                            fontSize: '1.05rem',
                                                            lineHeight: '1.8',
                                                            textAlign: 'justify'
                                                        }}>
                                                            {product.fullDescription}
                                                        </p>
                                                    </div>

                                                    <hr className="mb-4" />

                                                    <h4 className="font-weight-bold mb-3" style={{ color: '#333' }}>
                                                        Chi tiết sản phẩm
                                                    </h4>
                                                    <ul className="mb-4" style={{
                                                        listStyle: 'none',
                                                        padding: 0
                                                    }}>
                                                        {product.features.map((feature, index) => (
                                                            <li key={index} className="mb-3 d-flex align-items-start">
                                                                <span className="mr-2" style={{
                                                                    color: '#E31E24',
                                                                    fontSize: '1.2rem'
                                                                }}>•</span>
                                                                <span style={{ lineHeight: '1.6' }}>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <div className="mt-5 mb-5">
                                                        <Link
                                                            to="/lien-he"
                                                            className="btn btn-lg text-white d-flex align-items-center justify-content-center"
                                                            style={{
                                                                backgroundColor: '#E31E24',
                                                                borderRadius: '10px',
                                                                padding: '15px 40px',
                                                                fontSize: '1rem',
                                                                fontWeight: '600',
                                                                textDecoration: 'none',
                                                                transition: 'all 0.3s ease'
                                                            }}
                                                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ca1332ff'}
                                                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#E31E24'}
                                                        >
                                                            Liên hệ chúng tôi ngay
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
                                            <h3 className="font-weight-bold" style={{ color: '#E31E24' }}>
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
                                            {relatedProducts.map((relProduct, index) => (
                                                <div className="col-lg-3 col-md-6 mb-4" key={index}>
                                                    <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                                        <Link to={relProduct.link} style={{ textDecoration: 'none' }}>
                                                            <div style={{ backgroundColor: '#e8e8e8', height: '250px' }}>
                                                                <Img
                                                                    fluid={relProduct.imageFluid}
                                                                    alt={`${relProduct.name} - ${relProduct.category} - Duy Nhật`}
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
                                                                    {relProduct.category}
                                                                </p>
                                                                <h6 className="font-weight-bold mb-0" style={{ color: '#333' }}>
                                                                    {relProduct.name}
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
                                                    borderColor: '#E31E24',
                                                    color: '#E31E24',
                                                    fontWeight: '600',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseOver={(e) => {
                                                    e.currentTarget.style.backgroundColor = '#E31E24';
                                                    e.currentTarget.style.color = 'white';
                                                }}
                                                onMouseOut={(e) => {
                                                    e.currentTarget.style.backgroundColor = 'transparent';
                                                    e.currentTarget.style.color = '#E31E24';
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