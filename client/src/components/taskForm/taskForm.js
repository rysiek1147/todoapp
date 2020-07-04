import React from 'react';
import {socket} from '../../App';

class taskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ''
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.addTask();
  }

  addTask() {
    const {taskName} = this.state;
    const {actionSubmit} = this.props;
    actionSubmit(taskName);
    socket.emit('addTask', taskName);
    this.setState({
      taskName: ''
    })
  }

  render() {
    const {taskName} = this.state;
    return (
      <form id='add-task-form' onSubmit={(e)=>this.submitForm(e)}>
        <input 
          type='text'
          className='text-input'
          autoComplete='off'
          placeholder='Type task description'
          id='task-name'
          value={taskName}
          onChange={(e)=>this.setState({taskName: e.currentTarget.value})}
          />
        <button className='btn' type='submit' disabled={taskName.length ? false : true}>Add task</button>
      </form>
    )
  }
}

export default taskForm;