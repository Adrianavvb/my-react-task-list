import React from 'react';
import Task from './Task';

function TaskList() {
  const tasks = [
    { name: 'Task 1', completed: false },
    { name: 'Task 2', completed: true },
    { name: 'Task 3', completed: false },
    { name: 'Task 4', completed: false },
    { name: 'Task 5', completed: true },
     { name: 'Task 6', completed: true },
    { name: 'Task 7', completed: true }
  ];

  return (
    <ul>
      {tasks.map((task, index) => (
        <Task key={index} name={task.name} completed={task.completed} />
      ))}
    </ul>
  );
}

export default TaskList;
