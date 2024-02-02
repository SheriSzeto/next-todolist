'use client'

import dayjs from 'dayjs'
import { deleteTodo } from './data'

export function Task({ item }) {
  const handleDel = async (id) => {
    await deleteTodo(id)
    location.reload()
  }

  return (
    <li key={item.id} className="mb-4">
      <span className='text-sky-500'>{item.time}</span>
      <span className='mx-2'>执行</span>
      <span className='text-orange-500'>{item.name}</span>
      <span className='mx-2'>创建时间：</span>
      <span>{dayjs(item.created).format('YYYY-MM-DD HH:mm')}</span>
      <button className='border rounded mx-2 min-w-16' onClick={() => handleDel(item.id)}>删除</button>
    </li>
  )
}