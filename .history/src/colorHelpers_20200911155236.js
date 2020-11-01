import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900,];

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  }
  for(let level of levels) {
    newPalette.colors[level] = [];
  }
  for(let color of starterPalette.colors) {
    let scale = 
  }
}

function getRange(hexColor) {
  const end = "#fff";
  return [
    chrome(hexColor).darken.hex(),
    hexColor, 
    end
  ]
}