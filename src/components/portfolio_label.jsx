import React, { useState } from "react";
import { Link } from 'gatsby'
import { VNText, VText } from './VNText';
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image";
import SEO from '../components/SEO';

const images = [
  {
    id: 1,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Tem & nhãn",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0052.jpg"),
    detailUrl: "/details_Products/tem-nhan-1"
  },
  {
    id: 2,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Nhãn",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0059.jpg"),
    detailUrl: "/details_Products/tem-nhan-2"
  },
  {
    id: 3,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Nhãn",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0066.jpg"),
    detailUrl: "/details_Products/tem-nhan-3"
  },
  {
    id: 4,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Nhãn dán",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0070.jpg"),
    detailUrl: "/details_Products/tem-nhan-4"
  },
  {
    id: 5,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Tem & nhãn",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0084.jpg"),
    detailUrl: "/details_Products/tem-nhan-5"
  },
  {
    id: 6,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Cuộn nhãn",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0085-scaled.jpg"),
    detailUrl: "/details_Products/tem-nhan-6"
  },
  {
    id: 7,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Cuộn nhãn",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0089.jpg"),
    detailUrl: "/details_Products/tem-nhan-7"
  },
  {
    id: 8,
    name: "Tem, nhãn, và decal",
    label: true,
    title: "Tem & nhãn",
    subTitle: "Tem, nhãn, và decal",
    imgUrl: require("../images/duynhat/products/Label/IMG_0094.jpg"),
    detailUrl: "/details_Products/tem-nhan-8"
  },,
  {
    id: 9,
    name: "Sản phẩm khác",
    other: true,
    title: "Nhãn quấn",
    subTitle: "Sản phẩm khác",
    imgUrl: require("../images/duynhat/products/nhan_quan_21.jpg"),
    detailUrl: "/details_Products/sp-khac-2"
  },
  {
    id: 10,
    name: "Sản phẩm khác",
    other: true,
    title: "Nhãn quấn",
    subTitle: "Sản phẩm khác",
    imgUrl: require("../images/duynhat/products/nhan_quan_31.jpg"),
    detailUrl: "/details_Products/sp-khac-3"
  },
  {
    id: 11,
    name: "Sản phẩm khác",
    other: true,
    title: "Nhãn quấn",
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

const PortfolioTem = props => {
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
        title="Tem, Nhãn và Decal Chất Lượng Cao"
        description="Chuyên sản xuất tem nhãn, nhãn dán, decal, nhãn quấn, cuộn nhãn chất lượng cao. In offset và in kỹ thuật số, đa dạng mẫu mã, giá cạnh tranh tại Việt Nam."
        keywords="tem nhãn, nhãn dán, decal, nhãn quấn, cuộn nhãn, in tem nhãn, tem decal giá rẻ, nhãn sản phẩm, nhãn mác, sticker"
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
                    <div className="row portfolio-grid">
                      {filteredList.map(image => (
                        <div key={image.id} className={collumnCls}>
                          <div className="dlab-box dlab-gallery-box">
                            <Link to={image.detailUrl || "#"} style={{ textDecoration: 'none' }}>
                              <div className="dlab-media">
                                <Link to={image.detailUrl || "#"}>
                                  <Img
                                    fluid={image.imgUrl}
                                    alt={`${image.title} - ${image.subTitle} - Tem nhãn chất lượng cao Duy Nhất`}
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

export default PortfolioTem;