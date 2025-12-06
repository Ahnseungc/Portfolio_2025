"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const HERO_FOV_DEGREES = 50;
const HERO_CAMERA_Z = 6;
const HERO_ROTATION_DAMPING = 0.08;
const HERO_ROTATION_LIMIT = 0.45;
const HERO_BASE_ROTATION_SPEED = 0.003;
const HERO_PARTICLE_COUNT = 1080;
const HERO_PARTICLE_RADIUS = 4.6;
const HERO_PARTICLE_SIZE = 0.05;
const HERO_CLUSTER_RADIUS = 0.6;
const HERO_CARD_WIDTH = 3.2;
const HERO_CARD_HEIGHT = 1.6;
const HERO_CARD_DEPTH = 0.12;
const HERO_CARD_SPACING = 3.6;
const HERO_PHASE_CLUSTER_DURATION = 2.2;
const HERO_PHASE_SPHERE_DURATION = 3.2;

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parentElement = canvas.parentElement ?? document.body;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const camera = new THREE.PerspectiveCamera(HERO_FOV_DEGREES, 1, 0.1, 100);
    camera.position.z = HERO_CAMERA_Z;

    const highlightMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#22d3ee"),
      emissive: new THREE.Color("#0ea5e9"),
      emissiveIntensity: 0.45,
      roughness: 0.18,
      metalness: 0.7,
      transparent: true,
      opacity: 0.5,
    });

    const coreGeometry = new THREE.IcosahedronGeometry(2.2, 1);
    const coreMesh = new THREE.Mesh(coreGeometry, highlightMaterial);
    scene.add(coreMesh);

    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#f472b6"),
      transparent: true,
      opacity: 0.4,
      wireframe: true,
    });
    const wireframeMesh = new THREE.Mesh(coreGeometry, wireframeMaterial);
    scene.add(wireframeMesh);

    const particleGeometry = new THREE.BufferGeometry();

    const clusterPositions = new Float32Array(HERO_PARTICLE_COUNT * 3);
    const spherePositions = new Float32Array(HERO_PARTICLE_COUNT * 3);
    const cardPositions = new Float32Array(HERO_PARTICLE_COUNT * 3);
    const cardPulseOffsets = new Float32Array(HERO_PARTICLE_COUNT);

    for (let i = 0; i < HERO_PARTICLE_COUNT; i++) {
      const clusterRadius = HERO_CLUSTER_RADIUS * (0.6 + Math.random() * 0.4);
      const clusterTheta = Math.random() * Math.PI * 2;
      const clusterPhi = Math.acos(2 * Math.random() - 1);
      clusterPositions[i * 3] =
        clusterRadius * Math.sin(clusterPhi) * Math.cos(clusterTheta);
      clusterPositions[i * 3 + 1] =
        clusterRadius * Math.sin(clusterPhi) * Math.sin(clusterTheta);
      clusterPositions[i * 3 + 2] = clusterRadius * Math.cos(clusterPhi);

      const radius = HERO_PARTICLE_RADIUS * (0.6 + Math.random() * 0.4);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      spherePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      spherePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      spherePositions[i * 3 + 2] = radius * Math.cos(phi);

      const cardIndex = i % 3;
      const cardCenterX = (cardIndex - 1) * HERO_CARD_SPACING;
      const withinCardX = (Math.random() - 0.5) * HERO_CARD_WIDTH;
      const withinCardY = (Math.random() - 0.5) * HERO_CARD_HEIGHT;
      const withinCardZ = (Math.random() - 0.5) * HERO_CARD_DEPTH;

      cardPositions[i * 3] = cardCenterX + withinCardX;
      cardPositions[i * 3 + 1] = withinCardY;
      cardPositions[i * 3 + 2] = withinCardZ;
      cardPulseOffsets[i] = Math.random() * Math.PI * 2;
    }

    const particlePositions = new Float32Array(clusterPositions);
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color("#e879f9"),
      size: HERO_PARTICLE_SIZE,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    const coolLight = new THREE.DirectionalLight(0x38bdf8, 1.5);
    coolLight.position.set(4, 6, 8);
    const warmLight = new THREE.DirectionalLight(0xf472b6, 1.2);
    warmLight.position.set(-5, -4, -6);
    scene.add(ambientLight, coolLight, warmLight);

    const resize = (width: number, height: number) => {
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const initialRect = parentElement.getBoundingClientRect();
    resize(initialRect.width, initialRect.height);

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      if (width === 0 || height === 0) return;
      resize(width, height);
    });
    resizeObserver.observe(parentElement);

    const pointer = new THREE.Vector2(0, 0);
    const targetRotation = new THREE.Vector2(0, 0);

    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      pointer.x = (clientX / innerWidth) * 2 - 1;
      pointer.y = -(clientY / innerHeight) * 2 + 1;
    };

    window.addEventListener("pointermove", handlePointerMove);

    let animationFrameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      let phasePositions = clusterPositions;
      let blendStart: Float32Array | null = null;
      let blendTarget: Float32Array | null = null;
      let blendProgress = 0;

      if (elapsed <= HERO_PHASE_CLUSTER_DURATION) {
        phasePositions = clusterPositions;
      } else if (
        elapsed <=
        HERO_PHASE_CLUSTER_DURATION + HERO_PHASE_SPHERE_DURATION
      ) {
        phasePositions = spherePositions;
        blendStart = clusterPositions;
        blendTarget = spherePositions;
        blendProgress =
          (elapsed - HERO_PHASE_CLUSTER_DURATION) / HERO_PHASE_SPHERE_DURATION;
      } else {
        phasePositions = cardPositions;
        blendStart = spherePositions;
        blendTarget = cardPositions;
        const postSphereElapsed =
          elapsed - (HERO_PHASE_CLUSTER_DURATION + HERO_PHASE_SPHERE_DURATION);
        blendProgress = Math.min(postSphereElapsed / 2.6, 1);
      }

      const positionsAttribute = particleGeometry.attributes
        .position as THREE.BufferAttribute;
      const positionsArray = positionsAttribute.array as Float32Array;

      if (blendStart && blendTarget) {
        const eased = THREE.MathUtils.smoothstep(blendProgress, 0, 1);
        for (let i = 0; i < positionsArray.length; i++) {
          positionsArray[i] =
            blendStart[i] + (blendTarget[i] - blendStart[i]) * eased;
        }
      } else {
        positionsArray.set(phasePositions);
      }

      // Subtle breathing in card phase
      if (blendTarget === cardPositions && blendProgress >= 1) {
        const pulseStrength = 0.05;
        for (let i = 0; i < HERO_PARTICLE_COUNT; i++) {
          const jitter =
            Math.sin(elapsed * 1.6 + cardPulseOffsets[i]) * pulseStrength;
          positionsArray[i * 3] = cardPositions[i * 3] + jitter * 0.6;
          positionsArray[i * 3 + 1] = cardPositions[i * 3 + 1] + jitter * 0.4;
          positionsArray[i * 3 + 2] = cardPositions[i * 3 + 2];
        }
      }

      positionsAttribute.needsUpdate = true;

      targetRotation.x +=
        (THREE.MathUtils.clamp(
          pointer.y,
          -HERO_ROTATION_LIMIT,
          HERO_ROTATION_LIMIT
        ) -
          targetRotation.x) *
        HERO_ROTATION_DAMPING;
      targetRotation.y +=
        (THREE.MathUtils.clamp(
          pointer.x,
          -HERO_ROTATION_LIMIT,
          HERO_ROTATION_LIMIT
        ) -
          targetRotation.y) *
        HERO_ROTATION_DAMPING;

      const rotationFactor =
        blendTarget === cardPositions && blendProgress >= 1 ? 0.2 : 1;

      coreMesh.rotation.x +=
        (HERO_BASE_ROTATION_SPEED + targetRotation.x * 0.02) * rotationFactor;
      coreMesh.rotation.y +=
        (HERO_BASE_ROTATION_SPEED + targetRotation.y * 0.02) * rotationFactor;

      wireframeMesh.rotation.x +=
        (HERO_BASE_ROTATION_SPEED + targetRotation.x * 0.015) * rotationFactor;
      wireframeMesh.rotation.y +=
        (HERO_BASE_ROTATION_SPEED + targetRotation.y * 0.015) * rotationFactor;

      particleSystem.rotation.y +=
        HERO_BASE_ROTATION_SPEED * 0.6 * rotationFactor;
      particleSystem.rotation.x +=
        HERO_BASE_ROTATION_SPEED * 0.4 * rotationFactor;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", handlePointerMove);
      resizeObserver.disconnect();

      coreGeometry.dispose();
      particleGeometry.dispose();
      highlightMaterial.dispose();
      wireframeMaterial.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden"
    />
  );
}
