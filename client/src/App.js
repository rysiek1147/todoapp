import React from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import List from './components/List/List';
import Form from './components/taskForm/taskForm';

var socket;
class App extends React.Component {
  
  static propTypes = {
    tasks: PropTypes.array,
    addTask: PropTypes.func,
    removeTask: PropTypes.func,
    updateTasks: PropTypes.func,
  }

  componentDidMount() {
    const {addTask, removeTask, updateTasks} = this.props;
    socket = io('localhost:8000');
    socket.on('updateData', (tasks) => updateTasks(tasks));
    socket.on('addTask', (taskName) => addTask(taskName));
    socket.on('removeTask', (taskId) => removeTask(taskId));
  }

  render() {
    const {tasks, addTask, removeTask} = this.props;
    return (
      <div className="App">
        <header>
          <h1>ToDoList.app</h1>
        </header>
        <section className='tasks-section' id='tasks-section'>
          <h2>Tasks</h2>
          <List data={tasks} removeAction={removeTask}/>
          <Form actionSubmit={addTask}/>
        </section>
      </div>
    );
  }
}

export {App, socket};