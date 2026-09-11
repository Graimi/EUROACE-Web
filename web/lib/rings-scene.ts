import * as THREE from 'three';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';

/** Real, bevelled geometry from the original outlined SVG paths. */
export async function createRingsScene(
  canvas: HTMLCanvasElement,
  signal: AbortSignal,
) {
  const files = ['centro', 'alentejo', 'extremadura'];
  const sources = await Promise.all(
    files.map(async (name) => {
      const response = await fetch(`/brand/ring-${name}.svg`, { signal });
      if (!response.ok) throw new Error('Ring asset unavailable');
      return response.text();
    }),
  );
  if (signal.aborted) return null;
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0xffffff, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-3, 3, 1.85, -1.85, 0.1, 30);
  camera.position.set(0.24, 0, 10);
  camera.lookAt(0.24, 0, 0);
  scene.add(new THREE.HemisphereLight(0xffffff, 0xc9ced7, 2.2));
  const key = new THREE.DirectionalLight(0xffffff, 2.5);
  key.position.set(-3, 5, 8);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.7);
  fill.position.set(4, -2, 4);
  scene.add(fill);

  const colours = [0x10dcc5, 0xffcc00, 0x1e00ff];
  const finalPositions = [
    new THREE.Vector3(-0.5, 0, -0.16),
    new THREE.Vector3(0.5047, -0.5, 0),
    new THREE.Vector3(0.5047, 0.5, 0.16),
  ];
  const arrivalPositions = [
    new THREE.Vector3(-0.93, 0.06, 0.6),
    new THREE.Vector3(0.91, -0.69, -0.55),
    new THREE.Vector3(0.78, 0.76, 0.45),
  ];
  const arrivalRotations = [
    new THREE.Euler(0.28, -0.7, -0.12),
    new THREE.Euler(-0.65, 0.38, 0.12),
    new THREE.Euler(0.35, 0.72, -0.18),
  ];
  const identity = new THREE.Quaternion();
  const starts = arrivalRotations.map((e) =>
    new THREE.Quaternion().setFromEuler(e),
  );
  const loader = new SVGLoader();
  const meshes = sources.map((source, i) => {
    const parsed = loader.parse(source);
    const shapes = parsed.paths.flatMap((path) => path.toShapes());
    const geometry = new THREE.ExtrudeGeometry(shapes, {
      depth: 13,
      bevelEnabled: true,
      bevelThickness: 3,
      bevelSize: 2,
      bevelSegments: 4,
      steps: 1,
      curveSegments: 64,
    });
    geometry.translate(-178, -178, -6.5);
    geometry.scale(1 / 178, 1 / 178, 1 / 178);
    const material = new THREE.MeshStandardMaterial({
      color: colours[i],
      roughness: 0.82,
      metalness: 0,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    return mesh;
  });
  let frame = 0;
  let elapsed = 0;
  let previous = 0;
  let paused = false;
  let visible = true;
  let reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let disposed = false;
  const ease = (v: number) => v * v * v * (v * (v * 6 - 15) + 10);
  function draw() {
    const cycle = elapsed % 20;
    // Approach 0–7s; rest 7–13s; open 13–19s; hold 19–20s.
    const meet = reduced
      ? 1
      : cycle < 7
        ? ease(cycle / 7)
        : cycle < 13
          ? 1
          : cycle < 19
            ? 1 - ease((cycle - 13) / 6)
            : 0;
    meshes.forEach((mesh, i) => {
      mesh.position.lerpVectors(arrivalPositions[i], finalPositions[i], meet);
      mesh.quaternion.slerpQuaternions(starts[i], identity, meet);
    });
    renderer.render(scene, camera);
  }
  function tick(time: number) {
    frame = 0;
    if (disposed) return;
    if (previous) elapsed += Math.min((time - previous) / 1000, 0.05);
    previous = time;
    draw();
    schedule();
  }
  function schedule() {
    if (disposed || frame || paused || reduced || !visible || document.hidden)
      return;
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    previous = 0;
    draw();
    schedule();
  }
  function resize() {
    if (disposed) return;
    const { width, height } = canvas.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.left = (-1.85 * width) / height;
    camera.right = (1.85 * width) / height;
    camera.updateProjectionMatrix();
    draw();
  }
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  const intersection = new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    sync();
  });
  intersection.observe(canvas);
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const updateMotion = () => {
    reduced = motion.matches;
    sync();
  };
  motion.addEventListener('change', updateMotion);
  document.addEventListener('visibilitychange', sync);
  resize();
  schedule();
  return {
    setPaused(value: boolean) {
      paused = value;
      sync();
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      motion.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', sync);
      meshes.forEach((mesh) => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      renderer.dispose();
    },
  };
}
