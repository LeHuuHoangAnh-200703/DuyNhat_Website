import React, { Component } from 'react';
// import { Link } from 'gatsby';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../styles/slider-animations.css";
import "../styles/homeslider.css";
import {VNText} from './VNText'

const content = [
  ];
  


class HomeSlider1 extends Component {

    render() {
        const sliderContent = this.props.data || content
        const {btnText,hideBtn,show2Btn,btn2Text,contentWrapperCls} = this.props
        const contentCls = contentWrapperCls || ""
        const btnCls = this.props.btnCls || ""
        
        const settings = {
          dots: false,
          infinite: true,
          // speed: 100,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: 3000
      };
        return (
            <>
            <Slider {...settings} className="slider-wrapper home-slider2">
            {sliderContent.map((item, index) => (
                <div
                  key={index}
                  className="slider-content"
                  style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                  <div className={`inner ${contentCls}`}>
                  
                    {item.title && <h1>{item.title}</h1> }
                    {item.description && <p>{item.description}</p>}
                    

                    { hideBtn ? "" :  show2Btn ? (
                      <>
                      <VNText to="/lien-he">
                        <button className={btnCls}>{btnText}</button>
                      </VNText>
                      <VNText to="/san-pham">
                        <button className={btnCls}>{btn2Text}</button>
                        </VNText>
                      </>
                      ) : (
                        <button className={btnCls}>{btnText}</button>
                      )
                    }
                  </div>
                </div>
              ))}
            </Slider>

            </>
        )
    }
}
export default HomeSlider1;