interface GameObject {
  tick(dt: number): void;
  draw(ctx: CanvasRenderingContext2D): void;
}

export default GameObject;
