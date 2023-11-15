import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import TaskList from './TaskList';

function App() {
  return (
    <div>
      <Header />
      <TaskList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
