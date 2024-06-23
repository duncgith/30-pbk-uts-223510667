<template>
  <div class="post-app">
    <h1>Posts</h1>
    <select @change="fetchPosts($event.target.value)">
      <option value="">Select a user</option>
      <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
    </select>
    <div v-if="posts.length === 0">No posts available</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id" class="post-item">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: Array,
    posts: Array,
  },
  methods: {
    fetchPosts(userId) {
      this.$emit('fetch-posts', userId);
    },
  },
};
</script>

<style scoped>
.post-app {
  /* Styles as defined in your main App.vue */
}
</style>
