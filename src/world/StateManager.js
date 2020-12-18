/* eslint-disable no-unused-vars */
import create from 'zustand'

const UseStoreSet = (set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),

  moveForward: false,
  setMoveForward: () => set((state) => ({ moveForward: state.moveForward })),

  moveBackward: false,
  setMoveBackward: () => set((state) => ({ moveBackward: state.moveBackward })),

  moveUpward: false,
  setMoveUpward: () => set((state) => ({ moveUpward: state.moveUpward })),

  moveDownward: false,
  setMoveDownward: () => set((state) => ({ moveDownward: state.moveDownward })),

  moveLeft: false,
  setMoveLeft: () => set((state) => ({ moveLeft: state.moveLeft })),

  moveRight: false,
  setmoveRight: () => set((state) => ({ moveRight: state.moveRight })),

  canFly: true,
  setcanFly: () => set((state) => ({ canFly: state.canFly })),

  setVelocity: () => set((state) => ({ velocity: state.velocity })),
  velocity: 0
})

export default UseStoreSet
