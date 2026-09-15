import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export async function downloadImagesAsZip(selectedImages, zipName = 'LOWEND_FOTOS.zip') {
  const zip = new JSZip();
  const folder = zip.folder("LOWEND_DESERT");

  for (let i = 0; i < selectedImages.length; i++) {
    const img = selectedImages[i];
    try {
      const response = await fetch(img.url);
      const blob = await response.blob();
      const fileName = `LOWEND_FOTO_${i + 1}.jpg`;
      folder.file(fileName, blob);
    } catch (error) {
      console.error(`Erro ao baixar a imagem ${img.id}:`, error);
    }
  }

  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, zipName);
}