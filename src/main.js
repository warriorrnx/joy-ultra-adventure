//isso importa a const do kaboom do arquivo kabbomContext.js 
import k from "./kaboomContext.js"
import world from ".scene/world.js";


const scenes = {
    world,
}

for (const sceneName in scenes) {
    k.scene(sceneName, () => scenes[sceneName](k));        
}

k.go("world")