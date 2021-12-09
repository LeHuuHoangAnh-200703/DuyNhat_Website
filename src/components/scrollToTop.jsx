import React, { Component } from 'react';
import {animateScroll} from 'react-scroll';

class ScrollToTop extends Component {

    state = { 
        offset : this.props.offset || 1000,
        show   : false
    }

    componentDidMount = () => {
       
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset > this.state.offset){
                this.setState({
                    ...this.state,
                    show:true
                })
            }else{
                this.setState({
                    ...this.state,
                    show:false
                })
            }
        })
    }

    scrollToTop = () => {
        animateScroll.scrollToTop();
    }
    render() { 
        return ( 
            <>
                {this.state.show && ( 
                    <button className={`scroltop ${this.props.className}`} type="button" 
                    onClick={this.scrollToTop}
                    style={{display: "block"}}
                    aria-label="Scroll">
                        <i className="fa fa-arrow-up"></i>
                    </button>
                )}
            </>
         );
    }
}
 
export default ScrollToTop;