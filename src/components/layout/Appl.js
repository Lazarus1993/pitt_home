import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import Tooltip from "@material-ui/core/Tooltip";

const Container = styled.div`
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
  background: ${props => (props.isDragging ? "lightgreen" : "white")};
`;

export default class Appl extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.app.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            highlight_line
            {...provided.dragHandleProps}
            end_highlight_line
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Tooltip title={this.props.app.content} placement="top">
              <img
                //className="rounded-circle"
                src={require("../../images/" + this.props.app.name + ".jpg")}
                style={{
                  width: "50px",
                  margin: "auto",
                  display: "block",
                  borderRadius: "10px"
                }}
                alt="Loading..."
              />
            </Tooltip>
            <div id="apps">{this.props.app.name}</div>
          </Container>
        )}
      </Draggable>
    );
  }
}
