import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <div className="slider">
          <Slider {...settings}>
            <div className="card card-body bg-dark text-white mb-3">
              <div className="nextclass">
                <div className="calendar">
                  <div className="day">Tuesday</div>
                  <div className="date">1</div>
                </div>
                <div>
                  <h5 className="card-title">Human Information Processing</h5>
                </div>
              </div>
              <p className="card-text">6pm-9pm</p>
            </div>
            <div className="card card-body bg-dark text-white mb-3">
              <div className="nextclass">
                <div className="calendar">
                  <div className="day">Tuesday</div>
                  <div className="date">1</div>
                </div>
                <div>
                  <h5 className="card-title">Human Information Processing</h5>
                  <p className="card-text">6pm-9pm</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
