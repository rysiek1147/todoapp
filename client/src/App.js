import React from 'react';
import List from './components/List/List';
import Form from './components/taskForm/taskForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1>ToDoList.app</h1>
      </header>
      <section className='taska-section' id='tasks-section'>
        <h2>Taska</h2>
        <List/>
        <Form/>
      </section>
    </div>
  );
}

export default App;
