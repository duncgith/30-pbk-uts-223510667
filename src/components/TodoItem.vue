<!-- TodoItem.vue -->
<template>
    <li class="task-item">
      <div class="checkbox-left">
        <input type="checkbox" v-model="activity.completed" @change="$emit('update:completed', !activity.completed)">
        <span :class="{ 'completed': activity.completed }">{{ activity.name }}</span>
      </div>
      <button @click="$emit('cancel')" class="delete-button">Batalkan</button>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      activity: Object,
    },
  };
  </script>
  