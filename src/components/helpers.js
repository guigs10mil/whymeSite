import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'
import { useGLTF, Html } from '@react-three/drei'

import { useRef } from 'react'

const Model = ({ modelpath, position=[0, 0, 0], rotation=[0, 0, 0], scale=[1, 1, 1] }) => {
  const gltf = useGLTF(modelpath, true)

  return (
    <primitive position={position} rotation={rotation} scale={scale} object={gltf.scene.clone(true)} dispose={null} />
  )
}

const SpinGroup = ({ children, position=[0, 0, 0], rotation=[0, 0, 0], scale=[1, 1, 1], left=false }) => {
  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.y += left ? -0.01 : 0.01
  })

  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      {children}
    </group>
  )
}

const PanGroup = ({ children, position=[0, 0, 0], rotation=[0, 0, 0], scale=[1, 1, 1], range=[-5, 5] }) => {
  const ref = useRef()
  useFrame(() => {
    if (ref.current.position.y > range[1])
      ref.current.position.y = range[0]
    else
      ref.current.position.y += 0.01
  })

  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      {children}
    </group>
  )
}

const MousePanGroup = ({ children, position=[0, 0, 0], rotation=[0, 0, 0], scale=[1, 1, 1] }) => {

  function onMouseMove( event ) {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  }

  let mouse = new THREE.Vector2(0, 0)

  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.y = mouse.x/10
    ref.current.rotation.z = -mouse.y/10
  })

  window.addEventListener( 'mousemove', onMouseMove, false )

  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      {children}
    </group>
  )
}

export {
  Model,
  SpinGroup,
  MousePanGroup,
  PanGroup
}
