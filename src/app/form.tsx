'use client'

import { useCallback } from "react"
import { addTodo } from "./data"

export function Form() {
  const submit = useCallback(async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    await addTodo({
      name: formData.get('name') as string,
      time: formData.get('time') as string
    })
    location.reload()
  }, [])

  return (
    <form className="flex items-center space-x-3" onSubmit={submit}>
      <input name="name" className="w-48 border rounded px-2" placeholder="请输入任务名称" />
      <input name="time" className="w-48 border rounded px-2" placeholder="请输入执行时间" />
      <button type="submit" className="border rounded px-2 min-w-16">添加</button>
    </form>
  )
}