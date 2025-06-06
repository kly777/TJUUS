<template>
  <div class="gallery p-8">
    <!-- 标题 -->
    <h1 class="text-3xl font-bold my-8 text-left">相册</h1>

    <!-- 相册列表 -->
    <div class="albums grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="album in albums" :key="album.name"
        class="album bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer"
        :class="{
          'border-blue-500 dark:border-blue-400': selectedAlbum?.name === album.name,
          'border-zinc-200 dark:border-zinc-700': selectedAlbum?.name !== album.name
        }" @click="viewAlbum(album)">
        <img :src="`gallery/${album.name}/${album.cover}`" alt="" class="w-full h-40 object-cover rounded-t-lg" />
        <h2 class="text-xl font-semibold p-4 text-center">{{ album.name }}</h2>
      </div>
    </div>

    <!-- 照片展示 -->
    <div v-if="selectedAlbum" class="photos mt-12">
      <h2 class="text-2xl font-bold mb-6">{{ selectedAlbum.name }}</h2>

      <div class="photo-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="photo in selectedAlbum.photos" :key="photo" class="photo cursor-pointer" @click="viewPhoto(photo)">
          <img :src="`gallery/${selectedAlbum.name}/${photo}`" alt=""
            class="w-full h-auto object-cover rounded-lg transition-transform hover:scale-105"
            :class="{ 'ring-4 ring-blue-500 dark:ring-blue-400': selectedPicture === photo }" />
          <div class="photo-info mt-2 text-center text-sm text-zinc-600 dark:text-zinc-300">
            {{ photo.split('.')[0] }}
          </div>
        </div>
      </div>
    </div>

    <!-- 大图查看器 -->
    <div v-if="selectedPicture" class="photo-viewer w-full flex justify-center mt-8">
      <img :src="`gallery/${selectedAlbum?.name}/${selectedPicture}`" alt=""
        class="w-4/5 max-w-4xl h-auto rounded-lg shadow-lg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Album {
  name: string
  cover: string
  photos: string[]
}

const albums = ref<Album[]>([])
const selectedAlbum = ref<Album | null>(null)
const selectedPicture = ref<string | null>(null)

onMounted(async () => {
  const response = await fetch('gallery/albums.json')
  const data = await response.json()
  albums.value = data
})

function viewAlbum(album: Album) {
  selectedAlbum.value = album
}

function viewPhoto(photo: string) {
  selectedPicture.value = photo
}
</script>

<style scoped>
.gallery {
  padding: 2rem;
}

.albums {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.album {
  cursor: pointer;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.album:hover {
  transform: scale(1.02);
}

.album img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
}

.album h2 {
  margin-top: 0.5rem;
  font-size: 1.1rem;
  text-align: center;
}

.photos {
  margin-top: 2rem;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.photo img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
}

.selected-photo {
  border: 2px solid #5ba4a9;
  border-radius: 4px;
  /* 绿色边框 */
}
</style>