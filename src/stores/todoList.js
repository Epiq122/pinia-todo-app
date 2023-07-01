import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todoList', {
  // state
  state: () => ({
    todoList: [],
    id: 0,
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id, completed: false });
    },
    deleteTodo(itemId) {
      if (window.confirm('Are you sure you want to delete this todo?')) {
        this.todoList = this.todoList.filter((object) => {
          return object.id !== itemId;
        });
      }
    },
    toggleCompleted(idToFind) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
