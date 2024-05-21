<!-- src/App.vue -->
<template>
  <div>
    <header class="header">
      <nav>
        <ul>
          <li @click="showSection('todos')">Todos</li>
          <li @click="showSection('posts')">Posts</li>
        </ul>
      </nav>
    </header>

    <todos v-if="currentSection === 'todos'" :activities="activities"
      @add-activity="addActivity" @cancel-activity="cancelActivity" @update-activity="updateActivity">
    </todos>

    <posts v-if="currentSection === 'posts'" :users="users" :posts="posts" @fetch-posts="fetchPosts">
    </posts>
  </div>
</template>

<script>
import Todos from './components/Todos.vue';
import Posts from './components/Posts.vue';

export default {
  components: {
    Todos,
    Posts,
  },
  data() {
    return {
      activities: [
        { name: 'monkey.D.luffy', completed: false },
        { name: 'portgas.D.ace', completed: true },
      ],
      currentSection: 'todos',
      users: [],
      posts: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    addActivity(newActivity) {
      this.activities.push({ name: newActivity, completed: false });
    },
    cancelActivity(index) {
      this.activities.splice(index, 1);
    },
    updateActivity(index, completed) {
      this.activities[index].completed = completed;
    },
    showSection(section) {
      this.currentSection = section;
    },
    async fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await response.json();
    },
    async fetchPosts(userId) {
      if (userId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        this.posts = await response.json();
      } else {
        this.posts = [];
      }
    },
  },
};
</script>

<style>
body {
  background-image: url('./assets/7886styv0yw31.webp');
  background-size:cover;
  background-repeat: no-repeat;
}

.header {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

.header ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.header li {
  margin: 0 15px;
  cursor: pointer;
}

.task-app, .post-app {
  font-family: 'Pirata One', cursive;
  margin: 200px auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
}

h1, h2 {
  color: black;
}

.task-item span {
  color: black;
}

ul {
  list-style-type: none;
  padding: 0;
}

.completed {
  text-decoration: line-through;
}

.delete-button {
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.checkbox-left {
  margin-right: 10px;
}

.add-task-form {
  margin-top: 20px;
}

.filter-button {
  margin-top: 10px;
}

.post-app select {
  margin-bottom: 20px;
  padding: 5px;
}

.post-item h3, .post-item p {
  color: black;
}
</style>
