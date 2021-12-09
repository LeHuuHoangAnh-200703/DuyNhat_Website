import React, { Component } from 'react';
import { Link } from 'gatsby';
import {VNText} from './VNText';

const bg = require('../images/background/map-bg1.png')
// style="background-image:url(images/background/bg3.png); background-size: cover;"

class Footer4 extends Component {


    render() {
        return (
            <>
            <footer class="site-footer">
                <div class="footer-top" style={{ backgroundImage: "url(" + bg + ")" }}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-5 col-xl-2 col-lg-2 col-sm-6 footer-col-4">
                                <div class="widget widget_services border-0">
                                    <h3 class="footer-title text-white" style={{fontSize:28}}>Company</h3>
                                    <ul>
                                        <li><VNText to="/gioi-thieu">Giới Thiệu</VNText></li>
                                        <li><VNText to="/tin-tuc">Tin Tức</VNText></li>
                                        <li><VNText to="/san-pham">Sản Phẩm</VNText></li>
                                        <li><VNText to="/nha-may">Nhà Máy </VNText></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 col-7 col-xl-2 col-lg-3 col-sm-6 footer-col-4">
                                <div class="widget widget_services border-0">
                                    <h3 class="footer-title text-white" style={{fontSize:28}}>Links Tiện Ích</h3>
                                    <ul>
                                        <li><VNText to="/bao-bi-nhua">Bao Bì Nhựa</VNText></li>
                                        <li><VNText to="/bao-bi-giay">Bao Bì Giấy</VNText></li>
                                        <li><VNText to="/tem-nhan">Tem và Nhãn</VNText></li>
                                        <li><VNText to="/lien-he">Liên Hệ</VNText></li>
                                        {/* <li><Link to="/portfolio-details">Portfolio</Link></li> */}
                                        {/* <li><Link to="/team-1">Team</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-4 col-lg-3 col-sm-6 footer-col-4">
                                <div class="widget widget_getintuch">
                                    <h3 class="footer-title text-white" style={{fontSize:28}}>Liên Hệ</h3>
                                    <ul>
                                        <li><i class="ti-location-pin"></i><strong>Địa chỉ</strong>  Lô O, Khu Công Nghiệp An Nghiệp, Huyện Châu Thành, Tỉnh Sóc Trăng, Việt Nam </li>
                                        <li><i class="ti-mobile"></i><strong>Tel</strong>+84 2993 612 772<br></br>+84 2993 616 819</li>
                                        <li><i class="ti-printer"></i><strong>Fax</strong>+84 2993 825 964 </li>
                                        <li><i class="ti-email"></i><strong>Email</strong>sales@baobiduynhat.com.vn</li>
                                        <li><i class="ti-skype"></i><strong>Skype</strong>baobiduynhat</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-12 col-xl-4 col-lg-4 col-sm-6 footer-col-4 ">
                                <div class="widget">
                                    <ul class="list-inline m-a0">
                                        <li><a href={"https://www.facebook.com/DuyNhatBaoBi"}  class="site-button facebook circle " aria-label="Facebook"><i class="fa fa-facebook"></i></a></li>
                                        <li><Link to="#" class="site-button linkedin circle " aria-label="linkedin"><i class="fa fa-linkedin"></i></Link></li>
                                        <li><a href={"skype:baobiduynhat?chat"} class="site-button skype circle " aria-label="Skype"><i class="fa fa-skype"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 text-left "> <span>Copyright © 2020 Duy Nhat Pack </span> </div>
                            <div class="col-md-6 col-sm-6 text-right "> 
                                <div class="widget-link "> 
                                    <ul>
                                        {/* <li><Link to="/about"> About</Link></li>  */}
                                        {/* <li><Link to="/help-desk"> Help Desk</Link></li>  */}
                                        {/* <li><Link to="/privacy-policy"> Privacy Policy</Link></li>  */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>                
            </>
        )
    }
}
export default Footer4;