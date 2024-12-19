import { fetchMapData } from "../utils.js";

export default async function world(k) {
  colorizeBackground(k, 76, 170, 255);
  const mapData = await fetchMapData("./assets/maps/world.json");

  const map = k.add([k.pos(0, 0)]);

  const entities = {
    player: null,
    slimes: [],
  };

  const layers = mapData.layers;
  for (const layer of layers) {
    if (layer.name === "Boundaries") {
      //TODO
      continue;
    }

    if (layer.name === "Spawnpoints") {
      //TODO
      continue;
    }

    //desenha todos os tiles
  }
}
