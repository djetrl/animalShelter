
import Slider from "react-slick";
import { Component } from "react";

class Sliders  extends Component {

s
  render(){

      return(
          <section className="slider">
          <h1 className="slider__title">Те, Кому вы можете помочь!</h1>
          <Slider {...this.props.settings} className="slider__inner">
                {this.props.children}
          </Slider>
        </section>
      )
  }


}


export default Sliders;