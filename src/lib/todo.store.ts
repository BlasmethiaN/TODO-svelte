import { writable } from 'svelte/store'
import { v4 as uuid } from 'uuid'

export type Todo = {
  id: string
  name: string
  completed: boolean
}

//! this shit in react
// const createTodoStore = () => {
// 	const { subscribe, update } = writable<Todo[]>([])
// 	return {
// 		subscribe,
// 		addTodo: (name: string) =>
// 			update((todos) => [...todos, { name, completed: false, id: uuid() }]),
// 		toggleCompleted: (id: string) =>
// 			update((todos) =>
// 				todos.map((t) => {
// 					if (t.id == id) {
// 						return { ...t, completed: !t.completed }
// 					} else return t
// 				})
// 			)
// 	}
// }

//* svelte clever boi
const createTodoStore = () => {
  const { subscribe, update } = writable<Todo[]>([])
  return {
    subscribe,
    addTodo: (name: string) =>
      update((todos) => {
        todos.push({ name, completed: false, id: uuid() })
        return todos
      }),
    toggleCompleted: (id: string) =>
      update((todos) => {
        const todo = todos.find((t) => t.id == id)
        todo.completed = !todo.completed
        return todos
      }),
    deleteTodo: (id: string) =>
      update((todos) => {
        todos.splice(
          todos.findIndex((t) => t.id == id),
          1
        )
        return todos
      })
  }
}

//! too much 200
// const createTodoStore = () =>
// 	createImmutableStore([] as Todo[], ({ update }) => ({
// 		addTodo: (name: string) =>
// 			update((todos) => {
// 				todos.push({ name, completed: false, id: uuid() })
// 			}),
// 		toggleCompleted: (id: string) =>
// 			update((todos) => {
// 				const todo = todos.find((t) => t.id == id)
// 				todo.completed = !todo.completed
// 			})
// 	}))

export const todos = createTodoStore()
