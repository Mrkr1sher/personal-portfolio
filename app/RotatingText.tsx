import React, { useRef } from 'react';
import { useFrame, useLoader, extend } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

extend({ TextGeometry });

const RotatingText = ({ text }) => {
  const mesh = useRef()
  const font = useLoader(FontLoader, '/fonts/helvetiker_regular.typeface.json')

  const textOptions = {
    font,
    size: 0.9,
    height: 0.2,
    curveSegments: 12,
    bevelEnabled: false,
  }

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.3
      mesh.current.rotation.y = Math.cos(clock.getElapsedTime()) * 0.3
    }
  })

  return (
    <Center>
      <mesh ref={mesh}>
        <textGeometry args={[text, textOptions]} />
        <meshNormalMaterial />
      </mesh>
    </Center>
  )
}

export default RotatingText