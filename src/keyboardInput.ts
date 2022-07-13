enum Controls {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

const keyboardMap: { [key: string]: Controls} = {
  ArrowDown: Controls.DOWN,
  ArrowUp: Controls.UP,
  ArrowLeft: Controls.LEFT,
  ArrowRight: Controls.RIGHT,

  s: Controls.DOWN,
  w: Controls.UP,
  a: Controls.LEFT,
  d: Controls.RIGHT,
};

const controlMap = Object.keys(keyboardMap).reduce((acc: {[key in Controls]: Array<string>}, key: string) => {
  if (keyboardMap[key] in acc) {
    acc[keyboardMap[key]].push(key);
  } else {
    acc[keyboardMap[key]] = [key];
  }
  return acc;
}, {} as {[key in Controls]: Array<string>});

const currentlyPressedKeys: {[key: string]: boolean} = {};

window.addEventListener('keydown', ev => {
  if (ev.key in keyboardMap) {
    currentlyPressedKeys[ev.key] = true;
  }
});
window.addEventListener('keyup', ev => {
  if (ev.key in keyboardMap) {
    currentlyPressedKeys[ev.key] = false;
  }
});

function isControlPressed(control: Controls): boolean {
  return !!controlMap[control].find(keyName => currentlyPressedKeys[keyName]);
}

export { Controls, isControlPressed };
