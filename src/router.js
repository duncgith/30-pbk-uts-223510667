// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import TodosView from './components/Todos.vue';
import PostsView from './components/Posts.vue';
import AlbumsView from './components/AlbumList.vue';
import AlbumPhotosView from './components/AlbumPhotos.vue';

const routes = [
  { path: '/todos', components: TodosView },
  { path: '/posts', components: PostsView },
  { path: '/albums', components: AlbumsView },
  { path: '/albums/:id', components: AlbumPhotosView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
