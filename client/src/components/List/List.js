import React from 'react';

class List extends React.Component {
  render() {
    return (
      <ul className='tasks-section__list' id='tasks-list'>
        <li className='task'>Shopping <button className='btn btn--red'>Remove</button></li>
      </ul>
    );
  }
}

export default List;