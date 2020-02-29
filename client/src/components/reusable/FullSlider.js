import React, {Component} from 'react'
import Slider from "react-slick";

export default class FullSlider extends Component {
    state = {
        activeSlide: 0,
        activeSlide2: 0
      };
      render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          beforeChange: (current, next) => this.setState({ activeSlide: next }),
          afterChange: current => this.setState({ activeSlide2: current })
        };
    return (
        <div>
        <Slider {...settings}>
          
        </Slider>
        </div>
    )
}
}

export default FullSlider
