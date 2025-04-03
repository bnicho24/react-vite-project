import React, { useState } from "react";
import UserListItem from "./UserListItem";
import DeletedItem from "./DeletedItem";
import UserPopup from "./UserPopup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const UserList = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [addData, setAddData] = useState("");
  const [tasks, setTasks] = useState([]);
  const [deletedItem, setDeletedItem] = useState([]);
  const [showDeleted, setShowDeleted] = useState(false);

  const [open, setOpen] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const handleOpen = (index) => {
    setCurrentTaskIndex(index);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("addData", addData);
    if (addData.title === "" && addData.description === "")
      return;

    setTasks([...tasks, addData]);
    // setTitle("");
    // setDescription("");
    setAddData("");
  };

  const HandleDelete = (index) => {
    const deletedTask = tasks[index];
    setDeletedItem((prevDeleted) => [...prevDeleted, deletedTask]); // store deleted items

    setTasks(tasks.filter((_, taskIndex) => taskIndex !== index)); // delete item
    setShowDeleted(false);
  };
  const handleDeletedItems = () => {
    setShowDeleted(true);
  };

  const HandleUpdate = (index, updatedData) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedData;
    setTasks(updatedTasks);
  };
  const handleUpdateModal = (updatedData) => {
    if (currentTaskIndex !== null) {
      HandleUpdate(currentTaskIndex, updatedData);
    }
  };
  // console.log('tasks[currentTaskIndex]',tasks) 
  return (
    <>
      <div className="flex items-center justify-between todo-list-form">
        <Input
          type="text"
          placeholder="User Title"
          value={addData.title}
          className="mx-2 w-100"
          onChange={(e) => setAddData({ ...addData, title: e.target.value })}
        />

        <Input
          type="text"
          placeholder="User Description"
          value={addData.description}
          className="mx-2  w-100"
          onChange={(e) =>
            setAddData({ ...addData, description: e.target.value })
          }
        />
        <Button
          type="submit"
          className=" mx-2"
          onClick={handleSubmit}
        >
         Submit
        </Button>
        <Button
          type="submit"
          className="bg-[gray] mx-2"
          onClick={handleDeletedItems}
        >
         Show deleted tasks
        </Button>
        
      </div>
      <div className="task-list mt-3">
        
        {tasks?.map((task, index) => (
          <UserListItem
            key={index}
            index={index}
            data={task}
            HandleDelete={HandleDelete}
            HandleUpdate={HandleUpdate}
            handleOpen={handleOpen}
            onUpdate={handleUpdateModal}
            // dialogData={task[index]}
            onHide={handleClose}
            show={open}
          />
        ))}
      </div>
      {showDeleted && deletedItem.length > 0 && (
        <div className="task-list mt-3">
          <h5>Deleted Items</h5>
          {deletedItem?.map((deletedTask, index) => (
            <DeletedItem key={index} index={index} data={deletedTask} />
          ))}
        </div>
      )}
      {/* <UserPopup
        show={open}
        onHide={handleClose}
        data={tasks[currentTaskIndex]}
        backdrop="static"
        keyboard={false}
        onUpdate={handleUpdateModal}
      /> */}
    </>
  );
};

export default UserList;
