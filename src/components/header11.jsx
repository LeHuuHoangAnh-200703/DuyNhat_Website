import React, { Component } from 'react';
import Sticky from 'react-stickynode';
import styled from 'styled-components';
import { Link } from 'gatsby';
// import Img from "gatsby-image";
import { GatsbyImage as Img } from '@wardpeet/gatsby-image-nextgen/compat';
import { graphql, StaticQuery  } from "gatsby"
import {VNText} from './VNText'

const HoverText = styled.a`
	color: #FFF;
	:hover {
		color: yellow;
		cursor: pointer;
	}
`


class Header11 extends Component {

    
    componentDidMount() {

        // sidebar open/close

        var btn = document.querySelector('.navicon');
        var nav = document.querySelector('.header-nav');
       
        function toggleFunc() {
            btn.classList.toggle("open");
            nav.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);


        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.header-nav > ul > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }

        function checkLi(current) {
            const active = current.classList.contains("open")
            navUl.forEach(el => el.classList.remove('open'));
            //current.classList.add('open');
           
            if(active){
                current.classList.remove('open') 
                console.log("active")
            } else{
                current.classList.add('open');
                console.log("close")
            }
        }

    }
    
    render() {
        
        return (
            <>
            <StaticQuery
                query={graphql`
                      query logoQuery {
                          logo:file(relativePath: { eq: "duynhat/logo/DN_logo.png" }){
                            childImageSharp {
                                fluid(maxHeight: 800){
                                    aspectRatio
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                              }
                            }
                          }
                        }
                      `
                }
            render = {data => (
            <header class="site-header mo-left header header-curve ext-header dark ">
                <div class="middle-bar bg-dark">
                    <div class="container-fluid">
                        <div class="middle-area">
                        <Link to="/" aria-label="Home">
                            <div class="logo-header" style={{ maxHeight: 800}}>
                                
                                    {/* <img src={require("../images/duynhat/logo/DN_logo.png")} alt=""/> */}
                                    <Img fluid={data.logo.childImageSharp.fluid} alt=""/>
                              
                            </div>
                            </Link>
                            <div class="service-list">
                                <ul>
                                    <li>
                                        <i class="la la-skype"></i>
                                        <h4 class="title">baobiduynhat</h4>
                                        <span style={{color:"#ebedf2"}}>Skype</span>
                                    </li>
                                    <li>
                                        <i class="la la-phone"></i>
                                        <h4 class="title">+84 2993 612 772</h4>
                                        <span  style={{color:"#ebedf2"}}>Hotline</span>
                                    </li>
                                    <li>
                                        <i class="la la-map"></i>
                                        <h4 class="title">Lô O, Khu Công Nghiệp An Nghiệp</h4>
                                        <span  style={{color:"#ebedf2"}}>Huyện Châu Thành, Sóc Trăng</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>	
                
                <Sticky innerZ={999} enabled={true}>
                    <div class="sticky-header main-bar-wraper navbar-expand-lg">
                        <div class="main-bar clearfix ">
                            <div class="container-fluid clearfix">
                                
                                <div class="logo-header mostion">
                                    <Link to="/"><img src={require("../images/duynhat/logo/DN_logo.png")} alt="Duy Nhat Pack (DN Pack) Logo" aria-label="Home"/></Link>
                                </div>
                                
                                <button class="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                
                                <div class="extra-nav">
                                    <div class="extra-cell">
                                        <ul class="list-inline">
                                            <li><a href={"https://www.facebook.com/DuyNhatBaoBi"} class="site-button-link facebook hover" aria-label="Facebook"><i class="fa fa-facebook"></i></a></li>
                                            <li><a href={"skype:baobiduynhat?chat"} class="site-button-link facebook hover" aria-label="Skype"><i class="fa fa-skype"></i></a></li>
                                            <li><a href={"mailto:sales@baobiduynhat.com.vn"} class="site-button-link linkedin hover" aria-label="Email"><i class="fa fa-envelope"></i></a></li>
                                            <li>
                                                <HoverText href={"https://www.dnpack.com.vn/"} class="site-button-link facebook"><img src="https://s.w.org/images/core/emoji/12.0.0-1/svg/1f1ec-1f1e7.svg" title="English" alt="English" width="16" height="11" style={{ backgroundColor: '#fff',
                                                    borderRadius: 4,
                                                    borderWidth: 2,
                                                    borderColor: '#fff'}}/> 
                                                     &nbsp;English
                                                </HoverText>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="dlab-quik-search ">
                                    <form action="#">
                                        <input name="search" value="" type="text" class="form-control" placeholder="Type to search"/>
                                        <span id="quik-search-remove"><i class="ti-close"></i></span>
                                    </form>
                                </div>
                                
                                <div class="header-nav navbar-collapse collapse justify-content-start" id="navbarNavDropdown">
                                    <div class="logo-header d-md-block d-lg-none">
                                        <Link to="/"><img src={require("../images/duynhat/logo/DN_logo.png")} alt=""/></Link>
                                    </div>
                                    <ul class="nav navbar-nav">	
                                        <li class="has-mega-menu homedemo"> <VNText to="/">Trang Chủ</VNText>
                                        </li>
                                        <li class="has-mega-menu"> <VNText to={'/gioi-thieu'}>Giới Thiệu</VNText>
										</li>
                                        <li class="has-mega-menu"> <VNText to={'/nha-may'}>Nhà Máy</VNText>
                                        </li>
                                        <li class="has-mega-menu"> <VNText to={'/san-pham'}>Sản Phẩm<i class="fa fa-chevron-down"></i></VNText>
                                        <ul class="mega-menu">
												<li>
                                                    <VNText to={'/san-pham'}>Sản Phẩm</VNText>
													<ul>
                                                        <li><VNText to={'/bao-bi-nhua'}>Bao Bì Nhựa</VNText></li>
														<li><VNText to={'/bao-bi-giay'}>Bao Bì Giấy</VNText></li>
														<li><VNText to={'/tem-nhan'}>Tem và Nhãn</VNText></li>
                                                        <li><VNText to={'/thung-carton'}>Thùng Carton</VNText></li>
													</ul>
												</li>
											</ul>
                                        </li>
                                   
										<li class="has-mega-menu"> 
                                            <VNText to={'/tin-tuc'}>Tin Tức</VNText>
										</li>
									
                                        <li>
                                            <VNText to="/lien-he">Liên Hệ</VNText>
                                        </li>
                                    </ul>	
                                    <div class="dlab-social-icon">
                                        <ul>
                                          <li><a href={"https://www.facebook.com/DuyNhatBaoBi"} class="site-button sharp-sm fa fa-facebook" aria-label="Facebook"><i class="fa fa-facebook"></i>fb</a></li>
                                            <li><a class="site-button sharp-sm fa fa-skype" href={"skype:baobiduynhat?chat"} aria-label="Skype">skype</a></li>
                                            <li><a class="site-button sharp-sm fa fa-envelope" href={"sales@baobiduynhat.com.vn"}  aria-label="Mail">mail</a></li>
                                            <li>
                                                <a href={"https://www.dnpack.com.vn/"} class="site-button sharp-sm" aria-label="Vietnamese"><img img src="https://s.w.org/images/core/emoji/12.0.0-1/svg/1f1ec-1f1e7.svg" title="English" alt="English"  width="16" height="11"/> 
                                                dnpack</a>
                                            </li>
                                        </ul>
                                    </div>			
                                </div>
                            </div>
                        </div>
                    </div>
                </Sticky>
            </header>
            )}       
        />
        </>
        )
    }
}
export default Header11;

