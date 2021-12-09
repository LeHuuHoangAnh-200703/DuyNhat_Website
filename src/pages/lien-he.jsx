import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header11'
import Footer from '../components/footer4'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
// const bg = require('../images/duynhat/factory/DSC_7885.jpg')
import ContactForm from '../components/contactForm'

class Contact3 extends Component {


    render() {
        return (
            <>
                <Header/>
                <StaticQuery
                    query={graphql`
                    query {
                        desktop: file(relativePath: { eq: "duynhat/factory/DSC_7885.jpg" }) {
                        childImageSharp {
                            fluid(quality: 100, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                        }
                    }
                    `}
                    render={data => {
                        return (
                <div class="page-content bg-white">
                <BackgroundImage
                        className="dlab-bnr-inr overlay-black-middle"
                        fluid={data.desktop.childImageSharp.fluid}
                        >
                    <div class="dlab-bnr-inr overlay-black-middle ">
                        <div class="container">
                            <div class="dlab-bnr-inr-entry">
                                <h1 class="text-white">Liên Hệ</h1>
                                <div class="breadcrumb-row">
                                    <ul class="list-inline">
                                        <li><Link to="/">Trang Chủ</Link></li>
                                        <li><Link to="#" style={{fontFamily:'Merriweather'}}>Liên Hệ</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </BackgroundImage>
                    <div class="section-full content-inner bg-white contact-style-1">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 d-flex m-b30">
                                    <div class="p-a30 border contact-area border-1 align-self-stretch radius-sm">
                                        <h3 class="m-b5">Thông Tin Liên Hệ</h3>
                                        <p>Xin vui lòng liên hệ với Bao Bì Duy Nhật qua các phương thức sau:</p>
                                        <ul class="no-margin">
                                            <li class="icon-bx-wraper left m-b30">
                                                <div class="icon-bx-xs border-1"> <Link to="/#" class="icon-cell" aria-label="location"><i class="ti-location-pin"></i></Link> </div>
                                                <div class="icon-content">
                                                    <h6 class="text-uppercase m-tb0 dlab-tilte">Address:</h6>
                                                    <p>Lô O, Khu Công Nghiệp An Nghiệp, Huyện Châu Thành, Tỉnh Sóc Trăng, Việt Nam</p>
                                                </div>
                                            </li>
                                            <li class="icon-bx-wraper left  m-b30">
                                                <div class="icon-bx-xs border-1"> <Link to="/#" class="icon-cell" aria-label="email"><i class="ti-email"></i></Link> </div>
                                                <div class="icon-content">
                                                    <h6 class="text-uppercase m-tb0 dlab-tilte">Email:</h6>
                                                    <p>sales@baobiduynhat.com.vn</p>
                                                </div>
                                            </li>
                                            <li class="icon-bx-wraper left  m-b30">
                                                <div class="icon-bx-xs border-1"> <Link to="/#" class="icon-cell" aria-label="mobile"><i class="ti-mobile"></i></Link> </div>
                                                <div class="icon-content">
                                                    <h6 class="text-uppercase m-tb0 dlab-tilte">PHONE</h6>
                                                    <p>
                                                        <ul>
                                                            <li>+84 2993 612 772</li>
                                                            <li>+84 2993 616 819</li>
                                                        </ul>
                                                    </p>
                                                </div>
                                            </li>
                                            <li class="icon-bx-wraper left  m-b30">
                                                <div class="icon-bx-xs border-1"> <Link to="/#" class="icon-cell"><i class="ti-skype"></i></Link> </div>
                                                <div class="icon-content">
                                                    <h6 class="text-uppercase m-tb0 dlab-tilte">Skype</h6>
                                                    <p>baobiduynhat</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="m-t20">
                                            <ul class="dlab-social-icon border dlab-social-icon-lg">
                                                <li><a role="button" tabindex="0" href={"https://www.facebook.com/DuyNhatBaoBi"} class="fa fa-facebook bg-primary" aria-label="fb-button">fb</a></li>
                                                <li><a role="button" tabindex="0" href={"skype:baobiduynhat?chat"} class="fa fa-skype bg-primary" aria-label="chat">skype</a></li>
                                                <li><Link to="/#" class="fa fa-linkedin bg-primary" aria-label="linkedin"></Link></li>
                                                <li><a role="button" tabindex="0" href={"mailto:sales@baobiduynhat.com.vn"} to="/#" class="fa fa-envelope bg-primary" aria-label="mail">mail</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="col-lg-6 col-md-6  mb-4 m-b30 mb-md-0">
                                    <div class="p-a30 bg-gray clearfix radius-sm">
                                        <h3 class="m-b10">Gửi Thông Tin Liên Hệ</h3>
                                        <div class="dzFormMsg"></div>
                                        <ContactForm/>
                                        {/* <form method="GET" class="dzForm" action={"mailto:sales@baobiduynhat.com.vn"}>
                                        <input type="hidden" value="Contact" name="dzToDo" />
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <div class="input-group">
                                                            <input name="dzName" type="text" required class="form-control" placeholder="Your Name"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <div class="input-group"> 
                                                            <input name="dzEmail" type="email" class="form-control" required  placeholder="Your Email Id" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <div class="input-group">
                                                            <textarea name="dzMessage" rows="4" class="form-control" required placeholder="Your Message..."></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <button name="submit" type="submit" value="Submit" class="site-button "> <span>Submit</span> </button>
                                                </div> */}
                                            {/* </div> */}
                                        {/* </form> */}
                                    </div>
                                </div>
                                
                              
                            </div>
                            <div class="row">
                                {/* <div class="col-lg-3 d-flex m-b30"> */}
                                    <iframe id="map-frame" title="map-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2017.7452880869537!2d105.95819966715736!3d9.641113466869331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a051558f25a8bd%3A0x3a9da4452d9e8e06!2sDuy%20Nhat%20Packaging!5e1!3m2!1sen!2sau!4v1600565853677!5m2!1sen!2sau" class="align-self-stretch radius-sm" style={{border:"0",width:"100%",minHeight:"100%"}} allowfullscreen></iframe>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>        
                 )
                }}
                />             
                <Footer/>                
            </>
        )
    }
}
export default Contact3 ;