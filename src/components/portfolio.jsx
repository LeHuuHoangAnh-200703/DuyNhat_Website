import React, { useState } from "react";
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image";
import { VNText, VText } from '../components/VNText';
import SEO from '../components/SEO';

const images = [
  {
    id: 1,
    name: "Bao Bì Nhựa",
    plastic: true,
    title: "Túi có khả năng tái chế",
    subTitle: "Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/flexible/TC1.JPG.jpg"),
    detailUrl: "/details_Products/tui-nhua-tc"
  },
  {
    id: 2,
    name: "Bao Bì Nhựa",
    plastic: true,
    title: "Túi 8 Biên",
    subTitle: "Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/flexible/8B.JPG.jpg"),
    detailUrl: "/details_Products/tui-nhua-8b"
  },
  {
    id: 3,
    name: "Bao Bì Nhựa",
    plastic: true,
    title: "Túi đứng đáy tròn",
    subTitle: "Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/flexible/DT.JPG.jpg"),
    detailUrl: "/details_Products/tui-nhua-dt"
  },
  {
    id: 4,
    name: "Bao Bì Nhựa",
    plastic: true,
    title: "Túi Gắn Vòi",
    subTitle: "Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/flexible/GV.jpg"),
    detailUrl: "/details_Products/tui-nhua-gv"
  },
  {
    id: 5,
    name: "Bao Bì Nhựa",
    plastic: true,
    title: "Túi Ống",
    subTitle: "Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/flexible/TG.JPG.jpg"),
    detailUrl: "/details_Products/tui-nhua-tg"
  },
  {
    id: 6,
    name: "Bao Bì Nhựa",
    plastic: true,
    title: "Túi 3 Biên",
    subTitle: "Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/flexible/3B.jpg"),
    detailUrl: "/details_Products/tui-nhua-3b"
  },
  {
    id: 7,
    name: "Bao Bì Nhựa",
    plastic: true,
    title: "Túi nhựa đựng bánh",
    subTitle: "Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/flexible/1_1.jpg"),
    detailUrl: "/details_Products/tui-nhua-db"
  },
  {
    id: 8,
    name: "Bao Bì Giấy",
    paper: true,
    title: "Túi Xách Giấy Thương Hiệu",
    subTitle: "Bao Bì Giấy",
    imgUrl: require("../images/duynhat/products/Paper/HG1.jpg"),
    detailUrl: "/details_Products/hop-giay-1"
  },
  {
    id: 9,
    name: "Bao Bì Giấy",
    paper: true,
    title: "Túi Xách Giấy Quà Tặng",
    subTitle: "Bao Bì Giấy",
    imgUrl: require("../images/duynhat/products/Paper/HG2.jpg"),
    detailUrl: "/details_Products/hop-giay-2"
  },
  {
    id: 10,
    name: "Bao Bì Giấy",
    paper: true,
    title: "Hộp Giấy Thực Phẩm Đông Lạnh",
    subTitle: "Bao Bì Giấy",
    imgUrl: require("../images/duynhat/products/Paper/HG3.jpg"),
    detailUrl: "/details_Products/hop-giay-3"
  },
  {
    id: 11,
    name: "Bao Bì Giấy",
    paper: true,
    title: "Hộp Giấy Mì Ăn Liền",
    subTitle: "Bao Bì Giấy",
    imgUrl: require("../images/duynhat/products/Paper/HG4.jpg"),
    detailUrl: "/details_Products/hop-giay-4"
  },
  {
    id: 12,
    name: "Bao Bì Giấy",
    paper: true,
    title: "Hộp Tôm Tempura Cao Cấp - Luxury",
    subTitle: "Bao Bì Giấy",
    imgUrl: require("../images/duynhat/products/Paper/HG5.jpg"),
    detailUrl: "/details_Products/hop-giay-5"
  },
  {
    id: 13,
    name: "Bao Bì Giấy",
    paper: true,
    title: "Hộp Trái Cây Tươi - La Cubana",
    subTitle: "Bao Bì Giấy",
    imgUrl: require("../images/duynhat/products/Paper/HG6.jpg"),
    detailUrl: "/details_Products/hop-giay-6"
  },
  {
    id: 14,
    name: "Bao Bì Giấy",
    paper: true,
    title: "Hộp Tôm Tempura - Professional",
    subTitle: "Bao Bì Giấy",
    imgUrl: require("../images/duynhat/products/Paper/HG7.jpg"),
    detailUrl: "/details_Products/hop-giay-7"
  },
  {
    id: 15,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Nhãn Decal Thực Phẩm Đông Lạnh",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0052.jpg"),
    detailUrl: "/details_Products/tem-nhan-1"
  },
  {
    id: 16,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Nhãn Decal Tôm Hải Sản",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0059.jpg"),
    detailUrl: "/details_Products/tem-nhan-2"
  },
  {
    id: 17,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Băng Keo Decal Cuộn",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0066.jpg"),
    detailUrl: "/details_Products/tem-nhan-3"
  },
  {
    id: 18,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Nhãn Decal Cá MSC",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0070.jpg"),
    detailUrl: "/details_Products/tem-nhan-4"
  },
  {
    id: 19,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Cuộn Nhãn Decal Tôm Ring 51-60",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0084.jpg"),
    detailUrl: "/details_Products/tem-nhan-5"
  },
  {
    id: 20,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Cuộn Nhãn Decal Cua Ghẹ",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0085-scaled.jpg"),
    detailUrl: "/details_Products/tem-nhan-6"
  },
  {
    id: 21,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Cuộn Nhãn Decal Xanh Dương",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0089.jpg"),
    detailUrl: "/details_Products/tem-nhan-7"
  },
  {
    id: 22,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Cuộn Nhãn Decal Hải Sản ASC - Seafood",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0094.jpg"),
    detailUrl: "/details_Products/tem-nhan-8"
  },
  {
    id: 23,
    name: "Thùng Carton",
    carton: true,
    title: "Thùng Carton Ebi Fry",
    subTitle: "Thùng Carton",
    imgUrl: require("../images/duynhat/products/Carton/CT1.jpg"),
    detailUrl: "/details_Products/thung-carton-1"
  },
  {
    id: 24,
    name: "Thùng Carton",
    carton: true,
    title: "Thùng Carton Tôm Vannamei",
    subTitle: "Thùng Carton",
    imgUrl: require("../images/duynhat/products/Carton/CT2.jpg"),
    detailUrl: "/details_Products/thung-carton-2"
  },
  {
    id: 25,
    name: "Thùng Carton",
    carton: true,
    title: "Thùng Carton Tempura",
    subTitle: "Thùng Carton",
    imgUrl: require("../images/duynhat/products/Carton/CT3.jpg"),
    detailUrl: "/details_Products/thung-carton-3"
  },
  {
    id: 26,
    name: "Thùng Carton",
    carton: true,
    title: "Thùng Carton Sushi/Ebi",
    subTitle: "Thùng Carton",
    imgUrl: require("../images/duynhat/products/Carton/CT4.jpg"),
    detailUrl: "/details_Products/thung-carton-4"
  },
  {
    id: 27,
    name: "Thùng Carton",
    carton: true,
    title: "Thùng carton 5 lớp - Heavy duty box",
    subTitle: "Thùng Carton",
    imgUrl: require("../images/duynhat/products/Carton/CT5.jpg"),
    detailUrl: "/details_Products/thung-carton-5"
  },
  {
    id: 28,
    name: "Thùng Carton",
    carton: true,
    title: "Thùng carton đựng thực phẩm đông lạnh",
    subTitle: "Thùng Carton",
    imgUrl: require("../images/duynhat/products/Carton/CT6.jpg"),
    detailUrl: "/details_Products/thung-carton-6"
  },
  {
    id: 29,
    name: "Thùng Carton",
    carton: true,
    title: "Thùng carton in offset full color",
    subTitle: "Thùng Carton",
    imgUrl: require("../images/duynhat/products/Carton/CT7.jpg"),
    detailUrl: "/details_Products/thung-carton-7"
  },
  {
    id: 30,
    name: "Sản phẩm khác",
    other: true,
    title: "Nhãn Lon Tôm - Xanh Dương",
    subTitle: "Sản phẩm khác",
    imgUrl: require("../images/duynhat/products/nhan_quan_21.jpg"),
    detailUrl: "/details_Products/sp-khac-2"
  },
  {
    id: 31,
    name: "Sản phẩm khác",
    other: true,
    title: "Nhãn Lon Tôm Cao Cấp",
    subTitle: "Sản phẩm khác",
    imgUrl: require("../images/duynhat/products/nhan_quan_31.jpg"),
    detailUrl: "/details_Products/sp-khac-3"
  },
  {
    id: 32,
    name: "Sản phẩm khác",
    other: true,
    title: "Nhãn Lon Tôm - Xanh Lá Cây",
    subTitle: "Sản phẩm khác",
    imgUrl: require("../images/duynhat/products/nhan_quan_11.jpg"),
    detailUrl: "/details_Products/sp-khac-1"
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

const Portfolio = props => {
  const [state, setState] = useState({
    list: images,
    filterKey: "all"
  });

  const { list, filterKey } = state;

  const filteredList = filterImages(filterKey, list)
  const filters = getFilterSections(images)
  const collumnCls = props.col ? props.col : "col-md-3";

  const getSEOTitle = () => {
    if (filterKey === 'all') return "Sản phẩm Bao Bì Chất Lượng Cao";
    return `${filterKey} - Bao Bì Chất Lượng`;
  };

  const getSEODescription = () => {
    if (filterKey === 'all') {
      return "Chuyên sản xuất bao bì nhựa, bao bì giấy, tem nhãn decal, thùng carton. Đa dạng mẫu mã, chất lượng cao, giá cạnh tranh tại Việt Nam.";
    }
    return `Xem các sản phẩm ${filterKey} chất lượng cao từ Duy Nhất. Đa dạng mẫu mã, giá cạnh tranh.`;
  };

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
        title={getSEOTitle()}
        description={getSEODescription()}
        keywords="bao bì nhựa, bao bì giấy, tem nhãn, thùng carton, túi nilon, hộp giấy, túi đứng, túi 8 biên, nhãn dán, decal"
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
                      ...GatsbyImageSharpFluid_tracedSVG
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
              <div className="section-full content-inner-2 portfolio bg-gray" id="portfolio">
                <div className="container">
                  <div className="site-filters clearfix center m-b40">
                    {/* FILTERS */}
                    <ul className="filters" data-toggle="buttons">
                      {filters.map(filter => (
                        <li key={filter} className="btn" onClick={() => setState({ ...state, filterKey: filter })}>
                          <div className="site-button-secondry button-sm radius-xl">
                            <span>{filter}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

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
                                    alt={`${image.title} - ${image.subTitle} - Bao bì chất lượng cao Duy Nhất`}
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
            </div >
          )
        }}
      />
    </>
  );
};

export default Portfolio;