import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

function Ring() {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (!mesh.current) return

    // Rotation direction
    const speed = hovered ? -0.01 : 0.006

    mesh.current.rotation.z += speed
    mesh.current.rotation.x += speed * 0.4

    // Floating motion
    mesh.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.15
  })

  return (
    <mesh
      ref={mesh}
      scale={1.3}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* Non-even ring */}
      <torusGeometry args={[1.2, 0.35, 64, 120]} />

      {/* Organic distortion */}
      <MeshDistortMaterial
        color="#22d3ee"
        emissive="#8b5cf6"
        emissiveIntensity={0.35}
        distort={0.35}
        speed={1.2}
        roughness={0.4}
        metalness={0.25}
      />
    </mesh>
  )
}

export function FloatingRing() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#8b5cf6" />

      <Ring />
    </Canvas>
  )
}
