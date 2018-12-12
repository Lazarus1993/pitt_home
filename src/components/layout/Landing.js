import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SearchBar from "material-ui-search-bar";
import logo from "../../images/UpittLogo.png";
import profile from "../../images/profile.jpg";
import emergency from "../../images/Emergency.png";
import Column from "./Column";
import Row from "./Row";
import initialData from "../initial-data";
import styled from "styled-components";
import Slider from "react-slick";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import UpNext from "../upnext/UpNext";

const Container = styled.div`
  display: flex;
  margin-right: 10px;
`;

class Landing extends Component {
  constructor(props) {
    super(props);
    this.toggleApp = this.toggleApp.bind(this);
    this.toggleUpNext = this.toggleUpNext.bind(this);
    this.state = {
      displayAllApps: false,
      columns: initialData.column,
      apps: initialData.apps,
      popoverAppOpen: false,
      popoverUpNext: false
    };
  }

  toggleApp() {
    this.setState({
      popoverAppOpen: !this.state.popoverAppOpen
    });
  }
  toggleUpNext() {
    this.setState({
      popoverUpNext: !this.state.popoverUpNext
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
      slidesToScroll: 1,
      autoplay: true
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
                        onClick={this.toggleApp}
                        color="secondary"
                      >
                        <i className="fas fa-th fa-lg" />
                      </Button>
                      <Popover
                        placement="bottom"
                        isOpen={this.state.popoverAppOpen}
                        target="Popover1"
                      >
                        <PopoverHeader>All Apps</PopoverHeader>
                        <PopoverBody>{allApps}</PopoverBody>
                      </Popover>
                    </div>
                  </li>
                </ul>
                <img
                  className="rounded-circle"
                  src={logo}
                  alt={logo}
                  style={{
                    marginLeft: "150px",
                    width: "50px",
                    marginRight: "5px"
                  }}
                  id="brand"
                />{" "}
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
                  <li className="nav-item" id="upnext">
                    <div>
                      <Button
                        id="Popover2"
                        onClick={this.toggleUpNext}
                        color="secondary"
                      >
                        Up Next
                      </Button>
                      <Popover
                        placement="bottom"
                        isOpen={this.state.popoverUpNext}
                        target="Popover2"
                        toggle={this.toggleUpNext}
                      >
                        <PopoverHeader>UpNext</PopoverHeader>
                        <PopoverBody>
                          <UpNext />
                        </PopoverBody>
                      </Popover>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <h3>Welcome Ashutosh</h3>
            <div className="row">
              <div className="col" />
              <Row
                key={this.state.columns["column-2"].id}
                column={this.state.columns["column-2"]}
                apps={this.state.columns["column-2"].appIds.map(
                  appId => this.state.apps[appId]
                )}
              />
              <div className="col" />
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
            <div>
              <img
                className="img-fluid"
                src={emergency}
                alt={emergency}
                style={{ width: "600px", marginRight: "5px" }}
              />{" "}
            </div>
            <br />
          </div>
        </DragDropContext>
      </div>
    );
  }
}

export default Landing;
