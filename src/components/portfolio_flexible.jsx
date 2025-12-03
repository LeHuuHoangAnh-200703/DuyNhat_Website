import React, { useState } from "react";
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image";
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
    title: "Túi Gắn Vòi Spout",
    subTitle: "Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/flexible/GV.jpg"),
    detailUrl: "/details_Products/tui-nhua-gv"
  },
  {
    id: 5,
    name: "Bao Bì Nhựa",
    plastic: true,
    title: "Túi Gạo",
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
  }
];

images.map(
  (image, index) => {
    image.shortName = image.imgUrl.split('.')[0].split('/')[2].split('-')[0];
  }
);

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

const PortfolioFlexible = props => {
  const [state, setState] = useState({
    list: images,
    filterKey: "all"
  });

  const { list, filterKey } = state;

  const filteredList = filterImages(filterKey, list)
  const filters = getFilterSections(images)
  const collumnCls = props.col ? props.col : "col-md-3";

  return (
    <>
      <SEO
        title="Bao Bì Nhựa Chất Lượng Cao"
        description="Chuyên sản xuất bao bì nhựa, túi nhựa, túi đứng, túi 8 biên, túi 3 biên, túi gạo, túi gắn vòi spout. An toàn thực phẩm, đạt chuẩn FDA, đa dạng mẫu mã, giá cạnh tranh."
        keywords="bao bì nhựa, túi nhựa, túi đứng, túi 8 biên, túi 3 biên, túi gạo, túi spout, bao bì thực phẩm, túi nilon, túi zip"
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
                      ...GatsbyImageSharpFluid_withWebp
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
                    <div className="row portfolio-grid">
                      {filteredList.map(image => (
                        <div key={image.id} className={collumnCls}>
                          <div className="dlab-box dlab-gallery-box">
                            <Link to={image.detailUrl || "#"} style={{ textDecoration: 'none' }}>
                              <div className="dlab-media">
                                <Link to={image.detailUrl || "#"}>
                                  <Img
                                    fluid={image.imgUrl}
                                    alt={`${image.title} - Bao bì nhựa chất lượng cao Duy Nhất`}
                                    className="dlab-media radius-sm dlab-img-overlay2"
                                  />
                                </Link>
                                <div className="overlay-bx"></div>
                              </div>
                              <div className="card-body" style={{
                                backgroundColor: 'white'
                              }}>
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

export default PortfolioFlexible;