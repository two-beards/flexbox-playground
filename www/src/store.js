import Vuex from 'vuex'
import { v4 as uuid } from 'uuid'

const flexProperties = {
  flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
  flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
  justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
  alignItems: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
  alignContent: ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around'],
  alignSelf: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']
}

const state = {
  flexDirection: flexProperties.flexDirection[0],
  flexWrap: flexProperties.flexWrap[0],
  justifyContent: flexProperties.justifyContent[0],
  alignItems: flexProperties.alignItems[0],
  alignContent: flexProperties.alignContent[0],
  flexItems: [],
  selectedItem: null,
  activeTab: 'container',
  showFlexMarkup: false,
  flexProperties
}

export const mutations = {
  SET_FLEX_DIRECTION(state, val) {
    state.flexDirection = val
  },
  SET_FLEX_WRAP(state, val) {
    state.flexWrap = val
  },
  SET_JUSTIFY_CONTENT(state, val) {
    state.justifyContent = val
  },
  SET_ALIGN_ITEMS(state, val) {
    state.alignItems = val
  },
  SET_ALIGN_CONTENT(state, val) {
    state.alignContent = val
  },
  ADD_FLEX_ITEM(state) {
    state.flexItems = [...state.flexItems, {
      id: uuid(),
      styles: {
        order: 0,
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
        alignSelf: 'auto'
      }
    }]
  },
  REMOVE_SELECTED_ITEM(state) {
    const currentItemId = state.selectedItem.id
    state.flexItems = state.flexItems.filter(it => it.id !== currentItemId)
  },
  SET_SELECTED_ITEM(state, item) {
    if (item === null) {
      state.selectedItem = item
    } else {
      state.selectedItem = state.flexItems.find(it => it.id === item)
    }
  },
  UPDATE_SELECTED_ITEM(state, val) {
    state.flexItems = state.flexItems.map(it => {
      if (it.id === val.id) {
        return val
      }
      return it
    })
    state.selectedItem = val
  },
  SET_ACTIVE_TAB(state, val) {
    state.activeTab = val
  },
  TOGGLE_FLEX_MARKUP(state) {
    state.showFlexMarkup = !state.showFlexMarkup
  },
  RESET_DEFAULTS(state) {
    // reset container properties
    state.flexDirection = flexProperties.flexDirection[0]
    state.flexWrap = flexProperties.flexWrap[0]
    state.justifyContent = flexProperties.justifyContent[0]
    state.alignItems = flexProperties.alignItems[0]
    state.alignContent = flexProperties.alignContent[0]
    
    // reset each flex item
    state.flexItems.forEach(it => {
      it.styles = {
        order: 0,
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
        alignSelf: 'auto'
      }
    })
  }
}

export const actions = {
  setFlexDirection({ commit }, e) {
    commit('SET_FLEX_DIRECTION', e.target.value)
  },
  setFlexWrap({ commit }, e) {
    commit('SET_FLEX_WRAP', e.target.value)
  },
  setJustifyContent({ commit }, e) {
    commit('SET_JUSTIFY_CONTENT', e.target.value)
  },
  setAlignItems({ commit }, e) {
    commit('SET_ALIGN_ITEMS', e.target.value)
  },
  setAlignContent({ commit }, e) {
    commit('SET_ALIGN_CONTENT', e.target.value)
  },
  addFlexItem({ commit }) {
    commit('ADD_FLEX_ITEM')
  },
  removeSelectedItem({ commit }) {
    commit('REMOVE_SELECTED_ITEM')
    commit('SET_SELECTED_ITEM', null)
  },
  setSelectedItem({ commit }, val) {
    commit('SET_SELECTED_ITEM', val)
    
    if (val !== null) {
      commit('SET_ACTIVE_TAB', 'items')
    }
  },
  updateSelectedItem({ commit }, val) {
    commit('UPDATE_SELECTED_ITEM', val)
  },
  setActiveTab({ commit }, val) {
    commit('SET_ACTIVE_TAB', val)
  },
  toggleMarkup({ commit }) {
    commit('TOGGLE_FLEX_MARKUP')
  },
  resetDefaults({ commit }) {
    commit('RESET_DEFAULTS')
  }
}

export default Vuex.createStore({
  state,
  mutations,
  actions
})
