import React from 'react';
import {socket} from '../../App';

class List extends React.Component {

  handleRemoveTask(id) {
    const {removeAction} = this.props;
    removeAction(id);
    socket.emit('removeTask', id);
  }

  render() {
    const {data} = this.props;
    return (
      <>
      <ul className='tasks-section__list' id='tasks-list'>
        {data && data.map((item, index) => 
          <li className='task' key={index}>
            {item}
            <button className='btn btn--red' onClick={() => this.handleRemoveTask(index)}>Remove</button>
          </li>
        )}
      </ul>
      </>
    );
  }
}

export default List;