import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import Tooltip from "@material-ui/core/Tooltip";

const Container = styled.div`
  padding: 8px;
  margin-right: 8px;
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
            <div>
              <NotificationBadge
                count={this.props.app.count}
                effect={Effect.SCALE}
              />
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
              {this.props.app.name}
            </div>
          </Container>
        )}
      </Draggable>
    );
  }
}
