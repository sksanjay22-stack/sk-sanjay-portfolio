import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Skill } from '../data/portfolioData';
import { CanvasErrorBoundary } from './CanvasErrorBoundary';

interface SkillSphere3DProps {
  skills: Skill[];
  onSelectSkill: (skill: Skill) => void;
  selectedSkill: Skill | null;
}

interface OrbitingNodeProps {
  skill: Skill;
  position: [number, number, number];
  onSelectSkill: (skill: Skill) => void;
  isSelected: boolean;
}

const OrbitingNode: React.FC<OrbitingNodeProps> = ({ skill, position, onSelectSkill, isSelected }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onSelectSkill(skill);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {/* Outer Node Mesh */}
      <mesh scale={hovered || isSelected ? 1.3 : 1}>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshStandardMaterial
          color={isSelected ? '#38BDF8' : hovered ? '#818CF8' : '#6366F1'}
          emissive={isSelected ? '#38BDF8' : hovered ? '#818CF8' : '#312E81'}
          emissiveIntensity={hovered || isSelected ? 0.9 : 0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Node 3D Label */}
      <Text
        position={[0, -0.4, 0]}
        fontSize={0.22}
        color={isSelected ? '#38BDF8' : hovered ? '#FFFFFF' : '#CBD5E1'}
        anchorX="center"
        anchorY="middle"
      >
        {skill.name}
      </Text>
    </group>
  );
};

export const SkillSphere3D: React.FC<SkillSphere3DProps> = ({ skills, onSelectSkill, selectedSkill }) => {
  const groupRef = useRef<THREE.Group>(null);

  // Calculate spherical coordinates distribution for skills
  const skillNodes = useMemo(() => {
    const total = skills.length;
    return skills.map((skill, index) => {
      const phi = Math.acos(-1 + (2 * index) / total);
      const theta = Math.sqrt(total * Math.PI) * phi;
      const radius = 3.2;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      return { skill, pos: [x, y, z] as [number, number, number] };
    });
  }, [skills]);



  return (
    <div className="w-full h-[450px] sm:h-[550px] relative">
      <CanvasErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          gl={{ alpha: true, antialias: true, failIfMajorPerformanceCaveat: false }}
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#38BDF8" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#818CF8" />

          {/* Central Core Sphere labeled SOFTWARE DEVELOPMENT */}
          <group>
            <Float speed={1.5} floatIntensity={0.5}>
              <Sphere args={[1.3, 32, 32]}>
                <MeshDistortMaterial
                  color="#0F172A"
                  emissive="#1E1B4B"
                  emissiveIntensity={0.8}
                  roughness={0.2}
                  distort={0.2}
                  speed={1.5}
                />
              </Sphere>
            </Float>

            {/* Central Labels */}
            <Text
              position={[0, 0.15, 1.4]}
              fontSize={0.22}
              color="#38BDF8"
              anchorX="center"
              anchorY="middle"
            >
              SOFTWARE
            </Text>
            <Text
              position={[0, -0.2, 1.4]}
              fontSize={0.2}
              color="#E0E7FF"
              anchorX="center"
              anchorY="middle"
            >
              DEVELOPMENT
            </Text>
          </group>

          {/* Orbiting Skill Nodes */}
          <group ref={groupRef}>
            {skillNodes.map(({ skill, pos }, i) => (
              <OrbitingNode
                key={i}
                skill={skill}
                position={pos}
                onSelectSkill={onSelectSkill}
                isSelected={selectedSkill?.name === skill.name}
              />
            ))}
          </group>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};