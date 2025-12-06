import React, { useState } from "react";
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image";
import SEO from '../components/SEO';

const images = [
  {
    id: 1,
    name: "Bao Bì Giấy",
    paper: true,
    title: "Túi Xách Giấy Thương Hiệu",
    subTitle: "Bao Bì Giấy",
    imgUrl: require("../images/duynhat/products/Paper/HG1.jpg"),
    detailUrl: "/details_Products/hop-giay-1"
  },
  {
    id: 2,
    name: "Bao Bì Giấy",
    paper: true,
    title: "Túi Xách Giấy Quà Tặng",
    subTitle: "Bao Bì Giấy",
    imgUrl: require("../images/duynhat/products/Paper/HG2.jpg"),
    detailUrl: "/details_Products/hop-giay-2"
  },
  {
    id: 3,
    name: "Bao Bì Giấy",
    paper: true,
    title: "Hộp Giấy Thực Phẩm Đông Lạnh",
    subTitle: "Bao Bì Giấy",
    imgUrl: require("../images/duynhat/products/Paper/HG3.jpg"),
    detailUrl: "/details_Products/hop-giay-3"
  },
  {
    id: 4,
    name: "Bao Bì Giấy",
    paper: true,
    title: "Hộp Giấy Mì Ăn Liền",
    subTitle: "Bao Bì Giấy",
    imgUrl: require("../images/duynhat/products/Paper/HG4.jpg"),
    detailUrl: "/details_Products/hop-giay-4"
  },
  {
    id: 5,
    name: "Bao Bì Giấy",
    paper: true,
    title: "Hộp Tôm Tempura Cao Cấp - Luxury",
    subTitle: "Bao Bì Giấy",
    imgUrl: require("../images/duynhat/products/Paper/HG5.jpg"),
    detailUrl: "/details_Products/hop-giay-5"
  },
  {
    id: 6,
    name: "Bao Bì Giấy",
    paper: true,
    title: "Hộp Trái Cây Tươi - La Cubana",
    subTitle: "Bao Bì Giấy",
    imgUrl: require("../images/duynhat/products/Paper/HG6.jpg"),
    detailUrl: "/details_Products/hop-giay-6"
  },
  {
    id: 7,
    name: "Bao Bì Giấy",
    paper: true,
    title: "Hộp Tôm Tempura - Professional",
    subTitle: "Bao Bì Giấy",
    imgUrl: require("../images/duynhat/products/Paper/HG7.jpg"),
    detailUrl: "/details_Products/hop-giay-7"
  },
];

images.map(
  (image, index) => {
    image.shortName = image.imgUrl.split('.')[0].split('/')[2].split('-')[0];
  }
);

function importAll(r) {
  const dic = { fileName: r.keys(), staticFile: r.keys().map(r) }
  return dic;
}

const getFilterSections = (images) => {
  const filters = ['all']
  images.map(image => {
    if (filters.indexOf(image.name) === -1) {
      filters.push(image.name)
    }
  })
  return filters
}

const filterImages = (filterKey, images) => {
  const list = images.filter(image =>
    filterKey === 'all' ? image : image.name === filterKey
  );

  return list
}

const PortfolioPaper = props => {
  const [state, setState] = useState({
    list: images,
    filterKey: "all"
  });

  const { list, filterKey } = state;

  const filteredList = filterImages(filterKey, list)
  const filters = getFilterSections(images)
  const collumnCls = props.col ? props.col : "col-md-3";

  // Styles cho equal height cards
  const portfolioGridStyle = {
    display: 'flex',
    flexWrap: 'wrap'
  };

  const columnWrapperStyle = {
    display: 'flex'
  };

  const dlabBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const dlabBoxLinkStyle = {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  };

  const cardBodyStyle = {
    backgroundColor: 'white',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '15px'
  };

  return (
    <>
      <SEO
        title="Bao Bì Giấy Chất Lượng Cao"
        description="Chuyên sản xuất bao bì giấy, hộp giấy, thùng giấy, túi giấy kraft. Thân thiện môi trường, thiết kế đẹp mắt, in ấn sắc nét, giá cạnh tranh."
        keywords="bao bì giấy, hộp giấy, túi giấy kraft, thùng giấy, bao bì thân thiện môi trường, hộp giấy đựng quà, hộp giấy cao cấp"
      />

      <StaticQuery
        query={graphql`
          {
            allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "duynhat/products/"}}) {
              edges {
                node {
                  id
                  childImageSharp {
                    fluid(quality: 100, fit: INSIDE) {
                      originalName
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data) => {
          for (let i = 0; i < filteredList.length; i++) {
            Object.keys(data.allFile.edges).map(edge => {
              if (filteredList[i].shortName) {
                if (data.allFile.edges[edge].node.childImageSharp.fluid.originalName.split('.')[0] === filteredList[i].shortName.replace("/", "")) {
                  filteredList[i].imgUrl = data.allFile.edges[edge].node.childImageSharp.fluid;
                }
              }
            })
          }
          return (
            <div className="content-block">
              <div className="section-full content-inner-2 portfolio text-uppercase bg-gray" id="portfolio">
                <div className="container">
                  {/* FILTERED PORTFOLIO LIST */}
                  <div className="portfolio_area">
                    <div className="row portfolio-grid" style={portfolioGridStyle}>
                      {filteredList.map(image => (
                        <div key={image.id} className={collumnCls} style={columnWrapperStyle}>
                          <div className="dlab-box dlab-gallery-box" style={dlabBoxStyle}>
                            <Link to={image.detailUrl || "#"} style={dlabBoxLinkStyle}>
                              <div className="dlab-media">
                                <Link to={image.detailUrl || "#"}>
                                  <Img
                                    fluid={image.imgUrl}
                                    alt={`${image.title} - Bao bì giấy chất lượng cao Duy Nhất`}
                                    className="dlab-media radius-sm dlab-img-overlay2"
                                  />
                                </Link>
                                <div className="overlay-bx"></div>
                              </div>
                              <div className="card-body" style={cardBodyStyle}>
                                <p className="text-uppercase mb-2" style={{
                                  fontSize: '0.75rem',
                                  color: '#999',
                                  letterSpacing: '1px'
                                }}>
                                  {image.name}
                                </p>
                                <h6 className="font-weight-bold mb-0" style={{ color: '#333' }}>
                                  {image.title}
                                </h6>
                              </div>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      />
    </>
  );
};

export default PortfolioPaper;