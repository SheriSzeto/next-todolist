
import { Form } from './form'
import { Task } from './task'
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
    <div className="p-10 mx-auto w-[600px]">
      <div className='mb-4'>
        <Form />
      </div>
      <ul className="mb-4 px-3">
        {todos.map(item => 
          <Task item={item} />
        )}

      </ul>
    </div>
  )
}