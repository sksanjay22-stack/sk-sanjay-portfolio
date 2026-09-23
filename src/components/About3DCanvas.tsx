import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { CanvasErrorBoundary } from './CanvasErrorBoundary';

const NetworkGraph: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const nodes = [
    { pos: [0, 0, 0], color: '#38BDF8', size: 0.35, label: 'AI' },
    { pos: [1.6, 0.8, 0.5], color: '#818CF8', size: 0.22, label: 'Code' },
    { pos: [-1.5, 0.9, -0.4], color: '#6366F1', size: 0.22, label: 'Data' },
    { pos: [1.2, -1.1, -0.6], color: '#06B6D4', size: 0.22, label: 'Web' },
    { pos: [-1.4, -1.0, 0.6], color: '#EC4899', size: 0.22, label: 'Cloud' },
  ];

  const linePositions = [
    [0,0,0, 1.6,0.8,0.5],
    [0,0,0, -1.5,0.9,-0.4],
    [0,0,0, 1.2,-1.1,-0.6],
    [0,0,0, -1.4,-1.0,0.6],
    [1.6,0.8,0.5, 1.2,-1.1,-0.6],
    [-1.5,0.9,-0.4, -1.4,-1.0,0.6],
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <Float key={i} speed={2} floatIntensity={0.5}>
          <mesh position={node.pos as [number, number, number]}>
            <sphereGeometry args={[node.size, 24, 24]} />
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.5} roughness={0.2} />
          </mesh>
        </Float>
      ))}

      {linePositions.map((coords, idx) => {
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array(coords);
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        return (
          <primitive key={idx} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: '#818CF8', opacity: 0.4, transparent: true }))} />
        );
      })}
    </group>
  );
};

export const About3DCanvas: React.FC = () => {
  return (
    <div className="w-full h-72 sm:h-80 relative rounded-2xl glass-panel border border-white/10 overflow-hidden flex items-center justify-center">
      <div className="absolute top-3 left-4 text-xs font-mono text-cyan-400 flex items-center gap-1.5 z-10">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>3D AI_NETWORK_VISUALIZATION</span>
      </div>
      
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 50 }}
          gl={{ alpha: true, antialias: true, failIfMajorPerformanceCaveat: false }}
        >
          <ambientLight intensity={0.8} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#38BDF8" />
          <NetworkGraph />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};
