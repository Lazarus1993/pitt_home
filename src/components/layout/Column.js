import React, { Component } from "react";
import styled from "styled-components";
import Appl from "./Appl";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid grey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const AppList = styled.div`
  padding: 8px;
  background: ${props => (props.isDraggingOver ? "skyblue" : "white")};
`;

export default class Column extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <AppList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.apps.map((app, index) => (
                <Appl key={app.id} app={app} index={index} />
              ))}
              {provided.placeholder}
            </AppList>
          )}
        </Droppable>
      </Container>
    );
  }
}
