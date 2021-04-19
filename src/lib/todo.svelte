<script lang="ts">
  import type { Todo } from './todo.store'
  import { todos } from './todo.store'
  export let todo: Todo

  const toggleCompleted = () => {
    todos.toggleCompleted(todo.id)
  }

  const deleteTodo = () => {
    todos.deleteTodo(todo.id)
  }
</script>

<div class="💪👉">
  <div class="todo">
    <div>
      {todo.name}
    </div>
    <span on:click={toggleCompleted} class="completed">{todo.completed ? '✔️' : '❌'}</span>
  </div>
  <span on:click={deleteTodo} class="☠️"> delete </span>
</div>

<style lang="scss">
  .💪👉 {
    display: flex;
    flex-direction: row;
  }

  .☠️ {
    margin-left: 10px;
    color: red;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .todo {
    border: white 1px solid;
    background-color: rgb(31, 31, 31);
    color: white;
    padding: 5px;
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    min-width: 150px;
    margin-left: 35px;
  }

  .completed {
    cursor: pointer;
    user-select: none;
  }
</style>
