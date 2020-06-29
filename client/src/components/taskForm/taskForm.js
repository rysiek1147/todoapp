import React from 'react';

const taskForm = () => {
  return (
    <form id='add-task-form'>
      <input type='text' className='text-input' autocomplete='off' placeholder='Type task description' id='task-name'/>
      <button className='btn' type='submit'>Add task</button>
    </form>
  )
}

export default taskForm;