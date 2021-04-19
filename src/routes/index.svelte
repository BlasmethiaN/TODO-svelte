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

<main class="💪">
  <section class="💪">
    <form class="form" on:submit|preventDefault={onSubmit}>
      <input
        type="text"
        class="inputStyle"
        placeholder="give me the bitch€s"
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
  input {
    width: clamp(100px, 200%, 200px);
    background-color: rgb(44, 44, 44);
    color: white;
    border: 0.2rem solid black;
    border-radius: 0.5rem;
    outline: none;
    padding: 5px;
    font-size: 1rem;

    &:hover {
      border: 0.2rem solid hsl(310, 60%, 40%);
    }

    &:focus {
      border: 0.2rem solid hsl(310, 60%, 40%);
    }
  }

  .💪 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }
</style>
