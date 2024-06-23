<template>
    <div class="album-app">
      <h1>Albums</h1>
      <div v-if="albums.length === 0">No albums available</div>
      <div v-else>
        <div v-for="album in albums" :key="album.id" class="album-item" @click="fetchPhotos(album.id)">
          <h3>{{ album.title }}</h3>
          <div v-if="album.id === selectedAlbumId">
            <div v-if="loadingPhotos">Loading photos...</div>
            <div v-else>
              <div v-for="photo in photos" :key="photo.id" class="photo-item">
                <img :src="photo.thumbnailUrl" alt="Photo">
                <p>{{ photo.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      albums: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        selectedAlbumId: null,
        photos: [],
        loadingPhotos: false
      };
    },
    methods: {
      fetchPhotos(albumId) {
        // Set loading state
        this.loadingPhotos = true;
        this.selectedAlbumId = albumId;
        
        // Fetch photos for the selected album
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
          .then(response => response.json())
          .then(data => {
            this.photos = data;
            this.loadingPhotos = false;
          })
          .catch(error => {
            console.error('Error fetching photos:', error);
            this.loadingPhotos = false;
          });
      }
    },
    created() {
      // Optionally, you may emit an event to fetch albums when component is created
      // this.fetchAlbums();
    }
  };
  </script>
  
  <style scoped>
  .album-app {
    font-family: 'Pirata One', cursive;
    margin: 200px auto;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 2px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
  }
  
  .album-item {
    cursor: pointer; /* Add pointer cursor to indicate clickable */
    margin-bottom: 10px;
  }
  
  .album-item h3 {
    color: black;
  }
  
  .photo-item {
    margin-top: 10px;
  }
  
  .photo-item img {
    max-width: 100px;
    height: auto;
    margin-right: 10px;
  }
  </style>
  