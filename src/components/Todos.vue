<!-- src/components/Todos.vue -->
<template>
    <div class="task-app">
      <h1>wanted</h1>
      <h2>dead or alive</h2>
      <ul>
        <todo-item v-for="(activity, index) in filteredActivities" :key="index" :activity="activity"
          @cancel="cancelActivity(index)" @update:completed="updateActivity(index, $event)">
        </todo-item>
      </ul>
      <form @submit.prevent="addActivity" class="add-task-form">
        <input type="text" v-model="newActivity" placeholder="Tambah kegiatan baru">
        <button type="submit">Tambah</button>
      </form>
      <button @click="filterCompleted" class="filter-button">{{ showCompleted ? 'Tampilkan semua' : 'Tampilkan Belum Selesai' }}</button>
    </div>
  </template>
  
  <script>
  import TodoItem from './TodoItem.vue';
  
  export default {
    components: {
      TodoItem,
    },
    props: {
      activities: Array,
    },
    data() {
      return {
        newActivity: '',
        showCompleted: true,
      };
    },
    methods: {
      addActivity() {
        this.$emit('add-activity', this.newActivity);
        this.newActivity = '';
      },
      cancelActivity(index) {
        this.$emit('cancel-activity', index);
      },
      updateActivity(index, completed) {
        this.$emit('update-activity', index, completed);
      },
      filterCompleted() {
        this.showCompleted = !this.showCompleted;
      },
    },
    computed: {
      filteredActivities() {
        return this.showCompleted
          ? this.activities.filter(activity => !activity.completed)
          : this.activities;
      },
    },
  };
  </script>
  