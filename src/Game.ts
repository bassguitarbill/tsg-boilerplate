import GameObject from './GameObject.js';
import LogoGameObject from './LogoGameObject.js';
import images from './images.js';

class Game {
  state: GameState;
  lastTimestamp: number;
  dt: number = 0;

  gameObjects: Array<GameObject> = [];

  constructor(readonly canvas: HTMLCanvasElement) {
    this.state = GameState.RUNNING;
    this.lastTimestamp = 0;
    this.run = this.run.bind(this);
    this.gameObjects.push(new LogoGameObject(this, 0, 0));
  }

  run(time: number) {
    const dt = time - this.lastTimestamp;
    this.dt = dt;
    this.lastTimestamp = time;

    const ctx = this.canvas.getContext('2d')!;
    for (let i = 0; i < this.gameObjects.length; i++) {
      this.gameObjects[i].tick(dt);
    }

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.drawImage(images('background/desert'), 0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.gameObjects.length; i++) {
      this.gameObjects[i].draw(ctx);
    }

    window.requestAnimationFrame(this.run);
  }
}

enum GameState {
  RUNNING,
}

export default Game;
