import types from 'types'

const State = {
  toast: {
    content: '',
    show: false,
    liveTime: 3000,
    type: ''
  },
  dialog: {
    content: '',
    show: false
  },
  popUp: {
    word: '',
    leftMsg: '',
    rightMsg: '',
    cancelCallback: null,
    callback: null,
    show: false
  },
  loading: true,
  apiLoading: false
}

const Mutations = {
  [types.SET_TOAST] (state, { content, show, type }) {
    state.toast.content = content
    state.toast.show = show
    state.toast.type = type
  },
  [types.SET_DIALOG] (state, { content, show }) {
    state.dialog.content = content
    state.dialog.show = show
  },
  [types.SET_API_LOADING] (state, val) {
    state.apiLoading = val
  },
  [types.SET_LOADING] (state, val) {
    state.loading = val
  },
  [types.SET_POPUP] (state, popUp) {
    state.popUp = Object.assign({}, state.popUp, popUp)
  }
}

const Actions = {
  [types.OPEN_TOAST] ({ commit, state }, { content, type }) {
    if (typeof type !== 'string') {
      type = ''
    }
    commit(types.SET_TOAST, { content, type, show: true })
    setTimeout(() => {
      commit(types.SET_TOAST, { content: '', type: '', show: false })
    }, state.toast.liveTime)
  },
  [types.OPEN_DIALOG] ({ commit }, { content }) {
    commit(types.SET_DIALOG, { content: content, show: true })
  },
  [types.CLOSE_DIALOG] ({ commit }, { content }) {
    commit(types.SET_DIALOG, { content: '', show: false })
  },
  [types.OPEN_LOADING] ({ commit }) {
    commit(types.SET_LOADING, true)
  },
  [types.CLOSE_LOADING] ({ commit }) {
    commit(types.SET_LOADING, false)
  },
  [types.OPEN_API_LOADING] ({ commit }) {
    commit(types.SET_API_LOADING, true)
  },
  [types.CLOSE_API_LOADING] ({ commit }) {
    commit(types.SET_API_LOADING, false)
  },
  [types.OPEN_POPUP] ({ commit, state }, popUp) {
    commit(types.SET_POPUP, Object.assign({}, state.popUp, popUp, { show: true }))
  },
  [types.CLOSE_POPUP] ({ commit, state }) {
    commit(types.SET_POPUP, Object.assign({}, state.popUp, {
      word: '',
      leftMsg: '',
      rightMsg: '',
      cancelCallback: null,
      callback: null,
      show: false
    }))
  }
}

export default {
  state: State,
  mutations: Mutations,
  actions: Actions
}
