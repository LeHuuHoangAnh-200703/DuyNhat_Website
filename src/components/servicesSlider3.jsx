import React, { Component } from 'react';
import { Link } from 'gatsby';
import Slider from "react-slick";
import responsive from './slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




class ServicesSlider3 extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1
				  }
				}
			]
        };
        const style = this.props.style4 ? "style4":"style1";
        return (
            <>
                <Slider {...settings} className="img-carousel-dots  btn-style-1 icon-2">
                    {this.props.data.map((item, id) => (
                        <div class="item">
                            <div class={`service-box ${style}`}>
                                <div class={this.props.iconWrapperCls}> 
                                    <Link to="#" class="icon-cell"><i class={item.icon}></i></Link> 
                                </div>
                                <h3 class="title">{item.serviceName}</h3>
                                {this.props.style4 && <div class="no">{id}</div> }
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default ServicesSlider3;

{/* <div class="item">
    <div class="service-box style4">
        <div class="icon-lg m-b5 text-primary radius"> 
            <Link to="#" class="icon-cell"><i class={item.icon}></i></Link> 
        </div>
        <h3 class="title">{item.serviceName}</h3>
        <div class="no">{id}</div>
    </div>
</div> */}