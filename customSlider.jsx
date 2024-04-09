import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './customSlider.css'; // 用于添加自定义 CSS 样式

const CustomSlider = () => {
  const settings = {
    dots: false, // 不显示指示点
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 禁用自动轮播
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide-container">
          <img src='https://storage.googleapis.com/www-cw-com-tw/article/201810/article-5bd182cf13ebb.jpg' alt="Slide 1"></img>
        </div>
        <div className="slide-container">
          <img src='https://storage.googleapis.com/www-cw-com-tw/article/201810/article-5bd182cf13ebb.jpg' alt="Slide 2"></img>
        </div>
        <div className="slide-container">
          <img src='https://storage.googleapis.com/www-cw-com-tw/article/201810/article-5bd182cf13ebb.jpg' alt="Slide 3"></img>
        </div>
      </Slider>
    </div>
  );
};

export default CustomSlider;
