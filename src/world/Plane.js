/* eslint-disable no-unused-vars */
import { Physics, usePlane, useBox } from '@react-three/cannon'
import React, { Suspense, useState, useEffect } from 'react'

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[2420, 2420]} />
    </mesh>
  )
}
export default Plane
