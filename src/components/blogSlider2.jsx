import React, { Component } from 'react';
import { Link } from 'gatsby';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const blog_content = [
    {
        image: require("../imagesblog/grid/pic1.jpg"),
        title:"Seven Doubts You Should",
        description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
        author:"Jack",
    },
    {
        image: require("../imagesblog/grid/pic2.jpg"),
        title:"Seven Doubts You Should",
        description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
        author:"Jack",
    },
    {
        image: require("../imagesblog/grid/pic3.jpg"),
        title:"Seven Doubts You Should",
        description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
        author:"Jack",
    },
    {
        image: require("../imagesblog/grid/pic1.jpg"),
        title:"Seven Doubts You Should",
        description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
        author:"Jack",
    },
    {
        image: require("../imagesblog/grid/pic2.jpg"),
        title:"Seven Doubts You Should",
        description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
        author:"Jack",
    },
    {
        image: require("../imagesblog/grid/pic3.jpg"),
        title:"Seven Doubts You Should",
        description:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
        author:"Jack",
    },
]


class BlogSlider1 extends Component {

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 2
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			]
        };
        return (
            <>
                <Slider {...settings} className="blog-post post-style-2">
                    {blog_content.map((item, id) => (
                        <div class="item">
                            <div class="blog-post post-style-2">
                                <div class="dlab-post-media dlab-img-effect zoom">
                                    <Link to="/blog-single"><img src={item.image} alt=""/></Link>
                                </div>
                                <div class="dlab-post-info">
                                    <div class="dlab-post-meta">
                                        <ul>
                                            <li class="post-date"> <strong>10 Aug</strong> <span> 2016</span> </li>
                                            <li class="post-author"> By <Link to="/blog-single">{item.author}</Link> </li>
                                        </ul>
                                    </div>
                                    <div class="dlab-post-title">
                                        <h4 class="post-title"><Link to="/blog-single">{item.title}</Link></h4>
                                    </div>
                                    <div class="dlab-post-readmore">
                                        <Link to="/blog-single" title="READ MORE" rel="bookmark" class="site-button btnhover20">READ MORE</Link>
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
export default BlogSlider1;