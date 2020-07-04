// action name creator
const reducerName = 'tasks';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_TASK = createActionName('ADD_TASK');
export const REMOVE_TASK = createActionName('REMOVE_TASK');
export const UPDATE_TASKS = createActionName('UPDATE_TASKS');