<template>
  <div class="task-app">
    <h1>Todos</h1>
    <ul>
      <li v-for="(activity, index) in activities" :key="index" class="task-item">
        <span :class="{ completed: activity.completed }">{{ activity.name }}</span>
        <input type="checkbox" v-model="activity.completed" @change="updateActivity(index, activity.completed)">
        <button class="delete-button" @click="cancelActivity(index)">Delete</button>
      </li>
    </ul>
    <form @submit.prevent="addNewActivity" class="add-task-form">
      <input type="text" v-model="newActivity" placeholder="Add a new activity">
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    activities: Array,
  },
  data() {
    return {
      newActivity: '',
    };
  },
  methods: {
    addNewActivity() {
      if (this.newActivity.trim()) {
        this.$emit('add-activity', this.newActivity);
        this.newActivity = '';
      }
    },
    cancelActivity(index) {
      this.$emit('cancel-activity', index);
    },
    updateActivity(index, completed) {
      this.$emit('update-activity', index, completed);
    },
  },
};
</script>

<style scoped>
.task-app {
  /* Styles as defined in your main App.vue */
}
</style>
