import fs from 'node:fs';
import path from 'node:path';

const galleryPath = path.join(__dirname, '../public/gallery');
const outputPath = path.join(__dirname, '../public/gallery/albums.json');

const albums = [];

fs.readdirSync(galleryPath).forEach(albumName => {
    const albumPath = path.join(galleryPath, albumName);
    if (fs.statSync(albumPath).isDirectory()) {
        const photos = fs.readdirSync(albumPath).filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        if (photos.length > 0) {
            albums.push({
                name: albumName,
                cover: photos[0],
                photos: photos
            });
        }
    }
});

fs.writeFileSync(outputPath, JSON.stringify(albums, null, 2));
console.log('albums.json has been generated.');