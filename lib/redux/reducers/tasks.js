import { ADD_TASK, DELETE_TASK } from "../actionTypes";

export const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      const { title, content, id } = action.payload;
      return [
        ...state,
        {
          title,
          content,
          id,
        }
      ];
    case DELETE_TASK:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
}