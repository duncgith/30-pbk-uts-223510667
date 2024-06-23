<template>
    <div class="album-list">
      <h1>Albums</h1>
      <ul>
        <li v-for="album in albums" :key="album.id" @click="showPhotos(album.id)">
          {{ album.title }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AlbumList',
    props: {
      albums: Array,
    },
    methods: {
      showPhotos(albumId) {
        this.$emit('fetch-photos', albumId);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  .album-list ul {
    list-style-type: none;
    padding: 0;
  }
  
  .album-list li {
    cursor: pointer;
    margin-bottom: 10px;
    color: blue;
  }
  
  .album-list li:hover {
    text-decoration: underline;
  }
  </style>
  