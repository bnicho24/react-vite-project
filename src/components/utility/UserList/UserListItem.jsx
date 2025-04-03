import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import UserPopup from "./UserPopup";

const UserListItem = (props) => {
  const {
    index,
    data,
    HandleDelete,
    HandleUpdate,
    showDeleted,
    handleOpen,
    onUpdate,
    // dialogData,
    show,
    onHide,
  } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [updatedData, setUpdatedData] = useState(data);

  useEffect(() => {
    setUpdatedData(data);
  }, [data]);

  const HandleEdit = () => {
    HandleUpdate(index, updatedData);
    setIsEdit((prevState) => !prevState);
  };

  // const HandlePopupEdit = () => {
  //   handleOpen(index);
  //   setIsEdit(false);
  // };

  return (
    <>
      <div
        className="task-item flex justify-between p-3 bg-gray-200 border-1 border-gray-300"
        id={index}
      >
        <div>
          {isEdit ? (
            <Input
              type="text"
              placeholder="Title"
              value={updatedData.title}
              className="mx-2 bg-white"
              onChange={(e) =>
                setUpdatedData({ ...updatedData, title: e.target.value })
              }
            />
          ) : (
            <p>{data.title}</p>
          )}
        </div>
        <div>
          {isEdit ? (
            <Input
              type="text"
              placeholder="Description"
              value={updatedData.description}
              className="mx-2 bg-white"
              onChange={(e) =>
                setUpdatedData({ ...updatedData, description: e.target.value })
              }
            />
          ) : (
            <p>{data.description}</p>
          )}
        </div>
        {!showDeleted && (
          <div className="task-delete flex">
            <Button
              type="submit"
              className="btn bg-destructive mx-2"
              onClick={() => HandleDelete(index)}
            >
              delete
            </Button>
            <Button
              type="submit"
              className="btn bg-[green] mx-2"
              onClick={HandleEdit}
            >
              {isEdit ? "Update" : "Edit"}
            </Button>
            {/* <Button
              type="submit"
              className="btn bg-[gray]"
              onClick={HandlePopupEdit}
            >
              Edit in Popup
            </Button> */}
            <UserPopup onUpdate={onUpdate} dialogData={data} onHide={onHide} show={show} handleOpen={handleOpen} />
          </div>
        )}
      </div>
    </>
  );
};

export default UserListItem;
