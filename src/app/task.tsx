'use client'

import dayjs from 'dayjs'
import { deleteTodo, editTodo } from './data'
import { useState } from 'react'

export function Task({ item }) {
  const [isEdit, setIsEdit] = useState(false)
  const [currentTask, setCurrentTask] = useState(item)

  const handleDel = async (id) => {
    await deleteTodo(id)
    location.reload()
  }

  const handleUpdate = async (data) => {
    await editTodo(data)
    location.reload()
  }

  return (
    <li key={currentTask.id} className="mb-4">
      {
        isEdit ? (
          <>
            <input value={currentTask.name} onInput={e => setCurrentTask({...currentTask, name: e.target.value})}  />
            <input value={currentTask.time} onInput={e => setCurrentTask({...currentTask, time: e.target.value})} />
            <button className='border rounded mx-2 min-w-16' onClick={() => handleUpdate(currentTask)}>更新</button>
          </>

        ) : (
          <>
            <span className='text-sky-500'>{currentTask.time}</span>
            <span className='mx-2'>执行</span>
            <span className='text-orange-500'>{currentTask.name}</span>
            <span className='mx-2'>创建时间：</span>
            <span>{dayjs(currentTask.created).format('YYYY-MM-DD HH:mm')}</span>
            <button className='border rounded mx-2 min-w-16' onClick={() => setIsEdit(true)}>编辑</button>
            <button className='border rounded mx-2 min-w-16' onClick={() => handleDel(currentTask.id)}>删除</button>

          </>  
        )
      }

    </li>
  )
}