import React from "react";

import { deleteTask } from "../context/actions/tasks";
import ListItem from "./ListItem";
import { useTaskDispatch, useTaskState } from "../context/TaskContext";
import { IDataRequest } from "../types";

const ListTask = () => {
  const { tasks, loading }: IDataRequest = useTaskState();
  const taskDispatch = useTaskDispatch();

  const handleDeleteTask = (id: string) => {
    deleteTask(taskDispatch, id)
  }

  return (
    <ul>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          data={task}
          loading={loading}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </ul>
  );
};

export default ListTask;
