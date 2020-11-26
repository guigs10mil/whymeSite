import { SpinGroup, Model, MousePanGroup } from "./helpers"
import { Canvas } from 'react-three-fiber'
import { Environment, Sky } from '@react-three/drei'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from "react-postprocessing"

import React, { Suspense } from 'react'
import { CubeReflectionMapping } from "three"

class ReallyKnow extends React.Component {

  render() {

    return (
      <>
        <Canvas
          // colorManagement
          // shadowMap
          camera={{ position: [-40, 4, 10], fov: 20 }}>
            {/* <Sky sunPosition={1} /> */}
            <ambientLight />
            <pointLight position={[3, 3, 3]} />
            <Suspense fallback={null}>
              <Environment background={false} files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']} path={'/Cube-Map/'} />
            </Suspense>
            <MousePanGroup>
              <group rotation={[-0.5, Math.PI*19/16, -1]}>
                <Suspense fallback={null}>
                  <Model modelpath={"/scene.gltf"} scale={[30, 30, 30]} />
                </Suspense>
              </group>
              {/* <SpinGroup>
                <Suspense fallback={null}>
                  <Model modelpath={"/3d_scan_man_1/scene.gltf"} position={[5, 0, 0]} scale={[1, 1, 1]} />
                  <Model modelpath={"/heart.glb"} position={[-5, 0, 0]} scale={[1, 1, 1]} />
                  <Model modelpath={"/heart.glb"} position={[0, 0, 5]} scale={[1, 1, 1]} />
                  <Model modelpath={"/heart.glb"} position={[0, 0, -5]} scale={[1, 1, 1]} />
                </Suspense>
              </SpinGroup> */}
            </MousePanGroup>
            {/* <Html
              position={[1, 1, 1]}
            >
              <meta charSet="utf-8"></meta>
              <iframe title="Spotify" src="https://open.spotify.com/embed/artist/6TCy6SzS0fARjG3Y637lpr" width="300" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </Html> */}
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

export default ReallyKnow;
