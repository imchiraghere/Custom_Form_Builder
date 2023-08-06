import React from "react";
import {
  Droppable,
  DragDropContext,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";

type BlankProps = {
  children?: React.ReactNode;
  title: string;
  onDragEnd: (data: any) => void;
  name: string;
};

const BlankBox = ({ children, title, onDragEnd, name }: BlankProps) => {
  return (
    <div className="w-1/2">
      {/* <h2 className="text-xl">{title}</h2> */}
      <div>
        <Droppable droppableId={name}>
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div ref={provided.innerRef}>
              <div className="p-1 rounded-md bg-emerald-100 w-40 h-10">
                {children}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default BlankBox;
