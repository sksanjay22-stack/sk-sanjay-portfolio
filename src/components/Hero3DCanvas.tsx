import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Text } from '@react-three/drei';
import * as THREE from 'three';
import { CanvasErrorBoundary } from './CanvasErrorBoundary';

interface TechNodeProps {
  position: [number, number, number];
  color: string;
  label: string;
  speed?: number;
  rotationSpeed?: number;
}

const FloatingTechBadge: React.FC<TechNodeProps> = ({ position, color, label, speed = 1.5, rotationSpeed = 0.5 }) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005 * rotationSpeed;
      meshRef.current.position.y += Math.sin(state.clock.getElapsedTime() * speed) * 0.002;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Outer torus ring */}
      <mesh>
        <torusGeometry args={[0.38, 0.02, 16, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
      {/* Core octahedron */}
      <mesh>
        <octahedronGeometry args={[0.2, 1]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} emissive={color} emissiveIntensity={0.4} />
      </mesh>
      {/* Default Drei Text without external woff URL */}
      <Text
        position={[0, -0.5, 0]}
        fontSize={0.22}
        color="#E0E7FF"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
};

const NeuralNetworkNodes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const count = 14;

  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      const theta = (i / count) * Math.PI * 2;
      const radius = 2.6 + (i % 3) * 0.4;
      const y = ((i % 4) - 1.5) * 0.7;
      pts.push([Math.cos(theta) * radius, y, Math.sin(theta) * radius]);
    }
    return pts;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {points.map((pt, idx) => (
        <group key={idx} position={pt}>
          <mesh>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color={idx % 2 === 0 ? '#38BDF8' : '#818CF8'} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

const FloatingParticles: React.FC = () => {
  const count = 80;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 100;
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 8;
      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    particles.forEach((particle, i) => {
      let { time, factor, speed, x, y, z } = particle;
      time = particle.time += speed * 0.5;
      const s = Math.cos(time) * 0.02 + 0.03;
      dummy.position.set(
        x + Math.cos((time / 10) * factor) + (Math.sin(time * 1) * factor) / 100,
        y + Math.sin((time / 10) * factor) + (Math.cos(time * 2) * factor) / 100,
        z + Math.cos((time / 10) * factor) + (Math.sin(time * 3) * factor) / 100
      );
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#38BDF8" transparent opacity={0.4} />
    </instancedMesh>
  );
};

export const Hero3DCanvas: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* 2.5D CSS Background Particle Aura Fallback */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 45 }}
          gl={{ alpha: true, antialias: true, failIfMajorPerformanceCaveat: false }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} color="#818CF8" />
          <pointLight position={[-5, -2, -2]} intensity={0.8} color="#06B6D4" />

          {/* Floating Core Tech Nodes */}
          <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
            <group position={[mousePos.x * 0.4, mousePos.y * 0.4, 0]}>
              <FloatingTechBadge position={[-2.8, 1.8, -1]} color="#38BDF8" label="Python" />
              <FloatingTechBadge position={[2.8, 1.6, -0.5]} color="#6366F1" label="Java" />
              <FloatingTechBadge position={[-2.9, -1.6, -1.2]} color="#F59E0B" label="JavaScript" />
              <FloatingTechBadge position={[2.7, -1.8, -0.8]} color="#10B981" label="SQL" />
              <FloatingTechBadge position={[0, 2.6, -2]} color="#8B5CF6" label="AI Neural Net" />
              <FloatingTechBadge position={[0, -2.7, -2]} color="#EC4899" label="Git / Cloud" />
            </group>
          </Float>

          {/* Neural Network structure in background */}
          <NeuralNetworkNodes />

          {/* Floating Particle Cloud */}
          <FloatingParticles />

          {/* Distorted glowing AI sphere background core */}
          <group position={[0, 0, -3.5]}>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
              <Sphere args={[1.5, 32, 32]}>
                <MeshDistortMaterial
                  color="#1E1B4B"
                  emissive="#312E81"
                  emissiveIntensity={0.6}
                  roughness={0.2}
                  distort={0.3}
                  speed={2}
                />
              </Sphere>
            </Float>
          </group>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};
