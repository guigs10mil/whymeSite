import { SpinGroup, Model, MousePanGroup } from "./helpers"
import { Canvas } from 'react-three-fiber'
import { Box, Environment, MeshWobbleMaterial } from '@react-three/drei'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from "react-postprocessing"

import React, { Suspense } from 'react'
import { CubeReflectionMapping } from "three"

class ComeHome extends React.Component {


  render() {

    return (
      <>
        <Canvas
          colorManagement
          // shadowMap
          camera={{ position: [-40, 4, 10], fov: 20 }}>
            {/* <Sky sunPosition={1} /> */}
            <ambientLight />
            <pointLight intensity={2} position={[0, 3, 0]} />
            {/* <CubeReflectionMapping /> */}
            <color attach="background" args={["#3388ff"]} />
            <Suspense fallback={null}>
              <Environment background={false} files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']} path={'/Cube-Map/'} />
            </Suspense>
            <MousePanGroup>
              <group position={[0, -1.4, 0]} rotation={[0, -0.5, 0]}>
                <Suspense fallback={null}>
                  <Model modelpath={"/cat.glb"} position={[-1, 0, -2]} scale={[0.1, 0.1, 0.1]} />
                  <Model modelpath={"/cat.glb"} rotation={[0, -3.2/2, 0]} position={[2, 0, 2]} scale={[0.09, 0.09, 0.09]} />
                </Suspense>
                
              </group>
            </MousePanGroup>

            <SpinGroup>
                <mesh position={[2, 3, 6]} rotation={[2, 5, 8]}>
                  <boxBufferGeometry attach="geometry" />
                  <MeshWobbleMaterial
                    attach="material"
                    factor={1} // Strength, 0 disables the effect (default=1)
                    speed={10} // Speed (default=1)
                  />
                </mesh>
                <mesh position={[2, 3, -6]} rotation={[2, -5, 5]}>
                  <boxBufferGeometry attach="geometry" />
                  <MeshWobbleMaterial
                    attach="material"
                    factor={1} // Strength, 0 disables the effect (default=1)
                    speed={10} // Speed (default=1)
                  />
                </mesh>
                <mesh position={[-2, -3, -10]} rotation={[1, 2, 0]}>
                  <boxBufferGeometry attach="geometry" />
                  <MeshWobbleMaterial
                    attach="material"
                    factor={1} // Strength, 0 disables the effect (default=1)
                    speed={10} // Speed (default=1)
                  />
                </mesh>
                <mesh position={[-4, -3, -6]} rotation={[2, 5, 8]}>
                  <boxBufferGeometry attach="geometry" />
                  <MeshWobbleMaterial
                    attach="material"
                    factor={1} // Strength, 0 disables the effect (default=1)
                    speed={10} // Speed (default=1)
                  />
                </mesh>
                <mesh position={[-2, -3, 6]} rotation={[2, -5, 5]}>
                  <boxBufferGeometry attach="geometry" />
                  <MeshWobbleMaterial
                    attach="material"
                    factor={1} // Strength, 0 disables the effect (default=1)
                    speed={10} // Speed (default=1)
                  />
                </mesh>
                <mesh position={[4, -1, 10]} rotation={[1, 2, 0]}>
                  <boxBufferGeometry attach="geometry" />
                  <MeshWobbleMaterial
                    attach="material"
                    factor={1} // Strength, 0 disables the effect (default=1)
                    speed={10} // Speed (default=1)
                  />
                </mesh>
              </SpinGroup>
            
            <EffectComposer>
              {/* <DepthOfField focusDistance={-0.1} bokehScale={2} />
              <Noise opacity={0.1} />
              <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
            </EffectComposer>
        </Canvas>
      </>
    );
  }
}

export default ComeHome;
