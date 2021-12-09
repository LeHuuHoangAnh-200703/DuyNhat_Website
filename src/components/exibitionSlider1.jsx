import React, { Component } from 'react';
// import { Link } from 'gatsby';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class ExibitionSlider1 extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <>
                <Slider {...settings} className="exhibition-carousel dots-defult">
                    {this.props.data.map((item, id) => (
                        <div class="item">
                            <img src={item.image} alt=""/>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default ExibitionSlider1;