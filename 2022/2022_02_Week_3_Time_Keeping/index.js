import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(60);
camera.position.setX(-60);
camera.position.setY(30);

renderer.render(scene, camera);

const texture = new THREE.TextureLoader().load("texture.png");
const textureDisplacement = new THREE.TextureLoader().load("texture_displacement.png");

 
const bottomTimer = new THREE.TextureLoader().load("bottom.png");
const points = [];
for (let i = 0; i < 10; i++) {
  points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10.2 + 5, (i - 5) * 2));
}
const geometryTimerBottom = new THREE.LatheGeometry(points, 30);
const materialTimerBottom = new THREE.MeshStandardMaterial({ color: 0xfff4ff, map: bottomTimer });
const timerBottom = new THREE.Mesh(geometryTimerBottom, materialTimerBottom);
timerBottom.position.y = 10;
scene.add(timerBottom);

const geometryTimerTop = new THREE.SphereGeometry(14.8, 300, 10000, 0, Math.PI * 2, 4.9, 3);
const materialTimerTop = new THREE.MeshStandardMaterial({
  color: 0xFFFFFFFF,
  map: texture,
  displacementMap: textureDisplacement,
  displacementScale: 0.3,
});
const timerTop = new THREE.Mesh(geometryTimerTop, materialTimerTop);
timerTop.position.y = 18.7;
scene.add(timerTop);

const planeGeometry = new THREE.PlaneGeometry(100, 100, 32, 32);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
 
plane.rotateX( - Math.PI / 2);
scene.add(plane);

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add( ambientLight);

// Helpers
const controls = new OrbitControls(camera, renderer.domElement);



var interval = window.setInterval(function(){
    timerTop.rotation.y += 0.01;
}, 100);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
