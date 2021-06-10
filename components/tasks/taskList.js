import React from 'react';
import { useSelector } from 'react-redux';
import Task from './task';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const hasTasks = tasks.length;

  if (!hasTasks) return null;

  return (
    tasks.map((task) => (
      <Task task={task} key={task.id} />
    ))
  )
}

export default TaskList;
