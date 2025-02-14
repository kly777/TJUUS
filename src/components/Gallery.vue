<template>
    <div class="gallery">
        <h1>相册</h1>
        <div class="albums">
            <div v-for="album in albums" :key="album.name" class="album bg-white dark:bg-dark-700 dark:border-b border-white" @click="viewAlbum(album)">
                <img :src="`gallery/${album.name}/${album.cover}`" alt="">
                <h2>{{ album.name }}</h2>
            </div>
        </div>
        <div v-if="selectedAlbum" class="photos">
            <h2>{{ selectedAlbum.name }}</h2>
            <div class="photo-grid">
                <div v-for="photo in selectedAlbum.photos" :key="photo" class="photo">
                    <img :src="`gallery/${selectedAlbum.name}/${photo}`" alt="">
                    <div class="photo-info text-center">
                        {{ photo.split('.')[0] }}
                    </div>
                </div>
            </div>
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

onMounted(async () => {
    const response = await fetch('gallery/albums.json')
    const data = await response.json()
    albums.value = data
})

function viewAlbum(album: Album) {
    selectedAlbum.value = album
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
</style>