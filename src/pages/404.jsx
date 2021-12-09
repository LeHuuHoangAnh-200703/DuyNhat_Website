import React, { Component } from 'react';
import { Link } from 'gatsby';

const bg = require('../images/duynhat/factory/DSC_7895.jpg')

class Error404 extends Component {


    render() {
        return (
            <>
                <div class="dlab-bnr-inr full-height overlay-black-dark" style={{ backgroundImage: "url(" + bg + ")" }}>
                    <div class="container">
                        <div class="row max-w700 dlab-bnr-inr-entry dz_error-404-area align-m dz_error-404 text-white m-auto">
                            <div class="col-lg-4 col-md-4 m-tb30">
                                <div class="bg-primary dz_error">
                                    404
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-8 m-b30 text-left">
                                <h2 class="error-head">Đã có lỗi xảy ra !</h2>
                                <p class="font-16">Không tìm thấy trang.</p>
                                <p class="font-16">Xin vui lòng quay lại trang chủ bằng nút bên dưới.</p>
                                <Link to="/" class="site-button">Quay về Trang Chủ</Link>
                            </div>
                        </div>
                    </div>
                </div>                
            </>
        )
    }
}
export default Error404;