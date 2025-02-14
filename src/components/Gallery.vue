<template>
    <div class="gallery">
        <h1>相册</h1>
        <div class="albums">
            <div v-for="album in albums" :key="album.name"
                class="album bg-white dark:bg-dark-700 dark:border-b border-1 border-solid" @click="viewAlbum(album)"
                :class="{ 'border-blue': selectedAlbum?.name === album.name, 'border-white dark:border-dark800': selectedAlbum?.name !== album.name }">
                <img :src="`gallery/${album.name}/${album.cover}`" alt="">
                <h2>{{ album.name }}</h2>
            </div>
        </div>
        <div v-if="selectedAlbum" class="photos">
            <h2>{{ selectedAlbum.name }}</h2>
            <div class="photo-grid">
                <div v-for="photo in selectedAlbum.photos" :key="photo" class="photo" @click="viewPhoto(photo)">
                    <img :src="`gallery/${selectedAlbum.name}/${photo}`" alt=""
                        :class="{ 'selected-photo': selectedPicture === photo }">
                    <div class="photo-info text-center">
                        {{ photo.split('.')[0] }}
                    </div>
                </div>
            </div>
        </div>
        <div v-if="selectedPicture" class="photo-viewer w-100% flex justify-center mt">
            <img :src="`gallery/${selectedAlbum?.name}/${selectedPicture}`" alt="" class="w-90%" />
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