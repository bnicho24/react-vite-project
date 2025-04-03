import React from "react";

const DeletedItem = (props) => {
  const { index, data } = props;
  return (
    <>
      <div
        className="task-item flex justify-between p-3 bg-gray-200 border-1 border-gray-300"
        id={index}
      >
        <div>
          <p>{data.title}</p>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
      </div>
    </>
  );
};

export default DeletedItem;
