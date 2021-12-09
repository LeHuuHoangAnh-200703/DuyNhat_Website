import React, { useState } from "react";
import {Link} from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image";


const images = [
  {
    id: 1,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi hải sản đông lạnh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/Ocean_Chef_Salmon_Flat_Bottom.jpg")
  },
  {
    id: 2,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi gạo",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/GAO_ST.jpg")
  },
  {
    id: 3,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi gạo nhỏ",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/2.jpg")
  },
  {
    id: 4,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi nhựa có seal",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9507.jpg")
  },
  {
    id: 5,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi nhựa có seal",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9481.jpg")
  },
  {
    id: 6,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi nhựa đựng bánh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/1_1.jpg")
  },
  {
    id: 7,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi nhựa có seal",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/8_bien_2.jpg")
  },
  {
    id: 8,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi hải sản đông lạnh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9359.jpg")
  },
  {
    id: 9,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi hải sản đông lạnh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9462_1.jpg")
  },
  {
    id: 10,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi hải sản đông lạnh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9470.jpg")
  },
  {
    id: 11,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi hải sản đông lạnh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9483.jpg")
  },
  {
    id: 12,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi hải sản đông lạnh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9487.jpg")
  },
  {
    id: 13,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi hải sản đông lạnh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9490.jpg")
  },
  {
    id: 14,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi hải sản đông lạnh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9494.jpg")
  },
  {
    id: 15,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi hải sản đông lạnh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9502.jpg")
  },
  {
    id: 16,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi hải sản đông lạnh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9504.jpg")
  }
  ,
  {
    id: 17,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi hải sản đông lạnh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9510.jpg")
  }
  ,
  {
    id: 18,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi hải sản đông lạnh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9512.jpg")
  }
  ,
  {
    id: 19,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi hải sản đông lạnh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9516.jpg")
  }
  ,
  {
    id: 20,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi hải sản đông lạnh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9520.jpg")
  },
  {
    id: 21,
    name: "Bao Bì Nhựa",
    plastic: true,
    title:"Túi hải sản đông lạnh",
    subTitle:"Bao Bì Nhựa",
    imgUrl: require("../images/duynhat/products/DSC_9523.jpg")
  }
  
  ];

  images.map(
    (image, index) => {
      // console.log(image.imgUrl.split('.')[0].split('/')[2].split('-')[0])
      image.shortName = image.imgUrl.split('.')[0].split('/')[2].split('-')[0];
    }
  );


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

const PortfolioFlexible = props => {
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
                            <Link to="/flexible">
                            <Img fluid={image.imgUrl}  alt="" className="dlab-media radius-sm dlab-img-overlay2"/>
                             </Link>
                            <div class="overlay-bx">

                            </div>
                        </div>
                        <div class="dez-info p-a30 bg-white">
                            <p class="dez-title m-t0"><Link to="#">{image.title}</Link></p>
                            <p><small>{image.subTitle}</small></p>
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

export default PortfolioFlexible;
