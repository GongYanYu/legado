import { defineStore } from 'pinia'
import type { ReadMode } from '@/web'

const READ_MODE_KEY = 'readMode'
const SCROLL_SPEED_KEY = 'scrollSpeed'

export const useReadModeStore = defineStore('readMode', {
  state: () => {
    return {
      readMode: (localStorage.getItem(READ_MODE_KEY) as ReadMode) || 'default',
      scrollSpeed: Number(localStorage.getItem(SCROLL_SPEED_KEY)) || 1000,
    }
  },
  actions: {
    setReadMode(mode: ReadMode) {
      this.readMode = mode
      localStorage.setItem(READ_MODE_KEY, mode)
    },
    setScrollSpeed(speed: number) {
      this.scrollSpeed = speed
      localStorage.setItem(SCROLL_SPEED_KEY, speed.toString())
    },
  },
})
