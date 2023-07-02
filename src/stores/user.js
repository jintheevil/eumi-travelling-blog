import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {}
  }),

  getters: {
    getUser(state) {
      return state.user;
    }
  },

  actions: {
    setUser(payload) {
      this.user = {
        displayName: payload.displayName,
        uid: payload.uid,
        email: payload.email,
      }
    },
    signOutUser() {
      this.user = {}
    }
  }
})
