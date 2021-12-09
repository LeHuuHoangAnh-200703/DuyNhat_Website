import React, { Component } from 'react';
// import { Link } from 'gatsby';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        image: require('./../imagesmain-slider/slide15.jpg'),
        title: 'We Believe That Everyone Has Got Talent!',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',
    },
    {
        image: require('./../imagesmain-slider/slide16.jpg'),
        title: 'We Believe That Everyone Has Got Talent!',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',
    },
    {
        image: require('./../imagesmain-slider/slide17.jpg'),
        title: 'We Believe That Everyone Has Got Talent!',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',
    }
]


class MainSlider1 extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <>
                <Slider {...settings} className="testimonial-box-carousel slider-bnr">
                    {content.map((item, id) => (
                        <div class="item slide-item">
                            <div class="slide-item-img">
                                <img src={item.image} class="" alt=""/>
                            </div>
                            <div class="slide-content">
                                <div class="slide-content-box">
                                    <div class="slide-content-area">
                                        <h2 class="slider-title">{item.title}</h2>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default MainSlider1;