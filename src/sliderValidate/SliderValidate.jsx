/**
 * created by cy in 2019/08/19
 * 滑动验证
 */
import './sliderValidate.scss';

import loginArrowPNG from 'images/loginArrow.png';

import React, { Component } from 'react';

export default class SliderValidate extends Component {

    componentDidMount() {
        this.slideBoxDown();
    }

	slideBoxDown = () => {
	    let container = document.getElementById('container');
	    let cover = document.getElementById('cover');
	    let slider = document.getElementById('slider');
	    let text = document.getElementById('text');
	    let success = false;	
	    let distance = container.offsetWidth - slider.offsetWidth;

	    this.usePC(cover, text, success, distance);
	    this.usePhone(cover, text, success, distance);
	};

	/**
	 * PC端
	 */
	usePC = (cover, text, success, distance) => {	
	    slider.onmousedown = (e) => {
	        slider.style.transition = '';
	        cover.style.transition = '';

	        e = e || window.event;
	        let downX = e.clientX;

	        document.onmousemove = (ee) => {
	            let eee = ee || window.event;
	            let moveX = eee.clientX;

	            let offsetX = moveX - downX;

	            if (offsetX > distance) {
	                offsetX = distance;
	            } else if (offsetX < 0) {
	                offsetX = 0;
	            }

	            slider.style.left = offsetX + 'px';
	            cover.style.width = offsetX + 'px';

	            if (offsetX === distance) {
	                text.innerHTML = '验证通过';
	                text.style.color = '#fff';
	                slider.innerHTML = '√';
	                slider.style.color = 'green';
	                cover.style.backgroundColor = 'lightgreen';

	                success = true;
	                slider.onmousedown = null;
	                document.onmousemove = null;

	                setTimeout(() => {
	                    this.props.sliderFinish();
	                }, 100);
	            }
	        };

	        document.onmouseup = () => {
	            if (!success) {
	                slider.style.left = 0;
	                cover.style.width = 0;
	                slider.style.transition = 'left 1s ease';
	                cover.style.transition = 'width 1s ease';
	            }
	            document.onmousemove = null;
	            document.onmouseup = null;
	        };
	    };
	}

	/**
	 * 移动端
	 */
	usePhone = (cover, text, success, distance) => {
	    slider.ontouchstart = (event) => {
		    let e = event.targetTouches[0];
	        slider.style.transition = '';
	        cover.style.transition = '';

	        e = e || window.event;
	        let downX = e.clientX;

	        document.ontouchmove = (eevent) => {
			    let ee = eevent.targetTouches[0];
	            let eee = ee || window.event;
	            let moveX = eee.clientX;

	            let offsetX = moveX - downX;

	            if (offsetX > distance) {
	                offsetX = distance;
	            } else if (offsetX < 0) {
	                offsetX = 0;
	            }

	            slider.style.left = offsetX + 'px';
	            cover.style.width = offsetX + 'px';

	            if (offsetX === distance) {
	                text.innerHTML = '验证通过';
	                text.style.color = '#fff';
	                slider.innerHTML = '√';
	                slider.style.color = 'green';
	                cover.style.backgroundColor = 'lightgreen';

	                success = true;
	                slider.ontouchstart = null;
	                document.ontouchmove = null;

	                setTimeout(() => {
	                    this.props.sliderFinish();
	                }, 100);
	            }
	        };

	        document.ontouchend = () => {
	            if (!success) {
	                slider.style.left = 0;
	                cover.style.width = 0;
	                slider.style.transition = 'left 1s ease';
	                cover.style.transition = 'width 1s ease';
	            }
	            document.ontouchmove = null;
	            document.ontouchend = null;
	        };
	    };
	}

	render() {
	    return (
	        <div className="sliderValidate" id="container">
	            <div className="coverd" id="cover" />
	            <div
	                id="slider"
	                className="slider"
	            >
	                <img src={loginArrowPNG} />
	            </div>
	            <b className="text" id="text">
					滑动验证
	            </b>
	        </div>
	    );
	}
}
