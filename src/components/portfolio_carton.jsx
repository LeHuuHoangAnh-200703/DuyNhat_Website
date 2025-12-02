import React, { useState } from "react";
import {Link} from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image";

const images = [
    {
      id: 1,
      name: "Thùng Carton",
      paper: true,
      title:"Sản phẩm thùng carton",
      subTitle:"Thùng Carton",
      imgUrl: require("../images/duynhat/products/Carton/DSC_9355.jpg")
    },
    {
      id: 2,
      name: "Thùng Carton",
      paper: true,
      title:"Sản phẩm thùng carton",
      subTitle:"Thùng Carton",
      imgUrl: require("../images/duynhat/products/Carton/DSC_9351.jpg")
    }
  ];
  images.map(
    (image, index) => {
      // console.log(image.imgUrl.split('.')[0].split('/')[2].split('-')[0])
      image.shortName = image.imgUrl.split('.')[0].split('/')[2].split('-')[0];
    }
  );

// function importAll(r) {
//   const dic ={fileName : r.keys(),staticFile : r.keys().map(r)}
//   return dic;
// }
// const _images2 = importAll(require.context("../images/duynhat/products/Carton", false, /\.(png|jpe?g|svg)$/))
// const images2 = _images2.staticFile;

// images2.map(
//   (image, index) => {
//     images.push({
//       id: 31+index,
//       name: "Thùng Carton",
//       plastic: true,
//       title:"Sản phẩm thùng carton"
//       subTitle:"Thùng Carton",
//       imgUrl: image,
//       shortName: _images2.fileName[index].split('.')[1]
//     })

//   }
// );


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

const PortfolioCarton = props => {
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
                        <div class="dlab-media  dlab-img-effect zoom">
                            <Link to="/paper">
                            <Img fluid={image.imgUrl}  alt="" className="dlab-media radius-sm dlab-img-overlay2"/>
                            </Link>
                            <div class="overlay-bx">
                            </div>
                        </div>
                        <div class="dez-info p-a30 bg-white">
                            <p class="dez-title m-t0">
                            <Link to="#">{image.title}
                            </Link></p>
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

export default PortfolioCarton;
