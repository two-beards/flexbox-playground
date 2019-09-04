"use strict"

import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuid/v4'

Vue.use(Vuex)

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
  REMOVE_FLEX_ITEM(state, id) {
    state.flexItems = state.flexItems.filter(it => it.id !== id)
  },
  SET_SELECTED_ITEM(state, item) {
    if (item === null) {
      state.selectedItem = item
    } else {
      state.selectedItem = state.flexItems.find(it => it.id === item)
    }
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
  setFlexDirection({ commit }, val) {
    commit('SET_FLEX_DIRECTION', val)
  },
  setFlexWrap({ commit }, val) {
    commit('SET_FLEX_WRAP', val)
  },
  setJustifyContent({ commit }, val) {
    commit('SET_JUSTIFY_CONTENT', val)
  },
  setAlignItems({ commit }, val) {
    commit('SET_ALIGN_ITEMS', val)
  },
  setAlignContent({ commit }, val) {
    commit('SET_ALIGN_CONTENT', val)
  },
  addFlexItem({ commit }) {
    commit('ADD_FLEX_ITEM')
  },
  removeFlexItem({ commit, state }, id) {
    if (state.selectedItem !== null && state.selectedItem.id === id) {
      commit('SET_SELECTED_ITEM', null)
    }
    commit('REMOVE_FLEX_ITEM', id)
  },
  setSelectedItem({ commit }, val) {
    commit('SET_SELECTED_ITEM', val)
    
    if (val !== null) {
      commit('SET_ACTIVE_TAB', 'items')
    }
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

export default new Vuex.Store({
  state,
  mutations,
  actions
})
