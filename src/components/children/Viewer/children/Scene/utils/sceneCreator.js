import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from "three";

export const sceneCreator = elem => {
  const sceneWidth = 400;
  const sceneHeight = 400;

  var scene = new Scene();
  var camera = new PerspectiveCamera(
    75,
    sceneWidth / sceneHeight,
    0.1,
    1000
  );

  var renderer = new WebGLRenderer();
  renderer.setSize(sceneWidth, sceneHeight);
  elem.appendChild(renderer.domElement);

  var geometry = new BoxGeometry(1, 1, 1);
  var material = new MeshBasicMaterial({ color: 0x00ff00 });
  var cube = new Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  var animate = function() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();
};
