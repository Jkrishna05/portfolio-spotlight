import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function Blob() {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame(({ mouse }) => {
    if (!mesh.current) return;
    const speed = hovered ? -0.01 : 0.006

    mesh.current.rotation.z += speed
    mesh.current.rotation.x += speed * 0.4
    // Smooth mouse interaction
    mesh.current.rotation.x = mouse.y * 0.5;
    mesh.current.rotation.y = mouse.x * 0.5;
  });

  return (
    <mesh ref={mesh} scale={2.1}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* <sphereGeometry args={[1, 89, 64]} /> */}
      {/* <icosahedronGeometry args={[1.2, 20]} /> */}
      {/* <boxGeometry args={[1.5, 1.5, 1.5]} /> */}
      <torusGeometry args={[1, 0.4, 32, 100]} />
     
      <MeshDistortMaterial
        color="#22d3ee"
        emissive="#8b5cf6"
        emissiveIntensity={0.4}
        distort={0.3}
        speed={1.2}
        roughness={0.35}
        metalness={0.2}
      />
    </mesh>
  );
}

export function InteractiveBlob() {
  return (
    <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Blob />
      {/* Disable zoom to keep it clean */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
