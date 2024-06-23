// src/stores/useMainStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useMainStore = defineStore('main', {
  state: () => ({
    todos: [],
    posts: [],
    albums: [],
    photos: [],
  }),
  actions: {
    async fetchTodos() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      this.todos = response.data;
    },
    async fetchPosts() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.posts = response.data;
    },
    async fetchAlbums() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
      this.albums = response.data;
    },
    async fetchPhotos(albumId) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
      this.photos = response.data;
    },
  },
});
