import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SearchBar from "material-ui-search-bar";
import logo from "../../images/Logo.jpg";
import profile from "../../images/profile.jpg";
import Column from "./Column";
import Row from "./Row";
import initialData from "../initial-data";
import styled from "styled-components";
import Slider from "react-slick";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const Container = styled.div`
  display: flex;
  margin-right: 10px;
`;

class Landing extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      displayAllApps: false,
      columns: initialData.column,
      apps: initialData.apps,
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  onDragEnd = result => {
    const { source, destination, draggableId } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    //reorder
    if (source.droppableId === destination.droppableId) {
      const column = this.state.columns[source.droppableId];
      const newAppIds = Array.from(column.appIds);
      newAppIds.splice(source.index, 1);
      newAppIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...column,
        appIds: newAppIds
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      };
      this.setState(newState);
    } else {
      //move
      const start = this.state.columns[source.droppableId];
      const finish = this.state.columns[destination.droppableId];

      const startAppIds = Array.from(start.appIds);
      startAppIds.splice(source.index, 1);

      const newStart = {
        ...start,
        appIds: startAppIds
      };

      const finishAppIds = Array.from(finish.appIds);

      finishAppIds.splice(destination.index, 0, draggableId);

      const newFinish = {
        ...finish,
        appIds: finishAppIds
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish
        }
      };

      this.setState(newState);
    }
  };

  render() {
    let allApps;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    allApps = (
      <div className="allapps">
        <Container>
          <Column
            key={this.state.columns["column-1"].id}
            column={this.state.columns["column-1"]}
            apps={this.state.columns["column-1"].appIds.map(
              appId => this.state.apps[appId]
            )}
          />
          <Column
            key={this.state.columns["column-3"].id}
            column={this.state.columns["column-3"]}
            apps={this.state.columns["column-3"].appIds.map(
              appId => this.state.apps[appId]
            )}
          />
          <Column
            key={this.state.columns["column-4"].id}
            column={this.state.columns["column-4"]}
            apps={this.state.columns["column-4"].appIds.map(
              appId => this.state.apps[appId]
            )}
          />
        </Container>
      </div>
    );

    return (
      <div>
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <img
                  className="rounded-circle"
                  src={profile}
                  alt={profile}
                  style={{ width: "100px", marginRight: "5px" }}
                />{" "}
                asb161@pitt.edu
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Pitt Account
                </button>
                <button type="button" className="btn btn-danger">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#mobile-nav"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <div>
                      <Button
                        id="Popover1"
                        onClick={this.toggle}
                        color="secondary"
                      >
                        <i class="fas fa-th fa-lg" />
                      </Button>
                      <Popover
                        placement="bottom"
                        isOpen={this.state.popoverOpen}
                        target="Popover1"
                      >
                        <PopoverHeader>All Apps</PopoverHeader>
                        <PopoverBody>{allApps}</PopoverBody>
                      </Popover>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <span className="fa-stack fa-lg has-badge" data-count="90">
                      <i className="fa fa-circle fa-stack-2x" />
                      <i className="fa fa-envelope fa-stack-1x fa-inverse" />
                    </span>
                  </li>

                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-dark"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <img
                        className="rounded-circle"
                        src={profile}
                        alt={profile}
                        style={{ width: "40px", marginRight: "5px" }}
                      />{" "}
                    </button>
                  </li>
                  <li />
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col">
                <img
                  src={logo}
                  style={{ width: "200px", margin: "auto", display: "block" }}
                  alt="Loading..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col" id="left">
                <h4>Up Next</h4>
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
                            <h5 className="card-title">
                              Human Information Processing
                            </h5>
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
                            <h5 className="card-title">
                              Human Information Processing
                            </h5>
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
                            <h5 className="card-title">Project Proposal</h5>
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
                            <h5 className="card-title">Project Proposal</h5>
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
                            <h5 className="card-title">Career Fair</h5>
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
                            <h5 className="card-title">Career Fair</h5>
                            <p className="card-text">6pm-9pm</p>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="col" id="right">
                <div className="row">
                  <div className="col-sm" />
                  <Row
                    key={this.state.columns["column-2"].id}
                    column={this.state.columns["column-2"]}
                    apps={this.state.columns["column-2"].appIds.map(
                      appId => this.state.apps[appId]
                    )}
                  />
                  <div className="col-sm" />
                </div>
                <div className="row">
                  <div id="search">
                    <MuiThemeProvider>
                      <SearchBar
                        onChange={() => console.log("onChange")}
                        onRequestSearch={() => console.log("onRequestSearch")}
                        style={{
                          margin: "0 auto",
                          maxWidth: 800
                        }}
                      />
                    </MuiThemeProvider>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </DragDropContext>
      </div>
    );
  }
}

export default Landing;
