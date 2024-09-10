import "./style.css";
import scene from "./src/basic/Scene.js";
import camera from "./src/basic/Camera.js";
import renderer from "./src/basic/Renderer.js";
import cube from "./src/basic/shapes/Cube.js";
import light from "./src/basic/Light.js";
import resize from "./src/basic/Resize.js";
import plane from "./src/basic/shapes/Plane.js";
import loopMachine from "./src/basic/LoopMachine.js";

scene.add(cube, light, plane);

camera.position.set(2, 2, 2);

camera.lookAt(cube.position);

loopMachine.addCallback(() => {
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
});

resize.start(renderer);
loopMachine.start();
//renderer.render(scene, camera);

//console.log(scene, camera, renderer, cube);

document.querySelector("#app").innerHTML = `
  <div>
    
  </div>
`;
