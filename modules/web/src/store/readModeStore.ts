import { defineStore } from 'pinia'
import type { ReadMode } from '@/web'

const READ_MODE_KEY = 'readMode'

export const useReadModeStore = defineStore('readMode', {
  state: () => {
    return {
      readMode: (localStorage.getItem(READ_MODE_KEY) as ReadMode) || 'default',
    }
  },
  actions: {
    setReadMode(mode: ReadMode) {
      this.readMode = mode
      localStorage.setItem(READ_MODE_KEY, mode)
    },
  },
})
