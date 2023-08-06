import Card from "../Card/index";
import List from "../List/index";
import Option from "../Option";

import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { useState } from "react";
import OptionCard from "../Option/OptionCard/indes";

const Incorporate = () => {
  const itemsNormal = {
    options: [
      {
        id: 2,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4477",
        title: "Mango",
        subtitle: "Fruits",
      },
      {
        id: 3,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a448",
        title: "Orange",
        subtitle: "Fruits",
      },
      {
        id: 5,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a450",
        title: "Red",
        subtitle: "Colors",
      },
      {
        id: 6,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa439451",
        title: "Yellow",
        subtitle: "Colors",
      },
    ],

    fruits: [
      {
        id: 1,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4477",
        title: "Grapes",
        subtitle: "Fruits",
      },
    ],

    colors: [
      {
        id: 4,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a451",
        title: "Black",
        subtitle: "Colors",
      },
    ],
  };

  const [items, setItems] = useState(itemsNormal);

  const removeFromList = (list: any, index: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list: any, index: any, element: any) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      console.log(result);
      return;
    }
    const listCopy: any = { ...items };
    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;

    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );
    setItems(listCopy);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div
          className="flex flex-col items-center bg-yellow-50 rounded-2xl w-3/5"
          style={{ height: "100vh" }}
        >
          <div className="font-bold text-2xl bg-yellow-50 mt-5">
            Categorize the Following ?
          </div>
          <div>
            <Option title="Color's" onDragEnd={onDragEnd} name="options">
              {items.options.map((item, index) => (
                <Draggable draggableId={item.uuid} index={index} key={item.id}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <OptionCard data={item} />
                    </div>
                  )}
                </Draggable>
              ))}
            </Option>
          </div>
          <div className="flex p-10">
            <List title="Fruit's" onDragEnd={onDragEnd} name="fruits">
              {items.fruits.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id + ""}
                  index={index}
                >
                  {(
                    provided: DraggableProvided | any,
                    snapshot: DraggableStateSnapshot
                  ) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card data={item} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            </List>
            <List title="Color's" onDragEnd={onDragEnd} name="colors">
              {items.colors.map((item, index) => (
                <Draggable draggableId={item.uuid} index={index} key={item.id}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card data={item} />
                    </div>
                  )}
                </Draggable>
              ))}
            </List>
          </div>
        </div>
      </DragDropContext>
    </>
  );
};

export default Incorporate;
