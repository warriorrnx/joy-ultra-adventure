import { fetchMapData } from "../utils.js";

export default async function world(k) {
  const mapData = await fetchMapData("./assets/maps/world.json");
}
