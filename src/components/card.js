import React from 'react'
import { useSpring, animated } from 'react-spring'

const unit = window.innerHeight / 100
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card({ index=1, callback=()=>null }) {
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20,
                          (x - (window.innerWidth / 2) - ((index-1) * 32 * unit)) / 20,
                          1.1]

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return (
    <animated.div
      className={"card card" + index.toString()}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      onClick={() => callback()}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  )
}

export default Card;