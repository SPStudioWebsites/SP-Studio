"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useReducedMotion } from "motion/react";
import * as THREE from "three";

function Laptop() {
  const ref = useRef<THREE.Group>(null);
  const reduce = useReducedMotion();

  useFrame((_, delta) => {
    if (!ref.current || reduce) return;
    ref.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={ref} rotation={[0.05, -0.4, 0]}>
      {/* Base */}
      <mesh position={[0, -0.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.08, 2.2]} />
        <meshPhysicalMaterial
          color="#1a1a20"
          metalness={0.85}
          roughness={0.25}
          clearcoat={1}
          clearcoatRoughness={0.15}
        />
      </mesh>
      {/* Hinge bar */}
      <mesh position={[0, 0.0, -1.05]}>
        <boxGeometry args={[3.2, 0.06, 0.08]} />
        <meshStandardMaterial color="#2a2a32" metalness={1} roughness={0.4} />
      </mesh>
      {/* Screen */}
      <group rotation={[-0.18, 0, 0]} position={[0, 0.95, -0.95]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.2, 2, 0.08]} />
          <meshPhysicalMaterial
            color="#0a0a0e"
            metalness={0.6}
            roughness={0.3}
            clearcoat={0.5}
          />
        </mesh>
        {/* Screen face emissive */}
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[3.0, 1.85]} />
          <meshBasicMaterial color="#0a0612" toneMapped={false} />
        </mesh>
        {/* Pink glow rect */}
        <mesh position={[-0.6, 0.3, 0.05]}>
          <planeGeometry args={[1.5, 0.9]} />
          <meshBasicMaterial color="#ff2d8f" toneMapped={false} transparent opacity={0.85} />
        </mesh>
        {/* Violet glow rect */}
        <mesh position={[0.85, -0.25, 0.05]}>
          <planeGeometry args={[1.0, 0.55]} />
          <meshBasicMaterial color="#8b5cf6" toneMapped={false} transparent opacity={0.85} />
        </mesh>
        {/* Top bar */}
        <mesh position={[0, 0.78, 0.06]}>
          <planeGeometry args={[2.7, 0.16]} />
          <meshBasicMaterial color="#ffffff" toneMapped={false} transparent opacity={0.18} />
        </mesh>
        {/* Glass overlay */}
        <mesh position={[0, 0, 0.07]}>
          <planeGeometry args={[3.0, 1.85]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transparent
            opacity={0.04}
            transmission={0.85}
            thickness={0.1}
            roughness={0.05}
          />
        </mesh>
      </group>
    </group>
  );
}

function Phone() {
  const ref = useRef<THREE.Group>(null);
  const reduce = useReducedMotion();

  useFrame((state) => {
    if (!ref.current) return;
    if (reduce) return;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.06;
  });

  return (
    <group ref={ref} position={[2.4, -0.4, 0.6]} rotation={[0.1, -0.4, 0.18]}>
      {/* Body */}
      <mesh>
        <boxGeometry args={[0.8, 1.6, 0.08]} />
        <meshPhysicalMaterial
          color="#15151b"
          metalness={0.85}
          roughness={0.2}
          clearcoat={1}
        />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0, 0.045]}>
        <planeGeometry args={[0.72, 1.5]} />
        <meshBasicMaterial color="#0c0612" toneMapped={false} />
      </mesh>
      {/* Pink accent */}
      <mesh position={[0, 0.45, 0.05]}>
        <planeGeometry args={[0.6, 0.32]} />
        <meshBasicMaterial color="#ff2d8f" toneMapped={false} transparent opacity={0.9} />
      </mesh>
      {/* Lines */}
      <mesh position={[0, -0.05, 0.05]}>
        <planeGeometry args={[0.6, 0.04]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} transparent opacity={0.25} />
      </mesh>
      <mesh position={[0, -0.16, 0.05]}>
        <planeGeometry args={[0.4, 0.04]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} transparent opacity={0.18} />
      </mesh>
      {/* Violet button */}
      <mesh position={[0, -0.55, 0.05]}>
        <planeGeometry args={[0.5, 0.18]} />
        <meshBasicMaterial color="#8b5cf6" toneMapped={false} transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

function FloatingCard({
  position,
  rotation,
  color,
  size = [1, 0.6],
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  size?: [number, number];
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh>
        <planeGeometry args={size} />
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.18}
          transmission={0.6}
          thickness={0.5}
          roughness={0.1}
          clearcoat={1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  const reduce = useReducedMotion();
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0.5, 6.2]} fov={32} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 6, 5]} intensity={0.6} color="#ff2d8f" />
      <directionalLight position={[-5, -3, 3]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[0, 3, 4]} intensity={0.4} color="#ffffff" />

      <Float
        speed={reduce ? 0 : 1.1}
        rotationIntensity={reduce ? 0 : 0.25}
        floatIntensity={reduce ? 0 : 0.6}
      >
        <Laptop />
      </Float>
      <Float
        speed={reduce ? 0 : 1.4}
        rotationIntensity={reduce ? 0 : 0.18}
        floatIntensity={reduce ? 0 : 0.8}
      >
        <Phone />
      </Float>
      <Float speed={0.6} floatIntensity={0.4} rotationIntensity={0.1}>
        <FloatingCard position={[-2.6, 1.1, 0.6]} rotation={[0.2, 0.5, -0.15]} color="#ff2d8f" />
      </Float>
      <Float speed={0.8} floatIntensity={0.5} rotationIntensity={0.1}>
        <FloatingCard
          position={[-2.0, -1.4, 1.1]}
          rotation={[-0.15, 0.4, 0.1]}
          color="#8b5cf6"
          size={[0.8, 0.5]}
        />
      </Float>

      <Environment preset="night" />
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
