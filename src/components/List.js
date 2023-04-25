import React from 'react'
import Task from './Task.js'


const List = ({tasks, handleToggle}) => {

  return (
    tasks.map(task => {
        return (
            <Task key={task.id} handleToggle={handleToggle} task={task}/>
        )
    })
  )
}

export default List