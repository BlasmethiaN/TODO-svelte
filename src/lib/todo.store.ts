import { writable } from 'svelte/store'
import { v4 as uuid } from 'uuid'

export type Todo = {
	id: string
	name: string
	completed: boolean
}

const createTodoStore = () => {
	const { subscribe, update } = writable<Todo[]>([])
	return {
		subscribe,
		addTodo: (name: string) =>
			update((todos) => [...todos, { name, completed: false, id: uuid() }]),
		toggleCompleted: (id: string) =>
			update((todos) =>
				todos.map((t) => {
					if (t.id == id) {
						return { ...t, completed: !t.completed }
					} else return t
				})
			)
	}
}

export const todos = createTodoStore()
