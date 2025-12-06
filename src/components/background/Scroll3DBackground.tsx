"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

const PARTICLE_COUNT = 1500;
const BASE_PARTICLE_SIZE = 0.05;
const SPHERE_RADIUS = 0.8;
const SPREAD_RADIUS = 12;
const FINAL_SPREAD_RADIUS = 20;
const INITIAL_ANIMATION_DURATION = 3000; // 3초

interface Scroll3DBackgroundProps {
  onAnimationComplete?: () => void;
}

export default function Scroll3DBackground({
  onAnimationComplete,
}: Scroll3DBackgroundProps = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();

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

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 15;
    camera.position.y = 0;
    camera.position.x = 0;
    camera.lookAt(0, 0, 0);

    // 파티클 시스템
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
    const particleColors = new Float32Array(PARTICLE_COUNT * 3);
    const particleSizes = new Float32Array(PARTICLE_COUNT);

    // 초기 구 형태 위치 (처음에 모여있는 상태)
    const spherePositions = new Float32Array(PARTICLE_COUNT * 3);
    // 중간 펼쳐진 형태 (구에서 약간 펼쳐짐)
    const spreadPositions = new Float32Array(PARTICLE_COUNT * 3);
    // 최종 펼쳐진 형태 (완전히 펼쳐진 상태)
    const finalPositions = new Float32Array(PARTICLE_COUNT * 3);

    const colors = [
      new THREE.Color("#ffffff"), // Cyan
    ];

    // 초기 구 형태 위치 생성 (처음에 완벽한 구로 모여있는 상태)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // 균등한 구면 분포를 위한 더 나은 알고리즘
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI; // 경도
      const phi = Math.acos(2.0 * v - 1.0); // 위도
      const radius = SPHERE_RADIUS * (0.95 + Math.random() * 0.05); // 거의 동일한 반경

      spherePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      spherePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      spherePositions[i * 3 + 2] = radius * Math.cos(phi);
    }

    // 중간 펼쳐진 형태 (구에서 약간 펼쳐짐)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const baseRadius = SPHERE_RADIUS;
      const spreadFactor = 1.5 + Math.random() * 0.5;
      const radius = baseRadius * spreadFactor;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      spreadPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      spreadPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      spreadPositions[i * 3 + 2] = radius * Math.cos(phi) * 0.6; // 약간 평평하게
    }

    // 최종 펼쳐진 형태 (완전히 펼쳐진 상태 - 평면 그리드)
    const gridSize = Math.ceil(Math.sqrt(PARTICLE_COUNT));
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (i % gridSize) / gridSize;
      const y = Math.floor(i / gridSize) / gridSize;
      const spreadX = (x - 0.5) * FINAL_SPREAD_RADIUS * 2;
      const spreadY = (y - 0.5) * FINAL_SPREAD_RADIUS * 2;
      finalPositions[i * 3] = spreadX;
      finalPositions[i * 3 + 1] = spreadY;
      finalPositions[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }

    // 색상 및 크기 설정
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
      // 동그라미처럼 보이도록 크기 통일 (약간의 랜덤성은 유지)
      particleSizes[i] = BASE_PARTICLE_SIZE * (0.8 + Math.random() * 0.4);
    }

    // 초기 위치를 구 형태로 설정 (처음에 모여있는 상태)
    particlePositions.set(spherePositions);

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );
    particleGeometry.setAttribute(
      "size",
      new THREE.BufferAttribute(particleSizes, 1)
    );

    // 고해상도 동그라미 텍스처 생성
    const createCircleTexture = () => {
      const canvas = document.createElement("canvas");
      const size = 256; // 해상도 향상
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;

      // 배경을 완전히 투명하게
      ctx.clearRect(0, 0, size, size);

      // 완벽한 원형 그라디언트 (더 부드러운 가장자리)
      const center = size / 2;
      const radius = size / 2 - 2; // 약간의 여백으로 안티앨리어싱
      const gradient = ctx.createRadialGradient(
        center,
        center,
        0,
        center,
        center,
        radius
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.2, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(0.8, "rgba(255, 255, 255, 0.3)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(center, center, radius, 0, Math.PI * 2);
      ctx.fill();

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      return texture;
    };

    const circleTexture = createCircleTexture();

    const particleMaterial = new THREE.PointsMaterial({
      size: BASE_PARTICLE_SIZE,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
      map: circleTexture,
      alphaTest: 0.001,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 조명
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const resize = (width: number, height: number) => {
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const initialRect = parentElement.getBoundingClientRect();
    const initialAspect = initialRect.width / initialRect.height;
    camera.aspect = initialAspect;
    camera.updateProjectionMatrix();
    resize(initialRect.width, initialRect.height);

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      if (width === 0 || height === 0) return;
      resize(width, height);
    });
    resizeObserver.observe(parentElement);

    let animationFrameId = 0;
    const clock = new THREE.Clock();
    let initialAnimationProgress = 0;
    let initialAnimationComplete = false;

    // 초기 펼쳐지는 애니메이션
    const startInitialAnimation = () => {
      const startTime = Date.now();
      const animateInitial = () => {
        const elapsed = Date.now() - startTime;
        initialAnimationProgress = Math.min(
          elapsed / INITIAL_ANIMATION_DURATION,
          1
        );

        const positionsAttribute = particleGeometry.attributes
          .position as THREE.BufferAttribute;
        const positionsArray = positionsAttribute.array as Float32Array;

        // 부드러운 easing 함수
        const eased = THREE.MathUtils.smoothstep(
          initialAnimationProgress,
          0,
          1
        );

        // 구 형태 → 중간 펼쳐진 형태 → 최종 펼쳐진 형태
        if (eased < 0.5) {
          // 구 → 중간 펼쳐짐
          const localProgress = eased / 0.5;
          const blendProgress = THREE.MathUtils.smoothstep(localProgress, 0, 1);
          for (let i = 0; i < positionsArray.length; i++) {
            positionsArray[i] =
              spherePositions[i] +
              (spreadPositions[i] - spherePositions[i]) * blendProgress;
          }
        } else {
          // 중간 → 최종 펼쳐짐
          const localProgress = (eased - 0.5) / 0.5;
          const blendProgress = THREE.MathUtils.smoothstep(localProgress, 0, 1);
          for (let i = 0; i < positionsArray.length; i++) {
            positionsArray[i] =
              spreadPositions[i] +
              (finalPositions[i] - spreadPositions[i]) * blendProgress;
          }
        }

        positionsAttribute.needsUpdate = true;

        if (initialAnimationProgress < 1) {
          requestAnimationFrame(animateInitial);
        } else {
          initialAnimationComplete = true;
          // 애니메이션 완료 후 스크롤 활성화 및 콜백 호출
          document.body.style.overflow = "";
          onAnimationComplete?.();
        }
      };
      animateInitial();
    };

    // 초기 스크롤 비활성화
    document.body.style.overflow = "hidden";
    startInitialAnimation();

    const unsubscribe = scrollYProgress.on("change", (progress) => {
      // 초기 애니메이션이 완료되지 않았으면 스크롤 기반 변화 무시
      if (!initialAnimationComplete) return;

      // 초기 애니메이션 완료 후에는 파티클 위치를 변경하지 않고 최종 펼쳐진 상태 유지
      // 스크롤 시에는 카메라만 약간 이동
      const cameraZ = 15 + progress * 2;
      const cameraY = progress * 0.5;
      camera.position.z = cameraZ;
      camera.position.y = cameraY;
      camera.position.x = 0;
      camera.lookAt(0, 0, 0);
    });

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const currentProgress = scrollYProgress.get();

      // 초기 애니메이션 중에는 회전 없음, 완료 후에는 매우 느린 회전
      if (initialAnimationComplete) {
        // 최종 펼쳐진 상태 유지하면서 매우 느린 회전만
        particleSystem.rotation.y += 0.0003;
      }

      // 파티클 크기 펄스 효과 (동그라미가 살아있는 느낌)
      const pulse = Math.sin(elapsed * 1.5) * 0.08 + 1;
      particleMaterial.size = BASE_PARTICLE_SIZE * pulse;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      unsubscribe();
      resizeObserver.disconnect();
      // 스크롤 복원
      document.body.style.overflow = "";

      particleGeometry.dispose();
      particleMaterial.dispose();
      circleTexture.dispose();
      renderer.dispose();
    };
  }, [scrollYProgress, onAnimationComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-0 h-full w-full"
    />
  );
}
