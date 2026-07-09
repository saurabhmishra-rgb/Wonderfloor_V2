
function supportsWebPEncoding() {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').startsWith('data:image/webp');
}

export async function convertToWebP(fileOrBlob, quality = 0.85) {
  if (!supportsWebPEncoding()) {
    console.warn('WebP encoding not supported in this browser, using original file');
    return fileOrBlob;
  }

  return new Promise((resolve) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(fileOrBlob);

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        canvas.toBlob(
          (blob) => {
            URL.revokeObjectURL(objectUrl);

            if (!blob) {
              console.warn('WebP conversion returned empty blob, using original file');
              resolve(fileOrBlob);
              return;
            }

            const originalName = fileOrBlob.name || 'room-image';
            const baseName = originalName.replace(/\.[^.]+$/, '');
            const webpFile = new File([blob], `${baseName}.webp`, {
              type: 'image/webp',
            });

            resolve(webpFile);
          },
          'image/webp',
          quality
        );
      } catch (err) {
        URL.revokeObjectURL(objectUrl);
        console.error('WebP conversion error, using original file:', err);
        resolve(fileOrBlob);
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      console.error('Image load failed during WebP conversion, using original file');
      resolve(fileOrBlob);
    };

    img.src = objectUrl;
  });
}
