import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../lib/redux/actionCreators';

const Task = ({ task: { title, content, id } }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTask(id))
  }

  return (
    <div>
      <h2>{ title }</h2>
      <p>{ content }</p>
      <button type="button" onClick={onDelete}>
        DELETE
      </button>
    </div>
  )
};

export default Task;
