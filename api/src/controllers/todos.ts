import { RequestHandler } from 'express'
import { Todo } from '@models/todo'

// メモリ上の変数
const TODOS: Todo[] = []

// get
export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS })
}

// post
export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text
  const newTodo = new Todo(Math.random().toString(), text)
  TODOS.push(newTodo)
  res
    .status(201)
    .json({ message: 'TODOを作成しました。', createdTodo: newTodo })
}

// patch
export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id
  const updateText = (req.body as { text: string }).text
  const index = TODOS.findIndex((todo) => todo.id === todoId)

  if (index < 0) {
    throw new Error('対象のTODOが見つかりませんでした。')
  }
  TODOS[index] = new Todo(todoId, updateText)
  res.json({ message: '更新しました。', updatedTodo: TODOS[index] })
}

// delete
export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id
  const index = TODOS.findIndex((todo) => todo.id === todoId)

  if (index < 0) {
    throw new Error('対象のTODOが見つかりませんでした。')
  }
  const deletedTodo = TODOS.splice(index, 1)
  res.json({ message: '削除しました。', deletedTodo: deletedTodo })
}
