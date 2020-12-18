/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react'
import useStore from './StateManager'

function OnKeyDown(event) {
  console.log(`onKeyDown`)
  let moveForward = useStore((state) => state.moveForward)
  let moveBackward = useStore((state) => state.moveBackward)
  let moveLeft = useStore((state) => state.moveLeft)
  let moveRight = useStore((state) => state.moveRight)
  let velocity = useStore((state) => state.velocity)

  switch (event.keyCode) {
    case 38: // up
    case 87: // w
      moveForward = true
      break

    case 37: // left
    case 65: // a
      moveLeft = true
      break

    case 40: // down
    case 83: // s
      moveBackward = true
      break

    case 39: // right
    case 68: // d
      moveRight = true
      break

    case 32: // space
      // if (moveUpward === true) velocity.y += 10
      velocity.y += 0
      // moveUpward = false
      break
    default:
      break
  }
}

function OnKeyUp(event) {
  console.log(`OnKeyUpdawd ${event.keyCode}`)
  let moveForward = useStore((state) => state.moveForward)
  let moveBackward = useStore((state) => state.moveBackward)
  let moveLeft = useStore((state) => state.moveLeft)
  let moveRight = useStore((state) => state.moveRight)
  let velocity = useStore((state) => state.velocity)

  switch (event.keyCode) {
    case 38: // up
    case 87: // w
      moveForward = false
      break

    case 37: // left
    case 65: // a
      moveLeft = false
      break

    case 40: // down
    case 83: // s
      moveBackward = false
      break

    case 39: // right
    case 68: // d
      moveRight = false
      break
    default:
      break
  }
}
export { OnKeyDown, OnKeyUp }
