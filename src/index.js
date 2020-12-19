/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom'
import React, { Suspense, useState, useEffect } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { useSprings, a } from 'react-spring/three'
import './styles.css'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { OrbitControls, OrthographicCamera, useCamera } from 'drei'

import { Sky, PointerLockControls } from '@react-three/drei'

import Ground from './world/Ground'
import BeePlayer from './world/BeePlayer'

import Plane from './world/Plane'
import { OnKeyDown, OnKeyUp } from './world/KeyControls'

import ErrorBoundary from './utils/ErrorBoundary'

export default function App() {
  // const increasePopulation = useStore(state => state.increasePopulation)
  /*document.addEventListener('keydown', onKeyHandler, false) 
  document.addEventListener('keyup', onKeyHandler, false) */
  console.log('App /')

  return (
    <Canvas style={{ background: 'lightblue' }} camera={{ position: [5, 1, 1], fov: 60 }}>
      <Suspense fallback={null}>
        <Physics gravity={[0, -5, 0]}>
          <Ground />
          <BeePlayer />
        </Physics>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.8} position={[300, 300, 400]} />
        <PointerLockControls />
      </Suspense>
    </Canvas>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

/* 
function Cube(props) {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }))
  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" />
    </mesh>
  )
} */
