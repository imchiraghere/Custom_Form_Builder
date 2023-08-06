import Card from "../../Card/index";
import List from "../../List/index";
import Option from "../../Option";
import OptionCard from "../../Option/OptionCard/indes";
import BlankBox from "../BlankBox";

import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import { useState } from "react";
import BlankCard from "../BlankCard";

const Cloze = () => {
  const itemsNormal = {
    options: [
      {
        id: 1,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4477",
        title: "1939",
        subtitle: "SON",
      },
      {
        id: 2,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a448",
        title: "1945",
        subtitle: "SON",
      },
      {
        id: 3,
        uuid: "52f9df20-9393-4c4d-b72c-7a4398a450",
        title: "Italy",
        subtitle: "City",
      },
      {
        id: 4,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a450",
        title: "Germans",
        subtitle: "City",
      },
    ],

    blank1: [
      {
        id: 6,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4477",
        title: "",
        subtitle: "",
      },
    ],
    blank2: [
      {
        id: 7,
        uuid: "52f9df20-9393-4c4d-b72c-7bfa4398a4477",
        title: "",
        subtitle: "",
      },
    ],
    blank3: [
      {
        id: 8,
        uuid: "",
        title: "",
        subtitle: "",
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
        <div className="w-3/5 h-85 flex justify-center items-center flex-col rounded-2xl m-5 bg-emerald-100">
          <div className="font-bold text-2xl mt-10">Cloze the Following ?</div>
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
          <div className="bg-yellow-50 m-1 w-4/5 p-5 mb-5 rounded-md">
            <div className="w-auto flex flex-row">
              <span className="mt-3 text-xl">
                World War II was fought between the Allies and
              </span>
              <span className="m-1">
                <BlankBox title="blank1" onDragEnd={onDragEnd} name="blank1">
                  {items.blank1.map((item, index) => (
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
                            <BlankCard data={item} />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </BlankBox>
              </span>
            </div>
            <div className="w-auto flex flex-row">
              <span className="mt-3 text-xl">powers. It started in</span>
              <span className="m-1">
                <BlankBox title="blank2" onDragEnd={onDragEnd} name="blank2">
                  {items.blank2.map((item, index) => (
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
                            <BlankCard data={item} />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </BlankBox>
              </span>
              <span className="mt-3 text-xl">and ended in</span>
            </div>
            <div className="w-auto flex flex-row">
              <span className="m-1">
                <BlankBox title="blank3" onDragEnd={onDragEnd} name="blank3">
                  {items.blank3.map((item, index) => (
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
                            <BlankCard data={item} />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </BlankBox>
              </span>
            </div>
          </div>
        </div>
      </DragDropContext>
    </>
  );
};

export default Cloze;
