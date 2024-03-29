'use server'

import prisma from "./prisma"

export const addTodo = async (data: {name: string, time: string}) => {
  await prisma.todo.create({
    data: data
  })
}

export const deleteTodo = async (id: number) => {
  await prisma.todo.delete({
    where: {
      id
    }
  })
}

export const editTodo = async (data: {id: number, name: string, time: string}) => {
  await prisma.todo.update({
    where: {
      id: data.id
    },
    data: data
  })
}