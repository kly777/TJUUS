import { promises as fs } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const galleryPath = join(__dirname, '../public/gallery');
const outputPath = join(__dirname, '../public/gallery/albums.json');

async function generateAlbums() {
  const albums = [];

  const albumNames = await fs.readdir(galleryPath);

  for (const albumName of albumNames) {
    const albumPath = join(galleryPath, albumName);
    const stat = await fs.stat(albumPath);

    if (stat.isDirectory()) {
      const files = await fs.readdir(albumPath);
      const photos = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
      if (photos.length > 0) {
        albums.push({
          name: albumName,
          cover: photos[0],
          photos: photos
        });
      }
    }
  }

  await fs.writeFile(outputPath, JSON.stringify(albums, null, 2), 'utf-8');
  console.log('albums.json has been generated.');
}

generateAlbums().catch(err => {
  console.error('Error generating albums.json:', err);
});