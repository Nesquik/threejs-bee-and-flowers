import React, { useRef, useEffect } from 'react'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { OrbitControls, OrthographicCamera, useCamera } from 'drei'
import { useGLTF } from '@react-three/drei/useGLTF'
import { Canvas, useThree, useFrame } from 'react-three-fiber'

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement }
  } = useThree()
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef()
  useFrame((state) => controls.current.update())
  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 2.2}
      maxPolarAngle={Math.PI / 2.2}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  )
}

export default CameraControls
