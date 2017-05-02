/**
 * Created by lichb on 2017/4/10.
 */
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Texture,
  Vector3,
  SpriteMaterial,
  Object3D,
  Sprite,
  Math as Math2
} from 'three';
const SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;     // 圆点间隔、x轴方向个数、y轴方向个数
const waveStep = 0.04;              // 波动速度
const rotateStep = 0.02;            // 旋转速度
const CAMERAMOVERADIUS = 1000;                          // 相机旋转半径
const cameraDefPos = new Vector3(0, 180, CAMERAMOVERADIUS);       // 相机初始位置
const focusDefPos = new Vector3(0, 700, 0);           // 相机注视点位置

let container;     // canvas容器
let scene, camera, renderer;
let particles, particle, count = 0;
let theta = 0;
let focusObject;

// 生成贴图
function generateTexture() {
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');
  canvas.width = 128;
  canvas.height = 128;
  drawCircle(context, {x: 64, y: 64, r: 60, c: '#fff'});
  return canvas;
}

// 画圆
function drawCircle(context, arg) {
  let PI2 = Math.PI * 2;
  arg = arg || {x: 0, y: 0, r: 0.5, c: '#fff'};
  context.fillStyle = arg.c;
  context.beginPath();
  context.arc(arg.x, arg.y, arg.r, 0, PI2, true);
  context.fill();
}

// 生成材质
function getMaterial() {
  let texture = new Texture(generateTexture());
  texture.needsUpdate = true; // important!
  let material = new SpriteMaterial({color: 0xffffff, map: texture});
  return material;
}

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

function drawWaves() {
  camera = new PerspectiveCamera(100, container.clientWidth / container.clientHeight, 1, 10000);
  camera.position.x = cameraDefPos.x;
  camera.position.y = cameraDefPos.y;
  camera.position.z = cameraDefPos.z;

  scene = new Scene();

  focusObject = new Object3D();
  focusObject.position.x = focusDefPos.x;
  focusObject.position.y = focusDefPos.y;
  focusObject.position.z = focusDefPos.z;
  scene.add(focusObject);

  particles = [];
  let material = getMaterial();
  let i = 0;
  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      particle = particles[i++] = new Sprite(material);
      particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION - 1) / 2);
      particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION - 1) / 2);
      scene.add(particle);
    }
  }

  renderer = new WebGLRenderer({alpha: true});
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);
  window.addEventListener('resize', onWindowResize, false);
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  let i = 0;
  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      particle = particles[i++];
      particle.position.y = (Math.sin((ix + count) * 0.3) * 26) +
        (Math.sin((iy + count) * 0.4) * 26);
      particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 3 +
        (Math.sin((iy + count) * 0.4) + 1) * 3;
    }
  }

  theta += rotateStep;
  camera.position.x = CAMERAMOVERADIUS * Math.sin(Math2.degToRad(theta));
  camera.position.z = CAMERAMOVERADIUS * Math.cos(Math2.degToRad(theta));
  camera.lookAt(focusObject.position);

  renderer.render(scene, camera);
  count += waveStep;
}

export default {
  init(id) {
    container = document.querySelector('#' + id);
    drawWaves();
    animate();
  },
  removeEvent(){
    window.removeEventListener('resize', onWindowResize);
  }
}
