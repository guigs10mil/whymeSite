import { SpinGroup, Model, MousePanGroup, PanGroup } from "./helpers"
import { Canvas } from 'react-three-fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, DepthOfField, Noise, Vignette } from "react-postprocessing"

import React, { Suspense } from 'react'

class SoAlone extends React.Component {

  backgroundElement = (z, x, l, k) => {
    return (
      <PanGroup position={[z, 0, x]} range={[-12, 12]} key={k}>
        <SpinGroup left={l}>
          <Suspense fallback={null}>
            <Model modelpath={"/heart.glb"} scale={[0.2, 0.2, 0.2]} />
          </Suspense>
        </SpinGroup>
      </PanGroup>
    )
  }

  backgroundElements = () => {
    let m = []
    for (var i = 0; i < 100; i++) {
      m.push([Math.random() * 50, (Math.random() - 0.5) * 24, (Math.random() - 0.5) * 30, Math.random() < 0.5, i])
    }

    return m.map((e) => (
      // this.backgroundElement(z, x, l, k)
      <PanGroup position={[e[0], e[1], e[2]]} range={[-12 - e[0]/5, 12 + e[0]/5]} key={e[4]}>
        <SpinGroup left={e[3]}>
          <Suspense fallback={null}>
            <Model modelpath={"/heart.glb"} scale={[0.2, 0.2, 0.2]} />
          </Suspense>
        </SpinGroup>
      </PanGroup>
    ))
    
  }

  render() {

    return (
      <>
        <Canvas
          colorManagement
          // shadowMap
          camera={{ position: [-30, 0, 0], fov: 30 }}>
            <ambientLight />
            <color attach="background" args={["#F8E3BD"]} />
            <Suspense fallback={null}>
              <Environment background={false} files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']} path={'/Cube-Map/'} />
            </Suspense>
            <MousePanGroup>
              <group rotation={[0, Math.PI*17/16, 0]}>
                <Suspense fallback={null}>
                  <Model modelpath={"/statueHead.glb"} scale={[0.5, 0.5, 0.5]} />
                  <SpinGroup position={[1, 4.5, 0]}>
                    <Model modelpath={"/heart.glb"} scale={[0.6, 0.6, 0.6]} />
                  </SpinGroup>
                </Suspense>
              </group>
            </MousePanGroup>
            {this.backgroundElements()}
            {/* <Html
              position={[1, 1, 1]}
            >
              <meta charSet="utf-8"></meta>
              <iframe title="Spotify" src="https://open.spotify.com/embed/artist/6TCy6SzS0fARjG3Y637lpr" width="300" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </Html> */}
            <EffectComposer>
              <DepthOfField focusDistance={0.029} focalLength={0.008} bokehScale={2} height={480} />
              <Noise opacity={0.1} />
              <Vignette eskil={false} offset={0.01} darkness={0.8} />
            </EffectComposer>
        </Canvas>
      </>
    );
  }
}

export default SoAlone;
