const IMAGE_MANIFEST = {
  logo: 'images/logo.png',
  background: 'images/background/desert.jpg',
}

const images: Record<string, HTMLImageElement> = {}

async function loadImage([name, imagePath]: Array<string>): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    images[name] = img;
    img.src = imagePath;
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', reject);
  });
}

async function load() {
  await Promise.all(Object.entries(IMAGE_MANIFEST).map(loadImage)).catch(console.error);
}

export default images
export { load }
