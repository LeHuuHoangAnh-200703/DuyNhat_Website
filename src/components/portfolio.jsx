import React, { useState } from "react";
import {Link} from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import Img from "gatsby-image";
import {VNText,VText} from '../components/VNText';



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
      name: "Bao Bì Giấy",
      paper: true,
      title:"Hộp hải sản đông lạnh",
      subTitle:"Bao Bì Giấy",
      imgUrl: require("../images/duynhat/products/DSC_9317.jpg")
    },
    {
      id: 4,
      name: "Bao Bì Giấy",
      paper: true,
      title:"Hộp hải sản đông lạnh",
      subTitle:"Bao Bì Giấy",
      imgUrl: require("../images/duynhat/products/Paper/DSC_9439.jpg")
    },
    {
      id: 5,
      name: "Bao Bì Giấy",
      paper: true,
      title:"Hộp kẹo",
      subTitle:"Bao Bì Giấy",
      imgUrl: require("../images/duynhat/products/DSC_9410.jpg")
    },
    {
      id: 6,
      name: "Bao Bì Giấy",
      paper: true,
      title:"Hộp trà",
      subTitle:"Bao Bì Giấy",
      imgUrl: require("../images/duynhat/products/DSC_9426.jpg")
    },
    {
      id: 7,
      name: "Tem, nhãn, và decal",
      label: true,
      title:"Cuộn nhãn",
      subTitle:"Tem, nhãn, và decal",
      imgUrl: require("../images/duynhat/products/IMG_0085.jpg")
    },
    {
      id: 8,
      name: "Tem, nhãn, và decal",
      label: true,
      title:"Nhãn dán",
      subTitle:"Tem, nhãn, và decal",
      imgUrl: require("../images/duynhat/products/IMG_0070.jpg")
    },
    {
      id: 9,
      name: "Tem, nhãn, và decal",
      label: true,
      title:"Nhãn",
      subTitle:"Tem, nhãn, và decal",
      imgUrl: require("../images/duynhat/products/IMG_0059.jpg")
    },
    {
      id: 10,
      name: "Tem, nhãn, và decal",
      label: true,
      title:"Nhãn",
      subTitle:"Tem, nhãn, và decal",
      imgUrl: require("../images/duynhat/products/IMG_0066.jpg")
    },
    {
      id: 11,
      name: "Sản phẩm khác",
      other: true,
      title:"Nhãn quấn",
      subTitle: "Sản phẩm khác",
      imgUrl: require("../images/duynhat/products/nhan_quan_21.jpg")
    },
    {
      id: 12,
      name: "Sản phẩm khác",
      other: true,
      title:"Nhãn quấn",
      subTitle: "Sản phẩm khác",
      imgUrl: require("../images/duynhat/products/nhan_quan_11.jpg")
    },
    {
      id: 13,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi gạo nhỏ",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/2.jpg")
    },
    {
      id: 14,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi nhựa có seal",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/DSC_9507.jpg")
    },
    {
      id: 15,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi nhựa có seal",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/DSC_9481.jpg")
    },
    {
      id: 16,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi nhựa đựng bánh",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/1_1.jpg")
    },
    {
      id: 17,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi nhựa có seal",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/8_bien_2.jpg")
    },
    {
      id: 18,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi hải sản đông lạnh",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/DSC_9359.jpg")
    },
    {
      id: 19,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi hải sản đông lạnh",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/DSC_9462_1.jpg")
    },
    {
      id: 20,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi hải sản đông lạnh",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/DSC_9470.jpg")
    },
    {
      id: 21,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi hải sản đông lạnh",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/DSC_9483.jpg")
    },
    {
      id: 22,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi hải sản đông lạnh",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/DSC_9487.jpg")
    },
    {
      id: 23,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi hải sản đông lạnh",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/DSC_9490.jpg")
    },
    {
      id: 24,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi hải sản đông lạnh",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/DSC_9494.jpg")
    },
    {
      id: 25,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi hải sản đông lạnh",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/DSC_9502.jpg")
    },
    {
      id: 26,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi hải sản đông lạnh",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/DSC_9504.jpg")
    }
    ,
    {
      id: 27,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi hải sản đông lạnh",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/DSC_9510.jpg")
    }
    ,
    {
      id: 28,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi hải sản đông lạnh",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/DSC_9512.jpg")
    }
    ,
    {
      id: 29,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi hải sản đông lạnh",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/DSC_9516.jpg")
    }
    ,
    {
      id: 30,
      name: "Bao Bì Nhựa",
      plastic: true,
      title:"Túi hải sản đông lạnh",
      subTitle:"Bao Bì Nhựa",
      imgUrl: require("../images/duynhat/products/DSC_9520.jpg")
    },
    {
      id: 31,
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

function importAll(r) {
  const dic ={fileName : r.keys(),staticFile : r.keys().map(r)}
  return dic;
}
const _images2 = importAll(require.context("../images/duynhat/products/Paper", false, /\.(png|jpe?g|svg)$/))
const images2 = _images2.staticFile;
images2.map(
  (image, index) => {
    // console.log(_images2.fileName[index].split('.'))
    images.push({
      id: 31+index,
      name: "Bao Bì Giấy",
      plastic: true,
      title:"Hộp thủy sản",
      subTitle:"Bao Bì Giấy",
      imgUrl: image,
      shortName:  _images2.fileName[index].split('.')[1]
    })

  }
);


const _images3 = importAll(require.context("../images/duynhat/products/Label", false, /\.(png|jpe?g|svg)$/));
const images3 = _images3.staticFile;

images3.map(
  (image, index) => {
   
    images.push({
      id: images.length+index,
      name: "Tem, nhãn, và decal",
      label: true,
      title: "Tem & Nhãn",
      subTitle:"Tem, nhãn, và decal",
      imgUrl: image,
      shortName: _images3.fileName[index].split('.')[1]
    })

  }
);
images.push({
  id: images.length,
  name: "Sản phẩm khác",
  other: true,
  title: "Nhãn quấn",
  subTitle:"Sản phẩm khác",
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

const Portfolio = props => {
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
      <div class="section-full content-inner-2 portfolio  bg-gray" id="portfolio">
        <div class="container"> 
          <div class="site-filters clearfix center  m-b40">
            {/* FILTERS */}
            <ul class="filters" data-toggle="buttons">
          
              {/* Object.keys(data.allFile.edges).map(edge=>{
                const fileName = data.allFile.edges[edge].node.childImageSharp.fluid.originalName.split('.')[0];
                console.log(data.allFile.edges[edge].node.childImageSharp.fluid)
                for (let i = 0; i < filteredList.length; i++) {
                //   // for (let j in filteredList[i]) {
                      console.log(filteredList[i].shortName)
                //   // }
                } */}

              {filters.map(filter =>(
                <li class="btn" onClick={() => setState({ ...state, filterKey: filter })}>
                  <div className="site-button-secondry button-sm radius-xl">
                    <span>{filter}</span>
                  </div>
                </li >
              ))}
            </ul>
          </div> 
           
            {/* FILTERED PORTFOLIO LIST */}
            <div className="portfolio_area">
              <div className="row portfolio-grid">
                  {filteredList.map(image => (
                    <div className={collumnCls}>
                      <div class="dlab-box dlab-gallery-box">
                        <div class="dlab-media">
                            <Link to="#">
                             {/* <img src={image.imgUrl}  alt=""/>  */}
                            <Img fluid={image.imgUrl}  alt="" className="dlab-media radius-sm dlab-img-overlay2"/>
                             </Link>
                            <div class="overlay-bx">
                            </div>
                        </div>
                        <div class="dez-info p-a30 bg-white">
                        {image.name === "Bao Bì Nhựa"? <VText class="m-t0"><VNText to="/bao-bi-nhua">{image.title}</VNText></VText>:null}
                        {image.name === "Bao Bì Giấy"? <VText class="dez-title m-t0"><VNText to="/bao-bi-giay">{image.title}</VNText></VText>:null}
                        {(image.name === "Tem, nhãn, và decal" || image.name === "Sản phẩm khác")? <VText class="dez-title m-t0"><VNText to="/tem-nhan">{image.title}</VNText></VText>:null}

                            
                          
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

export default Portfolio;
