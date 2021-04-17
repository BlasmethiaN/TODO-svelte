<script lang="ts">
	import { todos } from '$lib/todo.store'
	import Todo from '$lib/todo.svelte'
	let todoName = ''
	let notCompletedOnly = false

	const onSubmit = () => {
		if (todoName === '') return
		todos.addTodo(todoName)
		todoName = ''
	}

	$: filteredTodos = notCompletedOnly ? $todos.filter((t) => !t.completed) : $todos
</script>

<svelte:head>
	<title>Ni66ers</title>
</svelte:head>

<main>
	<section>
		<form class="form" on:submit|preventDefault={onSubmit}>
			<input
				type="text"
				class="inputStyle"
				placeholder="give me the bitches"
				bind:value={todoName}
			/>
		</form>

		<div>
			<label for="completedOnly">Only NOT completed</label>
			<input id="completedOnly" type="checkbox" bind:checked={notCompletedOnly} />
		</div>

		{#each filteredTodos as todo}
			<Todo {todo} />
		{/each}
	</section>
</main>

<style lang="scss">
	main {
		display: flex;
		justify-content: center;
	}

	section {
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 20px;
	}
</style>
