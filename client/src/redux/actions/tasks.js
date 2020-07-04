import * as types from '../types/tasks';
export const caAddTask = payload => ({payload: payload, type: types.ADD_TASK});
export const caRemoveTask = payload => ({payload: payload, type: types.REMOVE_TASK});
export const caUpdateTasks = payload => ({payload: payload, type: types.UPDATE_TASKS});