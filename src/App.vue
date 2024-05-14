<template>
  <div>
    <header class="header">
      <nav>
        <ul>
          <li @click="showSection('todos')">Todos</li>
          <li @click="showSection('posts')">Post</li>
        </ul>
      </nav>
    </header>

    <div v-if="currentSection === 'todos'" class="task-app">
      <h1>wanted</h1>
      <h2>dead or alive</h2>
      <ul>
        <li v-for="(activity, index) in filteredActivities" :key="index" class="task-item">
          <div class="checkbox-left">
            <input type="checkbox" v-model="activity.completed" @change="checkActivity(index)">
            <span :class="{ 'completed': activity.completed }">{{ activity.name }}</span>
          </div>
          <button @click="cancelActivity(index)" class="delete-button">Batalkan</button>
        </li>
      </ul>
      <form @submit.prevent="addActivity" class="add-task-form">
        <input type="text" v-model="newActivity" placeholder="Tambah kegiatan baru">
        <button type="submit">Tambah</button>
      </form>
      <button @click="filterCompleted" class="filter-button">{{ showCompleted ? 'Tampilkan semua' : 'Tampilkan Belum Selesai' }}</button>
    </div>

    <div v-if="currentSection === 'posts'" class="post-app">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        { name: 'monkey.D.luffy', completed: false },
        { name: 'portgas.D.ace', completed: true },
      ],
      newActivity: '',
      showCompleted: true,
      currentSection: 'todos',
      users: [],
      selectedUser: null,
      posts: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    addActivity() {
      this.activities.push({ name: this.newActivity, completed: false });
      this.newActivity = '';
    },
    cancelActivity(index) {
      this.activities.splice(index, 1);
    },
    checkActivity(index) {
      if (this.activities[index].completed) {
        this.activities[index].name = `-${this.activities[index].name}-`;
      } else {
        this.activities[index].name = this.activities[index].name.replace(/-/g, '');
      }
    },
    filterCompleted() {
      this.showCompleted = !this.showCompleted;
    },
    showSection(section) {
      this.currentSection = section;
    },
    async fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await response.json();
    },
    async fetchPosts() {
      if (this.selectedUser) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUser}`);
        this.posts = await response.json();
      } else {
        this.posts = [];
      }
    },
  },
  computed: {
    filteredActivities() {
      if (this.showCompleted) {
        return this.activities.filter(activity => !activity.completed);
      } else {
        return this.activities;
      }
    },
  },
};
</script>

<style>
body {
  background-image: url('./assets/7886styv0yw31.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
