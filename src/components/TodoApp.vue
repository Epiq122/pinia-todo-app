<script setup>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';
</script>

<template>
  <div class="todo-app">
    <h1>Todo List</h1>
    <todo-form />
    <todo-list />
  </div>
</template>

<style scoped>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 50vw;
  background-color: dodgerblue;
  margin: 0 auto;
  border-radius: 5px;
}
</style>
