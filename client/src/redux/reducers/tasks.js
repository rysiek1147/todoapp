import * as types from '../types/tasks';
export const tasksReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload
        ]
      }
    case types.REMOVE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((item, index) => index !== action.payload)
        ]
      }
    case types.UPDATE_TASKS:
      return {
        tasks: [...action.payload]
      }
    default:
      return state
  }
}