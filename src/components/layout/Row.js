import React, { Component } from "react";
import styled from "styled-components";
import RowAppl from "./RowAppl";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  border-radius: 2px;
`;
const AppList = styled.div`
  padding: 8px;
  background: ${props => (props.isDraggingOver ? "skyblue" : "white")};
  display: flex;
`;

export default class Row extends Component {
  render() {
    return (
      <Container>
        <Droppable droppableId={this.props.column.id} direction="horizontal">
          {(provided, snapshot) => (
            <AppList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.apps.map((app, index) => (
                <RowAppl key={app.id} app={app} index={index} />
              ))}
              {provided.placeholder}
            </AppList>
          )}
        </Droppable>
      </Container>
    );
  }
}
