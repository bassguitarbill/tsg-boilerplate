class Game {
  state: GameState;
  lastTimestamp: number;
  constructor() {
    this.state = GameState.RUNNING;
    this.lastTimestamp = 0;
    this.run = this.run.bind(this);
  }

  run(time: number) {
    const dt = time - this.lastTimestamp;
    this.lastTimestamp = time;
    console.log(dt);
    console.log('hello')
    window.requestAnimationFrame(this.run);
  }
}

enum GameState {
  RUNNING,
}

export default Game;
