import React from 'react';

function Task(props) {
  const { name, completed } = props;

  return (
    <li>
      {name}{' '}
      {completed ? (
        <span style={{ color: 'green' }}>✓</span>
      ) : (
        <span style={{ color: 'red' }}>✗</span>
      )}
    </li>
  );
}

export default Task;
