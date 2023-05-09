import React, { useState } from "react";

const ListItem = ({
  data,
  loading,
  handleDeleteTask
}: {
  data: any;
  loading: boolean;
  handleDeleteTask: any
}) => {

  return (
    <>
      <li className="list-none border-2 border-gray-300 my-3 mx-0 p-2 flex justify-between items-center capitalize">
        <span className="font-bold">{data.name}</span>
        <div>
          <button
            className="py-1 px-4 bg-red-500 text-white cursor-pointer"
            disabled={loading}
            onClick={() => handleDeleteTask(data.id)}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default ListItem;
