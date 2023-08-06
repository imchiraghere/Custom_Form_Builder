import React from "react";
import {
  Droppable,
  DragDropContext,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";

type OptionProps = {
  children?: React.ReactNode;
  title: string;
  onDragEnd: (data: any) => void;
  name: string;
};

const Option = ({ children, title, onDragEnd, name }: OptionProps) => {
  return (
    <div>
      {/* <h2 className="text-2xl font-bold mb-2 mx-5">{title}</h2> */}
      <div>
        <Droppable droppableId={name}>
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div ref={provided.innerRef} className="flex w-full m-5">
              <div className="flex flex-row">
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

export default Option;
