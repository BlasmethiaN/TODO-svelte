<script lang="ts">
	import { todos } from '$lib/todo.store'
	import Todo from '$lib/todo.svelte'
	let todoName = ''

	const onSubmit = () => {
		todos.addTodo(todoName)
		todoName = ''
	}
</script>

<svelte:head>
	<title>Niggers</title>
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
		{#each $todos as todo}
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
