const SFX_MANIFEST = {
  beep: 'audio/sfx/beep.ogg',
}
const BGM_MANIFEST = {
  music: 'audio/bgm/music.ogg',
}

type AudioMap = Record<string, AudioBuffer>;

const audioCtx = new AudioContext();

const sfx: AudioMap = {}
const bgm: AudioMap = {}

function loadAudio(obj: AudioMap) {
  return async function([name, path]: Array<string>): Promise<AudioBuffer> {
    const audio = await fetch(path);
    const buffer = await audio.arrayBuffer();
    obj[name] = await audioCtx.decodeAudioData(buffer);
    return obj[name];
  }
}

async function load() {
  await Promise.all(
    [
      Object.entries(SFX_MANIFEST).map(loadAudio(sfx)),
      Object.entries(BGM_MANIFEST).map(loadAudio(bgm)),
    ].flat())
  console.log(sfx);
  console.log(bgm);
}

export { load, audioCtx, sfx, bgm }
