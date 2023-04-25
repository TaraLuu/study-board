import React from 'react'

const Task = ({task, handleToggle}) => {
    function handleClick() {
        handleToggle(task.id)
      }
  return (
    <>
        <input type="checkbox" checked={todo.complete} onChange={handleClick} />
        {todo.name}
    </>
  )
}

export default Task