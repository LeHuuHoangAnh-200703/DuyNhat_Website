import React, { useState } from "react";
import {Link} from 'gatsby'
import {VNText,VText} from './VNText';
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image";
const images = [
    {
      id: 1,
      name: "Nhãn & Tem Dán",
      label: true,
      title:"Label Roll",
      subTitle:"Nhãn & Tem Dán",
      imgUrl: require("../images/duynhat/products/IMG_0085.jpg")
    },
    {
      id: 2,
      name: "Nhãn & Tem Dán",
      label: true,
      title:"Stickers",
      subTitle:"Nhãn & Tem Dán",
      imgUrl: require("../images/duynhat/products/IMG_0070.jpg")
    },
    {
      id: 3,
      name: "Nhãn & Tem Dán",
      label: true,
      title:"Labels",
      subTitle:"Nhãn & Tem Dán",
      imgUrl: require("../images/duynhat/products/IMG_0059.jpg")
    },
    {
      id: 4,
      name: "Nhãn & Tem Dán",
      label: true,
      title:"Labels",
      subTitle:"Nhãn & Tem Dán",
      imgUrl: require("../images/duynhat/products/IMG_0066.jpg")
    },
    {
      id: 5,
      name: "Other Packaging Products",
      other: true,
      title:"Nhãn Wrap",
      subTitle: "Other Packaging Products",
      imgUrl: require("../images/duynhat/products/nhan_quan_21.jpg")
    },
    {
      id: 6,
      name: "Other Packaging Products",
      other: true,
      title:"Nhãn Wrap",
      subTitle: "Other Packaging Products",
      imgUrl: require("../images/duynhat/products/nhan_quan_11.jpg")
    }
  
  ];

images.map(
  (image, index) => {
    // console.log(image.imgUrl.split('.')[0].split('/')[2].split('-')[0])
    image.shortName = image.imgUrl.split('.')[0].split('/')[2].split('-')[0];
  }
);
function importAll(r) {
  const dic ={fileName : r.keys(),staticFile : r.keys().map(r)}
  return dic;
}
const _images3 = importAll(require.context("../images/duynhat/products/Label", false, /\.(png|jpe?g|svg)$/));
const images3 = _images3.staticFile;


// const images3 = importAll(require.context("../images/duynhat/products/Label", false, /\.(png|jpe?g|svg)$/));
images3.map(
  (image, index) => {
    images.push({
      id: images.length+index,
      name: "Nhãn & Tem Dán",
      label: true,
      title: "Labels",
      subTitle:"Nhãn & Tem Dán",
      imgUrl: image,
      shortName: _images3.fileName[index].split('.')[1]
    })

  }
);
images.push({
  id: images.length,
  name: "Other Packaging Products",
  other: true,
  title: "Nhãn Wrap",
  subTitle:"Other Packaging Products",
  imgUrl: require("../images/duynhat/products/nhan_quan_31.jpg"),
  shortName: 'nhan_quan_31'
})
const getFilterSections = (images)=>{
  const filters = ['all']
  images.map(image=>{
    if(filters.indexOf(image.name) === -1){
      filters.push(image.name)
    }
  })
  return filters
}

const filterImages = (filterKey,images)=>{
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
  
  const filteredList  = filterImages(filterKey,list)
  const filters       = getFilterSections(images)
  const collumnCls = props.col ? props.col :"col-md-3";

  return (
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
        Object.keys(data.allFile.edges).map(edge=>{
          if(filteredList[i].shortName){
            // console.log(data.allFile.edges[edge].node.childImageSharp.fluid.originalName.split('.')[0],filteredList[i].shortName.replace("/",""))
            if(data.allFile.edges[edge].node.childImageSharp.fluid.originalName.split('.')[0] === filteredList[i].shortName.replace("/","")){
              
              filteredList[i].imgUrl = data.allFile.edges[edge].node.childImageSharp.fluid;
            }
          }
          
        })
      }
    return(
    <div class="content-block">
      <div class="section-full content-inner-2 portfolio text-uppercase bg-gray" id="portfolio">
        <div class="container"> 
           
            {/* FILTERED PORTFOLIO LIST */}
            <div className="portfolio_area">
              <div className="row portfolio-grid">
                  {filteredList.map(image => (
                    <div className={collumnCls}>
                      <div class="dlab-box dlab-gallery-box">
                        <div class="dlab-media">
                            <VNText to="/labels">
                            <Img fluid={image.imgUrl}  alt="" className="dlab-media radius-sm dlab-img-overlay2"/>

                              </VNText>
                            <div class="overlay-bx">
                            </div>
                        </div>
                        <div class="dez-info p-a30 bg-white">
                            <VText class="dez-title m-t0"><VNText to="#">{image.title}</VNText></VText>
                            <VText><small>{image.subTitle}</small></VText>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </div>         
    )}}
    />

  );
};

export default PortfolioTem;
