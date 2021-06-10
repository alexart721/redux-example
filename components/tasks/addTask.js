import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addTask } from '../../lib/redux/actionCreators';

const initialState = {
  title: '',
  content: '',
  id: '',
};

const AddTask = () => {
  const [ task, setTask ] = useState(initialState);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { target: { name, value } } = e;

    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const resetForm = () => {
    setTask(initialState);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...task,
      id: uuidv4(),
    };

    dispatch(addTask(payload))

    resetForm();
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={task.title}
        id="title"
        onChange={onChange}
        required
      />
      <label htmlFor="content">Content</label>
      <textarea
        name="content"
        value={task.content}
        id="content"
        onChange={onChange}
        required
      />
      <button type="submit" disabled={!task.title && !task.content}>
        Submit
      </button>
    </form>
  )
}

export default AddTask;
