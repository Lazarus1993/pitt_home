import React, { Component } from "react";
import Slider from "react-slick";

export default class UpNext extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div>
        <div>
          <div>
            <h4>Class</h4>
            <div className="slider">
              <Slider {...settings}>
                <div className="card card-body bg-dark text-white mb-3">
                  <div className="nextclass">
                    <div className="calendar">
                      <div className="day">Tuesday</div>
                      <div className="date">1</div>
                    </div>
                    <div>
                      <h6 className="card-title">
                        Human Information Processing
                      </h6>
                      <p className="card-text">6pm-9pm</p>
                    </div>
                  </div>
                </div>
                <div className="card card-body bg-dark text-white mb-3">
                  <div className="nextclass">
                    <div className="calendar">
                      <div className="day">Tuesday</div>
                      <div className="date">1</div>
                    </div>
                    <div>
                      <h6 className="card-title">
                        Human Information Processing
                      </h6>
                      <p className="card-text">6pm-9pm</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <br />
          <br />
          <div>
            <h4>Assignment Due</h4>
            <div>
              <Slider {...settings}>
                <div className="card card-body bg-dark text-white mb-3">
                  <div className="nextclass">
                    <div className="calendar">
                      <div className="day">November</div>
                      <div className="date">9</div>
                    </div>
                    <div>
                      <h6 className="card-title">Project Proposal</h6>
                      <p className="card-text">5pm</p>
                    </div>
                  </div>
                </div>
                <div className="card card-body bg-dark text-white mb-3">
                  <div className="nextclass">
                    <div className="calendar">
                      <div className="day">November</div>
                      <div className="date">16</div>
                    </div>
                    <div>
                      <h6 className="card-title">Project Proposal</h6>
                      <p className="card-text">5pm</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <br />
          <br />
          <div>
            <h4>Event</h4>
            <div>
              <Slider {...settings}>
                <div className="card card-body bg-dark text-white mb-3">
                  <div className="nextclass">
                    <div className="calendar">
                      <div className="day">Thursday</div>
                      <div className="date">1</div>
                    </div>
                    <div className="description">
                      <h6 className="card-title">Career Fair</h6>
                      <p className="card-text">6pm-9pm</p>
                    </div>
                  </div>
                </div>
                <div className="card card-body bg-dark text-white mb-3">
                  <div className="nextclass">
                    <div className="calendar">
                      <div className="day">Thursday</div>
                      <div className="date">8</div>
                    </div>
                    <div className="description">
                      <h6 className="card-title">Career Fair</h6>
                      <p className="card-text">6pm-9pm</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
