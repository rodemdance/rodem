export const state = () => ({
  user: null,
  loading: true
})

export const getters = {
  user: state => {
    return state.user
  },
  loading: state => {
    return state.loading
  }
}

export const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  }
}

export const actions = {
  setUser({ commit }, payload) {
    commit('setUser', payload)
  },
  setLoading ({ commit }, payload) {
    commit('setLoading', payload)
  }
}