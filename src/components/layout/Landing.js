import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import SearchBar from "@opuscapita/react-searchbar";
import logo from "../../images/Logo.jpg";
import blank from "../../images/blank.png";
import Column from "./Column";
import initialData from "../initial-data";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAllApps: false,
      columns: initialData.column,
      apps: initialData.apps
    };
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
    const { displayAllApps } = this.state;
    let allApps;
    if (displayAllApps) {
      allApps = (
        <Column
          key={this.state.columns["column-1"].id}
          column={this.state.columns["column-1"]}
          apps={this.state.columns["column-1"].appIds.map(
            appId => this.state.apps[appId]
          )}
        />
      );
    }
    return (
      <div>
        <DragDropContext onDragEnd={this.onDragEnd}>
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
              <div className="col">
                <button
                  type="button"
                  onClick={() => {
                    this.setState(prevState => ({
                      displayAllApps: !prevState.displayAllApps
                    }));
                  }}
                  className="btn btn-dark"
                >
                  Customize Apps
                </button>
                <div>{allApps}</div>
              </div>
              <div className="col-6">
                <div className="row">
                  <SearchBar />
                </div>
                <div className="row">
                  <div className="col-sm">
                    <h2>Hi Student</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm" />
                  <Column
                    key={this.state.columns["column-2"].id}
                    column={this.state.columns["column-2"]}
                    apps={this.state.columns["column-2"].appIds.map(
                      appId => this.state.apps[appId]
                    )}
                  />
                  <div className="col-sm" />
                </div>
              </div>
              <div className="col">
                <button type="button" className="btn btn-dark">
                  <img
                    className="rounded-circle"
                    src={blank}
                    alt={blank}
                    style={{ width: "25px", marginRight: "5px" }}
                    title="You must have a Gravatar connected to your email to display an image"
                  />{" "}
                  Logout
                </button>
                <br />
                <span>Recent apps</span>
              </div>
            </div>
          </div>
        </DragDropContext>
      </div>
    );
  }
}

export default Landing;
