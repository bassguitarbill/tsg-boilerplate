import Game from './Game.js';
import { load as loadImages } from './images.js';
import { load as loadAudio, audioCtx, bgm } from './audio.js';

let canvas: HTMLCanvasElement;

window.addEventListener('load', async () => {
  canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  sizeCanvas();
 
  await loadImages();
  await loadAudio();
  const startAudio = () => {
    const gainNode = audioCtx.createGain();
    const bufferSource = audioCtx.createBufferSource();
    bufferSource.buffer = bgm.music;
    bufferSource.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    bufferSource.start(0);
    canvas.removeEventListener('click', startAudio);
  };

  canvas.addEventListener('click', startAudio)

  const game = new Game(canvas);
  game.run(0);
});

function sizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.getContext('2d')!.imageSmoothingEnabled = false;
  // By default, pixelated images will get smoothed
  // Enable this to get those crisp, clean pixels
}

window.addEventListener('resize', sizeCanvas)
