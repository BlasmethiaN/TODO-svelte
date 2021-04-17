<script lang="ts">
	import type { Todo } from './todo.store'
	import { todos } from './todo.store'
	export let todo: Todo

	const toggleCompleted = () => {
		todos.toggleCompleted(todo.id)
	}
</script>

<div class="todo">
	<div>
		{todo.name}
	</div>
	<span on:click={toggleCompleted} class="completed">{todo.completed ? '✔️' : '❌'}</span>
</div>

<style lang="scss">
	.todo {
		border: white 1px solid;
		background-color: rgb(31, 31, 31);
		color: white;
		padding: 5px;
		border-radius: 0.5rem;
		display: flex;
		justify-content: space-between;
	}

	.completed {
		cursor: pointer;
		user-select: none;
	}
</style>
