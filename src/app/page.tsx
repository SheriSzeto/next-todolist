import dayjs from 'dayjs'
import { Form } from './form'
import prisma from './prisma'

const getTodos = () => {
  return prisma.todo.findMany({
    select: { id: true, name: true, time: true, created: true }
  })
}

export default async function Home() {
  const todos = await getTodos()
  console.log('todos', todos)
  return (
    <div className="p-10 mx-auto w-[500px]">
      <ul className="mb-4 px-3">
        {todos.map(item => 
          <li key={item.id}>
            <span className='text-sky-500'>{item.time}</span>
            <span className='mx-2'>执行</span>
            <span className='text-orange-500'>{item.name}</span>
            <span className='mx-2'>创建时间：</span>
            <span>{dayjs(item.created).format('YYYY-MM-DD HH:mm')}</span>
          </li>
        )}
      </ul>
      <Form />
    </div>
  )
}