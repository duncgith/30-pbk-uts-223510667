<!-- src/components/Posts.vue -->
<template>
    <div class="post-app">
      <h1>Posts</h1>
      <select v-model="selectedUser" @change="fetchPosts">
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
      <ul>
        <li v-for="post in posts" :key="post.id" class="post-item">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      users: Array,
      posts: Array,
    },
    data() {
      return {
        selectedUser: null,
      };
    },
    methods: {
      fetchPosts() {
        this.$emit('fetch-posts', this.selectedUser);
      },
    },
  };
  </script>
  