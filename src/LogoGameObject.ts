import Game from './game.js';
import GameObject from './GameObject.js';
import images from './images.js';
import { isControlPressed, Controls } from './keyboardInput.js';

class LogoGameObject implements GameObject{
  drifting = true;
  img = images['logo'];
  constructor(readonly game: Game, public x: number, public y: number) {}

  tick(dt: number) {
    if (isControlPressed(Controls.UP)) {
      this.y -= 0.5 * dt;
      this.drifting = false;
    }

    if (isControlPressed(Controls.DOWN)) {
      this.y += 0.5 * dt;
      this.drifting = false;
    }

    if (isControlPressed(Controls.LEFT)) {
      this.x -= 0.5 * dt;
      this.drifting = false;
    }

    if (isControlPressed(Controls.RIGHT)) {
      this.x += 0.5 * dt;
      this.drifting = false;
    }

    if (this.drifting) {
      this.x += 0.05 * dt;
      this.y += 0.05 * dt;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.img, this.x, this.y)
  }
}

export default LogoGameObject;
