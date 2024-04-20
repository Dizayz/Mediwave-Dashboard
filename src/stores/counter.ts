import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LOG } from "../types"
export const useMediwaveStore = defineStore('counter', () => {
  const login = ref(LOG.LOGIN)
  const TogleModalAnounce = ref(false)
  const Nav = ref('/')
  const TogleMobileNav = ref(false)
  return { login, TogleModalAnounce, Nav, TogleMobileNav }
})
