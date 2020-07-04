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
        {data && data.map(({id, name}) => 
          <li className='task' key={id}>
            {name}
            <button className='btn btn--red' onClick={() => this.handleRemoveTask(id)}>Remove</button>
          </li>
        )}
      </ul>
      </>
    );
  }
}

export default List;