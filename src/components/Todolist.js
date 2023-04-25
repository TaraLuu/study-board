import React, {useState, useRef, useEffect} from 'react'
import List from './List.js'
import {v4 as uuidv4} from 'uuid'


const LOCAL_STORAGE_KEY = 'Todolist.tasks'

const Todolist = () => {
  const [tasks, setTask] = useState([])
  const descriptionRef = useRef()

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTasks) setTask(storedTasks)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  },[tasks])

  function handleAdd(e) {
    const description = descriptionRef.current.value
    if (description === '') return
    setTask(previousState => {
      return [...previousState,{id:uuidv4(), description:description, complete: false}]
    })
    descriptionRef.current.value = null
  }

  function handleDelete(id) {
    const newTasks = newTasks.filter(task => task.id !== id)
    setTask(newTasks)
  }

  function handleToggle(id) {
    const newTasks = [...tasks]
    const task = newTasks.find(task => task.id === id)
    task.complete = !task.complete
    setTask(newTasks)
  }

  return (
    <>
      <List tasks={tasks} handleToggle={handleToggle} />
      <input ref={descriptionRef} type="text" />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default Todolist