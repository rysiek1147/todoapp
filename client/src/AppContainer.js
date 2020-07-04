import {connect} from 'react-redux';
import {App} from './App';

import {getAllTasks} from './redux/selectors/tasks';
import {caAddTask, caRemoveTask, caUpdateTasks} from './redux/actions/tasks';

const mapStateToProps = (state) => ({
  tasks: getAllTasks(state)
})

const dispatchStateToProps = (dispatch) => ({
  addTask: taskName => dispatch(caAddTask(taskName)),
  removeTask: taskId => dispatch(caRemoveTask(taskId)),
  updateTasks: tasks => dispatch(caUpdateTasks(tasks)),
})

export default connect(mapStateToProps, dispatchStateToProps)(App);