<template>
  <div class="task-app">
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
    };
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

.task-app {
  font-family: 'Pirata One', cursive; /* Menggunakan font Pirata One */
  margin: 200px;
  border: 10px;
  ;
}

.task-app {
  font-family: 'Pirata One', cursive;
  margin: 200px;
  border: 10px;
}

.task-app {
  font-family: 'Pirata One', cursive;
  margin: 200px;
  border: 10px;
}

h1, h2 {
  color: black; /* Warna teks hitam */
}

.task-item span {
  color: black; /* Warna teks hitam untuk span di dalam task-item */
}

/* Tambahan gaya lainnya tetap di sini */

h1, h2 {
  color: black; /* Warna teks hitam */
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
  color: rgb(7, 7, 7);
  border: none;
  padding: 10px 10px;
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

</style>
