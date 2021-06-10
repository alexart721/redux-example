import React from 'react';
import { AddTask, TaskList } from '../components';

const Tasks = () => (
  <>
    <AddTask key="addTask" />
    <TaskList key="taskList" />
  </>
)

export default Tasks;
