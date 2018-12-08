import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
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
            {this.props.app.name}
          </Container>
        )}
      </Draggable>
    );
  }
}
