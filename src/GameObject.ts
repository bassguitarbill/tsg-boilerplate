import Game from './game.js';
import images from './images.js';

class GameObject {
  constructor(readonly game: Game, public x: number, public y: number) {}

  tick(dt: number) {
    this.x += 0.05 * dt;
    this.y += 0.05 * dt;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(images['logo'], this.x, this.y)
  }
}

export default GameObject;
