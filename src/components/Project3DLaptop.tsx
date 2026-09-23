import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { Bot, Send, User, Terminal } from 'lucide-react';
import { CanvasErrorBoundary } from './CanvasErrorBoundary';

const Laptop3DModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.15;
      groupRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.3) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Laptop Base */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[3.6, 0.12, 2.4]} />
        <meshStandardMaterial color="#1E293B" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, -0.03, 0.5]}>
        <boxGeometry args={[1.0, 0.02, 0.7]} />
        <meshStandardMaterial color="#0F172A" roughness={0.5} />
      </mesh>

      {/* Screen Lid */}
      <group position={[0, 0, -1.1]} rotation={[0.2, 0, 0]}>
        <mesh position={[0, 1.1, 0]}>
          <boxGeometry args={[3.6, 2.2, 0.08]} />
          <meshStandardMaterial color="#0F172A" roughness={0.2} metalness={0.9} />
        </mesh>

        {/* Screen Display HTML UI */}
        <Html
          transform
          wrapperClass="laptop-screen"
          position={[0, 1.1, 0.05]}
          distanceFactor={1.5}
        >
          <div className="w-[380px] h-[230px] bg-[#090D16] border border-cyan-500/30 rounded-lg p-3 overflow-hidden text-left flex flex-col font-sans select-none shadow-2xl">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-mono text-cyan-400 ml-2">AI_CHATBOT_INTERFACE.py</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-700/50">ONLINE</span>
            </div>

            <div className="flex-1 space-y-2 text-xs overflow-hidden">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-600/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shrink-0">
                  <Bot size={12} />
                </div>
                <div className="bg-indigo-950/80 border border-indigo-500/30 p-2 rounded-xl text-gray-200 text-[11px] leading-snug max-w-[280px]">
                  Hello S K SANJAY! How can I assist you with your software development and AI project today?
                </div>
              </div>

              <div className="flex items-start gap-2 justify-end">
                <div className="bg-cyan-950/80 border border-cyan-500/40 p-2 rounded-xl text-cyan-200 text-[11px] leading-snug max-w-[260px]">
                  Explain the architecture of the AI Chatbot integration.
                </div>
                <div className="w-5 h-5 rounded-full bg-indigo-600/40 border border-indigo-400/50 flex items-center justify-center text-indigo-200 shrink-0">
                  <User size={12} />
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-cyan-600/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shrink-0">
                  <Bot size={12} />
                </div>
                <div className="bg-indigo-950/80 border border-indigo-500/30 p-2 rounded-xl text-gray-200 text-[11px] leading-snug max-w-[280px]">
                  The chatbot leverages Python backend logic, API request routing, and responsive frontend interface components for smooth conversational processing.
                </div>
              </div>
            </div>

            <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center gap-2">
              <div className="flex-1 bg-white/5 border border-white/10 rounded px-2 py-1 text-[10px] text-gray-400 flex items-center gap-1 font-mono">
                <Terminal size={10} className="text-cyan-400" />
                <span>Type message...</span>
              </div>
              <div className="p-1 rounded bg-cyan-600 text-white">
                <Send size={10} />
              </div>
            </div>
          </div>
        </Html>
      </group>
    </group>
  );
};

const HTMLFallbackChatUI: React.FC = () => (
  <div className="w-full max-w-md mx-auto p-4 bg-[#090D16] border border-cyan-500/30 rounded-2xl shadow-2xl text-left font-sans">
    <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        <span className="text-xs font-mono text-cyan-400 ml-2">AI_CHATBOT_INTERFACE.py</span>
      </div>
      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700/50">ONLINE</span>
    </div>

    <div className="space-y-3 text-xs">
      <div className="flex items-start gap-2">
        <div className="w-6 h-6 rounded-full bg-cyan-600/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shrink-0">
          <Bot size={14} />
        </div>
        <div className="bg-indigo-950/80 border border-indigo-500/30 p-2.5 rounded-2xl text-gray-200 text-xs leading-relaxed">
          Hello S K SANJAY! How can I assist you with your software development and AI project today?
        </div>
      </div>

      <div className="flex items-start gap-2 justify-end">
        <div className="bg-cyan-950/80 border border-cyan-500/40 p-2.5 rounded-2xl text-cyan-200 text-xs leading-relaxed">
          Explain the architecture of the AI Chatbot integration.
        </div>
        <div className="w-6 h-6 rounded-full bg-indigo-600/40 border border-indigo-400/50 flex items-center justify-center text-indigo-200 shrink-0">
          <User size={14} />
        </div>
      </div>
    </div>
  </div>
);

export const Project3DLaptop: React.FC = () => {
  return (
    <div className="w-full h-[380px] sm:h-[450px] relative flex items-center justify-center">
      <CanvasErrorBoundary fallback={<HTMLFallbackChatUI />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{ alpha: true, antialias: true, failIfMajorPerformanceCaveat: false }}
        >
          <ambientLight intensity={0.8} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#38BDF8" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#818CF8" />
          <Laptop3DModel />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};
